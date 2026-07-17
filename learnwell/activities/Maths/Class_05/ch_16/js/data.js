export const chapter = "Chapter - 16: Volume";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(
    (option) => option !== undefined
  );

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length === 3) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What do we call the amount of space occupied by a solid?",
        optionA: "Area",
        optionB: "Volume",
        optionC: "Surface",
        correctAnswer: "Volume",
      }),
      shuffleOptions({
        question: "Which unit is used to measure the volume of very small objects?",
        optionA: "cm²",
        optionB: "mm³",
        optionC: "m²",
        correctAnswer: "mm³",
      }),
      shuffleOptions({
        question: "What happens when a stone is dropped into a filled tumbler of water?",
        optionA: "Water level decreases",
        optionB: "Water level increases",
        optionC: "Nothing changes",
        correctAnswer: "Water level increases",
      }),
      shuffleOptions({
        question: "Which of the following solids has all sides equal?",
        optionA: "Cuboid",
        optionB: "Cone",
        optionC: "Cube",
        correctAnswer: "Cube",
      }),
      shuffleOptions({
        question: "Which formula is used to find the volume of a cuboid?",
        optionA: "l + b + h",
        optionB: "l × b × h",
        optionC: "l × h",
        correctAnswer: "l × b × h",
      }),
      shuffleOptions({
        question: "What is the volume of a cube whose side is represented by s?",
        optionA: "s²",
        optionB: "s³",
        optionC: "3s",
        correctAnswer: "s³",
      }),
      shuffleOptions({
        question: "Which of the following is a cubic unit?",
        optionA: "cm",
        optionB: "cm³",
        optionC: "cm²",
        correctAnswer: "cm³",
      }),
      shuffleOptions({
        question: "When counting cubes, what does each small cube represent?",
        optionA: "1 cm",
        optionB: "1 cm²",
        optionC: "1 cm³",
        correctAnswer: "1 cm³",
      }),
      shuffleOptions({
        question: "Which measurement must be the same before using the volume formula?",
        optionA: "Colour",
        optionB: "Units",
        optionC: "Shape",
        correctAnswer: "Units",
      }),
      shuffleOptions({
        question: "What does displacement of water tell us about a solid?",
        optionA: "Its colour",
        optionB: "Its weight",
        optionC: "Its volume",
        correctAnswer: "Its volume",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The volume of a cube is calculated as side × side × ______.",
        optionA: "height",
        optionB: "length",
        optionC: "side",
        correctAnswer: "side",
      }),
      shuffleOptions({
        question: "A solid with greater space occupied has ______ volume.",
        optionA: "less",
        optionB: "equal",
        optionC: "more",
        correctAnswer: "more",
      }),
      shuffleOptions({
        question: "Cubic centimetre is written as ______.",
        optionA: "cm²",
        optionB: "cm³",
        optionC: "cm",
        correctAnswer: "cm³",
      }),
      shuffleOptions({
        question: "The rise of water level in a container shows the ______ of an object dipped.",
        optionA: "weight",
        optionB: "area",
        optionC: "volume",
        correctAnswer: "volume",
      }),
      shuffleOptions({
        question: "Volume is measured in ______ units.",
        optionA: "square",
        optionB: "cubic",
        optionC: "linear",
        correctAnswer: "cubic",
      }),
      shuffleOptions({
        question: "To find the volume of a cuboid, all dimensions must be in the same ______.",
        optionA: "colour",
        optionB: "pattern",
        optionC: "units",
        correctAnswer: "units",
      }),
      shuffleOptions({
        question: "A cube of side 1 cm has a volume of ______.",
        optionA: "1 cm²",
        optionB: "1 cm³",
        optionC: "2 cm³",
        correctAnswer: "1 cm³",
      }),
      shuffleOptions({
        question: "When we count cubes, we add the volume of each ______ cube.",
        optionA: "small",
        optionB: "big",
        optionC: "colourful",
        correctAnswer: "small",
      }),
      shuffleOptions({
        question: "The three dimensions of a cuboid are length, breadth and ______.",
        optionA: "diagonal",
        optionB: "radius",
        optionC: "height",
        correctAnswer: "height",
      }),
      shuffleOptions({
        question: "Volume tells us how much ______ a solid occupies.",
        optionA: "time",
        optionB: "space",
        optionC: "mass",
        correctAnswer: "space",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "All solids occupy some amount of space.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cube and cuboid always have the same volume.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Counting cubes is one method of finding the volume of a solid.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cube has equal length, breadth and height.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The volume of a cuboid depends only on its height.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 m³ is equal to 1,000 litres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water displacement can help us know the volume of irregular solids.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cube of side 10 cm has volume 10 cm³.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Units must be the same before using the volume formula.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A solid with more cubes always has a greater volume.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
