var modal=document.getElementById("myModal")
var span =document.getElementsByClassName("close")[0]
var button = document.getElementsByClassName("Muahang")
var imgProduct = document.getElementsByClassName("imgPro")
var mainImg = document.querySelector("div.imgThumb img")
var mainDes = document.querySelector("div.modalContent div p")
let des = document.getElementsByClassName("DesSp")

// Modal description about product
for(let i = 0; i < button.length; i++)
{
    button[i].onclick = function() {

            let pathImg = imgProduct[i].src;
            mainImg.setAttribute("src",pathImg)
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
