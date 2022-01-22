$('input[name=financeassistance]').change(function() {
     if(this.value == 'No') {
        $('.hide_all').hide();
     }else{
        $('.hide_all').show();
     }
});
if($('input[name=financeassistance]:checked').val() == 'No'){
    $('.hide_all').hide();
}