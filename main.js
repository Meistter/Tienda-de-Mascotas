const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuIconoCarrito = document.querySelector('.navbar-shopping-cart')
const menuCarrito = document.querySelector('.my-order-container')
const cardsContainer =  document.querySelector('.cards-container')

navEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toogleMobileMenu)
menuIconoCarrito.addEventListener('click', toogleMenuCarrito)

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

const productList = [];
productList.push({
    name: 'Gata Poodle Adulta Embadazada',
    price: 120,
    image: 'https://static.onecms.io/wp-content/uploads/sites/47/2020/08/13/pregnant-cat-1165219581-2000.jpg'
})
productList.push({
    name: 'Perro Husky Cachorro',
    price: 300,
    image: 'https://fotografias.lasexta.com/clipping/cmsimages01/2022/08/09/3FFA8546-05CE-4608-9B69-6602D02A4C58/cachorro-pomsky_98.jpg?crop=1183,666,x0,y103&width=1900&height=1069&optimize=high&format=webply'
})
productList.push({
    name: 'Conejo Cachorro',
    price: 70,
    image: 'https://estaticos.muyinteresante.es/uploads/images/gallery/593938475bafe8ad873c986b/conejo-orejas-caidas-jardin_1.jpg'
})
productList.push({
    name: 'Ratoncito Mascota',
    price: 60,
    image: 'http://estaticos.elmundo.es/assets/multimedia/imagenes/2016/05/27/14643729214028.jpg'
})



function renderProducts(array){
    for (product of array){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.classList.add('product-card-img')
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        const productFigure = document.createElement('figure')
    
        const figureImg = document.createElement('img')
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg')
    
    
        productFigure.appendChild(figureImg)
    
        productDiv.append(productPrice, productName)
    
        productInfo.append(productDiv, productFigure)
    
        productCard.append(productImg, productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}
renderProducts(productList)