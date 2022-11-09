$(function(){
  $('#switcher').on('change', function(){
    var isChecked = $(this).is(':checked');
    //$.weui.alert('开关状态：' + isChecked);
    console.log('开关状态：' + isChecked);
  });
});