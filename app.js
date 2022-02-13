let doller = document.getElementById("doller");
let doller1 = document.getElementById("doller1");

const input = document.getElementById("input");
const input1 = document.getElementById("input1");

const button = document.getElementById("button");

const decrementbtn = document.getElementById("decrementbtn");
const incrementBtn = document.getElementById("incrementbtn");
const decrementbtn1 = document.getElementById("decrementbtn1");
const incrementbtn1 = document.getElementById("incrementbtn1");

decrementbtn.addEventListener("click", () => {
  let inputValue = input.value - 1;
  if (inputValue > 0) {
    input.value = inputValue;
  }

  let dollertak = 200;
  let dollerinput = Number(doller.innerText);

  let totalDoller = dollerinput - dollertak;
  if (totalDoller >= dollertak) {
    doller.innerText = totalDoller;
  }
});
incrementBtn.addEventListener("click", () => {
  let inputValue = Number(input.value);
  inputValue = inputValue + 1;
  input.value = inputValue;

  dollertak = 200;
  let totalDoller = dollertak * inputValue;
  doller.innerText = totalDoller;
});

// item two

decrementbtn1.addEventListener("click", () => {
  let inputValue = input1.value - 1;
  if (inputValue > 0) {
    input1.value = inputValue;
  }

  let dollertak = 200;
  let dollerinput = Number(doller1.innerText);

  let totalDoller = dollerinput - dollertak;
  if (totalDoller >= dollertak) {
    doller1.innerText = totalDoller;
  }
});
incrementbtn1.addEventListener("click", () => {
  let inputValue = Number(input1.value);
  inputValue = inputValue + 1;
  input1.value = inputValue;

  dollertak = 200;
  let totalDoller = dollertak * inputValue;
  doller1.innerText = totalDoller;
});
