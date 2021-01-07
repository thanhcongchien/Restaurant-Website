    //food
    var food = [
        {
            id:"1",
            name:"Regular Salad",
            img : "regular-salad.jpg",
            price: 35000,
      
        },
        {
            id:"2",
            name:"Bacon Egg Salad",
            img : "bacon-egg-salad.jpg",
            price:55000,
      
        },
        {
            id:"3",
            name:"Fantasy Salad",
            img : "fantasy-salad.jpg",
            price:49000,
      
        },
        {
            id:"4",
            name:"Tunna Salad",
            img :"Tuna-Salad.jpg",
            price: 55000,
      
        },
        {
            id:"5",
            name:"Chicken Bagutte",
            img : "chicken-baguette.jpg",
            price:59000,
      
        },
        {
            id:"6",
            name:"Mecury Bagutte",
            img : "beef-mushroom.jpg",
            price:69000,
      
        },
      
      ]



// đẩy mảng product vào local
    function Save(){
        localStorage.setItem('listFood',JSON.stringify(food))

    }
   //lấy sản phẩm 
   function load(){
    food = JSON.parse(localStorage.getItem('listFood'));

   } 
   //xuất sản phẩm ra html
   if (localStorage.getItem("listFood") != null) {
    load();
}
   var listLocal = function(){
       var listfood ="";
       for (var i in food ){
           var data = JSON.parse(JSON.stringify(food[i]))
        var listfood = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listfood += '<div class="card product p-2" style="width:auto">'; 
        listfood += '<img class="card-img-top" src="../assets/img/food//' + data.img +'" alt="...">';
        listfood += '<div class="card-title product-title text-center h5" >'+data.name+'</div>';
        listfood += '<div class="price text-center h6">'+data.price+'₫</div>';
        listfood +=  '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" >';
        // listproduct +=  '<a class=" add-to-cart btn" data-name="'+product[i].name+'" data-price="'+product[i].price+'" onclick="tks()">';
        listfood +=  '<a>';
        listfood +=  '<i class="fas fa-cart-plus"></i>';
        listfood +=  '</a>';
        listfood +=  '</span>';
        listfood += '</div>';
        listfood += '</div>';
        // onclick="tks()"
        document.getElementById("add-menu").innerHTML += listfood;
       }
       Save();
       
   }

listLocal();

// drink

var drink = [
    
    {
        id:"1",
        name:"Cappuccino",
        img : "capuccino.jpg",
        price:38000,
  
    },
  
    {
        id:"2",
        name:"Americano",
        img : "americano.jpg",
        price:22000,
  
    },
    {
        id:"3",
        name:"Machiato",
        img : "maciato.jpg",
        price:38000,
  
    },
    {
        id:"4",
        name:"Bubweiser",
        img : "budweiser.jpg",
        price:25000,
  
    },
    {
        id:"5",
        name:"Egg Coffee",
        img : "egg-coffee.jpg",
        price:25000,
  
    },
    {
        id:"6",
        name:"Tiger",
        img : "tiger.jpg",
        price:20000,
  
    },
    {
        id:"7",
        name:"Coconut Coffee",
        img : "coconut-coffee.jpg",
        price:25000,
  
    },
    {
        id:"8",
        name:"Passion Juice",
        img : "Passion-Fruit-Juice.jpg",
        price:25000,
  
    },

]

// đẩy mảng product vào local
function Save2(){
localStorage.setItem('listDrink',JSON.stringify(drink))

}
//lấy sản phẩm 
function load2(){
drink = JSON.parse(localStorage.getItem('listDrink'));

} 
//xuất sản phẩm ra html
if (localStorage.getItem("listDrink") != null) {
load2();
}
var listLocal2 = function(){
var listdrink ="";
for (var i in drink ){
   var data = JSON.parse(JSON.stringify(drink[i]))
var listdrink = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
listdrink += '<div class="card product p-2" style="width:auto">'; 
listdrink += '<img class="card-img-top" src="../assets/img/drink//' + data.img +'" alt="...">';
listdrink += '<div class="card-title product-title text-center h5" >'+data.name+'</div>';
listdrink += '<div class="price text-center h6">'+data.price+'₫</div>';
listdrink +=  '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" onclick="tks()">';
// listproduct +=  '<a class=" add-to-cart btn" data-name="'+product[i].name+'" data-price="'+product[i].price+'" onclick="tks()">';
listdrink +=  '<a>';
listdrink +=  '<i class="fas fa-cart-plus"></i>';
listdrink +=  '</a>';
listdrink +=  '</span>';
listdrink += '</div>';
listdrink += '</div>';

document.getElementById("add-menu2").innerHTML += listdrink;
}
Save2();
}
listLocal2();
