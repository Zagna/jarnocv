var suomeksi = document.getElementById('suomeksi');

['click', 'touchend'].forEach(function(e) {
	suomeksi.addEventListener(e, function() {
		changeLanguage('fi');
	});
});

var enkuksi = document.getElementById('enkuksi');

['click', 'touchend'].forEach(function(e) {
	enkuksi.addEventListener(e, function() {
		changeLanguage('en');
	});
});

function changeLanguage(lang) {
	document.querySelectorAll('[data-' + lang + ']').forEach(function(el) {
		el.innerHTML = el.dataset[lang];
	});
}

if (navigator.language != 'fi') changeLanguage('en');
