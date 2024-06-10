function asidebar() {
    const aside = document.querySelector('.asidebar');
    const main = document.querySelector('.main');
    let change = document.querySelector('#adaptive').style.zoom * 1000;
    aside.style.height = ((document.documentElement.clientHeight * 1000) / change) + 'px';
    aside.style.minHeight = ((document.documentElement.clientHeight * 1000) / change) + 'px';
    main.style.minHeight = ((document.documentElement.clientHeight * 1000) / change) - 185 + 'px';
    aside.style.maxHeight = document.querySelector('#adaptive').clientHeight + 'px';
}

function tabs(btn) {
    const tab = document.querySelectorAll('.main__wrapper');
    const btns = document.querySelectorAll('.main__header_btns_btn');
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('active');
        btns[i].classList.remove('active');
    }
    btn.classList.add('active');
    document.querySelector(`#${btn.dataset.tab}`).classList.add('active');
    asidebar();
}
if (document.querySelector("#defaultTab")) {
    document.querySelector("#defaultTab").click();
}
function adaptive() {
    const wrapper = document.querySelector('#adaptive');
    let zoom = document.body.clientWidth / 19.2 / 100;
    if (document.body.clientWidth > 981 && document.body.clientWidth < 1416) {
        zoom = document.body.clientWidth / 19.2 / 100;
    }
    if (document.body.clientWidth > 520 && document.body.clientWidth < 980) {
        zoom = document.body.clientWidth / 7.68 / 100;
    }
    if (document.body.clientWidth < 521) {
        zoom = document.body.clientWidth / 3.9 / 100;
    }
    wrapper.style.zoom = zoom;
}
adaptive();
asidebar();

window.addEventListener('resize', function () {
    adaptive();
    asidebar();
});


function tables(thisbtn, btn, btns, tables) {
    let table = document.querySelectorAll(`.${tables}`);
    let button = document.querySelectorAll(`.${btns}`);
    for (let i = 0; i < table.length; i++) {
        table[i].classList.remove('active');
        button[i].classList.remove('active');
    }
    document.querySelector(`#${btn}`).classList.add('active');
    thisbtn.classList.add('active');

    if (document.body.clientWidth <= 580) {
        thisbtn.closest('.main__wrapper').style.minHeight = document.querySelector(`#${btn}`).clientHeight + 'px';
    }
}
if (document.body.clientWidth > 580) {
    if (document.querySelector('#defaultTable')) {
        document.querySelector('#defaultTable').click();
    }
}

function tables2(thisbtn, btn, btns, tables) {
    let table = document.querySelectorAll(`.${tables}`);
    let button = document.querySelectorAll(`.${btns}`);
    for (let i = 0; i < table.length; i++) {
        table[i].classList.remove('active');
        button[i].classList.remove('active');
    }
    document.querySelector(`#${btn}`).classList.add('active');
    thisbtn.classList.add('active');

    if (document.body.clientWidth <= 580) {
        thisbtn.closest('.main__wrapper').style.minHeight = document.querySelector(`#${btn}`).clientHeight + 'px';
    }
}

if (document.querySelector('#defaultTable2')) {
    document.querySelector('#defaultTable2').click();
}


function modalToggle(btn) {
    let modals = document.querySelectorAll('.modal');
    for (let i = 0; i < modals.length; i++) {
        modals[i].classList.remove('active');
    }
    if (btn) {
        document.querySelector(`#${btn.dataset.modal}`).classList.add('active');
    }

    let change = document.querySelector('#adaptive').style.zoom * 1000;
    if (document.body.clientWidth <= 580) {
        if (document.querySelector('#addCard')) {
            document.querySelector('#addCard').style.height = ((document.documentElement.clientHeight * 1000) / change) + 'px';
        }
        if (document.querySelector('.complate')) {
            document.querySelector('.complate').style.height = ((document.documentElement.clientHeight * 1000) / change) + 'px';
        }
    }
}

const selectToggle = document.querySelector('#js-select');
selectToggle?.addEventListener('click', function (thisInner) {
    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

    const selectBtn = document.querySelectorAll('.js-select-btn');
    for (let i = 0; i < selectBtn.length; i++) {
        selectBtn[i].addEventListener('click', function (event) {
            thisInner.target.nextElementSibling.classList.remove('active');
            thisInner.target.classList.remove('active');
            thisInner.target.innerHTML = event.target.innerHTML;
        })
    }
});
let saveData = document.querySelector('#savePersonalData');
saveData?.addEventListener('click', function () {
    this.classList.add('noactive');
    let inputs = document.querySelectorAll('.personalData');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute('disabled', '');
    }
})

let redData = document.querySelector('#redData');
redData?.addEventListener('click', function () {
    saveData.classList.remove('noactive');
    let inputs = document.querySelectorAll('.personalData');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute('disabled');
    }
})
function toggleActive(event) {
    document.querySelector(`#${event.dataset.modal}`).classList.toggle('active');

    let change = document.querySelector('#adaptive').style.zoom * 1000;
    if (document.body.clientWidth <= 580) {
        if (document.querySelector('#agreement')) {
            document.querySelector('#agreement').style.height = ((document.documentElement.clientHeight * 1000) / change) + 'px';
            document.querySelector('#policy').style.height = ((document.documentElement.clientHeight * 1000) / change) + 'px';
            document.querySelector('#prices').style.height = ((document.documentElement.clientHeight * 1000) / change) + 'px';
        }
    }
}

function toggleAside() {
    document.querySelector('.asidebar').classList.toggle('active');
}

function limitStr(str, n, symb) {
    if (!n && !symb) return str;
    symb = symb || '...';
    return str.substr(0, n - symb.length) + symb;
}
if (document.body.clientWidth < 980) {
    let limitation = document.querySelectorAll('.js-text-limit');
    for (let i = 0; i < limitation.length; i++) {
        limitation[i].innerHTML = limitStr(limitation[i].innerHTML, 40);
    }
}
if (document.body.clientWidth < 580) {
    let limitation = document.querySelectorAll('.js-text-limit');
    for (let i = 0; i < limitation.length; i++) {
        limitation[i].innerHTML = limitStr(limitation[i].innerHTML, 18);
    }
}

function removeActive(e) {
    e.parentNode.classList.remove('active');
}
