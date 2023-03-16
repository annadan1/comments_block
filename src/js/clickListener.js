const clickListener = (newUserInfo, currentUser) => {
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
};

export default clickListener;