if (annyang) {
	
var commands = {
	'Continue': function redirect() {
		window.location = 'Defalt Word Success Page'
	}
};
  
annyang.debug(true);
	annyang.addCommands(commands);
 
annyang.start();
}