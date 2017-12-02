			var inputTerminal = new Terminal('input')
			document.body.appendChild(inputTerminal.html)
		

			var showQuestion = false;
		
		// Beginning intro
			inputTerminal.print('Hello, my name is Eduardo and you have stumbled across my personal website! ¯\\_(ツ)_/¯')
			
			inputTerminal.sleep(1000, function() {
			inputTerminal.input('So lets get started, what is your name?', function (input) {
				inputTerminal.print('Welcome '+ input+', please have a look around. \n' +
				'You navigate just as you would in a normal terminal, you can type `help` to see a list of available commands.');
				this.main();
			})	
		})
		
		
		function main() { inputTerminal.input('', function (input) {
				
			let response = this.commands(input);
			
			switch(response.type){
			case 0:
				inputTerminal.clear();
				this.main();
				break;
			case 1:
				inputTerminal.print(response.msg);
				this.main();
				break;
			case 2:
				$("#demo01").click();
				this.main();
				break;
			case 3:
			  inputTerminal.printHtml(response.msg);
			  this.main();
				
			}
		})
	}

		// COMMAND TYPES 0=clear 1= regular message output 2=Modal for resume 3=output html
		this.commands = function (input) {
			var response = {};
			switch(input.toLowerCase()){
			case 'bio': 
				response = {type: 1, msg: 'My name is Eduardo Dennis, I am a software developer'};
				break;
			case 'ls':
				response = {type: 1, msg: lsMsg};
				break;
			case 'cat resume.pdf': 
				response = {type: 2};
				break;
			case 'rep': 
				response = {type: 3, msg: soMsg};
				break;
			case 'clear':
				response = {type: 0};
				break;
		    case 'help':
				response = {type: 1, msg: helpMsg}
				break;
		    case 'pwd':
				response = {type: 1, msg: '/'}
				break;
			default : 
				response = {type: 1, msg :'-bash: '+ input +': command not found'}
			}

			
			return response;
		}
		
		
		
		var helpMsg =   'GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin16) \n'+
						'clear: - clear the terminal screen \n'+
						'help: display helpful information about builtin commands \n '+
						'cat: print files on file system i.e. `cat resume.pdf`\n'+
						'ls: list information  about the files in current directory \n'+
						'pwd: return working directory name \n' +
						'rep: show stackoverflow reputation';

		var lsMsg = 'resume.pdf hidden';
		
		var soMsg = '<br><a href=\"http://stackoverflow.com/users/1754020/eduardo-dennis\">'+
					'<img src=\"http://stackoverflow.com/users/flair/1754020.png?theme=clean\" width=\"208\"'+
					'height=\"58\" alt=\"profile for Eduardo Dennis at Stack Overflow, Q&amp;A for professional'+
					'and enthusiast programmers\" title=\"profile for Eduardo Dennis at Stack Overflow, Q&amp;A'+
					'for professional and enthusiast programmers\"></a> <br><br>'
		
		
			