jQuery(function() {

$('#birth-result-side').hide();
$('#death-result-side').hide();


$('#submit-button').click(function(){
	if ($('#inlineRadioBirth').is(':checked')){
		$('#birth-result-side').show();
		$('#default-result-side').hide();
		$('#death-result-side').hide();

	} else if ($('#inlineRadioDeath').is(':checked')){

		$('#death-result-side').show();
		$('#birth-result-side').hide();
		$('#default-result-side').hide();
		$('#coffin').fadeIn();
	}
});

});
