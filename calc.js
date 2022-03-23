/*
    TODO:
 */

let wrapper = document.getElementById("wrapper");
let inOut = document.getElementById("inOut");
let result = 0;

wrapper.addEventListener("click", event => {

    if (event.target.id === "clear") {
        clear();
    } else if (event.target.id === "btnEq") {
        calculate(inOut.value);
    } else if (event.target.id === "numBtn") {
        if (result.toString() === inOut.value) {
            clear();
        }
        addToInput(event.target.innerHTML);
    } else if (event.target.id === "opperator") {
        addToInput(event.target.innerHTML);
    }
})

function clear() {
    inOut.value = null;
}

function calculate(numStr) {
    result = eval(numStr);
    inOut.value = result;
}

function addToInput(num) {
    inOut.value += num;

}