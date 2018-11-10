var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/qunarTipsData";

let connection = MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("数据库已创建")
    var dBase = db.db('qunarTipsData')
    //创建集合
    dBase.createCollection('tips', function (err, res) {
        if (err) throw err;
        console.log("创建集合")
    })

    //插入数据
    /*dBase.collection('tips').insertMany(lowPriceData, function (err, res) {
        if (err) throw err;
        console.log("文档插入成功")
    })*/

    //查询数据
    let needData
    dBase.collection('tips').find({}).toArray(function (err, result) {
        if (err) throw err
        /*
                console.log(result)
        */
        needData = result
    })

    /* //删除集合
     dBase.collection('tips').drop(function (err, delOk) {
         if (err) throw err;
         if (delOk) console.log("集合已删除")
         db.close()
     })*/

})

module.extends = connection
