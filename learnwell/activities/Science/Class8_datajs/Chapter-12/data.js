export const chapter = "Chapter - 12: Friction";
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
        question: "Which force opposes the relative motion between two surfaces in contact?",
        optionA: "Magnetic force",
        optionB: "Friction",
        optionC: "Muscular force",
        correctAnswer: "Friction",
      }),
      shuffleOptions({
        question: "Which type of surface produces more friction?",
        optionA: "Smooth surface",
        optionB: "Rough surface",
        optionC: "Slippery surface",
        correctAnswer: "Rough surface",
      }),
      shuffleOptions({
        question: "Which friction acts when an object is just about to move from rest?",
        optionA: "Sliding friction",
        optionB: "Rolling friction",
        optionC: "Limiting friction",
        correctAnswer: "Limiting friction",
      }),
      shuffleOptions({
        question: "Which friction is lowest among all types?",
        optionA: "Sliding friction",
        optionB: "Rolling friction",
        optionC: "Static friction",
        correctAnswer: "Rolling friction",
      }),
      shuffleOptions({
        question: "Which force slows down and finally stops a moving bicycle?",
        optionA: "Electrostatic force",
        optionB: "Elastic force",
        optionC: "Frictional force",
        correctAnswer: "Frictional force",
      }),
      shuffleOptions({
        question: "Which method is used to reduce friction in machines?",
        optionA: "Increasing roughness",
        optionB: "Using lubricants",
        optionC: "Adding weight",
        correctAnswer: "Using lubricants",
      }),
      shuffleOptions({
        question: "Which friction acts on objects moving through air or water?",
        optionA: "Fluid friction",
        optionB: "Sliding friction",
        optionC: "Contact force",
        correctAnswer: "Fluid friction",
      }),
      shuffleOptions({
        question: "Which shape helps reduce friction in air and water?",
        optionA: "Square shape",
        optionB: "Rough shape",
        optionC: "Streamlined shape",
        correctAnswer: "Streamlined shape",
      }),
      shuffleOptions({
        question: "Which device contains small steel balls to reduce friction?",
        optionA: "Lever",
        optionB: "Ball bearing",
        optionC: "Screw jack",
        correctAnswer: "Ball bearing",
      }),
      shuffleOptions({
        question: "Which friction prevents an object from moving until enough force is applied?",
        optionA: "Limiting friction",
        optionB: "Rolling friction",
        optionC: "Magnetic friction",
        correctAnswer: "Limiting friction",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Friction always acts in the ______ direction of motion.",
        optionA: "same",
        optionB: "opposite",
        optionC: "upward",
        correctAnswer: "opposite",
      }),
      shuffleOptions({
        question: "The uneven surfaces of objects contain ______.",
        optionA: "holes",
        optionB: "bumps",
        optionC: "smoothness",
        correctAnswer: "bumps",
      }),
      shuffleOptions({
        question: "The maximum friction present just before motion starts is called ______ friction.",
        optionA: "fluid",
        optionB: "limiting",
        optionC: "rolling",
        correctAnswer: "limiting",
      }),
      shuffleOptions({
        question: "Sliding friction is ______ than static friction.",
        optionA: "less",
        optionB: "more",
        optionC: "equal",
        correctAnswer: "less",
      }),
      shuffleOptions({
        question: "Friction that acts on objects moving in liquids or gases is called ______ friction.",
        optionA: "fluid",
        optionB: "contact",
        optionC: "elastic",
        correctAnswer: "fluid",
      }),
      shuffleOptions({
        question: "The force acting when a body rolls over another surface is called ______ friction.",
        optionA: "rolling",
        optionB: "sliding",
        optionC: "static",
        correctAnswer: "rolling",
      }),
      shuffleOptions({
        question: "Substances that reduce friction, such as oil and grease, are called ______.",
        optionA: "lubricants",
        optionB: "powders",
        optionC: "fuels",
        correctAnswer: "lubricants",
      }),
      shuffleOptions({
        question: "The shape used to reduce fluid friction is called a ______ shape.",
        optionA: "curved",
        optionB: "streamlined",
        optionC: "pointed",
        correctAnswer: "streamlined",
      }),
      shuffleOptions({
        question: "Applying talcum powder on a carrom board ______ friction.",
        optionA: "reduces",
        optionB: "increases",
        optionC: "removes",
        correctAnswer: "reduces",
      }),
      shuffleOptions({
        question: "Friction causes ______ of moving machine parts.",
        optionA: "wear and tear",
        optionB: "cooling",
        optionC: "sharpening",
        correctAnswer: "wear and tear",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Friction always opposes motion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Static friction is usually greater than sliding friction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Friction cannot be completely eliminated.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ball bearings are used to decrease friction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Streamlining helps reduce friction in both air and water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fluid friction acts only in liquids.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Friction depends on the nature of the two surfaces in contact.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Polishing a surface helps reduce friction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Friction can produce heat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rolling friction is always less than sliding friction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
