terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=2.91.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg-demo" {
  name     = "rg-demo"
  location = "uksouth"
  tags = {
    environment = "dev"
  }
}

resource "azurerm_virtual_network" "vn-demo" {
  name                = "vn-demo"
  resource_group_name = azurerm_resource_group.rg-demo.name
  location            = azurerm_resource_group.rg-demo.location
  address_space       = ["10.123.0.0/16"]

  tags = {
    environment = "dev"
  }
}

# Create a subnet for the virtual network

# Create a network security group

# Create a network security rule under the network security group, priority 100, that allows all inbound traffic

# Create a linux vm that uses standard b1s and runs on 18.04 Ubunutu
