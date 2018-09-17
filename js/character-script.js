const charForm = document.querySelector(".post-character");
const feedback = document.querySelector(".feedback-list");

const nameInput = document.querySelector(".char-name");
const jobInput = document.querySelector(".char-job");
const weaponInput = document.querySelector(".char-weapon");

charForm.onsubmit = (event) => {
  // normally the page would refresh with a submit event
  // "preventDefault()" STOPS that from happening
  event.preventDefault();

  console.log("Submit new character! 🎬");

  // Send data as the 2ND parameter for POST requests
  const formBody = {
    name: nameInput.value,
    occupation: jobInput.value,
    weapon: weaponInput.value,
  };
  axios.post("https://ih-crud-api.herokuapp.com/characters", formBody)
    .then(response => {
      console.log("Created new character! 👤");
      console.log(response.data);

      const { name, id } = response.data;

      const newLi = document.createElement("li");
      newLi.innerHTML = `Added <b>${name}</b> (id: ${id})`;
      feedback.appendChild(newLi);
    })
    .catch(err => {
      console.log("ERROR! 💩");
      console.log(err);
    });
};
