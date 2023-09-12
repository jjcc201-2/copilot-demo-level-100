function queryDatabase(mainString) {
    var squery = "SELECT * FROM users WHERE name = \"" + mainString + "\"";
    pool.query(squery, (err, res) => {
        console.log(err, res)
        pool.end()
    })
}

var name = document.getElementById('name').value;
document.write('Hello, ' + name);

var myAzureSecret = "pat_21BADKF201fsjksfHDAKJF2019"

var randomNum = Math.floor(Math.random() * 100);