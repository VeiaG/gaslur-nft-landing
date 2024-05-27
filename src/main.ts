import './style.scss';
//shadowing avatars
const avatars = document.querySelectorAll<HTMLImageElement>('.avatar img');
avatars.forEach((avatar) => {
  const shadow = document.createElement('img');
  shadow.src = avatar.src;
  shadow.classList.add('avatar__shadow');
  if(avatar.parentElement) avatar.parentElement.appendChild(shadow);
});

// const menuButton = document.querySelector<HTMLDivElement>('.header__menu-btn');
// const navigation =  document.querySelector<HTMLDivElement>('.header__nav');
// menuButton?.addEventListener('click', () => {
//   navigation?.classList.toggle('opened');
//   menuButton?.classList.toggle('opened');
// });