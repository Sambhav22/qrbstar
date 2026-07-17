export const chapter = "Chapter - 6: More on PowerPoint";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Which feature gives a stylish, artistic look to the text?",
        optionA: "Theme",
        optionB: "WordArt",
        optionC: "Layout",
        correctAnswer: "WordArt",
      }),
      shuffleOptions({
        question: "Which tab contains the Illustrations group used to insert shapes?",
        optionA: "Design",
        optionB: "Insert",
        optionC: "Format",
        correctAnswer: "Insert",
      }),
      shuffleOptions({
        question: "Which effect makes a shape appear as if it is raised above the slide background?",
        optionA: "Shadow",
        optionB: "Reflection",
        optionC: "Animation",
        correctAnswer: "Shadow",
      }),
      shuffleOptions({
        question: "A predefined set of colours, fonts and effects is called —",
        optionA: "Theme",
        optionB: "Layout",
        optionC: "Template",
        correctAnswer: "Theme",
      }),
      shuffleOptions({
        question: "Which group on the Design tab shows different theme styles?",
        optionA: "Variants",
        optionB: "Transitions",
        optionC: "Layout",
        correctAnswer: "Variants",
      }),
      shuffleOptions({
        question: "The Apply to All command is found in the —",
        optionA: "Timing group",
        optionB: "Font group",
        optionC: "Shape group",
        correctAnswer: "Timing group",
      }),
      shuffleOptions({
        question: "Which tab allows you to add sound to slide transitions?",
        optionA: "Insert",
        optionB: "Transitions",
        optionC: "Design",
        correctAnswer: "Transitions",
      }),
      shuffleOptions({
        question: "The Format Shape pane is used to change —",
        optionA: "Colour and distance of shadows",
        optionB: "Font size",
        optionC: "Layout of slides",
        correctAnswer: "Colour and distance of shadows",
      }),
      shuffleOptions({
        question: "Which key starts a slide show from the beginning?",
        optionA: "F5",
        optionB: "F6",
        optionC: "Esc",
        correctAnswer: "F5",
      }),
      shuffleOptions({
        question: "Which key is used to exit from slide show mode?",
        optionA: "F5",
        optionB: "Esc",
        optionC: "Ctrl",
        correctAnswer: "Esc",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Text can be added anywhere on a slide by inserting a _______ .",
        optionA: "text box",
        optionB: "placeholder",
        optionC: "theme",
        correctAnswer: "text box",
      }),
      shuffleOptions({
        question: "The feature that changes the appearance of text is called _______ .",
        optionA: "WordArt",
        optionB: "Shapes",
        optionC: "Transition",
        correctAnswer: "WordArt",
      }),
      shuffleOptions({
        question: "The _______ tab is used to insert different shapes.",
        optionA: "Insert",
        optionB: "Home",
        optionC: "Design",
        correctAnswer: "Insert",
      }),
      shuffleOptions({
        question: "Adding a _______ to a shape helps to create contrast with the background.",
        optionA: "shadow",
        optionB: "texture",
        optionC: "theme",
        correctAnswer: "shadow",
      }),
      shuffleOptions({
        question: "A _______ gives a consistent look to the whole presentation.",
        optionA: "theme",
        optionB: "slide",
        optionC: "colour",
        correctAnswer: "theme",
      }),
      shuffleOptions({
        question: "The option to add sound to a transition is found on the _______ tab.",
        optionA: "Transitions",
        optionB: "Format",
        optionC: "Insert",
        correctAnswer: "Transitions",
      }),
      shuffleOptions({
        question: "Variants of themes use different _______ while keeping the same style.",
        optionA: "colours",
        optionB: "shapes",
        optionC: "slides",
        correctAnswer: "colours",
      }),
      shuffleOptions({
        question: "The duration of a transition is set in the _______ group.",
        optionA: "Timing",
        optionB: "Font",
        optionC: "Shape",
        correctAnswer: "Timing",
      }),
      shuffleOptions({
        question: "The _______ icon at the bottom right corner starts a presentation from the current slide.",
        optionA: "Play Slide Show",
        optionB: "Insert Slide",
        optionC: "Stop",
        correctAnswer: "Play Slide Show",
      }),
      shuffleOptions({
        question: "The Format Shape pane appears on the _______ side of the window.",
        optionA: "right",
        optionB: "left",
        optionC: "top",
        correctAnswer: "right",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "PowerPoint is a presentation software developed by Microsoft.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "You cannot type inside a shape in PowerPoint.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "WordArt can be applied only to titles and not to text boxes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shadow effects can be added from the Format tab.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A theme changes the colours and fonts of slides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Variants allow you to modify the colour scheme of a theme.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Transitions are used to apply effects between slides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Apply to All command adds the same transition to every slide.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pressing F5 exits the slide show mode.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pressing Esc key closes the slide show.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
