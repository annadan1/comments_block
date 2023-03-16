import addMessage from "./addMessageLogic";
import checkLogIn from "./checkLogIn";
import getDate from "./getDate";

const findCurrentAvatar = (newUserInfo) => {
  const avatars = Array.from(newUserInfo.querySelectorAll("img"));
  const currentAvatar = avatars.find((avatar) =>
    avatar.classList.contains("selected")
  );
  return currentAvatar.src;
};

export const submit = (newUserInfo, messageForm, currentUser) => {
  if (currentUser.avatarSrc === "") {
    currentUser.avatarSrc = findCurrentAvatar(newUserInfo);
  }
  if (currentUser.date === "") {
    currentUser.date = getDate(currentUser.date);
  }
  addMessage(currentUser);
  messageForm.value = "";
  currentUser.message = "";
  currentUser.logIn = true;
  checkLogIn(currentUser);
};

const submitListener = (form, newUserInfo, messageForm, currentUser) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit(newUserInfo, messageForm, currentUser);
  });
};

export default submitListener;
