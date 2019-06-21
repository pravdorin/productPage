(function() {

    const controlls = document.querySelectorAll('.card__sizes--item');
    const activeClass = 'card__sizes--item--active';

    controlls.forEach(control => {
        control.addEventListener('click', function() {
            controlls.forEach(item => {
                item.classList.remove(activeClass);
            });
            control.classList.add(activeClass);
        })
    })
}())