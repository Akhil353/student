<html>

<head>
<head>
<style>
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button2 {background-color: #e7e7e7; color: black;} /* Gray */ 
.button3 {background-color: #555555;} /* Black */
</style>
</head>
<body>


<center>
<button class="button button2" onclick=" window.open('https://app.slack.com/client/TUDAF53UJ/CUS8E3M6Z', '_blank'); return false;">AP CSP Slack</button>
<button class="button button3" onclick=" window.open('https://poway.instructure.com/courses/141645', '_blank'); return false;">Canvas Page</button>
</center>


</body>
	<title>JavaScript Calculator</title>
	<script src=
"https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.6.4/math.js"
		integrity=
"sha512-BbVEDjbqdN3Eow8+empLMrJlxXRj5nEitiCAK5A1pUr66+jLVejo3PmjIaucRnjlB0P9R3rBUs3g5jXc8ti+fQ=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"></script>
	<script src=
"https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.6.4/math.min.js"
		integrity=
"sha512-iphNRh6dPbeuPGIrQbCdbBF/qcqadKWLa35YPVfMZMHBSI6PLJh1om2xCTWhpVpmUyb4IvVS9iYnnYMkleVXLA=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"></script>
	<style>
		table {
			border: 1px solid black;
			margin-left: auto;
			margin-right: auto;
		}
		input[type="button"] {
			width: 100%;
			padding: 20px 40px;
			background-color: green;
			color: white;
			font-size: 24px;
			font-weight: bold;
			border: none;
			border-radius: 5px;
		}
		input[type="text"] {
			padding: 20px 30px;
			font-size: 24px;
			font-weight: bold;
			border: none;
			border-radius: 5px;
			border: 2px solid black;
		}
	</style>
</head>
	
<body>
	<!-- Use Table to Create Calculator Structure Design -->
	<table id="calcu">
		<tr>
			<td colspan="3"><input type="text" id="result"></td>
			<td><input type="button" value="c" onclick="clr()" /> </td>
		</tr>
		<tr>
			<td><input type="button" value="1" onclick="dis('1')"
						onkeydown="myFunction(event)"> </td>
			<td><input type="button" value="2" onclick="dis('2')"
						onkeydown="myFunction(event)"> </td>
			<td><input type="button" value="3" onclick="dis('3')"
						onkeydown="myFunction(event)"> </td>
			<td><input type="button" value="/" onclick="dis('/')"
						onkeydown="myFunction(event)"> </td>
		</tr>
		<tr>
			<td><input type="button" value="4" onclick="dis('4')"
						onkeydown="myFunction(event)"> </td>
			<td><input type="button" value="5" onclick="dis('5')"
						onkeydown="myFunction(event)"> </td>
			<td><input type="button" value="6" onclick="dis('6')"
						onkeydown="myFunction(event)"> </td>
			<td><input type="button" value="*" onclick="dis('*')"
						onkeydown="myFunction(event)"> </td>
		</tr>
		<tr>
			<td><input type="button" value="7" onclick="dis('7')"
						onkeydown="myFunction(event)"> </td>
			<td><input type="button" value="8" onclick="dis('8')"
						onkeydown="myFunction(event)"> </td>
			<td><input type="button" value="9" onclick="dis('9')"
						onkeydown="myFunction(event)"> </td>
			<td><input type="button" value="-" onclick="dis('-')"
						onkeydown="myFunction(event)"> </td>
		</tr>
		<tr>
			<td><input type="button" value="0" onclick="dis('0')"
						onkeydown="myFunction(event)"> </td>
			<td><input type="button" value="." onclick="dis('.')"
						onkeydown="myFunction(event)"> </td>
			<td><input type="button" value="=" onclick="solve()"> </td>
			<td><input type="button" value="+" onclick="dis('+')"
						onkeydown="myFunction(event)"> </td>
		</tr>
	</table>
	<script>
		// Function that display value
		function dis(val) {
			document.getElementById("result").value += val
		}
		function myFunction(event) {
			if (event.key == '0' || event.key == '1'
				|| event.key == '2' || event.key == '3'
				|| event.key == '4' || event.key == '5'
				|| event.key == '6' || event.key == '7'
				|| event.key == '8' || event.key == '9'
				|| event.key == '+' || event.key == '-'
				|| event.key == '*' || event.key == '/')
				document.getElementById("result").value += event.key;
		}
		var cal = document.getElementById("calcu");
		cal.onkeyup = function (event) {
			if (event.keyCode === 13) {
				console.log("Enter");
				let x = document.getElementById("result").value
				console.log(x);
				solve();
			}
		}
		// Function that evaluates the digit and return result
		function solve() {
			let x = document.getElementById("result").value
			let y = math.evaluate(x)
			document.getElementById("result").value = y
		}
		function clr() {
			document.getElementById("result").value = ""
		}
	</script>
</body>

</html>


<head>
    <!-- load jQuery and DataTables output style and scripts -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>var define = null;</script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
</head>

<!-- Body contains the contents of the Document -->
<body>
    <table id="demo" class="table">
        <thead>
            <tr>
                <th><span style="color: #02b2ed;">Map</span></th>
                <th><span style="color: #02b2ed;">Agent</span></th>
                <th><span style="color: #02b2ed;">K/D</span></th>
                <th><span style="color: #02b2ed;">Leaderboard Place</span></th>
                <th><span style="color: #02b2ed;">Win or Loss</span></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Split</td>
                <td>Jett</td>
                <td>0.7</td>
                <td>8th</td>
                <td>Loss</td>
            </tr>
            <tr>
                <td>Bind</td>
                <td>Jett</td>
                <td>0.9</td>
                <td>7th</td>
                <td>Win</td>
            </tr>
            <tr>
                <td>Ascent</td>
                <td>Jett</td>
                <td>0.6</td>
                <td>9th</td>
                <td>Loss</td>
            </tr>
            <tr>
                <td>Haven</td>
                <td>Jett</td>
                <td>1.2</td>
                <td>7th</td>
                <td>Win</td>
            </tr>
            <tr>
                <td>Haven</td>
                <td>Jett</td>
                <td>0.9</td>
                <td>3rd</td>
                <td>Loss</td>
            </tr>
            <tr>
                <td>Fracture</td>
                <td>Jett</td>
                <td>0.9</td>
                <td>6th</td>
                <td>Loss</td>
            </tr>
            <tr>
                <td>Ascent</td>
                <td>Jett</td>
                <td>1.1</td>
                <td>3rd</td>
                <td>Win</td>
            </tr>
            <tr>
                <td>Bind</td>
                <td>Jett</td>
                <td>0.8</td>
                <td>9th</td>
                <td>Win</td>
            </tr>
            <tr>
                <td>Ascent</td>
                <td>Jett</td>
                <td>1.1</td>
                <td>3rd</td>
                <td>Win</td>
            </tr>
            <tr>
                <td>Lotus</td>
                <td>Jett</td>
                <td>2.1</td>
                <td>1st</td>
                <td>Win</td>
            </tr>
            <tr>
                <td>Pearl</td>
                <td>Jett</td>
                <td>1.2</td>
                <td>9th</td>
                <td>Win</td>
            </tr>
        </tbody>
    </table>
</body>

<!-- Script is used to embed executable code -->
<script>
    $("#demo").DataTable();
</script>