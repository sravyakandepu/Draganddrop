/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var drag_images = document.getElementsByClassName('drag_img');

var drop_cntr = document.getElementById('drop_here');

var img_len = drag_images.length;


for (var i =0; i<img_len ;i++){
  
  drag_images[i].addEventListener('dragstart' , function(event){
    
    
  event.dataTransfer.setData('cntrId',this.getAttribute('id'));  
  });
}



drop_cntr.addEventListener('dragover' , function(event){
  
  event.preventDefault();
  
  return false;
});



drop_cntr.addEventListener('drop' , function(event){
    
    var crosimage = '<img src ="https://cdn2.iconfinder.com/data/icons/filled-icons/493/x-512.png" style="width: 20px;" id ="remove_id">'; 
     console.log("abc");
    var cntrId = event.dataTransfer.getData('cntrId');
    imgSrc = document.getElementById(cntrId + '_img').getAttribute('src');
    caption = document.getElementById(cntrId+'_txt').innerHTML,
    html ='<div id ="'+cntrId+'contains"> <img src ="'+imgSrc+'" style ="width :50px;" />';
    html += "<label>" +caption+"</label>"
    html += crosimage+"</div>";
 // to check unique ids 
    if(document.getElementById(cntrId+'contains')===null){
   document.getElementById('drop_here').insertAdjacentHTML('afterbegin',html);
    }
    else{
        alert("It is already present");
    }
  document.getElementById("remove_id").addEventListener('click',function(){
      console.log("cde");
   var removeelement = document.getElementById('remove_id');
   removeelement.parentNode.remove(removeelement);   
   
   
   
  });
  
 
});


