function getURLParameter(url, name) {return (RegExp(name + '=' + '(.+?)(&|$)').exec(url) || [, null])[1];}

$(document).ready(() => {

	var url = window.location.href
	var alimento = getURLParameter(url, 'alimento');
	var caloria = getURLParameter(url, 'caloria');
	var grasa = getURLParameter(url, 'grasa');
	var proteina = getURLParameter(url, 'proteina');
	var carbohidrato = getURLParameter(url, 'carbohidrato');
	var menu = getURLParameter(url, 'menu');

	$('#ali').text(alimento);
	$('#cal').text(caloria);
	$('#gra').text(grasa);
	$('#pro').text(proteina);
	$('#car').text(carbohidrato);

if(menu=="0"){
 $("#bien").hide();
}
else{
    $("#mal").hide();
};
})
