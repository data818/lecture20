// const nameInput = document.querySelector("#nameInput");

// const greetBtn = document.querySelector("#greetBtn");

// const greeting = document.querySelector("#greeting");

// greetBtn.addEventListener("click,"),
//   function () {
//     const inputValue = document.querySelector("#nameInput").value;

//     if (inputValue % 2 === 0) {
//       greeting.textContent = `რიცხვი ${inputValue} არის ლუწი`;
//     } else if (inputValue % 2 === 0) {
//       greeting.textContent = `რიცხვი ${inputValue} არის კენტი`;
//     }
//   };

// function sayHello() {
//   console.log("gamarjoba");
// }

// greetBtn.addEventListener("click", function () {
//   const nameInput = document.querySelector("#nameInput").value;
//   greeting.textContent = `Hello ${nameInput}`;

//   if (nameInput === "data") {
//     greeting.textContent = `Hello ${nameInput}`;
//   } else {
//     greeting.textContent = `Hello guest`;
//   }
// });

// const passwordInput = document.querySelector("#passwordInput");

// const togglePasswordBtn = document.querySelector("#togglePassword");

// document.addEventListener("keydown", function (event) {
//   console.log(event.key);
// });

//   //   passwordInput.type = "text";
//   if (passwordInput.type === "text") {
//     passwordInput.type = "password";
//   } else {
//     passwordInput.type = "text";
//   }

const myProductDescription = {
  title: "100 touying",
  description: "lorem affa ",
  price: 148914.12,
};

const productTitle = document.querySelector("#productTitle");
const productDescr = document.querySelector("#productDescription");
const productPrice = document.querySelector("#productPrice");
const productBtn = document.querySelector("#updateBtn");

updateBtn.addEventListener("click", function () {
  productTitle.textContent = myProductDescription.title;
  productDescr.textContent = myProductDescription.productDescr;
  productPrice.textContent = myProductDescription.price;
});
