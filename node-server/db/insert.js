import db from '../connection'

var dBase = db.db('qunarTipsData')

//插入数据
var lowPriceData = [{"时间": "今天", "价格": 369}, {"时间": "明天", "价格": 432}, {"时间": "后天", "价格": 569}, {"时间": "星期几", 价格: 242}]
dBase.collection('lowPrice').insertMany(lowPriceData, function (err, res) {
    if (err) throw err;
    console.log("文档插入成功")
})