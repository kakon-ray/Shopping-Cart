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

decrementbtn.addEventListener("click", () => {
  let inputValue = input.value - 1;
  if (inputValue >= 0) {
    input.value = inputValue;
  }

  let dollertak = 200;
  let dollerinput = Number(doller.innerText);

  let totalDoller = dollerinput - dollertak;
  if (totalDoller >= 0) {
    doller.innerText = totalDoller;

    // SubTotal update
    let inTotaldoller1InnerText = Number(subTotalDollerAllItem.innerText);
    subTotalDollerAllItem.innerText = inTotaldoller1InnerText - dollertak;
    // vat update
    let AllItemVat = Number(vat.innerText);
    vat.innerText = AllItemVat - 2;

    // Total Doller Update vat + Subtotal
    const num = Number(subTotalDollerAllItem.innerText);
    const num2 = Number(vat.innerText);
    totalDollerAllItem.innerText = num + num2;
  }
});
incrementBtn.addEventListener("click", () => {
  let inputValue = Number(input.value);
  inputValue = inputValue + 1;
  input.value = inputValue;

  dollertak = 200;
  let totalDoller = dollertak * inputValue;
  doller.innerText = totalDoller;

  // SubTotal update
  let inTotaldoller1InnerText = Number(subTotalDollerAllItem.innerText);
  subTotalDollerAllItem.innerText = inTotaldoller1InnerText + dollertak;
  // vat update
  let AllItemVat = Number(vat.innerText);
  vat.innerText = AllItemVat + 2;

  // Total Doller Update vat + Subtotal
  const num = Number(subTotalDollerAllItem.innerText);
  const num2 = Number(vat.innerText);
  totalDollerAllItem.innerText = num + num2;
});

// item two

decrementbtn1.addEventListener("click", () => {
  let inputValue = input1.value - 1;
  if (inputValue >= 0) {
    input1.value = inputValue;
  }

  let dollertak = 100;
  let dollerinput = Number(doller1.innerText);

  let totalDoller = dollerinput - dollertak;
  if (totalDoller >= 0) {
    doller1.innerText = totalDoller;

    // SubTotal update
    let inTotaldoller1InnerText = Number(subTotalDollerAllItem.innerText);
    subTotalDollerAllItem.innerText = inTotaldoller1InnerText - dollertak;
    // vat update
    let AllItemVat = Number(vat.innerText);
    vat.innerText = AllItemVat - 2;

    // Total Doller Update vat + Subtotal
    const num = Number(subTotalDollerAllItem.innerText);
    const num2 = Number(vat.innerText);
    totalDollerAllItem.innerText = num + num2;
  }
});
incrementbtn1.addEventListener("click", () => {
  let inputValue = Number(input1.value);
  inputValue = inputValue + 1;
  input1.value = inputValue;

  dollertak = 100;
  let totalDoller = dollertak * inputValue;
  doller1.innerText = totalDoller;

  // SubTotal update
  let inTotaldoller1InnerText = Number(subTotalDollerAllItem.innerText);
  subTotalDollerAllItem.innerText = inTotaldoller1InnerText + dollertak;
  // vat update
  let AllItemVat = Number(vat.innerText);
  vat.innerText = AllItemVat + 2;

  // Total Doller Update vat + Subtotal
  const num = Number(subTotalDollerAllItem.innerText);
  const num2 = Number(vat.innerText);
  totalDollerAllItem.innerText = num + num2;
});
