//Cap Rate
$('#id_evaluationtype').on('change', function(){
    if($("option:selected", this).attr('id') == 'eval_04'){
        annual_on_hide();
        cash_on_hide();
        $('.cap_rate_01').show();
        cap_rate_show();
     }else if ($("option:selected", this).attr('id') == 'eval_05'){
        annual_on_hide();
        cap_rate_hide();
        $('.cash_on_01').show();
        cash_on_show();
    }else if ($("option:selected", this).attr('id') == 'eval_06'){
        cap_rate_hide();
        cash_on_hide();
        $('.cash_on_02').show();
        annual_on_show();
    }else{
        cap_rate_hide();
        cash_on_hide();
        annual_on_hide();
    }
});
function cap_rate_show(){
    if($("#lowestcaprate option:selected").attr('id') == 'caprate_other'){
            $('.caprate_other').show();
            $('#caprateother').prop('disabled', false);
        }else{
            $('.caprate_other').hide();
            $('#caprateother').prop('disabled', true);
        }

        if($("#lowestcashflow option:selected").attr('id') == 'capflow_other'){
            $('.capflow_other').show();
            $('#cashflowother').prop('disabled', false);
        }else{
            $('.capflow_other').hide();
            $('#cashflowother').prop('disabled', true);
        }

        $('#lowestcaprate').prop('disabled', false);
        $('#lowestcashflow').prop('disabled', false);
}
function cap_rate_hide(){
    $('.cap_rate_01').hide();
    $('.caprate_other').hide();
    $('.capflow_other').hide();
    $('#cashflowother').prop('disabled', true);
    $('#caprateother').prop('disabled', true);
    $('#lowestcashflow').prop('disabled', true);
    $('#lowestcaprate').prop('disabled', true);

}
$('#lowestcaprate').on('change', function(){
    if($("option:selected", this).attr('id') == 'caprate_other'){
        $('.caprate_other').show();
        $('#caprateother').prop('disabled', false);
    }else{
        $('.caprate_other').hide();
        $('#caprateother').prop('disabled', true);
    }
});

$('#lowestcashflow').on('change', function(){
    if($("option:selected", this).attr('id') == 'capflow_other'){
        $('.capflow_other').show();
        $('#cashflowother').prop('disabled', false);
    }else{
        $('.capflow_other').hide();
        $('#cashflowother').prop('disabled', true);
    }
});
//Cap Rate Ends

//Cash on Cash
function cash_on_show(){
    if($("#lowestcashoncash option:selected").attr('id') == 'cash_other'){
            $('.cash_other').show();
            $('#cashoncashother').prop('disabled', false);
        }else{
            $('.cash_other').hide();
            $('#cashoncashother').prop('disabled', true);
        }

        if($("#lowestcashflow1 option:selected").attr('id') == 'capflow_other1'){
            $('.cashflow_01').show();
            $('#cashflowother1').prop('disabled', false);
        }else{
            $('.cashflow_01').hide();
            $('#cashflowother1').prop('disabled', true);
        }

         $('#lowestcashoncash').prop('disabled', false);
         $('#lowestcashflow1').prop('disabled', false);
}
function cash_on_hide(){
    $('.cash_other').hide();
    $('.cashflow_01').hide();
    $('.cash_on_01').hide();
     $('#cashoncashother').prop('disabled', true);
     $('#cashflowother1').prop('disabled', true);
     $('#lowestcashoncash').prop('disabled', true);
     $('#lowestcashflow1').prop('disabled', true);
}
$('#lowestcashoncash').on('change', function(){
    if($("option:selected", this).attr('id') == 'cash_other'){
            $('.cash_other').show();
            $('#cashoncashother').prop('disabled', false);
        }else{
            $('.cash_other').hide();
            $('#cashoncashother').prop('disabled', true);
        }
});

$('#lowestcashflow1').on('change', function(){
    if($("option:selected", this).attr('id')  == 'capflow_other1'){
            $('.cashflow_01').show();
            $('#cashflowother1').prop('disabled', false);
        }else{
            $('.cashflow_01').hide();
            $('#cashflowother1').prop('disabled', true);
        }
});
//Cash on Cash

// Annual Cash
function annual_on_show(){
        if($("#lowestcashflow2 option:selected").attr('id') == 'capflow_other2'){
            $('.cashflow_02').show();
            $('#cashflowother2').prop('disabled', false);
        }else{
            $('.cashflow_02').hide();
            $('#cashflowother2').prop('disabled', true);
        }
         $('#lowestcashflow2').prop('disabled', false);
}
function annual_on_hide(){
    $('.cash_on_02').hide();
    $('.cashflow_02').hide();
    $('#cashflowother2').prop('disabled', true);
    $('#lowestcashflow2').prop('disabled', true);
}
$('#lowestcashflow2').on('change', function(){
    if($("option:selected", this).attr('id')  == 'capflow_other2'){
            $('.cashflow_02').show();
             $('#cashflowother2').prop('disabled', false);
        }else{
            $('.cashflow_02').hide();
             $('#cashflowother2').prop('disabled', true);
        }
});
// Annual Cash

// On Page Load
if($("#id_evaluationtype option:selected").attr('id') == 'eval_04'){
        cash_on_hide();
        $('.cap_rate_01').show();
        cap_rate_show();
     }else if ($("#id_evaluationtype option:selected").attr('id') == 'eval_05'){
        cap_rate_hide();
        $('.cash_on_01').show();
        cash_on_show();
    }else if ($("#id_evaluationtype option:selected").attr('id') == 'eval_06'){
        cap_rate_hide();
        cash_on_hide();
        $('.cash_on_02').show();
        annual_on_show();
    }else{
        cap_rate_hide();
        cash_on_hide();
        annual_on_hide();
    }
