// Custom Cursor Script
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

document.querySelectorAll("button, .service").forEach((element) => {
  element.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(1.5)";
  });
  element.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
  });
});
