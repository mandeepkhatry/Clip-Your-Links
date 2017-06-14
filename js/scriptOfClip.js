//document.getElementById('button').addEventListener('click', function(){alert("Hello");});
		
								//OR for button click and for form submit

document.getElementById('my-form').addEventListener('submit',links);
function links(e)
{
	var name = document.getElementById('name').value;
	var url = document.getElementById('url').value;

    var clipedLink = {
     	'name': name,
    	'url': url
  	}

//Clicking on a "Submit" button, prevent it from submitting a form so It works get printed but not submitted so it holds
	e.preventDefault();


}


