var modal=document.getElementById("myModal")
var span =document.getElementsByClassName("close")[0]
var button = document.getElementsByClassName("Muahang")
var imgProduct = document.querySelectorAll("div.imgPro img")
var mainImg = document.querySelector("div.imgThumb img")
var mainDes = document.querySelector("div.modalContent div p.maindes")
let des = document.getElementsByClassName("DesSp")
var mainGia = document.querySelector("div.priceThumb")
var gia = document.querySelectorAll("div.GiaSp")
let namePro = document.querySelectorAll("div.namePro h2")
var mainName = document.querySelector("div.nameThumb h3")

// Modal description about product
for(let i = 0; i < button.length; i++)
{
    button[i].onclick = function() {

            let pathImg = imgProduct[i].src;
            mainImg.setAttribute("src",pathImg)
            mainName.innerHTML = namePro[i].innerHTML
            mainGia.innerHTML = gia[i].innerHTML
            mainDes.innerHTML = des[i].innerHTML
            modal.style.display = "block"
    }
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    }
}
