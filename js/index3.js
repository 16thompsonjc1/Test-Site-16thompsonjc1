if (annyang) {
	
var commands = {
	'Progress': function redirect() {
		window.location = 'Defalt_Word_Success_Page'
	}
};
  
annyang.debug(true);
	annyang.addCommands(commands);
 
annyang.start();
}