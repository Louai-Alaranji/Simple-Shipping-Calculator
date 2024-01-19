function calculate(){
    const numberField = document.querySelector(".js-number-field");
    const sum = document.querySelector(".js-sum");

    var numberPattern = /^[0-9]+(\.[0-9]+)?$/;

    if(numberPattern.test(numberField.value) ){
        var inputValue = parseFloat(numberField.value);
        if(inputValue > 40){
            sum.innerText = inputValue;
        } else{
            sum.innerText = inputValue + 10;
        }
    } else{
        alert("enter a valid number!")
    }
}