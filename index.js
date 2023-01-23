// 1. Скрыть элемент по нажатию кнопки
document.getElementById('hider').onclick = function() {
    document.getElementById('text').hidden = true;
}

// 2. Какой обработчик запустится?
// 1 and 2

// 3. Добавить кнопку закрытия
let panes = document.querySelectorAll('.pane');
for(let pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    pane.firstChild.onclick = () => pane.remove();
}

