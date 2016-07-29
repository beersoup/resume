$(function() {
	$.ajax({
		url: 'education.php',
		dataType: 'json',
		type: 'get',
		
		success: function(data) {
			addEduction(data);
		}
	});

}); 

function addEduction(data) {
	console.log('Education JSON: ', data);
	$.each(data, function(key, value) {
		console.log("Education ", value);

		$("#education").append("<li><div class='year pull-left'>"+value.year+"</div><div class='description pull-right'><h3>"+value.head_description+"</h3><p>"+value.description+"</p></div></li>");	

	})

	
}


