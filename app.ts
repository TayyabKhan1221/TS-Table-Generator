const form = document.querySelector("#tableForm")!;
const table = document.querySelector("#table")!;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event?.target as HTMLFormElement;
  const input = form?.firstElementChild as HTMLInputElement;

  const tableOf = Number(input.value);

  table.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    table.innerHTML += `<p>${tableOf} x ${i} = ${tableOf * i}</p>`;
  }
});

// const inputForm = document.getElementById("tableForm")! as HTMLFormElement;
// const input = document.getElementById("inputID")! as HTMLInputElement;
// const table = document.querySelector(".table")! as HTMLDivElement;
// const button = document.getElementById("btn")! as HTMLButtonElement;

// button.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const tableOf = Number(input.value);  // Convert input value to number
//   table.textContent = "";  // Clear previous content

//   for (let i = 1; i <= 12; i++) {
//     const message = `${tableOf} X ${i} = ${tableOf * i}`;
//     table.textContent += `${message}\n`;  // Append message as text content
//   }
// });
