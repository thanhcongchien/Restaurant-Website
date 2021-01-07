



  var deliveryCart = (function() {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];
    
    // Constructor
    function Item(id, name , img, price, count) {
      this.id   = id;
      this.name = name;
      this.img = img;
      this.price = price;
      this.count = count;
    }
    
    // Save cart
    function saveCart() {
      localStorage.setItem('deliveryCart', JSON.stringify(cart));
    }
    
      // Load cart
    function loadCart() {
      cart = JSON.parse(localStorage.getItem('deliveryCart'));
    }
    if (localStorage.getItem("deliveryCart") != null) {
      loadCart();
    }


    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to cart
    obj.addItemToCart = function(id, name , img , price, count) {
      for(var item in cart) {
        if(cart[item].id === id) {
          cart[item].count ++;
          saveCart();
          return;
        }
      }
      var item = new Item(id, name, img , price, count);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function(name, count) {
      for(var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(id) {
        for(var item in cart) {
          if(cart[item].id === id) {
            cart[item].count --;
            if(cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(id) {
      for(var item in cart) {
        if(cart[item].id === id) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
  
    // Total cart
    obj.totalCart = function() {
      var totalCart = 0;
      for(var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(0));
    }
  
    // List cart
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count).toFixed(0);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
  
    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var id = $(this).data('id');
    var name = $(this).data('name');
    var img = $(this).data('img');
    var price = Number($(this).data('price'));
    deliveryCart.addItemToCart(id, name,img, price, 1);
    displayCart();
  });
  
  // Clear items
  $('.clear-cart').click(function() {
    deliveryCart.clearCart();
      window.location.reload();
    displayCart();
  });
  
  function displayCart() {
    var cartArray = deliveryCart.listCart();
    var output = "";
    for(var i in cartArray) {
      output += "<tr class='text-center'>"
        + "<td><img src='img/" + cartArray[i].img + "' style='width:100px'></td>" 
        + "<td class='name-title'>" + cartArray[i].name + "</td>" 
        + "<td>" + cartArray[i].price + "₫</td>"
        + "<td><button class='minus-item cart-count input-group-addon btn btn-outline-primary' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + ">-</button>"
        +""
        +  "<button class='btn cart-count'>" +cartArray[i].count+"</button>" 
        + "<button class='plus-item cart-count btn btn-primary input-group-addon' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + ">+</button>"
        +"</td>"
        + "<td>" + cartArray[i].total+ "₫</td>"   
        + "<td><button class='delete-item btn btn-outline-danger' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + ">X</button></td>"
       
        +  "</tr>";
    }
    $('.show-cart-1').html(output);
    $('.total-cart').html(deliveryCart.totalCart());
    $('.total-count').html(deliveryCart.totalCount());
  }

  $('.show-cart-1').on("click", ".delete-item", function(event) {
    var id = $(this).data('id')
    deliveryCart.removeItemFromCartAll(id);
    displayCart();
  })
  
  
  // -1
  $('.show-cart-1').on("click", ".minus-item", function(event) {
    var id = $(this).data('id')
    deliveryCart.removeItemFromCart(id);
    displayCart();
  })
  // +1
  $('.show-cart-1').on("click", ".plus-item", function(event) {
    var id = $(this).data('id')
    deliveryCart.addItemToCart(id);
    displayCart();
  })
  
  // Item count input
  $('.show-cart-1').on("change", ".item-count", function(event) {
     var id = $(this).data('id');
     var count = Number($(this).val());
     deliveryCart.setCountForItem(id, count);
    displayCart();
  });
  var info= [];
  


 
 
  

  
  displayCart();


  function tks(){
    alert("Product added to cart ");
  }
//   function MENU1(){
//     document.getElementById("delivery-menu").style.display = 'none';
//     document.getElementById("menu-list").style.display = 'block';
//     document.getElementById("article-list").style.display = 'none';
// }
// function delivery1(){
// document.getElementById("delivery-menu").style.display = 'block';
// document.getElementById("menu-list").style.display = 'none';
// document.getElementById("article-list").style.display = 'none';
// }
// function TESTIMONIALS1(){
// document.getElementById("delivery-menu").style.display = 'none';
// document.getElementById("menu-list").style.display = 'none';
// document.getElementById("article-list").style.display = 'block';

// }


function MENU2(){
document.getElementById("delivery-menu").style.display = 'none';
document.getElementById("menu-list").style.display = 'block';
document.getElementById("article-list").style.display = 'none';
document.getElementById("cart").style.display = 'none';
}
function delivery2(){
document.getElementById("delivery-menu").style.display = 'block';
document.getElementById("menu-list").style.display = 'none';
document.getElementById("article-list").style.display = 'none';
document.getElementById("cart").style.display = 'none';
}
function TESTIMONIALS2(){
document.getElementById("delivery-menu").style.display = 'none';
document.getElementById("menu-list").style.display = 'none';
document.getElementById("article-list").style.display = 'block';
document.getElementById("cart").style.display = 'none';
}
