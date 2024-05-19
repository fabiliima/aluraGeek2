const nameInput = document.getElementById("name");
const priceInput = document.getElementById("value");
const imageInput = document.getElementById("img");
const newProduct = document.getElementById("newProduct");
const clearFormButton = document.getElementById("clearFormButton");
const addNewProduct = document.getElementById("addNewProduct");

clearFormButton.addEventListener("click", () => {
  nameInput.value = "";
  priceInput.value = "";
  imageInput.value = "";
});

addNewProduct.addEventListener("click", (event) => {
  event.preventDefault();
  newProduct.hidden = false;

  const nameProduct = document.createElement("p");
  nameProduct.textContent = `Name:  ${nameInput.value}`;
  newProduct.appendChild(nameProduct);

  const priceProduct = document.createElement("p");
  priceProduct.textContent = `Price: ${priceInput.value}`;
  newProduct.appendChild(priceProduct);

  const imgProduct = document.createElement("p");
  imgProduct.textContent = `Image:  ${imageInput.value}`;
  newProduct.appendChild(imgProduct);

  nameInput.value = "";
  priceInput.value = "";
  imageInput.value = "";
});
