const addMessage = (user) => {
  const containerComments = document.querySelector(".container__comments");

  const newBlock = document.createElement("div");
  newBlock.className = "comment__block";

  const newUserInfo = document.createElement("div");
  newUserInfo.className = "userInfo";

  const img = document.createElement("img");
  img.alt = "avatar";
  img.className = "avatar";
  img.src = user.avatarSrc;

  const infoContainer = document.createElement("div");
  const nickname = document.createElement("span");
  nickname.className = "nickname";
  nickname.textContent = user.nickname;
  const date = document.createElement("span");
  date.className = "date";
  date.textContent = user.date;
  infoContainer.append(nickname, date);
  newUserInfo.append(img, infoContainer);

  const comment = document.createElement("div");
  comment.className = "comment";
  containerComments.prepend(comment);

  const buttonGroup = document.createElement("div");
  buttonGroup.className = "buttonGroup";

  const message = document.createElement("span");
  message.className = "text";
  message.textContent = user.message;
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete";
  deleteButton.textContent = "🗑";
  const likeButton = document.createElement("button");
  likeButton.type = "button";
  likeButton.className = "button__forLike";
  likeButton.textContent = "♡";
  likeButton.value = 0;
  const count = document.createElement("p");
  count.classList.add("count", "hidden");
  likeButton.append(count);
  buttonGroup.append(deleteButton, likeButton);
  comment.append(message, buttonGroup);
  newBlock.append(newUserInfo, comment);
  containerComments.prepend(newBlock);

  likeButton.onclick = (e) => {
    let currentButton = e.target.closest("button");
    const countElem = currentButton.querySelector(".count");
    const isLike = currentButton.classList.contains("like");
    let likeValue = +currentButton.value;
    likeValue = isLike ? likeValue - 1 : likeValue + 1;
    currentButton.classList.toggle("like");
    currentButton.value = likeValue;
    if (currentButton.value == 0) {
      countElem.classList.add("hidden");
    } else {
      countElem.classList.remove("hidden");
    }
    countElem.textContent = likeValue;
  };

  deleteButton.addEventListener("click", () => {
    newBlock.remove();
  });
};

export default addMessage;
