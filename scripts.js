/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', ()=>{
    //selecionar o forms
    const form = document.querySelector('form');
   
    //adicionar um evento sunmit ao formulario
    form.addEventListener('submit', async(event)=>{
    //previne comportamento padrao do formulario
    event.preventDefault();

    //coletar os valores dos campos
    const namevalue = document.getElementById('name').value
    const emailvalue = document.getAnimations('email')?.value
    const phonevalue = document.getAnimations('phone').value
    const messegevalue = document.getAnimations('messege').value

    //criar um objeto com os dados coletados do formulario
    const formData = {
        name: namevalue,
        email: emailvalue,
        phone: phonevalue,
        messege: messegevalue,
    }

    //ver os dados armazenados no formulario
    console.log('Dados coletados', formData)

    //FETCH API - ENVIAR OS DADOS VIA REQUEST (POST) PARA "SERVIDOR"
    const response = await fetch('https:://www.exemplo.com/cadastro',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), //converte o objeto em string
    })
})
})
