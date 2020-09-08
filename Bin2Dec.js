// App to convert binary number to decimal
//alert("hello")
function convert2Decimal(binImput){
    console.log(binImput)
    binImput = binImput.split('')
    binImput = binImput.reverse()
    console.log(binImput)
    binImput.forEach(element => {
        console.log(element)
    });
}
convert2Decimal("1010")