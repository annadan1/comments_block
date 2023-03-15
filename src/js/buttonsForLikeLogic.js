const buttonsLogic = () => {
  const buttonsForLike = document.querySelectorAll(".button__forLike");
  buttonsForLike.forEach((button) => {
    button.addEventListener("click", (e) => {
      let currentButton = e.target.closest("button");
      const countElem = currentButton.querySelector(".count");
      const isLike = currentButton.classList.contains("like");
      let likeValue = +currentButton.value;
      likeValue = isLike ? likeValue - 1 : likeValue + 1;
      currentButton.classList.toggle("like");
      currentButton.value = likeValue;
      if (currentButton.value == 0) {
        countElem.classList.add('hidden');
      } else {
        countElem.classList.remove('hidden')
      }
      countElem.textContent = likeValue;
    });
  });
};

export default buttonsLogic;