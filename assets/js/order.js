


    var order =
    [
        {
            id: "1",
            fullname: "Thanh Cong Chien",
            emailaddress: "chien.thanh180201@vnuk.edu.vn",
            phone: "1234556767",
            district: "Lien Chieu",
            payment: "Paypal",
            address:"172 tran cao van",
             bill:"32000",

        },



    ];
// đẩy mảng user vào local
    var saveOrder =function (){
         localStorage.setItem('listOrder',JSON.stringify(order))
     }
    //lấy list order
     var loadOrder = function(){
         order = JSON.parse(localStorage.getItem('listOrder'))
     }
     if (localStorage.getItem("listOrder")!=null){
        
        loadOrder();
     }
     saveOrder();
// chức năng order
     var Ordering = function (){
         var Order = {
             id: ""+parseInt( order.length+1),
             fullname: document.getElementById("fullname").value,
             emailaddress:  document.getElementById("emailaddress").value,
             phone: document.getElementById("phone").value,
             district : document.getElementById("district").value,
             payment: document.getElementById("payment").value,
             address : document.getElementById("address").value,
             bill: document.getElementById("bill").value,
         }
         if(!fullname == "" || !emailaddress == ""  || !phone == ""){
            orderAdmin();
         }

             order.push(Order);
         localStorage.setItem('listOrder',JSON.stringify(order));
         // Save();
        //  window.location.href ='signup.html';
    //   window.location.reload();
     }






   

