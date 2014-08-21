$(function(){
	$("#date_1").datepicker();
	$("#date_2").datepicker({
		//navigationAsDateFormat: true,
		dateFormat: 'yy年mm月dd日'
	});
	$("#date_3").datepicker({
		minDate: -30,
		maxDate: 0
	});
	$("#date_4").datepicker({
		altField: "#alternate",
		altFormat: "yy年MMd日,DD"
	});
	$("#datepicker").datepicker({
		showOtherMonths: true,
		selectOtherMonths: false
	});
	$("#date_6").datepicker({
		showWeek: true
	});
	$("#date_7").datepicker({
		numberOfMonths: 3,
		showButtonPanel: true
	});
	$("#date_8").datepicker({
		showOn: "button",
		buttonImage: "images/calendar.gif",
		buttonImageOnly: true
	});
	$("#date_9").datepicker({
		onSelect: function(dateText,inst){
			alert("您选择的日期是："+dateText)
		}
	});
});