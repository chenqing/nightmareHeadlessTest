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
    console.log(result);
	});
});

function *run(){
	var nightmare = new Nightmare({
		width: 1280,
		height: 700,
		show: false,
		waitTimeout: 6000
	});

	return yield nightmare
		.goto('http://www.google.es')
		.evaluate(function(){
			return document.title;
		})
	  .end();
}
