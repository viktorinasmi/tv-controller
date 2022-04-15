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

// Основной фон
var view = document.getElementById("view")

// Фон кружочка
var viewCircle = document.getElementById("view-circle")

var defaultBackgroundColors = {
    view: getBackgroundColorValue(view),
    viewCircle: getBackgroundColorValue(viewCircle)
}

console.log(defaultBackgroundColors)

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
    backgroundStyling(circleBackgroundColors, viewCircle)
})

buttonArrowLeft.addEventListener("click", function (){
    console.log("Вы нажали влево")
    backgroundStyling(bodyBackgroundColors, view)
})

buttonCenter.addEventListener("click", function (){
    console.log("Вы нажали на  ОК")
   //TODO: реализовать изменение фонов на начальное значение
    // backgroundStyling()
})

buttonArrowRight.addEventListener("click", function (){
    console.log("Вы нажали вправо")
    backgroundStyling(bodyBackgroundColors,view )
})

buttonArrowBotton.addEventListener("click", function (){
    console.log("Вы нажали вниз")
    backgroundStyling(circleBackgroundColors, viewCircle)
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

var bodyBackgroundColors = [
    "rgb(79, 80, 81)",
    "rgb(109, 106, 184)",
    "rgb(117, 117, 133)",
    "rgb(94, 82, 69)",
    "rgb(133, 122, 117)"
]

var circleBackgroundColors = [
    "rgba(19, 20, 22, 1)",
    "rgba(95, 97, 99, 1)",
    "rgba(76, 84, 99, 1)",
    "rgba(99, 89, 66, 1)",
    "rgba(23, 22, 20, 1)"
]


function backgroundStyling(arrayOfColors, element) {
    var rand = Math.floor(Math.random() * arrayOfColors.length); //0-5
    // var style = getComputedStyle(buttonPower)
    element.style.backgroundColor = arrayOfColors[rand]
}

function getBackgroundColorValue(element){
    var style = getComputedStyle(element)
    return style.backgroundColor
}
