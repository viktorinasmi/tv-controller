console.log("Файл загрузился");

let buttonElements = {
    buttonPower: document.getElementById("btn-power"),  // Кнопка влючения/выключения
    buttonArrowTop: document.getElementById("btn-arrow-top"), // Кнопка вверх
    buttonArrowLeft: document.getElementById("btn-arrow-left"), // Кнопка влево
    buttonCenter: document.getElementById("btn-center"), // Кнопка ОК
    buttonArrowRight: document. getElementById("btn-arrow-right"), // Кнопка вправо
    buttonArrowBottom: document.getElementById("btn-arrow-bottom"), // Кнопка вниз
    buttonMainBack: document.getElementById("btn-main-back"), //Кнопка назад
    buttonMainSearch: document.getElementById("btn-main-search"), //Кнопка поиск
    buttonMainSetting: document.getElementById("btn-main-setting"), //Кнопка настройки
    buttonMainVolumeOff: document.getElementById("btn-main-volume-off"), //Кнопка выключения звука
    buttonMainTurnup: document.getElementById("btn-main-turnup"), //Кнопка прибавление звука
    buttonMainTurndown: document.getElementById("btn-main-turndown"), //Кнопка убавления звука
    buttonMenuSizeDown:document.getElementById("btn-menu-view-size-down"), // Кнопка уменьшения пульта
    buttonMenuSizeUp:document.getElementById("btn-menu-view-size-up"), //Кнопка увеличения пульта
    buttonMenuSizeCircleDown:document.getElementById("btn-menu-circle-size-down"), //Кнопка уменьшения подложки
    buttonMenuSizeCircleUp:document.getElementById("btn-menu-circle-size-up"), //Кнопка увеличения подложки
}


let mainElements = {
    view: document.getElementById("view"), // Основной фон
    viewCircle: document.getElementById("view-circle"), // Фон кружочка
    viewMenu: document.getElementById("view-menu"), // Появление меню
    viewControls: document.getElementById("view-controls"), // Блок с громкостью
    volume: document.getElementById("volume"), //Блок громкости
    volumeBar: document.getElementById("volume-bar"), // Полоска громкости

}

let defaultBackgroundColors = {
    view: getBackgroundColorValue(mainElements.view),
    viewCircle: getBackgroundColorValue(mainElements.viewCircle)
}

console.log(defaultBackgroundColors)

buttonElements.buttonPower.addEventListener("click", function (){
    let style = getComputedStyle(buttonElements.buttonPower),
        red = "rgb(245, 75, 61)",
        green = "rgb(51, 211, 76)",
        redShadow = "rgb(245, 75, 61) 0px 0px 8px 2px",
        greenShadow = "rgb(51, 211, 76) 0px 0px 8px 2px";

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
    pressMenu()
})

buttonElements.buttonMainVolumeOff.addEventListener("click", function (){
    console.log("Вы выключили звук")
    volumeControls("volume-off")
    showVolumeControls()
})

buttonElements.buttonMainTurnup.addEventListener("click", function (){
    console.log("Вы прибавили звук")
    volumeControls("volume-up")
    showVolumeControls()
})

buttonElements.buttonMainTurndown.addEventListener("click", function (){
    console.log("Вы убавили звук")
    volumeControls("volume-down")
    showVolumeControls()
})

buttonElements.buttonMenuSizeDown.addEventListener("click",function (){
    console.log("Уменьшить пульт")
    changeElementScaleSize("-",mainElements.view)
})
buttonElements.buttonMenuSizeUp.addEventListener("click",function (){
    console.log("Увеличить пульт")
    changeElementScaleSize("+",mainElements.view)
})

buttonElements.buttonMenuSizeCircleDown.addEventListener("click", function (){
    console.log("Уменьшить подложку")
    changeElementScaleSize("-",mainElements.viewCircle)
})

buttonElements.buttonMenuSizeCircleUp.addEventListener("click", function (){
    console.log("Увеличить подложку")
    changeElementScaleSize("+",mainElements.viewCircle)
})

let bodyBackgroundColors = [
    "rgb(79, 80, 81)",
    "rgb(109, 106, 184)",
    "rgb(117, 117, 133)",
    "rgb(94, 82, 69)",
    "rgb(133, 122, 117)"
]

let circleBackgroundColors = [
    "rgba(19, 20, 22, 1)",
    "rgba(95, 97, 99, 1)",
    "rgba(76, 84, 99, 1)",
    "rgba(99, 89, 66, 1)",
    "rgba(23, 22, 20, 1)"
]

// Функция принимает массив цветов и перекрашивает фон у элемента
function backgroundStyling(arrayOfColors, element) {
    let rand = Math.floor(Math.random() * arrayOfColors.length); //0-5
    element.style.backgroundColor = arrayOfColors[rand]
}

// Получаем элемент и возвращаем значение backgroundColor у элемента
function getBackgroundColorValue(element){
    let style = getComputedStyle(element)
    return style.backgroundColor
}
// Изменяет значение полоски громкости
function volumeControls(type){
    let volumeBlockHeight = parseInt(getComputedStyle(mainElements.volume).height) //"140px" 140 - 100%
    let volumeBarHeight = parseInt(getComputedStyle(mainElements.volumeBar).height) //"42px" 42 - x%
    let x = volumeBarHeight * 100 / volumeBlockHeight

    const step = 10 // шаг громкости
    if (type === "volume-up"){
        x = x+step > 100 ? 100 : x+step; //бинарный оператор
    }
    if (type === "volume-down"){
        x -=step;
    }
    if (type === "volume-off"){
        x = 0
    }

    mainElements.volumeBar.style.height = x +"%"
}

function showVolumeControls(){
    mainElements.viewControls.style.opacity = "1";
    mainElements.viewControls.style.visibility = "visible";
    setTimeout(function (){
        mainElements.viewControls.style.opacity = "0";
        mainElements.viewControls.style.visibility = "hidden";
    }, 2000)
}

function pressMenu(){
    const viewMenuOpacity = getComputedStyle(mainElements.viewMenu).opacity

    if (viewMenuOpacity === "0"){
        mainElements.viewMenu.style.opacity = "1";
        mainElements.viewMenu.style.visibility = "visible";
    } else {
        mainElements.viewMenu.style.opacity = "0";
        mainElements.viewMenu.style.visibility = "hidden";
    }
}

function changeElementScaleSize(action,element){
    // var viewTransformScale = element.style.transform;
    // var result = viewTransformScale === "" ? 1 : viewTransformScale
    let viewTransformScale = element.style.transform || "scale(1)";
    let result = parseFloat(viewTransformScale.replace("scale(", ""))

    // if (typeof result === "string") {
    //     result = parseFloat(result.replace("scale(", ""))
    // }
    console.log(result)

    let step =0.25
    if (action ==="+"){
        result += step;
    } else {
        result -=step;
    }

    element.style.transform = `scale(${result})`
}




