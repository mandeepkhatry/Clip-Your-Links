//document.getElementById('button').addEventListener('click', function(){alert("Hello");});
//OR for button click and for form submit

document.getElementById('my-form').addEventListener('submit',function(event){

	var name = document.getElementById('name').value;
	
	var url = document.getElementById('url').value;

    var clipped = {
     	Linkname: name,
    	Address: url
  	}

  	//local storage support strings only
  	if(localStorage.getItem('clippedLinks') === null){

    var info = [];

    info.push(clipped);

    // Set Item to local
    localStorage.setItem('clippedLinks', JSON.stringify(info));
  } else {

    // Getting  clippedLinks from localStorage
    var info = JSON.parse(localStorage.getItem('clippedLinks'));
    
    info.push(clipped);

    //set everything back
    localStorage.setItem('clippedLinks', JSON.stringify(info));
  }
  	window.location.reload();
	//Clicking on a "Submit" button, prevent it from submitting a form so It works get printed but not submitted so it holds
	event.preventDefault();

});

function all(){
	//JSON.parse(JSON string) -> object
	//JSON.parse(array of JSON sting) -> Array of objects
	// Converting to array of objects for applying methods like Address Linkname for further use
	var get = JSON.parse(localStorage.getItem('clippedLinks'));
	if(get!=null){
	var l = get.length;
	var i = null;
	document.getElementById('total').innerHTML = l;
	for(i=0;i<l;i++){
		var linkname = get[i].Linkname;
		var address = get[i].Address;

		var allClipped = document.getElementById('clipped-links');

		allClipped.innerHTML += 	'<h3>'+linkname+'</h3>'+
									'<a class="btn btn-default" href="'+address+'" target="_blank">Visit</button>'+
              						'<a class="btn btn-danger" onclick="removeItem()">Delete</button>';

	}		
	}		
}
function removeItem(){
	
}