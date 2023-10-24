console.log("first file");

const allLi = document.getElementsByTagName("li");
console.log(allLi);

/* 
for (const li of allLi) {
  li.style.fontSize = "40px";
}
 */

const allTitles = document.getElementsByClassName("section-title");
console.log(allTitles);

const secondSection = document.getElementById("second-section");
console.log(secondSection);
secondSection.style.color = "white";
secondSection.style.backgroundColor = "tomato";

// document.querySelectorAll
// document.querySelector
