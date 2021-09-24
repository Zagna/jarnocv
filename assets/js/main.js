/*! npm.im/supports-webp 2.0.1 */
var supportsWebP = (function () {
	'use strict';
	
	var index = new Promise(function (resolve) {
		var image = new Image();
		image.onerror = function () { return resolve(false); };
		image.onload = function () { return resolve(image.width === 1); };
		image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
	}).catch(function () { return false; });
	
	return index;
	
}());

supportsWebP.then(supported => {
	if (!supported) {
		document.body.classList.add("no-webp");
	}
});

var suomeksi = document.getElementById('suomeksi');

['click', 'touchend'].forEach(function(e) {
	suomeksi.addEventListener(e, function() {
		document.querySelectorAll('[data-fi]').forEach(function(el) {
			el.innerHTML = el.dataset.fi;
		});
	});
});

var enkuksi = document.getElementById('enkuksi');

['click', 'touchend'].forEach(function(e) {
	enkuksi.addEventListener(e, function() {
		document.querySelectorAll('[data-en]').forEach(function(el) {
			el.innerHTML = el.dataset.en;
		});
	});
});
