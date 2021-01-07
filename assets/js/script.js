// var product = [
//   {
//       id:"1",
//       name:"Regular Salad",
//       img:"",
//       price:"35000",

//   },
//   {
//       id:"2",
//       name:"Bacon Egg Salad",
//       img:"",
//       price:"55000",

//   },
//   {
//       id:"3",
//       name:"Fantasy Salad",
//       img:"",
//       price:"49000",

//   },
//   {
//       id:"4",
//       name:"Tunna Salad",
//       img:"",
//       price:"55000",

//   },
//   {
//       id:"5",
//       name:"Chicken_Bagutte",
//       img:"",
//       price:"59000",

//   },
//   {
//       id:"6",
//       name:"Mecury_Bagutte",
//       img:"",
//       price:"69000",

//   },
//   {
//       id:"7",
//       name:"Cappuccino",
//       img:"",
//       price:"38000",

//   },

//   {
//       id:"9",
//       name:"Americano",
//       img:"",
//       price:"22000",

//   },
//   {
//       id:"10",
//       name:"Machiato",
//       img:"",
//       price:"38000",

//   },
//   {
//       id:"11",
//       name:"Bubweiser",
//       img:"",
//       price:"25000",

//   },
//   {
//       id:"12",
//       name:"Strongbow",
//       img:"",
//       price:"25000",

//   },
//   {
//       id:"13",
//       name:"Tiger",
//       img:"",
//       price:"20000",

//   },
//   {
//       id:"14",
//       name:"Heniken",
//       img:"",
//       price:"25000",

//   },

// ]


function tableReservations(){
        document.getElementById("carousel-1").style.display = 'none';
        document.getElementById("highlight-phone").style.display = 'none';
        document.getElementById("delivery-form").style.display = 'none';
        document.getElementById("videos").style.display = 'none';
        document.getElementById("book-form").style.display = 'block';
        document.getElementById("menu-list").style.display = 'block';

    }
function delivery(){
    document.getElementById("carousel-1").style.display = 'none';
    document.getElementById("highlight-phone").style.display = 'none';
    document.getElementById("delivery-form").style.display = 'none';
    // document.getElementById("book-form").style.display = 'none';
    document.getElementById("menu-list").style.display = 'none';
    document.getElementById("article-list").style.display = 'none';
    document.getElementById("videos").style.display = 'none';
    document.getElementById("text-7").style.display = 'none';
    document.getElementById("delivery-menu").style.display = 'block';
    document.getElementById("cart").style.display = 'none';




}


function MENU(){
    document.getElementById("carousel-1").style.display = 'none';
        document.getElementById("highlight-phone").style.display = 'none';
        document.getElementById("delivery-form").style.display = 'none';
        // document.getElementById("book-form").style.display = 'none';
        document.getElementById("article-list").style.display = 'none';
        document.getElementById("menu-list").style.display = 'block';
        document.getElementById("videos").style.display = 'none';
        document.getElementById("text-7").style.display = 'none';
        document.getElementById("delivery-menu").style.display = 'none';
        document.getElementById("cart").style.display = 'none';

        
}

function TESTIMONIALS(){
    document.getElementById("carousel-1").style.display = 'none';
    document.getElementById("highlight-phone").style.display = 'none';
    document.getElementById("delivery-form").style.display = 'none';
    // document.getElementById("book-form").style.display = 'none';
    document.getElementById("menu-list").style.display = 'none';
    document.getElementById("article-list").style.display = 'block';
    document.getElementById("videos").style.display = 'none';
    document.getElementById("text-7").style.display = 'none';
    document.getElementById("cart").style.display = 'none';


}

function cart(){
  document.getElementById("carousel-1").style.display = 'none';
  document.getElementById("highlight-phone").style.display = 'none';
  document.getElementById("delivery-form").style.display = 'none';
  document.getElementById("delivery-menu").style.display = 'none';
document.getElementById("menu-list").style.display = 'none';
document.getElementById("text-7").style.display = 'none';
document.getElementById("videos").style.display = 'none';
document.getElementById("article-list").style.display = 'none';
document.getElementById("cart").style.display = 'block';
}


// srcoll to top
var mybutton = document.getElementById("myBtnTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
//     mybutton.style.display = "none";
//   } else {
//     mybutton.style.display = "block";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//search
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#food-admin tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)


      });
      $("#drink-admin tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)


      });
      $("#book-admin tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

        
      });
      $("#order-admin tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

        
      });
      $("#add-menu div").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

        
      });
      $("#add-menu2 div").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

        
      });
    });
  });

  function NextReview(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("nextreview");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
  
  }



  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }
  
  function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
  
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
  
    var addToCartButtons = document.getElementsByClassName('add-to-cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
  
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
  }
  
  function purchaseClicked() {
    document.getElementById("total1").innerHTML=document.getElementById("total").innerText;
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    if(cartItemNames.length === 0 || !cartItemNames ){
      alert('you must buy some things!!!')
      location.reload();
      // avoid spam
    }else{
      alert('Thank you for your purchase')
      var cartItems = document.getElementsByClassName('cart-items')[0]
      while (cartItems.hasChildNodes()) {
          cartItems.removeChild(cartItems.firstChild)
      }
      updateCartTotal()
    }
  
}
//show total  but cannot edit
$(document).ready(function(){
  $("#purchase").click(function(){
    $("#bill").val(document.getElementById("total1").innerText);
  });
});


  
  function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
  }
  
  function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
  }
  
  function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('product-title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('card-img-top')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
  }
  
  function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
  }
  
  function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    document.getElementById('tongtien')[0].innerText = '$' + total
  }

  function infoCart(){
    var payment;
    var calculate;
    
        if (document.getElementById("payment").value== "Payment in cash"){
          payment ="Payment in cash";
        }
        if (document.getElementById("payment").value=="InternetBanking"){
          payment ="InternetBanking";
        }
        if (document.getElementById("payment").value=="Visa Card"){
          payment ="Visa Card";
        }
        if (document.getElementById("payment").value=="Paypal"){
          payment ="Paypal";
        }
        if (document.getElementById("district").value=="Hải Châu"){
          calculate ="Hải Châu";
        }
        if (document.getElementById("district").value=="Thanh Khê"){
          calculate ="Thanh Khê";
        }
        if (document.getElementById("district").value=="Liên Chiểu"){
          calculate ="Liên Chiểu";
        }
        if (document.getElementById("district").value=="Ngũ Hành Sơn"){
          calculate ="Ngũ Hành Sơn";
        }
        if (document.getElementById("district").value=="Sơn Trà"){
          calculate ="Sơn Trà";
        }
    
          
        document.getElementById("fullname1").innerHTML=document.getElementById("fullname").value;
        document.getElementById("phone1").innerHTML = document.getElementById("phone").value;
        document.getElementById("comment1").innerHTML= document.getElementById("comment").value +"-"+ calculate ,
        document.getElementById("payment1").innerHTML = payment,
         
        document.getElementById("email1").innerHTML= document.getElementById("email").value,
        document.getElementById("total1").innerHTML =document.getElementById("total").value;
          
      }
