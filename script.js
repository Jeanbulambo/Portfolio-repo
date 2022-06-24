const nav = document.querySelector('.mobile');
const hamb = document.querySelector('.menu');

hamb.addEventListener('click', () => {
  hamb.classList.toggle('active');
  nav.classList.toggle('active');
});

// End of Mobile menu and starting with Popup part
// working on popup window

const projectInfo = [
  {
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    'featured image': './Allimages/images/tonic-page-1.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      'https://jeanbulambo.github.io/Portfolio-repo/',
    'link to source':
      'https://github.com/Jeanbulambo/Portfolio-repo.git',
  },

  {
    name: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    'featured image': './Allimages/images/Multi-post-stories.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      'https://jeanbulambo.github.io/Portfolio-repo/',
    'link to source':
      'https://github.com/Jeanbulambo/Portfolio-repo.git',
  },

  {
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    'featured image': './Allimages/images/Tonic-page3.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      'https://jeanbulambo.github.io/Portfolio-repo/',
    'link to source':
      'https://github.com/Jeanbulambo/Portfolio-repo.git',
  },

  {
    name: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    'featured image': './Allimages/images/multi-post-stories-2.png',
    technologies: ['html', 'css', 'javascript'],
    'link to live version':
      'https://jeanbulambo.github.io/Portfolio-repo/',
    'link to source':
      'https://github.com/Jeanbulambo/Portfolio-repo.git',
  },

  {
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    'featured image': './Allimages/images/snaposhot-1-desktop-p.png',
    technologies: ['html', 'css', 'javascript', 'ruby', 'github', 'bootstrap'],
    'link to live version':
      'https://jeanbulambo.github.io/Portfolio-repo/',
    'link to source':
      'https://github.com/Jeanbulambo/Portfolio-repo.git',
  },

  {
    name: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    'featured image': './Allimages/images/multi-post-portfolio-desktop-1.svg',
    technologies: ['html', 'css', 'javascript', 'ruby', 'github', 'bootstrap'],
    'link to live version':
      'https://jeanbulambo.github.io/Portfolio-repo/',
    'link to source':
      'https://github.com/Jeanbulambo/Portfolio-repo.git',
  },

  {
    name: 'Facebook 360',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    'featured image': './Allimages/images/facebook-360-desktop.svg',
    technologies: ['html', 'css', 'javascript', 'ruby', 'github', 'bootstrap'],
    'link to live version':
      'https://jeanbulambo.github.io/Portfolio-repo/',
    'link to source':
      'https://github.com/Jeanbulambo/Portfolio-repo.git',
  },

  {
    name: 'Uber Navigation',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    'featured image': './Allimages/images/uber-nav-desktop.svg',
    technologies: ['html', 'css', 'javascript', 'ruby', 'github', 'bootstrap'],
    'link to live version':
      'https://jeanbulambo.github.io/Portfolio-repo/',
    'link to source':
      'https://github.com/Jeanbulambo/Portfolio-repo.git',
  },
];

// see project button

function divfunction(event) {
  const pop = document.createElement('div');
  document.body.append(pop);
  pop.classList.add('popupc');

  // adding elements
  const hpop = document.createElement('div');
  hpop.classList.add('headpop');
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
    head,
    closeButton,
    image,
    divp,
    descript,
    labd,
    prot,
    btcontener,
  );
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
