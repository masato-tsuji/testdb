console.log("Hello world!");



const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./test.db");


// 引数で受け取ったレコードとDBの5番目のレコードと比較

// ランクインするなら

// INSERT

// ランクとランキング表を返す




db.serialize(() => {
    db.run("insert into test(name, record) values(?, ?)", "masato", Math.floor(Math.random() * 1000));
    db.get("select * from test order by record, rec_date limit 1 offset 4;", (err, row) => {
        console.log(row.record);
    });
    db.each("select * from test", (err, row) => {
        console.log(row.id, row.name, row.record, row.rec_date);
    });

});


