$(function() {
	$.ajax({
		url: 'experience.php',
		dataType: 'json',
		type: 'get',
		
		success: function(data) {
			addExperience(data);
		}
	});

}); 

function addExperience(data) {
	console.log('Experience JSON: ', data);
	$.each(data, function(key, value) {
		console.log("Experience ", value);

		$("#experience").append("<div class='job clearfix'><div class='col-xs-4'><div class='where'>"+value.place+"</div><div class='year'>"+value.year+"</div></div><div class='col-xs-8'><div class='profession'>"+value.position+"</div><div class='description'>"+value.job_description+"</div></div></div>");	

	})

	
}


