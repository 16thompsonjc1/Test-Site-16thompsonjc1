if (annyang) {
	
var commands = {
	'Continue': function redirect() {
		window.location = 'Defalt_Word_Success_Page'
	}
};

annyang.addCallback('resultNoMatch', alert("Sorry, that was incorrect/not clear. Please say that again."));
  
annyang.debug(true);
	annyang.addCommands(commands);
 
annyang.start();
}