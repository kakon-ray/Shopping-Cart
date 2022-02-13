let doller = document.getElementById("doller");
let doller1 = document.getElementById("doller1");

const input = document.getElementById("input");
const input1 = document.getElementById("input1");

const button = document.getElementById("button");

const decrementbtn = document.getElementById("decrementbtn");
const incrementBtn = document.getElementById("incrementbtn");
const decrementbtn1 = document.getElementById("decrementbtn1");
const incrementbtn1 = document.getElementById("incrementbtn1");

let subTotalDollerAllItem = document.getElementById("subTotalDollerAllItem");
const totalDollerAllItem = document.getElementById("totalDollerAllItem");

const vat = document.getElementById("vat");
function updateValue(type, dollertak, dollerinput, doller) {
  let totalDoller;

  if (type === true) totalDoller = dollerinput + dollertak;
  else totalDoller = dollerinput - dollertak;

  if (totalDoller >= 0) {
    doller.innerText = totalDoller;

    // SubTotal update
    let inTotaldoller1InnerText = Number(subTotalDollerAllItem.innerText);
    if (type === true)
      subTotalDollerAllItem.innerText = inTotaldoller1InnerText + dollertak;
    else subTotalDollerAllItem.innerText = inTotaldoller1InnerText - dollertak;

    // vat update
    let AllItemVat = Number(vat.innerText);
    if (type === true) vat.innerText = AllItemVat + 2;
    else vat.innerText = AllItemVat - 2;

    // Total Doller Update vat + Subtotal
    const num = Number(subTotalDollerAllItem.innerText);
    const num2 = Number(vat.innerText);
    totalDollerAllItem.innerText = num + num2;
  }
}
//Item one

decrementbtn.addEventListener("click", () => {
  let inputValue = input.value - 1;
  if (inputValue >= 0) {
    input.value = inputValue;
  }
  let dollertak = 200;
  let dollerinput = Number(doller.innerText);
  updateValue(false, dollertak, dollerinput, doller);
});
incrementBtn.addEventListener("click", () => {
  let inputValue = Number(input.value);
  inputValue = inputValue + 1;
  input.value = inputValue;

  let dollertak = 200;
  let dollerinput = Number(doller.innerText);
  updateValue(true, dollertak, dollerinput, doller);
});

// item two

decrementbtn1.addEventListener("click", () => {
  let inputValue = input1.value - 1;
  if (inputValue >= 0) {
    input1.value = inputValue;
  }

  let dollertak = 100;
  let dollerinput = Number(doller1.innerText);

  updateValue(false, dollertak, dollerinput, doller1);
});
incrementbtn1.addEventListener("click", () => {
  let inputValue = Number(input1.value);
  inputValue = inputValue + 1;
  input1.value = inputValue;

  dollertak = 100;
  let dollerinput = Number(doller1.innerText);
  updateValue(true, dollertak, dollerinput, doller1);
});

let removeClass = document.getElementsByClassName("remove-item");

for (var i = 0; i < removeClass.length; i++) {
  removeClass[i].addEventListener("click", function () {
    this.parentNode.parentNode.parentNode.remove();
  });
}
