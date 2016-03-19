if (annyang) {
	
var commands = {
	'Progress': function redirect() {
		window.location = 'Defalt_Word_Success_Page'
	}
};

annyang.addCallback('resultNoMatch', function(phrases) {
  alert('Sorry, that was incorrectly/not clearly said. Please Say That Again.');
});

annyang.debug(true);
	annyang.addCommands(commands);
 
annyang.start();
}

else {
alert('Your browser does not support Speech Recognition! Please use Google Chrome!');
}
 };