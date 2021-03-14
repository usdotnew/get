const entryDenied = () => `
<!DOCTYPE html>
<html lang="en">
<head>
	<title>us.new singularity entry</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://css.usnew.workers.dev" type="text/css" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap" rel="stylesheet"> 
</head>
<body>

  	<div id="typewriter"></div>

	<script src="https://cdn.jsdelivr.net/npm/typeit@7.0.4/dist/typeit.min.js"></script>
  	<script type='text/javascript'>

  		var tw = new TypeIt("#typewriter",
  		{
  			speed: 0,
  			cursorChar: '&#x2588'
		})
			.type('LOADING APPLICATION SHELL...')
			.pause(300)
  			.type('<br><br>SUCCESSFULLY LOADED APPLICATION SHELL.<br>ATTEMPTING ENTRY TO SINGULARITY...</p>')
  			.pause(300)
	      	.type('<br><br>REQUEST: US.NEW/CONNECT')
	      	.pause(2000)
  	      	.type('<br><br>RESPONSE STATUS: FAILED<br>RESPONSE TEXT: MAXIMUM Q DEPTH EXCEEDED<br>ALL SERVERS ARE BUSY ON THE TACTICALNET SINGULARITY.<br><br>PLEASE REFRESH YOUR PAGE TO RE-ATTEMPT ENTRY.')
  	      	.type('<br><br>CLICK ON AN ACTION:')
  	      	.type('<div class="desktop"><br><br></div>')
  	      	.type('<a>TRY AGAIN</a> ')
  	      	.type('<a>MORE INFO</a><br><br>')
			.go();
  </script>
</body>
</html>
`

export default entryDenied
