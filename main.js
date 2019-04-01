const crazyButtons = Array.from(document.querySelectorAll(".btn-crazy"));

crazyButtons.forEach(crazyButton => {
  crazyButton.addEventListener("mouseover", () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = crazyButton.offsetWidth;
    const buttonHeight = crazyButton.offsetHeight;
    const randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));
    crazyButton.style.left = `${randomX}px`;
    crazyButton.style.top = `${randomY}px`;
  });
});

// document.addEventListener("DOMContentLoaded", evt => {
//   const buttons = document.querySelectorAll(".btn");

//   const mouseOverEvt = evt => {
//     let newWidth = Math.random() * (window.innerWidth - evt.target.offsetWidth);
//     let newHeight =
//       Math.random() * (window.innerHeight - evt.target.offsetHeight);

//     evt.target.style.left = `${newWidth}px`;
//     evt.target.style.top = `${newHeight}px`;
//   };

//   const mouseClickEvt = btn => {
//     btn.innerText = "You catch Me";
//     btn.removeEventListener("mouseover", mouseOverEvt);
//   };

//   buttons.forEach(btn => {
//     btn.addEventListener("mouseover", mouseOverEvt);
//     btn.addEventListener("click", evt => mouseClickEvt(evt.target));
//   });
// });
