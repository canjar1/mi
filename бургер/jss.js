window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        console.log('click on cart button')
        const card = event.target.closest(.card);



        const bl = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.card-title').innerText,
            prise: card.querySelector('.currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };



        console.log(bl)
    }
})