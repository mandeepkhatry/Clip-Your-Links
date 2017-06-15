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
  	document.getElementById('')
	//Clicking on a "Submit" button, prevent it from submitting a form so It works get printed but not submitted so it holds
	event.preventDefault();

});
