const button = document.querySelector('.btn')
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');

button.addEventListener('click', ()=>{
    const isClass = button.classList.contains('active')
    if(!isClass)
    {
        line1.classList.remove('out-animation-line1')
        line2.classList.remove('out-animation-line2')
        line3.classList.remove('out-animation-line3')
        line1.classList.add('in-animation-line1')
        line2.classList.add('in-animation-line2')
        line3.classList.add('in-animation-line3')
        button.classList.add('active')
    }
    else if(isClass == true)
    {
        line1.classList.remove('in-animation-line1')
        line2.classList.remove('in-animation-line2')
        line3.classList.remove('in-animation-line3')
        button.classList.remove('active')
        line1.classList.add('out-animation-line1')
        line2.classList.add('out-animation-line2')
        line3.classList.add('out-animation-line3')
      
    }
})