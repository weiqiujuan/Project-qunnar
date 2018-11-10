import db from '../connection'

var dBase = db.db('qunarTipsData')

//删除数据
var whereStr = {"价格": 569}
dBase.collection('lowPrice').deleteMany(whereStr, function (err, res) {
    if (err) throw err;
    console.log(res.result.n + '文档被删除')
})