
// Настройка кнопок
let pr = 0

function but1() {
	if (pr < 100) {
		pr = pr + 1;
		$(".progress-bar").css("width", pr+"%");
		$(".label").html(pr+"%");
		
	} 
	else
	{
		$(".label").html("Прогресс полон ");
	}
};

function but2() {
	if (pr < 100) {
		pr = pr + 3;
		$(".progress-bar").css("width", pr+"%");
		$(".label").html(pr+"%");
		
	} 
	else
	{
		$(".label").html("Прогресс полон ");
	}
};

function but3() {
	if (pr < 100) {
		pr = pr + 7;
		$(".progress-bar").css("width", pr+"%");
		$(".label").html(pr+"%");
		
	} 
	else
	{
		$(".label").html("Прогресс полон ");
	}
};


$("#button1").click(but1);
$("#button2").click(but2);
$("#button3").click(but3);


$(document).ready(init);