const categories = document.querySelectorAll("ul#categories li.item");
console.log("Number of categories:", categories.length);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2");
  const elements = category.querySelectorAll("ul li");
  console.log("Category:", categoryTitle.textContent);
  console.log("Elements:", elements.length);
});

const style = document.createElement("style");
style.textContent = `
* {
  box-sizing: border-box;
}

body {
  margin: 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: #2e2f42;
}

#categories {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 392px;
  padding: 0;
 }

.item {
  padding: 0 16px;
  border-radius: 8px;
  background-color: #F6F6FE;
  
}

.item ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  
}

.item li {
  padding: 8px 16px;
  border-color: #808080;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
}

h2 {
  font-weight: 600;
  font-size: 24px;
  line-height: 1.33;
  margin-bottom: 8px;
 }

`;
document.head.append(style);
