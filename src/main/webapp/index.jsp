<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Aviation Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
		
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
			integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
			
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&key=AIzaSyCZ3WcxgrKPMz3HFRR76XjSAVHhKdiuFQg&libraries=geometry"></script>
		<!--  <script src="mapAircraft.js"></script>
		<script src="artcc.js"></script>-->
		
		<style>
			table, th, td {
				border: 1px solid black;
				border-collapse: collapse;
			}
			#map_canvas { height: 800px; width: 100%; }
			.top-buffer {
				margin-top: 20px;
			}
			
		</style>
  </head>
<body>

	<nav class="navbar navbar-inverse navbard-fixed-top">
		<div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Aviation Demo</a>
			</div>
		</div>
	</nav>

	<div class="container-fluid">
		<div class="row">			
			<div id="artccs" class="col-md-12">
			  <label>Artccs: </label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZAB' value='ZAB'>ZAB</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZAN' value='ZAN'>ZAN</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZAU' value='ZAU'>ZAU</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZBW' value='ZBW'>ZBW</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZDC' value='ZDC'>ZDC</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZDV' value='ZDV'>ZDV</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZFW' value='ZFW'>ZFW</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZHU' value='ZHU'>ZHU</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZID' value='ZID'>ZID</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZJX' value='ZJX'>ZJX</label>	
				<label class="radio-inline"><input type="radio" name="artcc" id='ZKC' value='ZKC'>ZKC</label>				
				<label class="radio-inline"><input type="radio" name="artcc" id='ZLA' value='ZLA'>ZLA</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZLC' value='ZLC'>ZLC</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZMA' value='ZMA'>ZMA</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZME' value='ZME'>ZME</label>				
				<label class="radio-inline"><input type="radio" name="artcc" id='ZMP' value='ZMP'>ZMP</label>				
				<label class="radio-inline"><input type="radio" name="artcc" id='ZNY' value='ZNY'>ZNY</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZOA' value='ZOA'>ZOA</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZOB' value='ZOB'>ZOB</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZSE' value='ZSE'>ZSE</label>
				<label class="radio-inline"><input type="radio" name="artcc" id='ZTL' value='ZTL'>ZTL</label>
			</div>
		</div>
		<div class="row top-buffer">			
			<div id="map_canvas" class="col-md-12"></div>
		</div>
	</div>

</body>
</html>
