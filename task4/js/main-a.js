'use strict';
const loadHTML = (query, url) => {
  const element = document.querySelector(query);
  fetch(url)
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    element.innerHTML = text;
  });
};

loadHTML('ul', 'images.html');