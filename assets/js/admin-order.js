//render thông tin người dùng dat giao hang
var orderAdmin = function(){
    var listorder ="";
    for (var i in order){
        var data = JSON.parse(JSON.stringify(order[i]))
     var listorder = '<tr>';
     listorder+='<td>'+data.id+'</td>';
     listorder+='<td>'+data.fullname+'</td>';
     listorder+='<td>'+data.emailaddress+'</td>';
     listorder+='<td>'+data.phone+'</td>';
     listorder+='<td>'+data.district+'</td>';
     listorder+='<td>'+data.payment+'</td>';
     listorder+='<td>'+data.address+'</td>';
     listorder+='<td>'+data.bill+'</td>';
    //  listporder+='<td><button onclick="updateUser('
    //   +i+')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
    //   listporder+='<button onclick="deleteUser('
    //   +i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
    //   listporder+='</tr>';  

     document.getElementById("order-admin").innerHTML += listorder;
    }
    // Save();
    }
    loadOrder();

       orderAdmin();
