// declare input display id to use easily
let display = $('#display')[0];

//function add number into the display input and added continuely
function insert(num) {
    display.value = display.value + num
};

//function operation from input value
function total() {
    let val = display.value;
    if(val){
        display.value = eval(val);
    }
}

// clear function
$('#clear').click(function(){
  $('#display').val('');
});

//back function
$('#remove').click(function(){
    let val = display.value;
    display.value = val.substring(0,val.length-1);
})






