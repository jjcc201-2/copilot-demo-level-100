function queryDatabase(mainString) {
    var squery = "SELECT * FROM users WHERE name = \"" + mainString + "\"";
    pool.query(squery, (err, res) => {
        console.log(err, res)
        pool.end()
    })
}