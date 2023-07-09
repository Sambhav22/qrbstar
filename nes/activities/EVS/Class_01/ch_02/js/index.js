import { chapter, noOfActivities } from "./data.js";

document.title = `${chapter} | Activities`;
document.getElementById("chapterName").innerText = chapter;

let activityBtns = "";
for (let i = 1; i <= noOfActivities; i++) {
  activityBtns += `<a class="px-4 py-2 m-3 font-bold text-white bg-red-600 border rounded-md cursor-pointer" data-activity="${i}">Activity ${i}</a>`;
}

const activityBtnsContainer = document.getElementById("activityBtnsContainer");
activityBtnsContainer.innerHTML = activityBtns;

activityBtnsContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    const activityNumber = e.target.getAttribute("data-activity");
    localStorage.setItem("activityNumber", activityNumber);
    window.location.href = "activity.html";
  }
});
