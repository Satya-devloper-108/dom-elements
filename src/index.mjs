import "./styles.css";

//Dom manipulation

// 1.getElementById
const header = document.getElementById("main-heading");
const header2 = document.getElementById("main-heading2");
console.log(header);
console.log(header2);
console.log(header.outerHTML);

// 2.GetElementByClassName
const listName = document.getElementsByClassName("list-items");
for (let i = 0; i < listName.length; i++) {
  console.log(listName[i].textContent);
}
console.log(listName);

// 3. GetElementByTagName
console.log("GetElementByTagName");
const listItemsByTag = document.getElementsByTagName("li");
console.log(listItemsByTag);
