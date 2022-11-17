const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuIconoCarrito = document.querySelector('.navbar-shopping-cart')
const menuCarrito = document.querySelector('.my-order-container')

navEmail.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu(){
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
    const isMenuCarritoClose = menuCarrito.classList.contains('inactive')
    
    if(isDesktopMenuClose){
        if(isMenuCarritoClose){
            desktopMenu.classList.remove('inactive')
        }else{
            menuCarrito.classList.add('inactive')
            desktopMenu.classList.remove('inactive')
        }


    }else{
        desktopMenu.classList.add('inactive')
    }
}

menuHamIcon.addEventListener('click', toogleMobileMenu)

function toogleMobileMenu(){
    const isMenuCarritoClose = menuCarrito.classList.contains('inactive')
    const isMenuMobileClose =  mobileMenu.classList.contains('inactive')

    if (isMenuMobileClose){
        
        if(isMenuCarritoClose){
            mobileMenu.classList.remove('inactive')
        }else{
            menuCarrito.classList.add('inactive')
            mobileMenu.classList.remove('inactive')
        }
    }else{
        mobileMenu.classList.add('inactive')
    }
    
   
}

menuIconoCarrito.addEventListener('click', toogleMenuCarrito)

function toogleMenuCarrito()
{
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
    const isMenuCarritoClose = menuCarrito.classList.contains('inactive')
    const isMenuMobileClose =  mobileMenu.classList.contains('inactive')
    
    if(isMenuCarritoClose){
        if(isDesktopMenuClose && isMenuMobileClose){
            menuCarrito.classList.remove('inactive')      
        }else
        {       
            desktopMenu.classList.add('inactive')   
            mobileMenu.classList.add('inactive') 
            menuCarrito.classList.remove('inactive')
        }


    }else{
        menuCarrito.classList.add('inactive')
    }
}
