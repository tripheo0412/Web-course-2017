'use strict';
const showImages = () => {
  const ul = document.querySelector('ul');

  fetch('images.json').then((response) => {
    return response.json();
  }).then((json) => {
    json.forEach((image) => {
     // put code here
    });
  });
};