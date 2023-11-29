document.addEventListener("DOMContentLoaded", function() {
  var currentPath = window.location.pathname;
  var linkEn = document.getElementById("llink-en");
  var linkDe = document.getElementById("llink-de");
  if (currentPath.indexOf("/en") === 0) {
    linkEn.style.textDecoration = "underline";
  } else {
    linkDe.style.textDecoration = "underline";
  }
});

let lastColor = '';
function getRandomColor() {
  const colors = ['#5529d3', '#cba689', '#78aebf', '#ffc0cb'];
  let randomColor;
  do {
    randomColor = colors[Math.floor(Math.random() * colors.length)];
  } while (randomColor === lastColor);
  lastColor = randomColor;
  return randomColor;
}

function setRandomColor(event) {
  const randomColor = getRandomColor();
  event.target.style.color = randomColor;
}

const linkElements = document.querySelectorAll('.link-2');
linkElements.forEach(linkElement => {
  linkElement.addEventListener('mouseenter', setRandomColor);
  linkElement.addEventListener('mouseleave', () => {
    linkElement.style.color = '';
  });
});
