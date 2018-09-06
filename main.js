let entries = [];
let total = 0;
let pressNums ="";//number added not just once added 

// function for click the button on the calculator
$('button').click(function(){
    //declare variable pressedbutton and equal to the buttonvalue.
    let buttonClick = this.innerHTML
    //checking which button I've clicked and it's correct
    console.log('you clicked', buttonClick)
    //show the value I clicked on the input #display 
    let value = buttonClick.toString();// same as $(this).text() but not sure about $(this) as yet
    if(!isNaN(value) || value === '.'){
        pressNums += value;
        $('#display').val(pressNums);
    }else if ( value === 'AC'){
        entries = [];
        total = 0;
        pressNums = "";
        $('#display').val('');
    }else if ( value === 'CE'){
        $('#display').val(pressNums.substring(0,pressNums.length-1)); // minus 1 from string but still only one 
    }
    console.log(value)
});

