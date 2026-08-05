document.addEventListener('DOMContentLoaded', function () {
var toggle = document.querySelector('.menu-toggle');
var nav = document.querySelector('.main-nav');
if (toggle && nav) {
toggle.addEventListener('click', function () {
nav.classList.toggle('open');
});
}

var page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.main-nav a').forEach(function (link) {
var href = link.getAttribute('href');
if (href === page || (page === '' && href === 'index.html')) {
link.classList.add('active');
}
});

var targets = document.querySelectorAll('.work-item, .about-wrap p, .event');
if ('IntersectionObserver' in window) {
var observer = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.15 });
targets.forEach(function (el) { observer.observe(el); });
} else {
targets.forEach(function (el) { el.classList.add('visible'); });
}
});
