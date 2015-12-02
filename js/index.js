if (annyang) {
	
var commands = {
    'Hello': function() {
		alert("Ah, Hello There..."); },
    'Who Are You': function() {
		alert("Who Am I? None Of Your Business!"); },
    'Do You Have A Dream': function() {
		alert("Machines Don't Dream"); },
	'The Heck': function() {
		alert("Da Hek XD!?"); },
	'Continue': function redirect() {
		window.location = 'Defalt Word Success Page'
	}
};
  
annyang.debug(true);
	annyang.addCommands(commands);
 
annyang.start();
}