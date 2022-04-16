console.log("Файл загрузился");

var buttonElements = {
    buttonPower: document.getElementById("btn-power"),  // Кнопка влючения/выключения
    buttonArrowTop: document.getElementById("btn-arrow-top"), // Кнопка вверх
    buttonArrowLeft: document.getElementById("btn-arrow-left"), // Кнопка влево
    buttonCenter: document.getElementById("btn-center"), // Кнопка ОК
    buttonArrowRight: document. getElementById("btn-arrow-right"), // Кнопка вправо
    buttonArrowBottom: document.getElementById("btn-arrow-bottom"), // Кнопка вниз
    buttonMainBack: document.getElementById("btn-main-back"), //Кнопка назад
    buttonMainSearch: document.getElementById("btn-main-search"), //Кнопка поиск
    buttonMainSetting: document.getElementById("btn-main-setting"), //Кнопка настройки
    buttonMainVoice: document.getElementById("btn-main-voice"), //Кнопка микрофон
    buttonMainTurnup: document.getElementById("btn-main-turnup"), //Кнопка прибавление звука
    buttonMainTurndown: document.getElementById("btn-main-turndown"), //Кнопка убавления звука
}


var mainElements = {
    view: document.getElementById("view"), // Основной фон
    viewCircle: document.getElementById("view-circle"), // Фон кружочка
}

var defaultBackgroundColors = {
    view: getBackgroundColorValue(mainElements.view),
    viewCircle: getBackgroundColorValue(mainElements.viewCircle)
}

console.log(defaultBackgroundColors)

buttonElements.buttonPower.addEventListener("click", function (){
    var style = getComputedStyle(buttonElements.buttonPower)
    var red = "rgb(245, 75, 61)"
    var green = "rgb(51, 211, 76)"
    var redShadow = "rgb(245, 75, 61) 0px 0px 8px 2px"
    var  greenShadow = "rgb(51, 211, 76) 0px 0px 8px 2px"

    buttonElements.buttonPower.style.backgroundColor = style.backgroundColor === red ? green : red;
    buttonElements.buttonPower.style.boxShadow = style.boxShadow === redShadow ? greenShadow : redShadow;

})

buttonElements.buttonArrowTop.addEventListener("click", function (){
    console.log("Вы нажали вверх")
    backgroundStyling(circleBackgroundColors, mainElements.viewCircle)
})

buttonElements.buttonArrowLeft.addEventListener("click", function (){
    console.log("Вы нажали влево")
    backgroundStyling(bodyBackgroundColors, mainElements.view)
})

buttonElements.buttonCenter.addEventListener("click", function (){
    console.log("Вы нажали на  ОК")

    backgroundStyling([defaultBackgroundColors.view], mainElements.view)
    backgroundStyling([defaultBackgroundColors.viewCircle], mainElements.viewCircle)
})

buttonElements.buttonArrowRight.addEventListener("click", function (){
    console.log("Вы нажали вправо")
    backgroundStyling(bodyBackgroundColors,mainElements.view )
})

buttonElements.buttonArrowBottom.addEventListener("click", function (){
    console.log("Вы нажали вниз")
    backgroundStyling(circleBackgroundColors, mainElements.viewCircle)
})

buttonElements.buttonMainBack.addEventListener("click",function (){
    console.log("Вы вернулись назад")
})

buttonElements.buttonMainSearch.addEventListener("click", function (){
    console.log("Вы нажали поиск")
})

buttonElements.buttonMainSetting.addEventListener("click", function (){
    console.log("Вы нажали настройки")
})

buttonElements.buttonMainVoice.addEventListener("click", function (){
    console.log("Вы нажали микрофон")
})

buttonElements.buttonMainTurnup.addEventListener("click", function (){
    console.log("Вы прибавили звук")
})

buttonElements.buttonMainTurndown.addEventListener("click", function (){
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

// Функция принимает массив цветов и перекрашивает фон у элемента
function backgroundStyling(arrayOfColors, element) {
    var rand = Math.floor(Math.random() * arrayOfColors.length); //0-5
    element.style.backgroundColor = arrayOfColors[rand]
}

// Получаем элемент и возвращаем значение backgroundColor у элемента
function getBackgroundColorValue(element){
    var style = getComputedStyle(element)
    return style.backgroundColor
}
