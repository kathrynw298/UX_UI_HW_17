console.log("Your index.js file is loaded correctly!");

const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#BA441B';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '#FE5D26';
});

