var contactsBtn = document.querySelector(".contacts-btn");      
var modalWrite = document.querySelector(".modal-write-us");
var closeWrite = modalWrite.querySelector(".modal-close");

var contactsMap = document.querySelector(".contacts-map");      
var modalMap = document.querySelector(".modal-map");
var closeMap = modalMap.querySelector(".modal-close");

var deliveryBtn = document.querySelector(".services-bar-btn-delivery");
var warrantyBtn = document.querySelector(".services-bar-btn-warranty");  
var creditBtn = document.querySelector(".services-bar-btn-credit");
var delivery = document.querySelector(".services-item-delivery"); 
var warranty = document.querySelector(".services-item-warranty");  
var credit = document.querySelector(".services-item-credit"); 

contactsBtn.addEventListener ("click", function (evt) {
    evt.preventDefault();
    modalWrite.classList.add("modal-open");
});
      
closeWrite.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWrite.classList.remove("modal-open");
});

contactsMap.addEventListener ("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-open");
});
          
closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-open");
});

deliveryBtn.addEventListener ("click", function (evt) {
    evt.preventDefault();

    deliveryBtn.classList.add("services-bar-btn-active");
    warrantyBtn.classList.remove("services-bar-btn-active");
    creditBtn.classList.remove("services-bar-btn-active");


    delivery.classList.remove("services-tabs-item-close");
    warranty.classList.add("services-tabs-item-close");
    credit.classList.add("services-tabs-item-close");
});

warrantyBtn.addEventListener ("click", function (evt) {
    evt.preventDefault();
        
    warrantyBtn.classList.add("services-bar-btn-active");
    deliveryBtn.classList.remove("services-bar-btn-active");
    creditBtn.classList.remove("services-bar-btn-active");
    
    warranty.classList.remove("services-tabs-item-close");
    delivery.classList.add("services-tabs-item-close");
    credit.classList.add("services-tabs-item-close");
});

creditBtn.addEventListener ("click", function (evt) {
    evt.preventDefault();
            
    creditBtn.classList.add("services-bar-btn-active");
    deliveryBtn.classList.remove("services-bar-btn-active");
    warrantyBtn.classList.remove("services-bar-btn-active");
     
    credit.classList.remove("services-tabs-item-close");
    delivery.classList.add("services-tabs-item-close");
    warranty.classList.add("services-tabs-item-close");
});
