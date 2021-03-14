const entryGranted = () => `
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
	      	.pause(4000)
  	      	.type('<p>HELLO IP ADDRESS NO. 153.23.195.3</p> ')
			.type('WELCOME TO THE TACTICALNET/SINGULARITY, WHERE CONTROL OF THE INTERNET IS RETURNED TO INDIVIDUALS.<br>')
			.type('<br>THE FOLLOWING ACCOUNT HAS BEEN ENTERED ON THE SINGULARITY BLOCKCHAIN:<br><br>BRowgA5PwoR-Ib9O__4t7RsfPt0<br><br>THIS ACCOUNT IS WORTH $1,024 NEW US DOLLARS IN CRYPTOCURRENCY.<br>WOULD YOU LIKE TO CLAIM THIS ENTRY?')
			.type('<br><br>CLICK ON AN ACTION:')
			.type('<div class="desktop"><br><br></div>')
			.type('<a>CLAIM ENTRY</a> ')
			.type('<a>MORE INFO</a><br><br>')
		.go()
  </script>
</body>
</html>
`

export default entryGranted
