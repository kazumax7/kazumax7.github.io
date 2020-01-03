const runSource = function(){
	let source = document.getElementById("source").value.toString();
	let result = "";
	
	try{
		result = eval(source);
	}catch(error){
		result = error.toString();
	}
	
	document.getElementById("result").value = result;
}