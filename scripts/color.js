(function() {
    const colors = document.querySelectorAll('.card__color--item');
    const image = document.getElementById('image');
    const activeClass = 'card__color--item--active';

    colors.forEach(item => {
        item.addEventListener('click', function(e) {
            colors.forEach(item => {
                item.classList.remove(activeClass);
            })
            let color = e.srcElement.getAttribute('data-color');
            switch (color) {
                case 'black':
                    image.src = "/img/tshirts/tshirt_07.png";
                    e.srcElement.classList.add(activeClass);
                    break;
                case 'white':
                    image.src = "/img/tshirts/tshirt_08.png";
                    e.srcElement.classList.add(activeClass);
                    break;
                case 'green':
                    image.src = "/img/tshirts/tshirt_09.png";
                    e.srcElement.classList.add(activeClass);
                    break;
                case 'blue':
                    image.src = "/img/tshirts/tshirt_10.png";
                    e.srcElement.classList.add(activeClass);
                    break;
                case 'red':
                    image.src = "/img/tshirts/tshirt_11.png";
                    e.srcElement.classList.add(activeClass);
                    break;
            }
        })
    })

}())
