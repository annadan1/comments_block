import addMessage from "./addMessageLogic";
import getDate from "./getDate";
import checkLogIn from "./checkLogIn";

const currentUser = {
  logIn: false,
  nickname: "",
  avatarSrc: "",
  date: "",
  message: "",
};

const findCurrentAvatar = (newUserInfo) => {
  const avatars = Array.from(newUserInfo.querySelectorAll("img"));
  const currentAvatar = avatars.find((avatar) =>
    avatar.classList.contains("selected")
  );
  return currentAvatar.src;
};

const addNewUserMessage = () => {
  checkLogIn(currentUser);
  const newUserInfo = document.querySelector(".newUserInfo");
  newUserInfo.addEventListener("click", (e) => {
    const currentElem = e.target;
    if (currentElem.tagName === "BUTTON") {
      const action = currentElem.dataset.action;
      const avatars = Array.from(newUserInfo.querySelectorAll("img"));
      const currentAvatar = avatars.find((avatar) =>
        avatar.classList.contains("selected")
      );
      let numberImg = +currentAvatar.dataset.value;
      if (action === "prev") {
        numberImg -= 1;
        if (numberImg === 0) numberImg = 7;
      }
      if (action === "next") {
        numberImg += 1;
        if (numberImg === 8) numberImg = 1;
      }
      currentAvatar.classList.add("hidden");
      currentAvatar.classList.remove("selected");
      const newAvatars = avatars.find(
        (avatar) => avatar.dataset.value == numberImg
      );
      newAvatars.classList.add("selected");
      newAvatars.classList.remove("hidden");

      currentUser.avatar = newAvatars.src;
    }
  });

  const form = document.querySelector("form");
  const messageForm = document.querySelector(".message");
  const sendButtonContainer = form.querySelector(".sendButton");
  const sendButton = sendButtonContainer.querySelector("button");

  const submit = () => {
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

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit();
  });

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

    const dateMessage = form.querySelector(".dateMessage");

    dateMessage.addEventListener("input", (e) => {
      let date = new Date(e.target.value);
      currentUser.date = getDate(date);
      console.log(currentUser);
    });
  }

  messageForm.addEventListener("keypress", (e) => {
    currentUser.message = e.target.value;
    if (e.key == "Enter") {
      submit();
    }
  });
};

export default addNewUserMessage;
