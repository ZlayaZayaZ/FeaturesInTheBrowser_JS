const timer = document.getElementById('timer')
let hh, mm, ss

function seconds() {
    let arrTimer = timer.textContent.split(':')
    hh = Number(arrTimer[0]) * 3600
    mm = Number(arrTimer[1]) * 60
    ss = Number(arrTimer[2])
    let seconds = (hh + mm + ss)
    return seconds
}

function format(seconds) {
    hh = Math.floor(seconds / 3600) 
    mm = Math.floor((seconds % 3600) / 60)
    ss = (seconds % 3600) % 60
    if (hh < 10) {
        hh = '0' + hh
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    if (ss < 10) {
        ss = '0' + ss
    }
    return `${hh}:${mm}:${ss}`
}

let timerId = setInterval (() => {
    timer.textContent = format(seconds() - 1);
}, 1000)

setTimeout(() => { 
    clearInterval(timerId); alert('Вы победили в конкурсе!');
    document.getElementById('rar').click();
    // второй вариант закачки файла на сайт
    // location.assign('https://download.cdn.yandex.net/yandex-tag/weboffer/YandexPackLoader.exe?partner=30481&yabrowser=y&yaqsearch=y&yahomepage=y&vid=0&hash=07275dc748694b9355632d156ceaa82b&.exe');
}, seconds() * 1000);

