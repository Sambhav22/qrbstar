const { createApp } = Vue;
import { chapter, activityData } from "./data.js";

document.title = `${chapter} | Activity ${localStorage.getItem(
  "activityNumber"
)}`;
createApp({
  data() {
    return {
      chapter: chapter,
      activityNumber: localStorage.getItem("activityNumber"),
      activity: activityData.activity,
      question: activityData.questions[0].question,
      optionA: activityData.questions[0].optionA,
      optionB: activityData.questions[0].optionB,
      optionC: activityData.questions[0].optionC,
      optionD: activityData.questions[0].optionD,
      correctAnswer: activityData.questions[0].correctAnswer,
      questionIndex: 0,
      questions: activityData.questions,
      correctSoundFx: new Audio("./sound/correct.mpeg"),
      incorrectSoundFx: new Audio("./sound/incorrect.mpeg"),
    };
  },
  methods: {
    submit() {
      let selectedOptionEl = document.querySelector(
        'input[name="answer"]:checked'
      );
      if (selectedOptionEl) {
        let userAnswer = selectedOptionEl.value;

        // Disable inputs
        let optionBtns = document.querySelectorAll(".optionBtn");
        // console.log(options[0]);
        for (let i = 0; i < optionBtns.length; i++) {
          optionBtns[i].disabled = true;
        }

        // Enable button
        if (this.questionIndex != this.questions.length - 1) {
          enableButton("nextBtn");
        } else {
          hide("submitBtn");
          hide("answerBtn");
          hide("nextBtn");
          show("answerKeyBtn");
        }
        enableButton("resetBtn");

        // console.log(userAnswer);
        if (userAnswer == this.correctAnswer) {
          selectedOptionEl.parentElement.classList.remove("bg-blue-800");
          selectedOptionEl.parentElement.classList.add("bg-green-400");
          selectedOptionEl.parentElement.previousSibling.previousSibling.classList.remove(
            "hidden"
          );
          this.correctSoundFx.play();
        } else {
          enableButton("answerBtn");
          selectedOptionEl.parentElement.classList.remove("bg-blue-800");
          selectedOptionEl.parentElement.classList.add("bg-red-400");
          selectedOptionEl.parentElement.previousSibling.classList.remove(
            "hidden"
          );
          this.incorrectSoundFx.play();
        }
      } else {
        alert("Oops! No option is selected.");
      }
    },
    answer() {
      let optionsEl = document.querySelectorAll('input[name="answer"]');
      optionsEl.forEach((element) => {
        if (element.value == this.correctAnswer) {
          element.parentElement.classList.remove("bg-blue-400");
          element.parentElement.classList.add("bg-green-400");
          element.parentElement.previousSibling.previousSibling.classList.remove(
            "hidden"
          );
        } else {
          element.parentElement.classList.remove("bg-blue-400");
          element.parentElement.classList.add("bg-red-400");
          element.parentElement.previousSibling.classList.remove("hidden");
        }
      });
      // let correctOptionEl = document.querySelector(
      //   `input[value="${this.correctAnswer}"]`
      // );
      // console.log(this.correctAnswer);
      // console.log(correctOptionEl);
      // if (correctOptionEl) {
      //   correctOptionEl.parentElement.classList.remove("bg-blue-400");
      //   correctOptionEl.parentElement.classList.add("bg-green-400");
      //   correctOptionEl.parentElement.previousSibling.previousSibling.classList.remove("hidden");
      // }
    },
    reset() {
      window.location.reload();
      // let options = document.querySelectorAll(".optionInput");
      // options.forEach((element) => {
      //   element.parentElement.classList.remove("bg-green-400", "bg-red-400");
      //   element.parentElement.classList.add("bg-blue-400");
      //   element.disabled = false;
      //   if(element.checked){
      //     element.checked = false;
      //   }
      // });
      // this.questionIndex = 0;
      // disableButton('nextBtn');
    },
    next() {
      // reset correct/incorrect icons
      let resIcons = document.querySelectorAll(".resIcon");
      resIcons.forEach((el) => {
        el.classList.add("hidden");
      });

      // reset options
      let options = document.querySelectorAll(".optionInput");
      options.forEach((element) => {
        element.parentElement.classList.remove("bg-green-400", "bg-red-400");
        element.parentElement.classList.add("bg-blue-400");
        element.disabled = false;
        if (element.checked) {
          element.checked = false;
        }
      });
      // Enable inputs
      let optionBtns = document.querySelectorAll(".optionBtn");
      // console.log(options[0]);
      for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].disabled = false;
      }
      // disable ansewr button
      disableButton("answerBtn");
      //   console.log(this.questions.length);
      let i = ++this.questionIndex;
      if (i < this.questions.length) {
        this.question = this.questions[i].question;
        this.optionA = this.questions[i].optionA;
        this.optionB = this.questions[i].optionB;
        this.optionC = this.questions[i].optionC;
        this.optionD = this.questions[i].optionD;
        this.correctAnswer = this.questions[i].correctAnswer;
        // if (i == this.questions.length - 1) {
        disableButton("nextBtn");
        // }
      }
    },
    answerKey() {
      let answerKeyHtml = `<section class="w-full p-4 bg-yellow-400 rounded-lg shadow-lg">
      <h1 class="text-lg font-bold text-center">Answer Key</h1>
    </section>
    <section class="my-4">
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
    <thead class="bg-gray-800 text-white">
      <tr>
        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">#</th>
        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Question</th>
        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Answer</th>
      </tr>
    </thead>
      <tbody class="text-gray-700">`;
      this.questions.forEach((item, index) => {
        answerKeyHtml += `
        <tr>
        <td class="text-left py-3 px-4">${++index}</td>
        <td class="text-left py-3 px-4">${item.question}</td>
        <td class="text-left py-3 px-4">${item.correctAnswer}</td>
        `;
      });
      answerKeyHtml += `</tbody>
    </table></div>
    </section>
    <section class="flex flex-wrap justify-around">
      <button onclick="window.location.reload()" id="resetBtn"
        class="w-32 px-3 py-2 m-2 text-lg text-white uppercase bg-red-600 border border-white rounded-md"
        >Reset</button>
    </section>`;

      let mainSection = document.getElementById("main");
      mainSection.innerHTML = answerKeyHtml;
    },
  },
}).mount("#app");

// window.addEventListener("load", () => {
//   let optionInput = document.getElementsByClassName("optionInput");
//   //   console.log(optionInput);
//   let prevEl;
//   let currValue;
//   for (let i = 0; i < optionInput.length; i++) {
//     // console.log(optionInput[i]);
//     optionInput[i].addEventListener("change", function (e) {
//       // optionInput[i].parentElement.addEventListener("click", function (e) {
//       // console.log(prevEl);

//       if (prevEl) {
//         prevEl.parentElement.classList.remove("bg-blue-800");
//         prevEl.parentElement.classList.add("bg-blue-400");
//       }
//       if (this !== prevEl) {
//         prevEl = this;
//       }
//       //   currValue = this.value;
//       //   console.log(currValue);
//       optionInput[i].parentElement.classList.remove("bg-blue-400");
//       optionInput[i].parentElement.classList.add("bg-blue-800");
//     });
//   }
// });

let optionABtn = document.getElementById("optionABtn");
let optionBBtn = document.getElementById("optionBBtn");
let optionCBtn = document.getElementById("optionCBtn");
let optionDBtn = document.getElementById("optionDBtn");
let optionAInput = document.getElementById("optionA");
let optionBInput = document.getElementById("optionB");
let optionCInput = document.getElementById("optionC");
let optionDInput = document.getElementById("optionD");

// const optionElements = document.querySelectorAll(".options li");
// console.log(optionElements);

if (optionABtn) {
  optionABtn.addEventListener("click", function (e) {
    optionBtnClickHandle(
      optionAInput,
      optionBInput,
      optionCInput,
      optionDInput
    );
  });
}
if (optionBBtn) {
  optionBBtn.addEventListener("click", function (e) {
    optionBtnClickHandle(
      optionBInput,
      optionAInput,
      optionCInput,
      optionDInput
    );
  });
}
if (optionCBtn) {
  optionCBtn.addEventListener("click", function (e) {
    optionBtnClickHandle(
      optionCInput,
      optionAInput,
      optionBInput,
      optionDInput
    );
  });
}
if (optionDBtn) {
  optionDBtn.addEventListener("click", function (e) {
    optionBtnClickHandle(
      optionDInput,
      optionAInput,
      optionBInput,
      optionCInput
    );
  });
}

function optionBtnClickHandle(selectedEl, otherEl1, otherEl2, otherEl3) {
  selectedEl.checked = true;
  selectedEl.parentElement.classList.remove("bg-blue-400");
  selectedEl.parentElement.classList.add("bg-blue-800");
  // Remove color from other options
  otherEl1 && otherEl1.parentElement.classList.remove("bg-blue-800");
  otherEl1 && otherEl1.parentElement.classList.add("bg-blue-400");
  otherEl2 && otherEl2.parentElement.classList.remove("bg-blue-800");
  otherEl2 && otherEl2.parentElement.classList.add("bg-blue-400");
  otherEl3 && otherEl3.parentElement.classList.remove("bg-blue-800");
  otherEl3 && otherEl3.parentElement.classList.add("bg-blue-400");
}

function enableButton(elemId) {
  let Button = document.getElementById(elemId);
  Button.disabled = false;
  Button.classList.remove("bg-gray-400");
  Button.classList.add("bg-red-600");
}

function disableButton(elemId) {
  let Button = document.getElementById(elemId);
  Button.disabled = true;
  Button.classList.remove("bg-red-600");
  Button.classList.add("bg-gray-400");
}

function show(elemId) {
  let Button = document.getElementById(elemId);
  Button.disabled = false;
  // Button.classList.remove("bg-gray-400");
  Button.classList.remove("hidden");
}

function hide(elemId) {
  let Button = document.getElementById(elemId);
  Button.disabled = false;
  // Button.classList.remove("bg-gray-400");
  Button.classList.add("hidden");
}
