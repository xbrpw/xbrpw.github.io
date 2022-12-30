const links = document.querySelectorAll('a');
links.forEach(link => link.setAttribute('href','#'));

const appsMenuButton = document.querySelector('.apps-menu-icon');
const appsMenu = document.querySelector('.apps-menu');

appsMenuButton.addEventListener('click', () => {
  appsMenu.classList.toggle('open');
})

const languages = document.querySelector('.languages');

const languageOptionsArray = [ 'हिन्दी', 'বাংলা', 'తెలుగు', 'मराठी', 'தமிழ்', 'ગુજરાતી', 'ಕನ್ನಡ', 'മലയാളം', 'ਪੰਜਾਬੀ' ];

const languageList = document.createElement('ul');

const generateLanguageLinks = (arr) => {
  
  languageOptionsArray.map(language => {
    let langItem = document.createElement('li');
    langItem.innerHTML = `
    <a href="#">${language}</a>
    `
    languageList.appendChild(langItem);
  })
  
  languages.appendChild(languageList);
  
} 

generateLanguageLinks(languageOptionsArray);