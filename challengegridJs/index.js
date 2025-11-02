let body = document.querySelector('.body');
let header = document.createElement('header');
let main = document.createElement('main');
let section = document.createElement('section');
let footer = document.createElement('footer');

header.className = 'header';
header.style.height = '50px';
header.style.backgroundColor = 'red';

main.style.backgroundColor = 'green';
main.style.width = '400px';
main.style.height = '80px';

section.style.backgroundColor = 'blue';
section.style.width = '400px';
section.style.height = '80px';

footer.style.backgroundColor = 'orange';
footer.style.height = '50px';

body.append(header, main, section, footer);