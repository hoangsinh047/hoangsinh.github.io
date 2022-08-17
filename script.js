var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "active";
}

const btn=document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){

    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h1").innerText
        var productPrice = product.querySelector("span").innerText
        // console.log(productPrice, productImg, productName)
        addcart(productPrice, productImg, productName)
    }})

})
function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
      var productT = document.querySelectorAll(".title")
      if(productT[i].innerHTML==productName) {
        alert("Sản phẩm của bạn đã có trong giỏ hàng")
        return
      }
    }
    var trcontent = '<tr><td><img style="width: 70px;" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span></p></td><td><input style="width:30px; outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)
    cartTotal()
    deleteCart()
}
// 
function cartTotal() {
  var cartItem = document.querySelectorAll("tbody tr")
  var totalC = 0
  // console.log(cartitem.length)
  for (var i = 0; i < cartItem.length; i++) {
  // console.log(i)
  var inputValue = cartItem[i].querySelector("input").value
  // console.log(inputValue)
  var productPrice = cartItem[i].querySelector(".prices").innerHTML
  // console.log(productPrice)
  newsProductPrice = productPrice.split('.').join('')
  totalA = inputValue * newsProductPrice

  totalC = totalC + totalA
  // totalD = totalC.toLocaleString('de-DE')
  }
  var cartTotalA = document.querySelector('.price-total span')
  var cartPrice = document.querySelector('.cart-icon span')
  cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
  cartPrice.innerHTML = totalC.toLocaleString('de-DE')
  // console.log(cartTotalA)
  inputChange()
}

function deleteCart() {
  var cartItem = document.querySelectorAll("tbody tr")
  for (var i = 0; i < cartItem.length; i++) {
    var productT = document.querySelectorAll(".cart-delete")
    productT[i].addEventListener("click", function(event){
      var cartDelete = event.target
      var cartitemC = cartDelete.parentElement.parentElement
      cartitemC.remove()
      cartTotal()
      // console.log(cartitemC)
    })
  }
}

function inputChange() {
  var cartItem = document.querySelectorAll("tbody tr")
  for (var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector("input")
    inputValue.addEventListener("change", function(){
      cartTotal()
    })
  }
}

const cartbtn = document.querySelector(".fa-xmark")
const cartshow = document.querySelector(".fa-cart-shopping")
cartshow.addEventListener("click", function(){
  console.log(cartshow)
  document.querySelector(".cart").style.right = "0"
})

cartbtn.addEventListener("click", function(){
  console.log(cartshow)
  document.querySelector(".cart").style.right = "-100%"
})