const bloquearScroll2 = () => {
    document.querySelector('body').classList.add('bloquear-scroll2');
};

const desbloquearScroll2 = () => {
    document.querySelector('body').classList.remove('bloquear-scroll2');
};

document.querySelector('#bloquear-scroll-burger').addEventListener('click', () => {
    bloquearScroll2();
});

document.querySelector('#habilitar-scroll-burger').addEventListener('click', () => {
    desbloquearScroll2();
});