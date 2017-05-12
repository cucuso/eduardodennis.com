			var inputTerminal = new Terminal('input')
			document.body.appendChild(inputTerminal.html)
		

			var showQuestion = false;
		
		// Beginning intro
			inputTerminal.print('Hello, my name is Eduardo and you have stumbled across my personal website! ¯\\_(ツ)_/¯')
			
			inputTerminal.sleep(1000, function() {
			inputTerminal.input('So lets get started, what is your name?', function (input) {
				inputTerminal.print('Welcome, ' + input+' please have a look around. \n' +
				'You navigate just as you would in a normal terminal, you can type `help` to see a list of available commands.');
				this.main();
			})	
		})
		
		
		function main() { inputTerminal.input('', function (input) {
				
			let response = this.commands(input);
			if(response.type === 0){
				inputTerminal.clear();
				this.main();
			}else if (response.type === 1){
			inputTerminal.print(response.msg);
				this.main();
			  } else if(response.type === 2) {
				  $("#demo01").click();
				  this.main();
			  }
			})
		}


		this.commands = function (input) {
			var response = {};
			switch(input.toLowerCase()){
			case 'bio': 
				response = {type: 1, msg: 'My name is Eduardo Dennis, I am a software developer'};
				break;
			case 'resume':
				response = {type: 2};
				break;
			case 'menu': 
				response = {type: 1, msg:'BIO RESUME PROJECTS RANDOM'};
				break;
			case 'clear':
				response = {type: 0};
				break;
		    case 'help':
				response = {type: 1, msg: helpMsg}
				break;
			default : 
				response = {type: 1, msg :'-bash: '+ input +': command not found'}
			}

			
			return response;
		}
		
		
		
		var helpMsg = 'GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin16) \n'+
		'clear: - clear the terminal screen \n'+
		'help: display helpful information about builtin commands \n '+
		'resume: download my resume';

		
		
			