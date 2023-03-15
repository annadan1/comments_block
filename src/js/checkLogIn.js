const checkLogIn = (user) => {
  const newUserInfo = document.querySelector(".newUserInfo");
  if (user.logIn) {
    newUserInfo.classList.add("hidden");
  } else {
    newUserInfo.classList.remove("hidden");
  }
};

export default checkLogIn;
