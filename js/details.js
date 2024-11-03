// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);

// const wonder = {};
// params.forEach((value, key) => {
//     wonder[key] = value;
// });
const wonder = JSON.parse(localStorage.getItem('wonder'));

console.log(wonder);
console.log(document.getElementById('wonder-img').innerText = wonder.links.images[0]);

document.querySelector('h1').innerText = wonder.name.toUpperCase();
document.getElementById('wonder-img').src = wonder.links.images[0];
document.getElementById('summary').innerText = wonder.summary;
document.getElementById('build-year').innerText = wonder.build_year;
document.getElementById('location').innerText = wonder.location;
document.getElementById('time-period').innerText = wonder.time_period;
