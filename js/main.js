const test = document.querySelectorAll('.domen-box-left');
const domenBox= document.querySelectorAll('.domen-box')
const chk = document.createElement('i');
const addCart = document.querySelector('.addCart span');

domenBox.forEach(dBox =>{
    const trigger = dBox.querySelector('.domen-box-left');
    const icon = dBox.querySelector('.domen-box-left i')
    trigger.addEventListener('click',()=>{
        dBox.nextElementSibling.classList.toggle('active-box')
        icon.classList.toggle('active-icon');
        dBox.classList.toggle('bac');
        dBox.classList.toggle('border-bottom-radius')
        dBox.nextElementSibling.classList.toggle('border-top-radius')
        dBox.nextElementSibling.classList.toggle('bac')
    })
    const cartIcon = dBox.querySelector('.cart-icon i')
    const cartClick = dBox.querySelector('.cart-click');
    const cartBox = dBox.querySelector('.cart-icon');
    cartBox.addEventListener('click',()=>{
       cartClick.classList.toggle('cart-click-active')
       cartIcon.classList.toggle('return-icon')
       if(cartClick.classList.contains('cart-click-active')){
                addCart.innerHTML ++;
            }else{
                addCart.innerHTML --;
            }
    })

})






// price slider
const search = document.getElementById('search');
const priceInput = document.querySelectorAll('.slider-box input');
const progress = document.querySelector('.progress');
const prices = document.querySelectorAll('.price-inputs-box input')
const container = document.querySelectorAll('.container');
const nameSearchInput = document.querySelector('#search-name');
const simbols = document.querySelectorAll('.simbol-inputs-box input');
search.addEventListener('click',()=>{
    let searchValue = nameSearchInput.value.toLowerCase();
    let emptyArr = [];
    let arrEmpty =[];
    container.forEach(box =>{
        if(searchValue == ''){
            box.style.display = 'block';
            emptyArr.push(box);
        }else if(box.dataset.filter.indexOf(searchValue) >-1){
            box.style.display = 'block';
            emptyArr.push(box);
        }else{
            box.style.display = 'none';
        }   
        // simbol filter
        
    })
    emptyArr.forEach(box =>{
         if(parseFloat(box.ariaValueNow) >= parseFloat(prices[0].value) && parseFloat(box.ariaValueNow) <= parseFloat(prices[1].value)){
            box.style.display = 'block';
            arrEmpty.push(box);
        }else{
            box.style.display = 'none';
        }
        
    })
    arrEmpty.forEach(box =>{
       if(box.dataset.filter.length >= parseFloat(simbols[0].value) && box.dataset.filter.length <= parseFloat(simbols[1].value)){
        box.style.display = 'block'
       }else{
        box.style.display = 'none'
       }
        
    });
    
})


// search simbol




// start price slider
let priceDif = 5000;
priceInput.forEach(input =>{
    input.addEventListener('input',(e)=>{
        let minVal = parseInt(priceInput[0].value);
        let maxVal = parseInt(priceInput[1].value);
        if(maxVal - minVal < 5000){
            if(e.target.className === 'min-input'){
                priceInput[0].value = maxVal - priceDif
                
            }else{
                priceInput[1].value = minVal + priceDif;
            }
        }else{
            progress.style.left = (minVal / priceInput[0].max) * 100 + '%'
            progress.style.right = 100 - (maxVal / priceInput[1].max) * 100 + '%'
            prices[0].value = priceInput[0].value;
            prices[1].value = priceInput[1].value;
        }
    })
})
// simbol slider
const simbolInput = document.querySelectorAll('.simbol-box input');
const progressS = document.querySelector('.progressS');
let simbolDif = 7;
simbolInput.forEach(simbol =>{
    simbol.addEventListener('input',(e)=>{
        let minVal = parseInt(simbolInput[0].value);
        let maxVal = parseInt(simbolInput[1].value);
        if(maxVal - minVal < simbolDif){
            if(e.target.className === 'input-min'){
                simbolInput[0].value = maxVal - simbolDif;
            }else{
                simbolInput[1].value = minVal + simbolDif;
            }
        }else{
            progressS.style.left = (minVal / simbolInput[0].max) * 100 + '%'
            progressS.style.right = 100 - (maxVal / simbolInput[1].max) * 100 + '%'
            simbols[0].value = simbolInput[0].value;
            simbols[1].value = simbolInput[1].value
        }
    })
})

// checkbox filter
const checkBoxes = document.querySelectorAll('.checkbox-box li input')
const checkIcon = document.createElement('i');



// checkbox filter
let empty=[];

function valid(){
    let valid = false;
    if(document.getElementById('ge').checked){
       container.forEach(box =>{
        if(box.classList.contains(document.getElementById('ge').value)){
            box.style.display = 'block'
        }else{
            box.style.display = 'none'
            
        }
       })
    }
    else if(document.getElementById('comge').checked){
        container.forEach(box =>{
            if(box.classList.contains(document.getElementById('comge').value)){
                box.style.display = 'block'
            }else{
                box.style.display = 'none'
                
            }
           })
    }
    else if(document.getElementById('netge').checked){
        valid = true;
        console.log('true');
    }else{
        

    }
    
}
valid();