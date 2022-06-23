const nav = document.querySelector('.mobile');
const hamb = document.querySelector('.menu');

hamb.addEventListener('click', () => {
  hamb.classList.toggle('active');
  nav.classList.toggle('active');
});

// End of Mobile menu
// Beggining of Popup section

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

const buttonsee = document.querySelectorAll('.see-project-btn');
buttonsee.forEach((btn) => {
  // eslint-disable-next-line no-use-before-define
  btn.addEventListener('click', makeDiv);
});

function makeDiv(event) {
  const popup = document.createElement('div');
  document.body.append(popup);
  popup.classList.add('pop-up-class');

  // adding elements
  const header = document.createElement('div');
  header.classList.add('header-pp');
  const projecthead = document.createElement('h2');
  projecthead.classList.add('project-head');
  const projectimg = document.createElement('img');
  const positiondiv = document.createElement('div');
  positiondiv.classList.add('position-div-pp');
  const projectdescrip = document.createElement('p');
  projectdescrip.classList.add('project-descrip');
  const langbtndiv = document.createElement('div');
  langbtndiv.classList.add('lang-btn-div');
  const projecttech = document.createElement('ul');
  projecttech.classList.add('lang-container-pp');
  const projectbtncontainer = document.createElement('div');
  const btnseelive = document.createElement('a');
  const btnseesource = document.createElement('a');
  const closeButton = document.createElement('button');
  closeButton.classList.add('closeButton-class');
  closeButton.id = 'close-button';

  popup.append(
    header,
    projecthead,
    closeButton,
    projectimg,
    positiondiv,
    projectdescrip,
    langbtndiv,
    projecttech,
    projectbtncontainer,
  );
  header.append(projecthead, closeButton);
  positiondiv.append(projectdescrip, langbtndiv, projecttech, projectbtncontainer);
  langbtndiv.append(projecttech, projectbtncontainer);
  projectbtncontainer.append(btnseelive, btnseesource);

  // adding content to div
  const projectId = parseInt(event.target.id, 10);
  // eslint-disable-next-line no-console
  console.log(projectId);
  projecthead.textContent = projectInfo[projectId].name;
  projectimg.src = projectInfo[projectId]['featured image'];
  projectdescrip.textContent = projectInfo[projectId].description;

  // loop statement
  for (let i = 0; i < projectInfo[projectId].technologies.length; i += 1) {
    const projectLi = document.createElement('li');
    projectLi.className = 'languages-pp';
    projectLi.textContent = projectInfo[projectId].technologies[i];
    projecttech.appendChild(projectLi);
  }

  projectbtncontainer.classList.add('btn-container-class-pp');
  btnseelive.href = projectInfo[projectId]['link to live version'];
  btnseelive.classList.add('btn-seelive-pp');
  btnseelive.target = '_blank';
  btnseelive.textContent = 'See Live';
  btnseesource.href = projectInfo[projectId]['link to source'];
  btnseesource.classList.add('btn-seesource-pp');
  btnseesource.target = '_blank';
  btnseesource.textContent = 'See Source';

  const clickCloseButton = document.getElementById('close-button');
  clickCloseButton.addEventListener('click', 'closeButtonFunction');
  // eslint-disable-next-line no-unused-vars
  function closeButtonFunction() {
    popup.remove();
  }
}
