# State-and-cities-display-using-JAVASCRIPT

#Select State then city will be enabled
    <p id="Country_State">
    <p id="Country_City">

    <form>
        <select onchange="city('state', this.selectedIndex);" id="status" name ="start" class="form-control" required></select>
        <select id ="state" class="form-control" required></select><br><br>

        <button type="button" onclick="To_Conform_Location()">To Conform Location</button>
    </form>




#Function to display state and city
    <script language="javascript">
        state("status");
        function To_Conform_Location()
        {
            var C_STATE = document.getElementById("status");
            var display_state = C_STATE.options[C_STATE.selectedIndex].text;
            document.getElementById("Country_State").innerHTML = "State : " + display_state;

            var C_STATE = document.getElementById("state");
            var display_city = C_STATE.options[C_STATE.selectedIndex].text;
            document.getElementById("Country_City").innerHTML = "City : " + display_city;
        }
    </script>






#Javascript code :
var state_array = new Array("Andaman & Nicobar", "Delhi");

var city_array = new Array();
city_array[0]="";
city_array[1]=" Andaman Island | Nicobar Island | North Brother Island | Passage Island | Spike Island";
city_array[2]=" Central Delhi | East Delhi | New Delhi | North Delhi | South Delhi | West Delhi ";

#Function for state :
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

#Function for city :
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
