const btn = document.querySelector("button");
const option = document.querySelector("select");

btn.addEventListener("click", () => {
  const quantity = option.value;

  getRandomDogImage(quantity);
});

// A better way to write code when fetch api

const getRandomDogImage = async (quantity) => {
  const response = await fetch(
    `https://dog.ceo/api/breeds/image/random/${quantity}`
  );
  const json = await response.json();
  let imageContainer = "";
  json.message.forEach((imageURL) => {
    imageContainer += `<div>
    <img src = '${imageURL}'>
    </div>`;
  });
  document.querySelector(".dog-image-container").innerHTML = imageContainer;
};

// function getRandomDogImage(quantity) {
//   fetch(`https://dog.ceo/api/breeds/image/random/${quantity}`)
//     .then((res) => res.json())
//     .then((json) => {
//       let imageContainer = "";
//       json.message.forEach((imageURL) => {
//         imageContainer += `<img src = '${imageURL}'>

//         `;
//       });

//       document.querySelector(".dog-image-container").innerHTML = imageContainer;

//     });
// }
