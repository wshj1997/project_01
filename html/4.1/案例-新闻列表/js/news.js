$(function() {
    //补零函数
    function padZero(n) {
        var i = n < 10 ? '0' + n : n
        return i
            // if (n < 10) {
            //     return '0' + n
            // } else {
            //     return n
            // }

    }

    // 定义格式化时间的过滤器
    template.defaults.imports.dateFormat = function(dtstr) {
        var dt = new Date(dtstr)
        var y = padZero(dt.getFullYear())
        var m = padZero(dt.getMonth() + 1)
        var d = padZero(dt.getDate())
        var hh = padZero(dt.getHours())
        var mm = padZero(dt.getMinutes())
        var ss = padZero(dt.getSeconds())
        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
    }

    // 获取新闻列表的函数
    function getNewsList() {
        $.get('http://www.liulongbin.top:3006/api/news', function(e) {
            if (e.status !== 200) {
                return alert('获取新闻列表数据失败！')
            }
            for (var i = 0; i < e.data.length; i++) {
                e.data[i].tags = e.data[i].tags.split(',')
            }
            console.log(e);
            var htmlStr = template('tpl-news', e)
            $('#news-list').html(htmlStr)
        })
    }
    getNewsList()
})