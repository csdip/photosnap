const navBtn =  document.querySelector('.nav-btn');
const headerMenu =  document.querySelector('.header__menu');
const planeToggleBtn =  document.querySelector('.price__toggle--btn');
const planeMonthly =  document.querySelector('.plane-monthly');
const planeYearly =  document.querySelector('.plane-yearly');
const planeAmountBasic =  document.querySelector('#basic');
const planeAmountPro =  document.querySelector('#pro');
const planeAmountBusiness =  document.querySelector('#business');
const planeMonthlyTexts =  document.querySelectorAll('#months');
const preloader = document.querySelector('.preloader');
const loaderContainer = document.querySelector('.loader-container');

AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

const timeOut = setTimeout(() => {
    loaderContainer.classList.add('container-hidden')
        document.body.removeChild(loaderContainer)
}, 1000)


window.addEventListener('load',()=>{
    timeOut;
});



navBtn.addEventListener('click', ()=>{
    navBtn.classList.toggle('active')
    headerMenu.classList.toggle('active')
})


planeToggleBtn.addEventListener('click', (e)=>{
    e.preventDefault;
    planeToggleBtn.classList.toggle('active')
    
    if(planeMonthly.classList.contains("active")){
        planeMonthly.classList.remove('active')
        planeAmountBasic.textContent = "$190.00"
        planeAmountPro.textContent = "$390.00"
        planeAmountBusiness.textContent = "$990.00"
        planeMonthlyTexts.forEach((e)=>{
            e.textContent = "per year"
        })
    }else{
        planeMonthly.classList.add('active')
        planeAmountBasic.textContent = "$19.00"
        planeAmountPro.textContent = "$39.00"
        planeAmountBusiness.textContent = "$99.00"
        planeMonthlyTexts.forEach((e)=>{
            e.textContent = "per month"
        })
    }

    if(planeYearly.classList.contains("active")){
        planeYearly.classList.remove('active')
    }else{
        planeYearly.classList.add('active')
    }

})











