import "./styles/style.scss";
import addNewUserMessage from "./js/newUsersLogic.js";
import buttonsForLike from "./js/buttonsForLikeLogic";

const init = () => {
  buttonsForLike();
  addNewUserMessage();
};

init();
