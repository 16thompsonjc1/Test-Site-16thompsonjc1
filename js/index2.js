if (annyang) {
	
var commands = {
	'Continue': function redirect() {
		window.location = 'Defalt_Word_Success_Page'
	}
};

annyang.addCallback('resultNoMatch', function(phrases) {
  console.log('No command matched. Possible sentences said:');
  console.log(Continue);
});

annyang.debug(true);
	annyang.addCommands(commands);
 
annyang.start();
}