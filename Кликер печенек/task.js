const img = document.getElementById('cookie')
const i = document.getElementById('clicker__counter')
const speed = document.getElementById('speed')
let time

img.onclick = () => {
    i.textContent = Number(i.textContent) + 1;
    let date = new Date();

    if (i.textContent % 2 == 0) {
        img.width -= 20;
        img.height -= 20;
    } else {
        img.width += 20;
        img.height += 20;
    }

    if (i.textContent > 1) {
        difference = date.getTime() - time;
        speed.textContent = Math.round((1000/difference)*100)/100;
        time = date.getTime();
    } else {
        time = date.getTime();
    }
}

