/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// End of Mobile menu and starting with Popup part
// Make sticky navigation
window.onscroll = function() {mySticky()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function mySticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// working on popup window

const projectInfo = [
  {
    name: 'Awesome books',
    description:
      'Awesome books is a simple website that allows users to add/remove books from a list using ES6. It displays books stored in a local storage.',
    'featured image': './Allimages/images/Image004.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      'https://jeanbulambo.github.io/Awesom-books/',
    'link to source':
      'https://github.com/Jeanbulambo/Awesom-books',
  },

  {
    name: 'Leaderboard',
    description:
      'This basic web allows users to add names and scores and then displays the ranking of players based on their scores.',
    'featured image': './Allimages/images/Image002.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      ' https://wondrous-swan-93d3f1.netlify.app',
    'link to source':
      'https://github.com/Jeanbulambo/Leaderboard',
  },

  {
    name: 'Todo list',
    description:
      'Welcome to the to-do list. A web App, where you can make a list of tasks you want to complete and then you can follow them.',
    'featured image': './Allimages/images/Image03.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      'https://stupendous-crisp-251e90.netlify.app',
    'link to source':
      'https://github.com/Jeanbulambo/Todolist',
  },

  {
    name: 'Books store',
    description:
      "It's a mobile library that allows users to add book as well as its author by categories. Users can also see comments if they are available.",
    'featured image': './Allimages/images/awesome02.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      'https://jeanbulambo.github.io/Portfolio-repo/',
    'link to source':
      'https://github.com/Jeanbulambo/Portfolio-repo.git',
  },

  {
    name: 'Awesome Books',
    description:
      'Awesome books is a simple website that allows users to add/remove books from a list using ES6. It displays books stored in a local storage.',
    'featured image': './Allimages/images/Image004.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      'https://jeanbulambo.github.io/Awesom-books/',
    'link to source':
      'https://github.com/Jeanbulambo/Awesom-books',
  },

  {
    name: 'Leaderboard',
    description:
      'This basic web allows users to add names and scores and then displays the ranking of players based on their scores.',
    'featured image': './Allimages/images/Image002.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      'https://wondrous-swan-93d3f1.netlify.app',
    'link to source':
      'https://github.com/Jeanbulambo/Leaderboard',
  },

  {
    name: 'Todo List',
    description:
      'Welcome to the to-do list. A web App, where you can make a list of tasks you want to complete and then you can follow them.',
    'featured image': './Allimages/images/Image03.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      'https://stupendous-crisp-251e90.netlify.app',
    'link to source':
      'https://github.com/Jeanbulambo/Todolist',
  },

  {
    name: 'Book store',
    description:
      "It's a mobile library that allows users to add a book as well as its author by category. Users can also see comments if they are available.",
    'featured image': './Allimages/images/awesome02.png',
    technologies: ['React', 'Css', 'javascript'],
    'link to live version':
      'https://tranquil-brigadeiros-8c9876.netlify.app',
    'link to source':
      'https://github.com/Jeanbulambo/Bookstore',
  },
];

// see project button

function divfunction(event) {
  const pop = document.createElement('div');
  document.body.append(pop);
  pop.classList.add('popupc');

  // adding elements
  // const mainwrap =document.createElement('div');
  // mainwrap.classList.add('pop');
  // mainwrap.append(pop);
  const hpop = document.createElement('div');
  hpop.classList.add('headpop');
  const content = document.createElement('div');
  content.classList.add('pop-content');
  const head = document.createElement('h2');
  head.classList.add('project-head');
  const image = document.createElement('img');
  const divp = document.createElement('div');
  divp.classList.add('position-div-pp');
  const descript = document.createElement('p');
  descript.classList.add('project-descrip');
  const labd = document.createElement('div');
  labd.classList.add('lang-btn-div');
  const prot = document.createElement('ul');
  prot.classList.add('lang-container-pp');
  const btcontener = document.createElement('div');
  const btnseelive = document.createElement('a');
  const btnseesource = document.createElement('a');
  const closeButton = document.createElement('button');
  closeButton.classList.add('closeButton-class');
  closeButton.id = 'close-button';

  pop.append(
    hpop,
    content,
    head,
    closeButton,
    descript,
    labd,
    prot,
    btcontener,
  );
  content.append(image, divp);
  hpop.append(head, closeButton);
  divp.append(descript, labd, prot, btcontener);
  labd.append(prot, btcontener);
  btcontener.append(btnseelive, btnseesource);

  // adding content to div
  const projectId = parseInt(event.target.id, 10);
  head.textContent = projectInfo[projectId].name;
  image.src = projectInfo[projectId]['featured image'];
  descript.textContent = projectInfo[projectId].description;

  // loop statement
  for (let i = 0; i < projectInfo[projectId].technologies.length; i += 1) {
    const projectLi = document.createElement('li');
    projectLi.className = 'languages-pp';
    projectLi.textContent = projectInfo[projectId].technologies[i];
    prot.appendChild(projectLi);
  }

  btcontener.classList.add('btn-container-class-pp');
  btnseelive.href = projectInfo[projectId]['link to live version'];
  btnseelive.classList.add('btn-seelive-pp');
  btnseelive.target = '_blank';
  btnseelive.textContent = 'See Live';
  btnseesource.href = projectInfo[projectId]['link to source'];
  btnseesource.classList.add('btn-seesource-pp');
  btnseesource.target = '_blank';
  btnseesource.textContent = 'See Source';
  function closeButtonFunction() {
    pop.remove();
  }
  const clickCloseButton = document.getElementById('close-button');
  clickCloseButton.addEventListener('click', closeButtonFunction);
}
const buttonsee = document.querySelectorAll('.see-project-btn');
buttonsee.forEach((buttonp) => {
  buttonp.addEventListener('click', divfunction);
});

// End of pop-up window

// Validation Form Section
const formvalidation = document.querySelector('.contact-form');
const email = document.getElementById('email');
const error = document.querySelector('small');
formvalidation.addEventListener('submit', (e) => {
  const message = [];

  if (email.value !== email.value.toLowerCase()) {
    message.push('Kindly, enter email in lowcase instead.');
  }

  if (message.length > 0) {
    e.preventDefault();
    error.innerHTML = message.join('<br/><br/');
    email.style.border = '4px solid red';
    error.style.borderRadius = '5px';
    error.style.backgroundColor = 'yellow';
    error.style.fontSize = '24px';
    error.style.color = 'red';
  }
});
// End of validation form
