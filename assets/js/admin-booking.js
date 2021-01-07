//render thông tin người đặt bàn 
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
    //  listporder+='<td><button onclick="updateUser('
    //   +i+')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
    //   listporder+='<button onclick="deleteUser('
    //   +i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
    //   listporder+='</tr>';  

     document.getElementById("book-admin").innerHTML += listbook;
    }
    // Save();
    }
    loadBook();

   
    bookAdmin();
