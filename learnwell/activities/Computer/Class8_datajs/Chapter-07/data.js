export const chapter = "Chapter - 7: Adobe Animate CC";
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
        question: "Which software was originally released in 1996 for creating web-based animation?",
        optionA: "Future Splash",
        optionB: "PowerPoint",
        optionC: "Flash Studio",
        correctAnswer: "Future Splash",
      }),
      shuffleOptions({
        question: "What is the file extension of an animated Flash movie when it is executed?",
        optionA: ".mov",
        optionB: ".swf",
        optionC: ".ani",
        correctAnswer: ".swf",
      }),
      shuffleOptions({
        question: "Which area in Flash is used to place drawings and objects?",
        optionA: "Scene",
        optionB: "Panel",
        optionC: "Stage",
        correctAnswer: "Stage",
      }),
      shuffleOptions({
        question: "Which tool is used to draw stars in Adobe Animate CC?",
        optionA: "Pencil Tool",
        optionB: "PolyStar Tool",
        optionC: "Magic Wand",
        correctAnswer: "PolyStar Tool",
      }),
      shuffleOptions({
        question: "Which panel stores reusable symbols in Adobe Animate CC?",
        optionA: "Layers Panel",
        optionB: "Tools Panel",
        optionC: "Library Panel",
        correctAnswer: "Library Panel",
      }),
      shuffleOptions({
        question: "Which component shows the sequence of frames used in an animation?",
        optionA: "Menu Bar",
        optionB: "Timeline",
        optionC: "Properties",
        correctAnswer: "Timeline",
      }),
      shuffleOptions({
        question: "What is the default Stage size in Flash?",
        optionA: "550 × 400 pixels",
        optionB: "600 × 500 pixels",
        optionC: "500 × 450 pixels",
        correctAnswer: "550 × 400 pixels",
      }),
      shuffleOptions({
        question: "Which shortcut key inserts a keyframe in Flash?",
        optionA: "F2",
        optionB: "F6",
        optionC: "F8",
        correctAnswer: "F6",
      }),
      shuffleOptions({
        question: "Which panel allows you to change background colour, frame rate or stage size?",
        optionA: "Tools Panel",
        optionB: "Properties Panel",
        optionC: "Output Panel",
        correctAnswer: "Properties Panel",
      }),
      shuffleOptions({
        question: "Which feature allows you to reuse an object multiple times without changing the original image?",
        optionA: "Frame",
        optionB: "Symbol Instance",
        optionC: "Shape Tool",
        correctAnswer: "Symbol Instance",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A Flash document is saved with the ______ extension.",
        optionA: ".exe",
        optionB: ".fla",
        optionC: "anim",
        correctAnswer: ".fla",
      }),
      shuffleOptions({
        question: "Frames appear as small ______ cells on the Timeline.",
        optionA: "circular",
        optionB: "rectangular",
        optionC: "triangular",
        correctAnswer: "rectangular",
      }),
      shuffleOptions({
        question: "A change in the colour or position of an object is represented by a ______.",
        optionA: "keyframe",
        optionB: "symbol",
        optionC: "layer",
        correctAnswer: "keyframe",
      }),
      shuffleOptions({
        question: "An object placed on the Stage from the Library is known as an ______.",
        optionA: "effect",
        optionB: "instance",
        optionC: "action",
        correctAnswer: "instance",
      }),
      shuffleOptions({
        question: "The Stage background colour can be changed from the ______ panel.",
        optionA: "Layers",
        optionB: "Properties",
        optionC: "Tools",
        correctAnswer: "Properties",
      }),
      shuffleOptions({
        question: "Star point size can be set between 0 and ______.",
        optionA: "1",
        optionB: "5",
        optionC: "10",
        correctAnswer: "1",
      }),
      shuffleOptions({
        question: "Flash Workspace includes components such as Tools Panel, Stage and ______.",
        optionA: "Browser",
        optionB: "Timeline",
        optionC: "Mailbox",
        correctAnswer: "Timeline",
      }),
      shuffleOptions({
        question: "The sequence of images runs fast to create the effect of ______.",
        optionA: "vibration",
        optionB: "lighting",
        optionC: "animation",
        correctAnswer: "animation",
      }),
      shuffleOptions({
        question: "The term used for dividing a movie into separate parts is ______.",
        optionA: "scenes",
        optionB: "boxes",
        optionC: "slides",
        correctAnswer: "scenes",
      }),
      shuffleOptions({
        question: "Adobe Flash was mainly used for creating ______ animations.",
        optionA: "desktop",
        optionB: "web-based",
        optionC: "mechanical",
        correctAnswer: "web-based",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Adobe Animate CC allows adding sound files to make animations more attractive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Layers help you draw and erase objects on one layer without affecting others.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A symbol cannot be edited once it is added to the Library.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Adobe Flash was invented by Jonathan Gay and Robert Tatsumi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Frames are displayed as small circular cells on the Timeline.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Timeline helps decide the order in which the movie will be played.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "You cannot change the Stage size in Adobe Animate CC.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A movie file created in Flash runs with the .swf extension.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The PolyStar Tool can be used to draw stars and polygons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "An animation cannot be previewed unless it is exported.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
