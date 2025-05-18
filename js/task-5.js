function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
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

.widget {
    margin: 100px, auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.change-color {
    font-family: inherit;
    width: 148px;
    height: 40px;
    font-weight: 500;
    color: #fff;
    border-radius: 8px;
    padding: 8px 16px;
    background-color: #4E75FF;
    cursor: pointer;
    border: none;
}
`;

document.head.append(style);
