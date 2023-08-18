var date=new Date()
let display_date= "Date:" + date.toLocaleDateString() 

$(document).ready(function(){
    $("#display_date").html(display_date)

})