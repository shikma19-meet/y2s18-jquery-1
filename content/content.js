// Write all your JavaScript and JQuery code in this file! :)
var number =0;
$("#counter").on("click", function () 
{
	number++;
    $("#counting").html(number);

});
$("#reset").on("click",function()
{
	number =0;
	$("#counting").html(number);

})

