import getDate from "./getDate";
import checkLogIn from "./checkLogIn";
import clickListener from "./clickListener";
import submitListener, { submit } from "./submitListener";

const currentUser = {
  logIn: false,
  nickname: "",
  avatarSrc: "",
  date: "",
  message: "",
};

const newUserInfo = document.querySelector(".newUserInfo");
const form = document.querySelector("form");
const messageForm = document.querySelector(".message");
const sendButtonContainer = form.querySelector(".sendButton");
const sendButton = sendButtonContainer.querySelector("button");
const dateMessage = form.querySelector(".dateMessage");

const addNewUserMessage = () => {
  checkLogIn(currentUser);
  clickListener(newUserInfo, currentUser);
  submitListener(form, newUserInfo, messageForm, currentUser);

  if (!currentUser.logIn) {
    const newNickname = form.querySelector(".newNickname");
    const parent = newNickname.closest("div");
    const error = parent.querySelector(".errorMessage");
    newNickname.addEventListener("input", (e) => {
      let nickname = e.target.value;
      if (nickname === "") {
        error.classList.remove("hidden");
        newNickname.classList.add("error");
        error.textContent = "Вы не можете оставить поле пустым";
        sendButton.disabled = true;
      } else if (!nickname.startsWith("Пепега")) {
        error.textContent = "Ваш ник должен начинаться с Пепега";
        error.classList.remove("hidden");
        newNickname.classList.add("error");
        sendButton.disabled = true;
      } else {
        error.classList.add("hidden");
        newNickname.classList.remove("error");
        currentUser.nickname = e.target.value;
        sendButton.disabled = false;
      }
    });
    if (currentUser.logIn) {
      newUserInfo.classList.add("hidden");
    }

    dateMessage.addEventListener("input", (e) => {
      let date = new Date(e.target.value);
      currentUser.date = getDate(date);
    });
  }

  messageForm.addEventListener("keypress", (e) => {
    currentUser.message = e.target.value;
    if (e.key == "Enter") {
      submit(newUserInfo, messageForm, currentUser);
    }
  });
};

export default addNewUserMessage;
