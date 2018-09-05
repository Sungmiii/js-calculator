let entries = [];
let total = 0;

let temp ="";
$('button').click(function(){
    console.log('you clicked', this.innerHTML)
    let value = $(this).text();
    if(!isNaN(value)||value==='.'){
        temp += value;
    $('#display').val(temp.substring(0,10));
    } else if (value === 'AC'){
        entries =[];
        temp ="";
        total =0;
    }
});

