if (annyang) {
	
var commands = {
	'Progress': function redirect() {
		window.location = 'Defalt Word Success Page'
	}
};
  
annyang.debug(true);
	annyang.addCommands(commands);
 
annyang.start();
}