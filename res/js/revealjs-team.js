var players = 
[
	"omrii",
	"hales",
	"b1ur",
	"nate",
	"rebel",
	"allcapson",
	"friberg"
]

sr.reveal('.player__name');
sr.reveal('.player__role');
sr.reveal('.player__rank', { origin: 'right' });
sr.reveal('.player-description');

sr.reveal('.player__picture', { duration: 300, scale: '1.2'});

//Define special classes for each sequential animation
var playerCount = players.length;
for(var i = 0; i < playerCount; i++)
{
	sr.reveal('.js-player__coin--' + players[i] + '', { duration: 300, origin: 'right'}, 100);
	sr.reveal('.js-button-social--' + players[i] + '', { duration: 300, origin: 'bottom'}, 50);
}