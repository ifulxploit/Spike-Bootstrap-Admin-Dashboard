// Date Picker
jQuery(".mydatepicker, #datepicker, .input-group.date").datepicker();
jQuery("#datepicker-autoclose").datepicker({
  autoclose: true,
  todayHighlight: true,
});
jQuery("#date-range").datepicker({
  toggleActive: true,
});
jQuery("#datepicker-inline").datepicker({
  todayHighlight: true,
});
