import URL from '../addon/url'

module.exports.post = function(url, data, success, error, obj ){
 	
 	$.ajax({
 		url: URL(url),
 		type: 'post',
 		data: data,
 		success: function(data){
 			if(data.status_code == 200){
				success(data);
			} else {
				error(data);

			}
 		},
 		error: function(data){
 			error(JSON.parse(data.responseText));
 		},
 		dataType: 'json'
 	})
	/*
	obj.$http.post(URL(url), data).then((response) => {
	    var data = response.json();
	     
		if(data.status_code == 200){
			success(data);
		} else {
			error(data);

		}
	}, (response) => {
	  	error(response.json())
	});
	*/
}