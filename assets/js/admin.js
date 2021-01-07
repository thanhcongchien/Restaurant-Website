var productAdmin = function(){
    var listfood1 ="";
    for (var i in food){
        var data = JSON.parse(JSON.stringify(food[i]))
     var listfood1 = '<tr>';
     listfood1+='<td>'+data.id+'</td>';
     listfood1+='<td>'+data.name+'</td>';
     listfood1+='<td><img src="../img/food/'+data.img+'" alt="" style="width: 50px;"></td>';
     listfood1+='<td>'+data.price+'</td>';
     //  listproduct1+='';
     listfood1+='<td><button onclick="updateProduct('
      +i+')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
      listfood1+='<button onclick="deleteProduct('
      +i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
      listfood1+='</tr>';  

     document.getElementById("food-admin").innerHTML += listfood1;
    }
    // Save();
    }

var addProduct = function(){
    var Food = {
        id :" "+parseInt( food.length+1),
        name : document.getElementById("name").value,
        img : document.getElementById("img").files[0].name,
        price : document.getElementById("price").value
    }
        food.push(Food);
        localStorage.setItem('listFood',JSON.stringify(food));
        // Save();
     window.location.reload();
    }

    // Xóa sản phẩm 
    var deleteProduct= function (i){
            food.splice(i, 1);
            localStorage.setItem('listFood',JSON.stringify(food));
            window.location.reload();
    }

    // Sửa sản phẩm 
    var updateProduct = function(i){
        var k = food[i];
        document.getElementById("idd").value = k.id;
        document.getElementById("named").value = k.name;
        document.getElementById("imgd").value = k.img;
        document.getElementById("priced").value = k.price;
        document.getElementById("idd").setAttribute("disabled","disabled");
        document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate('+i+')">Accept</button>'
    }
    var submitUpdate = function(i){
        var k = food[i];
        k.id= document.getElementById("idd").value;
        k.name= document.getElementById("named").value;
        k.img= document.getElementById("imgd").value;
        k.price= document.getElementById("priced").value;
        // document.getElementById("idd").setAttribute("disabled","disabled");
        localStorage.setItem('listFood',JSON.stringify(food));
        window.location.reload();
    }




    var bookAdmin = function(){
        var listbook ="";
        for (var i in book){
            var data = JSON.parse(JSON.stringify(book[i]))
         var listbook = '<tr>';
         listbook+='<td>'+data.id+'</td>';
         listbook+='<td>'+data.name+'</td>';
         listbook+='<td>'+data.email+'</td>';
         listbook+='<td>'+data.people+'</td>';
         listbook+='<td>'+data.date+'</td>';
         listbook+='<td>'+data.time+'</td>';
         listbook+='<td>'+data.mess+'</td>';
    
         document.getElementById("book-admin").innerHTML += listbook;
        }
        // Save();
        }

        var orderAdmin = function(){
            var listorder ="";
            for (var i in order){
                var data = JSON.parse(JSON.stringify(order[i]))
             var listorder = '<tr>';
             listorder+='<td>'+data.id+'</td>';
             listorder+='<td>'+data.fullname+'</td>';
             listorder+='<td>'+data.emailaddress+'</td>';
             listorder+='<td>'+data.phone+'</td>';
             listorder+='<td>'+data.calltime+'</td>';
             listorder+='<td>'+data.comments+'</td>';
        
             document.getElementById("order-admin").innerHTML += listorder;
            }
            // Save();
            }
    productAdmin();
    bookAdmin();
    orderAdmin();
        

    //choose file from Computer
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