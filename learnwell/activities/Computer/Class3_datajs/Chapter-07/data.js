export const chapter = "Chapter - 7: Advanced Features of Paint";
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
        question: "Which feature in Paint is used to make an image appear slanted?",
        optionA: "Rotate",
        optionB: "Skew",
        optionC: "Crop",
        correctAnswer: "Skew",
      }),
      shuffleOptions({
        question: "Which option helps to remove unwanted parts of an image?",
        optionA: "Crop",
        optionB: "Resize",
        optionC: "Flip",
        correctAnswer: "Crop",
      }),
      shuffleOptions({
        question: "What does the Flip horizontal option do to an image?",
        optionA: "Gives a mirror image",
        optionB: "Turns it upside down",
        optionC: "Crops it",
        correctAnswer: "Gives a mirror image",
      }),
      shuffleOptions({
        question: "Which tab contains the Rotate option in Paint?",
        optionA: "Home",
        optionB: "Insert",
        optionC: "View",
        correctAnswer: "Home",
      }),
      shuffleOptions({
        question: "What is the use of the Resize option?",
        optionA: "To make an image bigger or smaller",
        optionB: "To crop a picture",
        optionC: "To rotate an image",
        correctAnswer: "To make an image bigger or smaller",
      }),
      shuffleOptions({
        question: "Which tool helps to draw shapes with many sides?",
        optionA: "Polygon",
        optionB: "Rectangle",
        optionC: "Circle",
        correctAnswer: "Polygon",
      }),
      shuffleOptions({
        question: "Which feature in Paint turns an image upside down?",
        optionA: "Flip vertical",
        optionB: "Rotate",
        optionC: "Crop",
        correctAnswer: "Flip vertical",
      }),
      shuffleOptions({
        question: "The Rotate option can turn an image by which of the following angles?",
        optionA: "60°",
        optionB: "90° or 180°",
        optionC: "45°",
        correctAnswer: "90° or 180°",
      }),
      shuffleOptions({
        question: "Which group contains both Crop and Rotate options?",
        optionA: "Image",
        optionB: "Clipboard",
        optionC: "Tools",
        correctAnswer: "Image",
      }),
      shuffleOptions({
        question: "What can you add to your drawings in Paint to make them more attractive?",
        optionA: "Sound effects",
        optionB: "Colour effects",
        optionC: "Text effects",
        correctAnswer: "Colour effects",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ______ option helps to remove unwanted parts of a picture.",
        optionA: "Resize",
        optionB: "Crop",
        optionC: "Skew",
        correctAnswer: "Crop",
      }),
      shuffleOptions({
        question: "The ______ option gives the mirror image of an object.",
        optionA: "Flip horizontal",
        optionB: "Flip vertical",
        optionC: "Rotate",
        correctAnswer: "Flip horizontal",
      }),
      shuffleOptions({
        question: "The ______ tool is used to make shapes with many sides.",
        optionA: "Line",
        optionB: "Polygon",
        optionC: "Ellipse",
        correctAnswer: "Polygon",
      }),
      shuffleOptions({
        question: "The ______ option helps to make an image look slanted.",
        optionA: "Resize",
        optionB: "Skew",
        optionC: "Rotate",
        correctAnswer: "Skew",
      }),
      shuffleOptions({
        question: "The ______ feature turns an image by 90° or 180°.",
        optionA: "Rotate",
        optionB: "Crop",
        optionC: "Resize",
        correctAnswer: "Rotate",
      }),
      shuffleOptions({
        question: "The Resize option is used to make an image ______ or smaller.",
        optionA: "colourful",
        optionB: "bigger",
        optionC: "brighter",
        correctAnswer: "bigger",
      }),
      shuffleOptions({
        question: "The Flip vertical option turns the image ______.",
        optionA: "upside down",
        optionB: "sideways",
        optionC: "backward",
        correctAnswer: "upside down",
      }),
      shuffleOptions({
        question: "The Crop and Rotate options are found under the ______ group.",
        optionA: "Tools",
        optionB: "Image",
        optionC: "Shapes",
        correctAnswer: "Image",
      }),
      shuffleOptions({
        question: "You can give different ______ effects to your drawing in Paint.",
        optionA: "colour",
        optionB: "sound",
        optionC: "lighting",
        correctAnswer: "colour",
      }),
      shuffleOptions({
        question: "The Skew option changes the ______ of an image in horizontal or vertical direction.",
        optionA: "angle",
        optionB: "size",
        optionC: "pattern",
        correctAnswer: "angle",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Crop option is used to show only the selected part of a picture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Flip vertical option gives a mirror image of the object.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Rotate option allows you to turn an image by 90° or 180°.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Resize option helps to make a picture smaller or larger.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Polygon tool is used to draw curved lines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Skew option makes an image look slanted.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Crop and Rotate options are found in the Home tab.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Flip horizontal option turns an image upside down.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Paint allows us to give colour effects to our drawings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Resize and Skew options are present in the Image group.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
