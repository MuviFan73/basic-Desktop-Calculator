function insert(num) {
    //The val() method returns or sets the value attribute of the selected elements.
    $('.calc-display').val($('.calc-display').val() + num)
}

function eql() {
    //The eval() function evaluates or executes an argument
    $('.calc-display').val(eval($('.calc-display').val()))
}

function c() {
    //clears calc-display
    $('.calc-display').val('')
}
