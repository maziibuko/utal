const button = document.getElementById('myButton');

button.addEventListener('click', debounce(() => {
  console.log('Button clicked!');
}, 60000));
