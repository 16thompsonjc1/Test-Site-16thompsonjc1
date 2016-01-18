if (annyang) {
	
var commands = {
	'Continue': function redirect() {
		window.location = 'Defalt_Word_Success_Page'
	}
};
  
annyang.debug(true);
	annyang.addCommands(commands);
 
annyang.start();
}