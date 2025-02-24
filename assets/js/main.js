let suomeksi = document.getElementById('suomeksi');
let enkuksi = document.getElementById('enkuksi');
let events = ['click', 'touchend']

for(let event of events) {
	suomeksi.addEventListener(event, () => changeLanguage('fi'));
	enkuksi.addEventListener(event, () => changeLanguage('en'));
}

document.querySelectorAll('[data-en]').forEach(function(el) {
	el.dataset.fi = el.innerHTML;
});

function changeLanguage(lang) {
	document.querySelectorAll('[data-' + lang + ']').forEach(function(el) {
		el.innerHTML = el.dataset[lang];
	});
}

if (!navigator.language.includes('fi')) changeLanguage('en');
