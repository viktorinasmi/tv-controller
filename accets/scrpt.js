console.log("Файл загрузился");
// Кнопка влючения/выключения
var buttonPower = document.getElementById("btn-power")

// Кнопка вверх
var buttonArrowTop = document.getElementById("btn-arrow-top")

// Кнопка влево
var buttonArrowLeft = document.getElementById("btn-arrow-left")

// Кнопка ОК
var buttonCenter =document.getElementById("btn-center")

// Кнопка вправо
var buttonArrowRight = document. getElementById("btn-arrow-right")

// Кнопка вниз
var buttonArrowBotton = document.getElementById("btn-arrow-bottom")

//Кнопка назад
var buttonMainBack = document.getElementById("btn-main-back")

//Кнопка поиск
var buttonMainSearch = document.getElementById("btn-main-search")

//Кнопка настройки
var buttonMainSetting = document.getElementById("btn-main-setting")

//Кнопка микрофон
var buttonMainVoice = document.getElementById("btn-main-voice")

//Кнопка прибавление звука
var buttonMainTurnup = document.getElementById("btn-main-turnup")

//Кнопка убавления звука
var buttonMainTurndown = document.getElementById("btn-main-turndown")

buttonPower.addEventListener("click", function (){
    var style = getComputedStyle(buttonPower)
    var red = "rgb(245, 75, 61)"
    var green = "rgb(51, 211, 76)"
    var redShadow = "rgb(245, 75, 61) 0px 0px 8px 2px"
    var  greenShadow = "rgb(51, 211, 76) 0px 0px 8px 2px"

    buttonPower.style.backgroundColor = style.backgroundColor === red ? green : red;
    buttonPower.style.boxShadow = style.boxShadow === redShadow ? greenShadow : redShadow;

})

buttonArrowTop.addEventListener("click", function (){
    console.log("Вы нажали вверх")
})

buttonArrowLeft.addEventListener("click", function (){
    console.log("Вы нажали влево")
})

buttonCenter.addEventListener("click", function (){
    console.log("Вы нажали на  ОК")
})

buttonArrowRight.addEventListener("click", function (){
    console.log("Вы нажали вправо")
})

buttonArrowBotton.addEventListener("click", function (){
    console.log("Вы нажали вниз")
})

buttonMainBack.addEventListener("click",function (){
    console.log("Вы вернулись назад")
})

buttonMainSearch.addEventListener("click", function (){
    console.log("Вы нажали поиск")
})

buttonMainSetting.addEventListener("click", function (){
    console.log("Вы нажали настройки")
})

buttonMainVoice.addEventListener("click", function (){
    console.log("Вы нажали микрофон")
})

buttonMainTurnup.addEventListener("click", function (){
    console.log("Вы прибавили звук")
})

buttonMainTurndown.addEventListener("click", function (){
    console.log("Вы убавили звук")
})