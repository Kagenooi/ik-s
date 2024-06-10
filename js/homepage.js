import {
    adaptive,
} from "../adaptiveMode/adaptive.js";

window.adaptive = adaptive;
adaptive();
window.addEventListener('resize', function () { adaptive() });

function playVideo(videoPlayer, thisBtn) {
    document.querySelector(`#${videoPlayer}`).play();
    thisBtn.classList.add('active');
}
window.playVideo = playVideo;


const btnPlay = document.querySelector('.playVideo');
const btnStop = document.querySelector('.stopVideo');
const videoPlayer = document.querySelector('#player');

btnPlay?.addEventListener('click', function () {
    videoPlayer.play();
    btnPlay.classList.remove('active');
    btnStop.classList.add('active');
})
btnStop?.addEventListener('click', function () {
    videoPlayer.pause();
    btnPlay.classList.add('active');
    btnStop.classList.remove('active');
})



const swiper = new Swiper(".mySwiper", {
    spaceBetween: 45,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            freeMode: false,
            loop: true,
            pagination: false,
            navigation: {
                nextEl: '#nextBtn',
                prevEl: '#prevBtn'
            }
        },
        520: {
            slidesPerView: 1,
            freeMode: false,
            loop: true,
            pagination: false,
            navigation: {
                nextEl: '#nextBtn',
                prevEl: '#prevBtn'
            }
        },
        769: {
            slidesPerView: 4
        }
    }
});

const container = document.querySelectorAll('.reviews__item_desc');
for (let i = 0; i < container?.length; i++) {
    let content = container[i]?.querySelector('.reviews__item_desc_pr');
    let button = container[i]?.nextElementSibling;
    container[i]?.classList.add('mb');
    if (container[i]?.clientHeight < content?.clientHeight) {
        button?.classList.add('active');
        container[i]?.classList.remove('mb');
    }
}

function showMore(wrapper, pr) {
    let wrap = document.querySelector(`#${wrapper}`);
    let paragraph = wrap.querySelector(`.${pr}`);
    if (paragraph.clientHeight > wrap.clientHeight) {
        wrap.classList.add('active');
    }
}
window.showMore = showMore;

function modalToggle(btn) {
    let modals = document.querySelectorAll('.modal');
    for (let i = 0; i < modals.length; i++) {
        modals[i].classList.remove('active');
    }
    if (btn) {
        document.querySelector(`#${btn.dataset.modal}`).classList.add('active');
    }
}
window.modalToggle = modalToggle;


const showBtns = document.querySelectorAll('.showPassword');
for (let i = 0; i < showBtns.length; i++) {
    showBtns[i]?.addEventListener('click', function () {
        if (this.parentNode.querySelector('input').getAttribute('type') == 'password') {
            this.parentNode.querySelector('input').setAttribute('type', 'text');
        } else {
            this.parentNode.querySelector('input').setAttribute('type', 'password')
        }
    })
}