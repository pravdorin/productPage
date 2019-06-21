(function() {

    const elem = document.querySelector('.main__list');
    const iso = new Isotope( elem, {
    itemSelector: '.main__item',
    filter: '.desc'
    });



    const controlls = document.querySelectorAll('.filter__link');
    const activeClass = 'filter__item--active';

    controlls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();

            const filterName = control.getAttribute("data-filter");

            controlls.forEach(link => {
                link.closest('.filter__item').classList.remove(activeClass);
            });
            control.closest('.filter__item').classList.add(activeClass);

            iso.arrange({
                filter: `.${filterName}`
            })
        });
    });
}());