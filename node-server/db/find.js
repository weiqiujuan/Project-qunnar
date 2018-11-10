import db from '../connection'

var dBase = db.db('qunarTipsData')


//查询数据
var whereStr = {"价格": 569}
dBase.collection('lowPrice').find(whereStr).toArray(function (err, result) {
    if (err) throw err
    console.log(result)
})