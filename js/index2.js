if (annyang) {
	
var commands = {
	'Continue': function redirect() {
		window.location = 'Defalt_Word_Success_Page'
	}
};

annyang.addCallback('resultNoMatch', function(){window.console.log('noMatch');});
':nomatch': function (message) { onResultNoMatch(message); };
  
annyang.debug(true);
	annyang.addCommands(commands);
 
annyang.start();
}