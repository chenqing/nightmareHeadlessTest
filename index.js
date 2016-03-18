const Nightmare = require('nightmare');
const Xvfb = require('xvfb');
const vo = require('vo');

const SCREEN_OPTIONS = {
	width: 1280,
       	height: 700
};

const xvfb = new Xvfb();

xvfb.start(function(){
	vo(run)(function(err, result){
		if (err) throw err;
		xvfb.stop();
	});
});

function *run(){
	// servernum will be at least 200 
	var nightmare = new Nightmare({
		width: 1280,
		height: 700,
		show: false,
		waitTimeout: 6000
	});

	var title = yield nightmare
		.goto('http://www.google.es')
		.evaluate(function(){
			console.log(document.title);
			return document.title;
		});
	console.log(title);
	yield nightmare.end();
}
