function calculateTotalMortgage(percent, contribution, amount, date) {
    <input type='text' id="pointspossible"/>
<input type='text' id="pointsgiven" />
<input type='text' id="pointsperc" disabled/>
JavaScript :
    $(function(){
    $('#pointspossible').on('input', function() {
      calculate();
    });
    $('#pointsgiven').on('input', function() {
     calculate();
    });
    function calculate(){
        var pPos = parseInt($('#pointspossible').val()); 
        var pEarned = parseInt($('#pointsgiven').val());
        var perc="";
        if(isNaN(pPos) || isNaN(pEarned)){
            perc=" ";
           }else{
           perc = ((pEarned/pPos) * 100).toFixed(3);
           }
        $('#pointsperc').val(perc);
    }
});
    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}
