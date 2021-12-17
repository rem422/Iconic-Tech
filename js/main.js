// Footer copyright automatic change of year
const year = document.getElementById('year');
const currentYear = new Date().getFullYear();
const newYear = new Date(`january 01 ${currentYear+1} 00:00:00`);
year.innerText = currentYear;