window.addEventListener('click', function (event) {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        console.log(true);

        const counterWrapper = event.target.closest('.counter-wrapper');
         counter = counterWrapper.querySelector('[data-counter]');

    };





   console.log(event.target) ;
if (event.target.dataset.action === 'plus') {

const counterWrapper = event.target.closest('.counter-wrapper');

const counter = counterWrapper.querySelector('[data-counter]');





counter.innerText = ++counter.innerText;
};

if (event.target.dataset.action === 'minus') {
    console.log('minus');

    const counterWrapper = event.target.closest('.counter-wrapper');
    
    
    const counter = counterWrapper.querySelector('[data-counter]');
    
    
    if (parseInt(counter.innerText) > 1){
         counter.innerText = --counter.innerText;
    }
    
    
   


    }
});