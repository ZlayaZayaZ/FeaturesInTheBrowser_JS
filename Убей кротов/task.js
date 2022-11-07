const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

let holes = document.querySelectorAll('.hole') || [],
len = holes.length;            

for (let i = 0; i < len; i++) {
    holes[i].onclick = onclickHole(i);
}
    
function onclickHole(i) {
    return function () {
        if (holes[i].className.includes( 'hole_has-mole' )) {
            dead.textContent = Number(dead.textContent) + 1;
            if (dead.textContent == 10) {
                dead.textContent = 0
                lost.textContent = 0
                alert('Вы выиграли!')
            }
        } else {
            lost.textContent = Number(lost.textContent) + 1;
            if (lost.textContent == 5) {
                dead.textContent = 0
                lost.textContent = 0
                alert('Вы проиграли!')
            }
        }
    }
}
