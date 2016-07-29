$(function() {
	$.ajax({
		url: 'skill.php',
		dataType: 'json',
		type: 'get',
		
		success: function(data) {
			addSkill(data);

		}
	});

}); 

function addSkill(data) { 
	console.log('Skill JSON: ', data);

	$.each(data, function(key, value) {
		console.log(value["data-percent"]);
		console.log("Skill ", value);

		var widthGet = getWidth(value["data-percent"]);	

		$(".skills").append("<div class='item-skills' data-percent='"+value['data-percent']+"' style='width:"+widthGet+"%;'>"+value.skill+"</div>");

	})

	
}

function getWidth(perc) {
	// return 458*perc;
	return perc*100;
}
console.log(getWidth(0.9));


