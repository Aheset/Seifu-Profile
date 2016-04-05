function write_name()

{

	var welcome_para = document.getElementById('welcome');
	var name=document.getElementById('name');

	welcome_para.innerHTML = "Thank you " + name.value;

}