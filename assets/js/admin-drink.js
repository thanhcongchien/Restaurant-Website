
//khai bao bien cuc bo
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



// import drink from "./product"
var drinkAdmin = function(){
    var listdrink1 ="";
    for (var i in drink){
        var data = JSON.parse(JSON.stringify(drink[i]))
     var listdrink1 = '<tr>';
     listdrink1+='<td>'+data.id+'</td>';
     listdrink1+='<td>'+data.name+'</td>';
     listdrink1+='<td><img src="../img/drink/'+data.img+'" alt="" style="width: 50px;"></td>';
     listdrink1+='<td>'+data.price+'</td>';
     //  listproduct1+='';
     listdrink1+='<td><button onclick="updateDrink('
      +i+')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateDrink"><i class="fas fa-cogs"></i></button>';
      listdrink1+='<button onclick="deleteDrink('
      +i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
      listdrink1+='</tr>';  

    //   document.addEventListener("DOMContentLoaded", function(event) { 
    //     //Do work
    //     document.getElementById("drink-admin").innerHTML += listdrink1;
    // });

    if(document.getElementById("drink-admin") != null){
        document.getElementById("drink-admin").innerHTML += listdrink1;
    }
    }
    // Save();
    }
    var addDrink = function(){
    var Drink = {
        id :" "+parseInt( drink.length+1),
        name : document.getElementById("name").value,
        img : document.getElementById("img").files[0].name,
        price : document.getElementById("price").value
    }
        drink.push(Drink);
        localStorage.setItem('listDrink',JSON.stringify(drink));
        // Save();
     window.location.reload();
    }

    // Xóa sản phẩm 
    var deleteDrink= function (i){
            drink.splice(i, 1);
            localStorage.setItem('listDrink',JSON.stringify(drink));
            window.location.reload();
    }

    // Sửa sản phẩm 
    var updateDrink = function(i){
        var k = drink[i];
        document.getElementById("iddd").value = k.id;
        document.getElementById("namedd").value = k.name;
        document.getElementById("imgdd").value = k.img;
        document.getElementById("pricedd").value = k.price;
        document.getElementById("iddd").setAttribute("disabled","disabled");
        document.getElementById("submit").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submit('+i+')">Accept</button>'
    }
    var submit = function(i){
        var k = drink[i];
        k.id= document.getElementById("iddd").value;
        k.name= document.getElementById("namedd").value;
        k.img= document.getElementById("imgdd").value;
        k.price= document.getElementById("pricedd").value;
        // document.getElementById("idd").setAttribute("disabled","disabled");
        localStorage.setItem('listDrink',JSON.stringify(drink));
        window.location.reload();
    }
    drinkAdmin();

    function FixPath(Path)
    {
        var HiddenPath = Path.toString();
        alert(HiddenPath.indexOf("FakePath"));

        if (HiddenPath.indexOf("FakePath") > 1)
        {
            var UnwantedLength = HiddenPath.indexOf("FakePath") + 7;
            MainStringLength = HiddenPath.length - UnwantedLength;
            var thisArray =[];
            var i = 0;
            var FinalString= "";
            while (i < MainStringLength)
            {
                thisArray[i] = HiddenPath[UnwantedLength + i + 1];
                i++;
            }
            var j = 0;
            while (j < MainStringLength-1)
            {
                if (thisArray[j] != ",")
                {
                    FinalString += thisArray[j];
                }
                j++;
            }
            FinalString = "~" + FinalString;
            alert(FinalString);
            return FinalString;
        }
        else
        {
            return HiddenPath;
        }
    }