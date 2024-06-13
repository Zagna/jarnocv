let suomeksi = document.getElementById('suomeksi');
let enkuksi = document.getElementById('enkuksi');
let events = ['click', 'touchend']

for(let event of events) {
	suomeksi.addEventListener(event, () => changeLanguage('fi'));
	enkuksi.addEventListener(event, () => changeLanguage('en'));
}

function changeLanguage(lang) {
	document.querySelectorAll('[data-' + lang + ']').forEach(function(el) {
		if (false === 'fi' in el.dataset) el.dataset.fi = el.innerHTML;
		el.innerHTML = el.dataset[lang];
	});
}

if (!navigator.language.includes('fi')) changeLanguage('en');
