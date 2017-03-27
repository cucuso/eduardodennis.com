			var inputTerminal = new Terminal('input')
			document.body.appendChild(inputTerminal.html)
		
			var displayTerminal = new Terminal()
			document.body.appendChild(displayTerminal.html)

			var showQuestion = false;
		
		// Beginning intro
			inputTerminal.print('Hello, my name is Eduardo and you have stumbled across my personal portfolio site! ¯\\_(ツ)_/¯')
		
			inputTerminal.sleep(1000, function () {
				inputTerminal.print('At any time you need help enter \'HELP\'')}
			);
			
			inputTerminal.sleep(1700, function() {
			inputTerminal.input('So lets get started, what is your name?', function (input) {
				inputTerminal.print('Welcome, ' + input+' what would you like to see?');
				this.main();
			})	
		})

		function main() { inputTerminal.input('', function (input) {
				
			let response = this.menu(input);
			if(response.isClear === true){
				inputTerminal.clear();
				this.main();
			}else{
			displayTerminal.print(JSON.stringify(response.msg));
				this.main();
			}
			});}


		this.menu = function (input) {
			var response = {};
			switch(input.toLowerCase()){
			case 'bio': 
				response = {isClear: false, msg:'My name is Eduardo Dennis, I am a software developer'};
				break;
			case 'menu': 
				response = {isClear: false, msg:'BIO RESUME PROJECTS RANDOM'};
				break;
			case 'clear':
				response = {isClear: true};
				break;
		    case 'help':
				response = {isClear: false, msg: '\'Clear\' - clear terminal screen, \'Help\' display helpful information about builtin commands, \'Menu\' display available actions. This is all I have for now.'}
			}
			
			return response;
		}
			