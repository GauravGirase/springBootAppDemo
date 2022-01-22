$("#id_state").select2({
        placeholder: "Select",
        closeOnSelect: false,
        dropdownParent: $(".statesDropDown"),
      });

 $("#id_zip_code").select2({
        placeholder: "Select",
        closeOnSelect: false,
        dropdownParent: $(".zipcodeDropDown"),
      });
 $("#areasDropDown").select2({
        placeholder: "Select",
        closeOnSelect: false,
        dropdownParent: $(".areasDropDown"),
      });
function add_area(data){
    $.ajax({
    'url': '/utility/get_cities',
    'data': {'state': data},
    'type': 'GET',
    success: function (resp) {
        $('#area_state').show()
        for(val in resp){
        if ($("#areasDropDown option[data-val='"+resp[val]+"']").length == 0){
            $("#areasDropDown").append("<option data-val='"+resp[val] + "'>"+resp[val] + "</option>");
            }
        }
     }
    });
}
function add_zip(data, obj, is_delete=0){
    $("#id_zip_code option[value='Select All']").prop("selected", false);
    $.ajax({
    'url': '/utility/get_zipcode',
    'data': {'area': data, 'type': obj},
    'type': 'GET',
    success: function (resp) {
        $('#zip_state').show();
        for(val in resp){
            if(is_delete==0){
                $("#id_zip_code option[data-val='"+resp[val]+"']").remove();
                $("#all_zip_codes option[data-val='"+resp[val]+"']").remove();
                 $("#id_zip_code").append("<option data-val='"+resp[val] + "'>"+resp[val] + "</option>");
                $("#all_zip_codes").append("<option selected data-val='"+resp[val] + "'>"+resp[val] + "</option>");

             }
             if($("#id_zip_code option[data-val='"+resp[val]+"']").length==0){
                 $("#id_zip_code").append("<option data-val='"+resp[val] + "'>"+resp[val] + "</option>");
                 $("#all_zip_codes").append("<option selected data-val='"+resp[val] + "'>"+resp[val] + "</option>");

             }

        }

        if($("#id_zip_code option:selected").length>0){
            if($("#id_zip_code option").length-1 == $("#id_zip_code option:selected").length)
                {
                    $("#id_zip_code option[value='Select All']").prop("selected", "selected");
                    $("#id_zip_code").trigger('change');
                }

        }
     }
    });
}
function remove_area(data){
     $("#areasDropDown option[value='Select All']").prop("selected", false);
    $.ajax({
    'url': '/utility/get_cities',
    'data': {'state': data},
    'type': 'GET',
    success: function (resp) {
        for(val in resp){
            $("#areasDropDown option[data-val='"+resp[val]+"']").remove();
        }
        if($("#areasDropDown option").length<1){
        //$("#area_state").hide();
        }
        if($("#areasDropDown option:selected").length>0){
            if($("#areasDropDown option").length-1 == $("#areasDropDown option:selected").length)
                {
                    $("#areasDropDown option[value='Select All']").prop("selected", "selected");
                    $("#areasDropDown").trigger('change');
                }

        }
     }
    });
}
function remove_zip(data, obj, is_delete=0){
    $.ajax({
    'url': '/utility/get_zipcode',
    'data': {'area': data, 'type': obj},
    'type': 'GET',
    success: function (resp) {
        for(val in resp){
            $("#id_zip_code option[data-val='"+resp[val]+"']").remove();
            if(is_delete == 1){
                $("#all_zip_codes option[data-val='"+resp[val]+"']").remove();
            }
        }

            $("#id_zip_code option[value='Select All']").prop("selected", false);
            $("#id_zip_code").trigger('change');
     }
    });
}

function select_all(){
    var selectedItems = [];
      var data = ''
    var allOptions = $("#id_state option");
                allOptions.each(function() {
                    selectedItems.push( $(this).val() );
                    data = $(this).val()
                    if(data!='Select All'){
                        add_area(data);
                        add_zip(data, 'state');
                    }
                });
                $("#id_state").val(selectedItems).trigger("change");
}

function deselect_all(){
    var selectedItems = [];
      var data = ''
    var allOptions = $("#id_state option");
            allOptions.each(function() {
                selectedItems.pop( $(this).val() );
                data = $(this).val()
                if(data!='Select All'){
                    remove_area(data);
                    remove_zip(data, 'state', 1);
                }
            });
            $("#id_state").val(selectedItems).trigger("change");
}
function remove_all_zip(){
    var allOptions = $("#id_state option");
            allOptions.each(function() {
                data = $(this).val()
                if(data.text!='Select All'){
                    remove_zip(data, 'state');
                 }
            });
}
function add_all_zip(){
    var allOptions = $("#id_state option:selected");
            allOptions.each(function() {
                data = $(this).val()
                if(data.text!='Select All'){
                    add_zip(data, 'state');
                }
            });
}

function area_select_all(){
    var selectedItems = [];
      var data = ''
    var allOptions = $("#areasDropDown option");
                allOptions.each(function() {
                    selectedItems.push( $(this).val() );
                    data = $(this).val()
                    if(data!='Select All'){
                        add_zip(data, 'area');
                    }
                });
                $("#areasDropDown").val(selectedItems).trigger("change");
}
function area_deselect_all(){
    var selectedItems = [];
      var data = ''
    var allOptions = $("#areasDropDown option");
            allOptions.each(function() {
                selectedItems.pop( $(this).val() );
                data = $(this).val()
                if(data!='Select All'){
                    remove_zip(data, 'area');
                }
            });
            $("#areasDropDown").val(selectedItems).trigger("change");
}

function zip_select_all(){
    var selectedItems = [];
      var data = ''
    var allOptions = $("#id_zip_code option");
                allOptions.each(function() {
                    selectedItems.push( $(this).val() );
                    data = $(this).val()
                });
                $("#id_zip_code").val(selectedItems).trigger("change");
}
function zip_deselect_all(){
    var selectedItems = [];
      var data = ''
    var allOptions = $("#id_zip_code option");
            allOptions.each(function() {
                selectedItems.pop( $(this).val() );
                data = $(this).val()
            });
            $("#id_zip_code").val(selectedItems).trigger("change");
}



$('#id_state').on('select2:select', function (e) {
    $(this).parent().parent().removeClass("error");
    var data = e.params.data;
    if(data.text!='Select All'){
        add_area(data.text);
        add_zip(data.text, 'state')
    }else{
         $('#id_state').select2("close");
        select_all();
    }
    if($("#id_state option").length-1 == $("#id_state option:selected").length)
    {
        $("#id_state option[value='Select All']").prop("selected", "selected");
        $("#id_state").trigger('change');
    }
});
$('#id_state').on('select2:unselecting', function (e) {
    var data = e.params.args.data;
    if(data.text!='Select All'){
        remove_area(data.text);
        remove_zip(data.text, 'state', 1);
    }else{
        $('#id_state').select2("close");
        deselect_all();
    }

    $("#id_state option[value='Select All']:selected").prop("selected",false);
     $("#id_state").trigger('change');
});


$('#areasDropDown').on('select2:select', function (e) {
    $(this).parent().parent().removeClass("error");
    var data = e.params.data;
    if($("#areasDropDown option:selected").length==1){
     remove_all_zip();
     }

    if(data.text!='Select All' && $("#areasDropDown option[value='Select All']:selected").length == 0){
        add_zip(data.text, 'area');
    }else{
        $('#areasDropDown').select2("close");
        console.log('here');
        area_select_all();
    }
    if($("#areasDropDown option").length-1 == $("#areasDropDown option:selected").length)
    {
        $("#areasDropDown option[value='Select All']").prop("selected", "selected");
        $("#areasDropDown").trigger('change');
    }
});
$('#areasDropDown').on('select2:unselecting', function (e) {
    var data = e.params.args.data;

    if(data.text == 'Select All'){
        $('#areasDropDown').select2("close");
    }
    if(data.text!='Select All' && $("#areasDropDown option[value='Select All']:selected").length == 0){
        remove_zip(data.text, 'area');
    }else if(data.text!='Select All' && $("#areasDropDown option[value='Select All']:selected").length == 1){
        remove_zip(data.text, 'area');
    }else{
        area_deselect_all()
    }
    if($("#areasDropDown option:selected").length==1 || data.text=='Select All'){
        add_all_zip();
    }
     $("#areasDropDown option[value='Select All']:selected").prop("selected",false);
     $("#areasDropDown").trigger('change');
});

$('#id_zip_code').on('select2:select', function (e) {
    $(this).parent().parent().removeClass("error");
    var data = e.params.data;
    if(data.text=='Select All'){
        $('#id_zip_code').select2("close");
        zip_select_all();
    }
    if($("#id_zip_code option").length-1 == $("#id_zip_code option:selected").length)
    {
        $("#id_zip_code option[value='Select All']").prop("selected", "selected");
        $("#id_zip_code").trigger('change');
    }
});
$('#id_zip_code').on('select2:unselecting', function (e) {
    var data = e.params.args.data;
   if(data.text=='Select All'){
        $('#id_zip_code').select2("close");
        zip_deselect_all();
    }
    $("#id_zip_code option[value='Select All']:selected").prop("selected",false);
     $("#id_zip_code").trigger('change');
});


if($("#id_state option:selected").length>0){
    $("#id_state option:selected").each(function () {
       var $this = $(this);
       if ($this.length) {
        var data = $this.text();
        add_area(data);
        if($("#areasDropDown option:selected").length == 0){
            add_zip(data, 'state', 1);
         }
       }
    });
    if($("#id_state option").length-1 == $("#id_state option:selected").length)
    {
        $("#id_state option[value='Select All']").prop("selected", "selected");
        $("#id_state").trigger('change');
    }
}


if($("#areasDropDown option:selected").length>0){
    $("#areasDropDown option:selected").each(function () {
       var $this = $(this);
       if ($this.length) {
        var data = $this.text();
        add_zip(data, 'area', 1);
       }
    });
    if($("#areasDropDown option").length-1 == $("#areasDropDown option:selected").length)
    {
        $("#areasDropDown option[value='Select All']").prop("selected", "selected");
        $("#areasDropDown").trigger('change');
    }

}


setTimeout(function(){
$(".alert").removeClass('show');
}, 5000);



$('#step2-form').validate({
		rules: {
			'state': {
				required: true,
			},
			'cap_caprateother':{
			    required: {
			    depends: function(element) {
                    return $("#lowestcaprate option:selected").attr('id') == 'caprate_other';
                    }
			    }
			},
			'cap_cashflowother':{
			    required: {
			    depends: function(element) {
                    return $("#lowestcashflow option:selected").attr('id') == 'capflow_other';
                    }
			    }
			},
			'cash_cashoncashother':{
			    required: {
			    depends: function(element) {
                    return $("#lowestcashoncash option:selected").attr('id') == 'cash_other';
                    }
			    }
			},
			'cash_cashflowother':{
			    required: {
			    depends: function(element) {
                    return $("#lowestcashflow1 option:selected").attr('id') == 'capflow_other1';
                    }
			    }
			},
			'annual_cashflowother':{
			    required: {
			    depends: function(element) {
                    return $("#lowestcashflow2 option:selected").attr('id') == 'capflow_other2';
                    }
			    }
			}
		},
		messages: {
		state: {
		    required: 'Mandatory',
		},
        cap_caprateother: {
            required: 'Mandatory',
            max: "Value cannot be greater than 99"
        },
        cap_cashflowother: {
            required: 'Mandatory',
            max: "Value cannot be greater than 999999"
        },
        cash_cashoncashother: {
            required: 'Mandatory',
            max: "Value cannot be greater than 999"
        },
        cash_cashflowother: {
            required: 'Mandatory',
            max: "Value cannot be greater than 999999"
        },
         annual_cashflowother: {
            required: 'Mandatory',
            max: "Value cannot be greater than 999999"
        },
    },
    errorElement : 'span',
		errorPlacement: function(error, element) {
            if (element[0].name == 'state'){
                element.parent().parent().addClass('error');
                element.parent().parent().find('.input-field-error').append(error);
            }else{
                element.parent().addClass('error');
                element.parent().find('.input-field-error').append(error)
            }
		}
}
);
 $(document).on('keyup', "input[type=number]", function(){
        if($('#step2-form').valid()){
            $(this).parent().removeClass('error');
        }else{
             $(this).parent().addClass('error');
        }
    });