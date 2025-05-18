const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const name = inputEl.value.trim();
  outputEl.textContent = name === "" ? "Anonymous" : name;
});

const style = document.createElement("style");
style.textContent = `
body {
    margin: 24px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #2e2f42;
}
  input {
    width: 360px;
    height: 40px;
    padding-left: 16px;
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.33;
   }
`;

document.head.append(style);
