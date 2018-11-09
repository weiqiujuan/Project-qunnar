//数据获取
function loadXmlDoc(method, url, state) {
    let xmlhttp
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject('Microsoft XMLHttp')
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            getData(xmlhttp.responseText)
        }
    }
    xmlhttp.open(method, url, state)
    xmlhttp.send()
}

loadXmlDoc('GET', 'http://localhost:3000/home', true)

//数据展示
function getData(data) {
    if (data !== null) {
        data = JSON.parse(data)
        let items = document.getElementsByClassName('containerItem')[0]
        let con = document.getElementById('container')
        containerItems(items, data[0])
        for (let i = 1; i < data.length; i++) {
            let item = items.cloneNode(true)
            containerItems(item, data[i])
            con.appendChild(item)
        }
    }
}


function containerItems(item, data) {
    item.getElementsByClassName("begin_time")[0].innerHTML = data.startTime
    item.getElementsByClassName('over_time')[0].innerHTML = data.endTime
    item.getElementsByClassName('begin_address')[0].innerHTML = data.startAddress
    item.getElementsByClassName('over_address')[0].innerHTML = data.endAddress
    item.getElementsByClassName('item_price')[0].innerHTML = data.price
    item.getElementsByClassName('item_dec')[0].innerHTML = data.dec
    item.getElementsByClassName('item_state')[0].innerHTML = data.state
}


//日期数据

//菜单闭合
function scrollEvent() {
    console.log("执行函数")
    document.onscroll = function () {
        document.querySelector('#sec-head').className = 'headHidden';
        document.querySelector('#footer').className = 'footerHidden';
        if (scrollY === 0) {
            document.querySelector('#sec-head').className = '';
        }
        if (document.body.scrollHeight - scrollY === document.documentElement.clientHeight) {
            document.querySelector('#footer').className = '';
        }
    }
}

//节流操作
function throttle(fn, interval) {
    let canRun = true;
    return function () {
        if (!canRun) return
        canRun = false
        setTimeout(() => {
            fn()
            canRun = true
        }, interval)
    }
}

throttle(scrollEvent(), 3000)