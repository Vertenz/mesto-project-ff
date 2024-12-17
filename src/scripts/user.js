import { getUserInfo } from './api.js';

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');
export const profile = {
    title: profileTitle,
    description: profileDescription,
    image: profileImage
}

export let user = {};

export const setUser = async () => {
  try {
    user = await getUserInfo();
    fillUserInfo(user);
  }catch(error) {
    console.log('SetUser error: ', error);
  }
}

export const fillUserInfo = (user) => {
  profile.title.textContent = user.name;
  profile.description.textContent = user.about;
  profile.image.src = user?.avatar ? user.avatar : profile.image.src;
}


