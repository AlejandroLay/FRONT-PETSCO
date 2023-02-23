const bloquearScroll = () => {
    document.querySelector('body').classList.add('bloquear-scroll');
};

const desbloquearScroll = () => {
    document.querySelector('body').classList.remove('bloquear-scroll');
};

document.querySelector('#deshabilitar-id').addEventListener('click', () => {
    bloquearScroll();
});

document.querySelector('#habilitar-scroll').addEventListener('click', () => {
    desbloquearScroll();
});