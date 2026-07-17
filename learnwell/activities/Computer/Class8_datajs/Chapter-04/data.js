export const chapter = "Chapter - 4: Introducing Photoshop";
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
        question: "Which tool allows you to repair an area by matching its texture with another part of the image?",
        optionA: "Crop Tool",
        optionB: "Patch Tool",
        optionC: "Smudge Tool",
        correctAnswer: "Patch Tool",
      }),
      shuffleOptions({
        question: "Which bar shows details like the document size and zoom level?",
        optionA: "Layers Bar",
        optionB: "Tools Panel",
        optionC: "Status Bar",
        correctAnswer: "Status Bar",
      }),
      shuffleOptions({
        question: "Which tool creates fastening points along the edges of an image while selecting?",
        optionA: "Magnetic Lasso Tool",
        optionB: "Crop Tool",
        optionC: "Brush Tool",
        correctAnswer: "Magnetic Lasso Tool",
      }),
      shuffleOptions({
        question: "Which colour mode is mainly used for printing images?",
        optionA: "RGB",
        optionB: "CMYK",
        optionC: "Bitmap",
        correctAnswer: "CMYK",
      }),
      shuffleOptions({
        question: "Which tool pushes colours on the image as if dragging with a finger?",
        optionA: "Marquee Tool",
        optionB: "Sharpen Tool",
        optionC: "Smudge Tool",
        correctAnswer: "Smudge Tool",
      }),
      shuffleOptions({
        question: "Which tool helps the user select an area by clicking around straight edges?",
        optionA: "Polygonal Lasso Tool",
        optionB: "Magic Wand Tool",
        optionC: "Quick Selection Tool",
        correctAnswer: "Polygonal Lasso Tool",
      }),
      shuffleOptions({
        question: "Which panel allows you to manage different layers in a file?",
        optionA: "Menu Bar",
        optionB: "Layers Panel",
        optionC: "Status Bar",
        correctAnswer: "Layers Panel",
      }),
      shuffleOptions({
        question: "Which mode uses black or white to represent pixels?",
        optionA: "Bitmap Mode",
        optionB: "RGB Mode",
        optionC: "CMYK Mode",
        correctAnswer: "Bitmap Mode",
      }),
      shuffleOptions({
        question: "Which tool is used to delete pixels from an image?",
        optionA: "Sharpen Tool",
        optionB: "Eraser Tool",
        optionC: "Crop Tool",
        correctAnswer: "Eraser Tool",
      }),
      shuffleOptions({
        question: "Which option will you select from the File menu to open an already saved picture?",
        optionA: "Save",
        optionB: "New",
        optionC: "Open",
        correctAnswer: "Open",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Smudge Tool works by dragging the ______ of the image.",
        optionA: "colour",
        optionB: "shape",
        optionC: "border",
        correctAnswer: "colour",
      }),
      shuffleOptions({
        question: "A Photoshop file is saved with the extension ______.",
        optionA: ".jpg",
        optionB: ".psd",
        optionC: ".bmp",
        correctAnswer: ".psd",
      }),
      shuffleOptions({
        question: "The Magnetic Lasso Tool helps in selecting edges with high ______.",
        optionA: "smoothness",
        optionB: "blur",
        optionC: "contrast",
        correctAnswer: "contrast",
      }),
      shuffleOptions({
        question: "A new file in Photoshop is created through File → ______.",
        optionA: "Open",
        optionB: "New",
        optionC: "Save",
        correctAnswer: "New",
      }),
      shuffleOptions({
        question: "The Patch Tool is used to repair an area by matching its ______.",
        optionA: "colours",
        optionB: "texture",
        optionC: "font",
        correctAnswer: "texture",
      }),
      shuffleOptions({
        question: "CMYK mode is mainly used for ______.",
        optionA: "printing",
        optionB: "video",
        optionC: "audio",
        correctAnswer: "printing",
      }),
      shuffleOptions({
        question: "The Quick Selection Tool expands the selection based on image ______.",
        optionA: "edges",
        optionB: "layers",
        optionC: "icons",
        correctAnswer: "edges",
      }),
      shuffleOptions({
        question: "The Sharpen Tool increases the clarity of soft ______.",
        optionA: "lines",
        optionB: "lines",
        optionC: "edges",
        correctAnswer: "edges",
      }),
      shuffleOptions({
        question: "The Colour Mode that uses 256 shades is called ______.",
        optionA: "RGB",
        optionB: "Grayscale",
        optionC: "Bitmap",
        correctAnswer: "Grayscale",
      }),
      shuffleOptions({
        question: "The Menu Bar contains commands like File, Edit and ______.",
        optionA: "Colour",
        optionB: "Image",
        optionC: "Brush",
        correctAnswer: "Image",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Options Bar changes its items depending on the tool selected.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Magic Wand Tool selects pixels of the same colour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Patch Tool is used to crop the unwanted area of an image.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "RGB is the default colour mode in Photoshop.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Polygonal Lasso Tool is used to select curved edges.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Status Bar displays information about the current document.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Photoshop was developed by Thomas Knoll and John Knoll.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Smudge Tool increases clarity and sharpness of edges.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Crop Tool removes unwanted areas of an image.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bitmap mode uses only black or white to represent pixels.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
