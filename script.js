var modal=document.getElementById("myModal")
var span =document.getElementsByClassName("close")[0]
var button = document.getElementsByClassName("Muahang")
var imgProduct = document.getElementsByClassName("imgPro")
var mainImg = document.querySelector("div.imgThumb img")
var click = false;
// When the user clicks the button, open the modal 
for(var i = 0; i < button.length-1; i++)
{
    
    {button[i].onclick = function() {
        /*for(var i = 0; i < imgProduct.length; i++)
        {
            var path = imgProduct[i].src;
            mainImg.setAttribute("src",path)
            modal.style.display = "block";
        }*/
        console.log(button[i])
        click = true;
    }}
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
