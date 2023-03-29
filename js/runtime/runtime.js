var now = new Date();
function createtime() {
    var t = new Date("04/12/2022 00:00:00");
    now.setTime(now.getTime() + 250);
    var e = (now - t) / 1e3 / 60 / 60 / 24,
        a = Math.floor(e),
        n = (now - t) / 1e3 / 60 / 60 - 24 * a,
        r = Math.floor(n);
    1 == String(r).length && (r = "0" + r);
    var s = (now - t) / 1e3 / 60 - 1440 * a - 60 * r,
        i = Math.floor(s);
    1 == String(i).length && (i = "0" + i);
    var o = (now - t) / 1e3 - 86400 * a - 3600 * r - 60 * i,
        l = Math.round(o);
    1 == String(l).length && (l = "0" + l);
    let g = "";
    (g =
        r < 18 && r >= 9
            ? `<img class='boardsign' src='https://img.shields.io/badge/maho-%E5%9C%A8%E5%9C%B0%E4%B8%8B%E5%9F%8E%E5%88%B7BOSS-blue' title='杠八类一定要找到实习QAQ'><span class='textTip'> <br> 本站居然运行了 ${a} 天</span><span id='runtime'> ${r} 小时 ${i} 分 ${l} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`
            : `<img class='boardsign' src='https://img.shields.io/badge/maho-%E5%9C%A8%E6%91%B8%E9%B1%BC-blue' title='休息亿下马上回来'><span class='textTip'> <br> 本站居然运行了 ${a} 天</span><span id='runtime'> ${r} 小时 ${i} 分 ${l} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`),
    document.getElementById("workboard") &&
    (document.getElementById("workboard").innerHTML = g);
}
setInterval(() => {
    createtime();
}, 250);
