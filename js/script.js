$(document).ready(function(){
    $("a.gotoTop").hide()
    $(window).scroll(function(){
        if($(this).scrollTop() >= 59){
            $(".Menu").css({
                "position": "fixed",
                "left": "0",
                "right": "0",
                "opacity": "1",
                "z-indedx": "9999!important"
            },1000)
        }
        else {
            $(".Menu").css({
                "position": "relative",
                "left": "0",
                "right": "0",
                "opacity": "1",
                "z-indedx": "9999!important"
            },1000)
        }

        if($(this).scrollTop() >= 250)
            $("a.gotoTop").show("slow")
        else 
            $("a.gotoTop").hide("slow")
    })
    $("a.gotoTop").click(function(){
        $("html, body").animate({
            scrollTop: 0
        },900)
    })
    
})
window.onload = function(){
    let showMenu = document.getElementById("menuButton")
    let menuItems = document.getElementsByClassName("Menuitems")
    let check = false;
    if(showMenu){

        showMenu.onclick = function(){
            if(!check){
                for(let i = 1; i < menuItems.length; i++){
                    menuItems[i].style.display = "block"
        
                    
                    check = true;
                }
            } else{
                for(let i = 1; i < menuItems.length; i++){
                    menuItems[i].style.display = "none"
                    check = false;
                }
            }
        }
    }
     //Tim kiem
    const search = document.getElementById("searchBtn")
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
                const name = items[i].getElementsByClassName("namePro")[0].innerText
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
    
    const mainImg = document.querySelector("div.imgThumb img")
    
    let namePro = document.querySelectorAll("div.namePro h2")
    
    let namePizza = document.querySelectorAll("#pizza div.namePro h2")
    let nameSalad = document.querySelectorAll("#salad div.namePro h2")
    let nameKhaivi = document.querySelectorAll("#khaivi div.namePro h2")
    let nameMiy = document.querySelectorAll("#miy div.namePro h2")
    let nameDrink = document.querySelectorAll("#drink div.namePro h2")
    
    const mainName = document.querySelector("div.nameThumb h3")
    
    const mainGia = document.querySelector("div.priceThumb p span")
    
    let giaPizza = document.querySelectorAll("#pizza div.GiaSp span")
    let giaSalad = document.querySelectorAll("#salad div.GiaSp span")
    let giaKhaivi = document.querySelectorAll("#khaivi div.GiaSp span")
    let giaMiy = document.querySelectorAll("#miy div.GiaSp span")
    let giaDrink = document.querySelectorAll("#drink div.GiaSp span")
    
    const mainDes = document.querySelector("div.modalContent div p.maindes")
    
    let desOfPizza = document.querySelectorAll("#pizza div.DesSp p")
    let desOfSalad = document.querySelectorAll("#salad div.DesSp p")
    let desOfKhaiVi = document.querySelectorAll("#khaivi div.DesSp p")
    let desOfMiY = document.querySelectorAll("#miy div.DesSp p")
    let desOfDrink = document.querySelectorAll("#drink div.DesSp p")
    
    const mainSize = document.getElementById("mainSize")
    const mainbaseType = document.getElementById("mainbaseType")
    const mainToping = document.getElementById("mainToping")
    const mainNote = document.getElementById("mainNote")
    const infoSize = document.querySelector("div.sizePro")
    // Modal description about product
    let buttonPizza = document.getElementsByClassName("Muahang pizza")
    for(let i = 0; i < buttonPizza.length; i++)
    {
        buttonPizza[i].onclick = function() {
                let pathImg = imgPizza[i].src;
                mainImg.setAttribute("src",pathImg)
                mainName.innerHTML = namePizza[i].innerHTML 
                mainGia.innerHTML = giaPizza[i].innerHTML
                mainDes.innerHTML = desOfPizza[i].innerHTML
                modal.style.display = "block"
    
                infoSize.style.display = "block"
                mainSize.style.display = "block"
                mainbaseType.style.display = "block"
                mainToping.style.display = "block"
        }
    }; 
    let buttonSalad = document.getElementsByClassName("Muahang salad")
    for(let i = 0; i < buttonSalad.length; i++)
    {
        buttonSalad[i].onclick = function() {
                let pathImg = imgSalad[i].src;
                mainImg.setAttribute("src",pathImg)
                mainName.innerHTML = nameSalad[i].innerHTML
                mainGia.innerHTML = giaSalad[i].innerHTML
                mainDes.innerHTML = desOfSalad[i].innerHTML
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
                mainName.innerHTML = nameKhaivi[i].innerHTML
                mainGia.innerHTML = giaKhaivi[i].innerHTML
                mainDes.innerHTML = desOfKhaiVi[i].innerHTML
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
                mainName.innerHTML = nameMiy[i].innerHTML
                mainGia.innerHTML = giaMiy[i].innerHTML
                mainDes.innerHTML = desOfMiY[i].innerHTML
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
                mainName.innerHTML = nameDrink[i].innerHTML
                mainGia.innerHTML = giaDrink[i].innerHTML
                mainDes.innerHTML = desOfDrink[i].innerHTML
                modal.style.display = "block"
                
                infoSize.style.display = "none"
                mainSize.style.display = "none"
                mainbaseType.style.display = "none"
                mainToping.style.display = "none"
        }
    };
    // When the user clicks on <span> (x), close the modal
    let modal=document.getElementById("myModal")
    let span =document.getElementsByClassName("close1")[0]
    if(span){
        span.onclick = function() {
            modal.style.display = "none";
        }
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
    let prev = null;
    if(sizeNum){
        for(let i = 0; i < valsizeNum.length; i++) {
            valsizeNum[i].onclick = function () {
                sizeNum.innerText = valsizeNum[i].value
            }
        }
    }
    let baseTypeM = document.querySelector("span.baseTypemain")
    let baseType = document.querySelectorAll("div.baseType ul li input")
    for(let i = 0; i < baseType.length; i++){
        baseType[i].onclick = function (){
            baseTypeM.innerText = baseType[i].value
            
        }
    }
    /*Form dat ban*/
    let NameOfCus = document.getElementById("nameCus")
    let PhoneNumberOfCus = document.getElementById("phoneNumCus")
    let EmailOfCus = document.getElementById("emailCus")
    let DateOfCus = document.getElementById("dateCus")
    let TimeOfCus = document.getElementById("timeCus")
    let NoteOfCus = document.getElementById("NoteCus")
    let Submit = document.getElementById("Submit")
    if(Submit){
        Submit.onclick = function(){
            if(NameOfCus.value === ""|| PhoneNumberOfCus.value === "" || DateOfCus.value === "" || TimeOfCus.value === "" ){
                alert("Vui lòng nhập đủ thông tin!")
            }
            else{
                let con = confirm("Bạn có chắc chắn thông tin vừa nhậP là chính xác")
                if(con == true){
                    alert("Đặt bàn thành công!")
                    location.reload();
                } 
            }
        }
    }
    /* slideshow toping */
    let Lbtn = document.querySelector("span.left-btn input")
    let Rbtn = document.querySelector("span.right-btn input")
    
    /*Lien he*/
    let infoButton = document.querySelector(".info")
    let emailButton = document.querySelector(".email")
    let supportButton = document.querySelector(".support")
    let infoBox = document.querySelector(".info-box")
    let emailBox = document.querySelector(".email-box")
    let checkInfoBox = false;
    let checkInfoEmail = false;
    function infoBoxON(){
        emailBox.style.display = "none"
        emailBox.style.opacity = "0"
    
        infoBox.style.display = "block"
        infoBox.style.opacity = "1"
    
        checkInfoBox = true
        checkInfoEmail = false
    }
    function emailBoxON(){
        
        infoBox.style.display = "none"
        infoBox.style.opacity = "0"
        
        emailBox.style.display = "block"
        emailBox.style.opacity = "1"
    
        checkInfoEmail = true
        checkInfoBox = false
    }
    if(infoButton){
        infoButton.onclick = function(){
            if(!checkInfoBox)
                infoBoxON()
        }
        emailButton.onclick = function(){
            if(!checkInfoEmail){
                emailBoxON()
            }
        }
        supportButton.onclick = function(){
            window.open("tel:+1900 8765 4321")
        }
    }
}
let slideIndex = 3;
function plusDivs(n) {
    showDivs(slideIndex += n);
}
showDivs(slideIndex);
function showDivs(n) {
    let x = document.querySelectorAll("div.toping ul li")
    if (n > x.length) {
        slideIndex = x.length
    }
    if (n < 3) {
        slideIndex = 3
    }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
    x[slideIndex-2].style.display = "block";
    x[slideIndex-3].style.display = "block";
    if(window.getComputedStyle(x[slideIndex-1]).display === "block"){
        x[slideIndex-1].style.marginRight = "0px"
        x[slideIndex-2].style.marginRight = "10px"
    }    
}
