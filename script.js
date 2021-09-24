 //.............................Tim kiem...................................
 var search = document.getElementById("searchBtn")
 search.onclick = function () {
 let k = document.getElementById("kw")
 if (k != null){
     k = k.value
    if(k==""){
        alert("Vui lòng nhập từ khóa!")
        setTimeout(function(){
            let items = document.querySelectorAll("div.items > div.item")
            for(let i = 0; i < items.length; i++){
                items[i].style.outline = "none"
            }
        },0)
     }
     let items = document.querySelectorAll("div.items > div.item")
     for(let i = 0; i < items.length; i++){
         var name = items[i].getElementsByClassName("namePro")[0].innerText
         if(name.indexOf(k) >= 0){
             items[i].style.outline = "2px dashed red"
         }    
     }
     setTimeout(function(){
        let items = document.querySelectorAll("div.items > div.item")
        for(let i = 0; i < items.length; i++){
            items[i].style.outline = "none"
        }
    },3000)
}
}
window.onload = function(){
   // Modal description about product
let button = document.getElementsByClassName("Muahang")
for(let i = 0; i < button.length; i++)
{
    button[i].onclick = function() {
            let imgProduct = document.querySelectorAll("div.imgPro img")
            var mainImg = document.querySelector("div.imgThumb img")
            let pathImg = imgProduct[i].src;
            mainImg.setAttribute("src",pathImg)
            let namePro = document.querySelectorAll("div.namePro h2")
            var mainName = document.querySelector("div.nameThumb h3")
            mainName.innerHTML = namePro[i].innerHTML
            var mainGia = document.querySelector("div.priceThumb")
            let gia = document.querySelectorAll("div.GiaSp")
            mainGia.innerHTML = gia[i].innerHTML
            var mainDes = document.querySelector("div.modalContent div p.maindes")
            let des = document.getElementsByClassName("DesSp")
            mainDes.innerHTML = des[i].innerHTML
            modal.style.display = "block"
    }
}
// When the user clicks on <span> (x), close the modal
var modal=document.getElementById("myModal")
var span =document.getElementsByClassName("close")[0]
span.onclick = function() {
modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    }
}
};
//Option for Modal Box
let valsizeNum = document.querySelectorAll("div.size ul li input")
let sizeNum = document.querySelector("span.sizeNum")
let prev = null;
for(let i = 0; i < valsizeNum.length; i++) {
    valsizeNum[i].onclick = function () {
        (prev)? console.log(prev.value):null;
        if( valsizeNum[i] !== prev) {
            prev = valsizeNum[i];
        }
        sizeNum.innerText = valsizeNum[i].value
    };
}
/* slideshow toping */
let Lbtn = document.querySelector("span.left-btn input")
let Rbtn = document.querySelector("span.right-btn input")
var slideIndex = 3;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  let x = document.querySelectorAll("div.toping ul li")
  if (n > x.length) {slideIndex = x.length}
  if (n < 3) {slideIndex = 3} ;
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  x[slideIndex-2].style.display = "block";
  x[slideIndex-3].style.display = "block";
} 
