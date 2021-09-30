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
let imgPizza = document.querySelectorAll("#pizza div.imgPro img")
let imgSalad = document.querySelectorAll("#salad div.imgPro img")
let imgKhaivi = document.querySelectorAll("#khaivi div.imgPro img")
let imgMiy = document.querySelectorAll("#miy div.imgPro img")
let imgDrink = document.querySelectorAll("#drink div.imgPro img")
var mainImg = document.querySelector("div.imgThumb img")
let namePro = document.querySelectorAll("div.namePro h2")
var mainName = document.querySelector("div.nameThumb h3")
var mainGia = document.querySelector("div.priceThumb p span")
let gia = document.querySelectorAll("div.GiaSp span")
var mainDes = document.querySelector("div.modalContent div p.maindes")
let des = document.getElementsByClassName("DesSp")
var mainSize = document.getElementById("mainSize")
var mainbaseType = document.getElementById("mainbaseType")
var mainToping = document.getElementById("mainToping")
var mainNote = document.getElementById("mainNote")
var infoSize = document.querySelector("div.sizePro")
// Modal description about product
let buttonPizza = document.getElementsByClassName("Muahang pizza")
for(let i = 0; i < buttonPizza.length; i++)
{
    buttonPizza[i].onclick = function() {
            let pathImg = imgPizza[i].src;
            mainImg.setAttribute("src",pathImg)
            mainName.innerHTML = namePro[i].innerHTML 
            mainGia.innerHTML = gia[i].innerHTML
            mainDes.innerHTML = des[i].innerHTML
            modal.style.display = "block"
    }
}; 
let buttonSalad = document.getElementsByClassName("Muahang salad")
for(let i = 0; i < buttonSalad.length; i++)
{
    buttonSalad[i].onclick = function() {
            let pathImg = imgSalad[i].src;
            mainImg.setAttribute("src",pathImg)
            mainName.innerHTML = namePro[i].innerHTML
            mainGia.innerHTML = gia[i].innerHTML
            mainDes.innerHTML = des[i].innerHTML
            modal.style.display = "block"
            
            infoSize.style.display = "none"
            mainSize.style.display = "none"
            mainbaseType.style.display = "none"
            mainToping.style.display = "none"
    }
}; 
let buttonKhaivi = document.getElementsByClassName("Muahang khaivi")
for(let i = 0; i < buttonKhaivi.length; i++)
{
    buttonKhaivi[i].onclick = function() {
            let pathImg = imgKhaivi[i].src;
            mainImg.setAttribute("src",pathImg)
            mainName.innerHTML = namePro[i].innerHTML
            mainGia.innerHTML = gia[i].innerHTML
            mainDes.innerHTML = des[i].innerHTML
            modal.style.display = "block" 
            
            infoSize.style.display = "none"
            mainSize.style.display = "none"
            mainbaseType.style.display = "none"
            mainToping.style.display = "none"
    }
};
let buttonMiy = document.getElementsByClassName("Muahang miy")
for(let i = 0; i < buttonMiy.length; i++)
{
    buttonMiy[i].onclick = function() {
            let pathImg = imgMiy[i].src;
            mainImg.setAttribute("src",pathImg)
            mainName.innerHTML = namePro[i].innerHTML
            mainGia.innerHTML = gia[i].innerHTML
            mainDes.innerHTML = des[i].innerHTML
            modal.style.display = "block"  
            
            infoSize.style.display = "none"
            mainSize.style.display = "none"
            mainbaseType.style.display = "none"
            mainToping.style.display = "none"
    }
};
let buttonDrink = document.getElementsByClassName("Muahang drink")
for(let i = 0; i < buttonDrink.length; i++)
{
    buttonDrink[i].onclick = function() {
            let pathImg = imgDrink[i].src;
            mainImg.setAttribute("src",pathImg)
            mainName.innerHTML = namePro[i].innerHTML
            mainGia.innerHTML = gia[i].innerHTML
            mainDes.innerHTML = des[i].innerHTML
            modal.style.display = "block"
            
            infoSize.style.display = "none"
            mainSize.style.display = "none"
            mainbaseType.style.display = "none"
            mainToping.style.display = "none"
    }
};
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

//Option for Modal Box
let sizeNum = document.querySelector("span.sizeNum")
let valsizeNum = document.querySelectorAll("div.size ul li input")
let priceSize = document.querySelectorAll("div.size ul li label span")
let paidMoney
let prev = null;

for(let i = 0; i < valsizeNum.length; i++) {
    valsizeNum[i].onclick = function () {
        (prev)? console.log(prev.value):null;
        if( valsizeNum[i] !== prev) {
            prev = valsizeNum[i];
        //     if(valsizeNum[0].checked == true)
        // {
        //     paidMoney = Number(mainGia.innerText.replace(".","").replace("đ","")) + Number(priceSize[0].innerText.replace(".","").replace("đ",""))
        //     mainGia.innerHTML = paidMoney
        // }
        // else 
        //     if(valsizeNum[1].checked == true)
        //     {
        //         paidMoney = Number(mainGia.innerText.replace(".","").replace("đ","")) + Number(priceSize[1].innerText.replace(".","").replace("đ",""))
        //         mainGia.inerHTML = paidMoney
        //     }
        //         else 
        //             if(valsizeNum[2].checked == true)
        //             {
        //                 paidMoney = Number(mainGia.innerText.replace(".","").replace("đ","")) + Number(priceSize[2].innerText.replace(".","").replace("đ",""))
        //                 mainGia.innerHTML = paidMoney
        //             }       
        }
        sizeNum.innerText = valsizeNum[i].value
    };
}
let baseTypeM = document.querySelector("span.baseTypemain")
let baseType = document.querySelectorAll("div.baseType ul li input")
for(let i = 0; i < baseType.length; i++){
    baseType[i].onclick = function (){
        (prev)? console.log(prev.value):null;
        if(baseType[i] !== prev){
            baseTypeM.innerText = baseType[i].value
        };
    }
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
