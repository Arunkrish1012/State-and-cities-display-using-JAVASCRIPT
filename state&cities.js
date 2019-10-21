var state_array = new Array("Andaman & Nicobar", "Delhi", "Goa",  "Kerala",  "Tamil Nadu", );

var city_array = new Array();
city_array[0]="";
city_array[1]=" Andaman Island | Nicobar Island | North Brother Island | Passage Island | Spike Island";
city_array[2]=" Central Delhi | East Delhi | New Delhi | North Delhi | South Delhi | West Delhi ";
city_array[3]=" Cortalim | Vasco Da Gama | Panji | Ponda | Sanvordem";
city_array[4]=" Ernakulam | Kochi | Kollam | Kovalam | Munnar | Thiruvananthapuram | Thrissur | Trivandrum";
city_array[5]=" Chennai | Coimbatore | Courtallam | Kodaikanal | Madurai | Ooty | Thoothukudi";

function state(state_id)
{
	var get_state = document.getElementById(state_id);
	get_state.length=0;
	get_state.options[0] = new Option('Select State','');
	get_state.selectedIndex = 0;
	for (var i=0; i<state_array.length; i++)
	{
		get_state.options[get_state.length] = new Option(state_array[i]);
	}
}

function city(city_id, city_index)
{
	var get_city = document.getElementById(city_id);
	get_city.length=0;
	get_city.options[0] = new Option('Select City','');
	get_city.selectedIndex = 0;
	var cities_array = city_array[city_index].split("|");
	for (var i=0; i<cities_array.length; i++)
	{
		get_city.options[get_city.length] = new Option(cities_array[i]);
	}
}