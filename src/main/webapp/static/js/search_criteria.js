//search criteria js
$(document).on('click', "#criteria_modal", function(){
$('#loader').removeClass('d-none');
$.ajax({
    'url': '/dashboard/search-criteria',
    'type': 'GET',
    success: function(msg)
    {
        $("#searchCriteria").html(msg);
        $("#searchCriteria").modal("toggle");
        $('#loader').addClass('d-none');
    }
});
});
$(document).on('click', "#criteria_submit", function(){
if($('#step2-form').valid()){
    $('#loader').removeClass('d-none');
    $('#step2-form').submit();
 }
});
