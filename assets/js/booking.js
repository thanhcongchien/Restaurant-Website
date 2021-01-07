


    var book =
    [
        {
            id: "1",
            name: "Thanh Cong Chien",
            email: "chien.thanh180201@vnuk.edu.vn",
            people: "1",
            date: "Monday",
            time: "8:00 a.m",
            mess: "alo alo"

        },



    ];
// đẩy mảng book vào local
    var saveBook =function (){
         localStorage.setItem('listBook',JSON.stringify(book))
     }
    //lấy list order
     var loadBook = function(){
         book = JSON.parse(localStorage.getItem('listBook'))
     }
     if (localStorage.getItem("listBook")!=null){
        
        loadBook();
     }
     saveBook();
// chức năng book
     var Booking = function (){
         var Book = {
             id: ""+parseInt( book.length+1),
             name: document.getElementById("name").value,
             email:  document.getElementById("email").value,
             people: document.getElementById("people").value,
             date: document.getElementById("date").value,
             time: document.getElementById("time").value,
             mess : document.getElementById("mess").value,
         }
         if( name == "" || email == ""){
             bookAdmin();

         }else{
             
            alert("Booking Successfully");
            alert("We will respond to you as soon as possible <3")
         }


         book.push(Book);
         localStorage.setItem('listBook',JSON.stringify(book));
         // Save();
      window.location.reload();
     }






   

