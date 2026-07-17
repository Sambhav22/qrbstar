export const chapter = "Chapter - 13: Area and Perimeter";
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
        question: "Which unit is best suited to measure the area of a big playground?",
        optionA: "sq mm",
        optionB: "sq cm",
        optionC: "sq m",
        correctAnswer: "sq m",
      }),
      shuffleOptions({
        question: "What do we call the space covered by a closed figure?",
        optionA: "Perimeter",
        optionB: "Area",
        optionC: "Volume",
        correctAnswer: "Area",
      }),
      shuffleOptions({
        question: "Which of the following shapes always has all sides equal?",
        optionA: "Rectangle",
        optionB: "Square",
        optionC: "Triangle",
        correctAnswer: "Square",
      }),
      shuffleOptions({
        question: "What do we find when we add all sides of a closed figure?",
        optionA: "Area",
        optionB: "Diagonal",
        optionC: "Perimeter",
        correctAnswer: "Perimeter",
      }),
      shuffleOptions({
        question: "Which formula is used to find the area of a rectangle?",
        optionA: "Length × Breadth",
        optionB: "4 × side",
        optionC: "2 × (length + breadth)",
        correctAnswer: "Length × Breadth",
      }),
      shuffleOptions({
        question: "Which unit is used to measure the area of a country?",
        optionA: "sq km",
        optionB: "sq cm",
        optionC: "sq m",
        correctAnswer: "sq km",
      }),
      shuffleOptions({
        question: "Which of these figures has opposite sides equal?",
        optionA: "Square",
        optionB: "Rectangle",
        optionC: "Circle",
        correctAnswer: "Rectangle",
      }),
      shuffleOptions({
        question: "What is the area of a square whose side is 3 cm?",
        optionA: "6 sq cm",
        optionB: "9 sq cm",
        optionC: "12 sq cm",
        correctAnswer: "9 sq cm",
      }),
      shuffleOptions({
        question: "Which of the following shows the perimeter of a square?",
        optionA: "4 × side",
        optionB: "side × side",
        optionC: "length × breadth",
        correctAnswer: "4 × side",
      }),
      shuffleOptions({
        question: "Which unit is the smallest for measuring area?",
        optionA: "sq metre",
        optionB: "sq millimetre",
        optionC: "sq kilometre",
        correctAnswer: "sq millimetre",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The area of a square is found by multiplying side × ______.",
        optionA: "length",
        optionB: "breadth",
        optionC: "side",
        correctAnswer: "side",
      }),
      shuffleOptions({
        question: "The perimeter of a rectangle is 2 × (length + ______).",
        optionA: "area",
        optionB: "breadth",
        optionC: "side",
        correctAnswer: "breadth",
      }),
      shuffleOptions({
        question: "Area is measured in ______ units.",
        optionA: "square",
        optionB: "cubic",
        optionC: "circular",
        correctAnswer: "square",
      }),
      shuffleOptions({
        question: "The space inside a figure is called its ______.",
        optionA: "length",
        optionB: "perimeter",
        optionC: "area",
        correctAnswer: "area",
      }),
      shuffleOptions({
        question: "A square with side 5 cm has perimeter ______ cm.",
        optionA: "15",
        optionB: "20",
        optionC: "25",
        correctAnswer: "20",
      }),
      shuffleOptions({
        question: "A rectangle has ______ pairs of equal sides.",
        optionA: "one",
        optionB: "two",
        optionC: "three",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "Very large areas, such as states, are measured in ______.",
        optionA: "sq cm",
        optionB: "sq mm",
        optionC: "sq km",
        correctAnswer: "sq km",
      }),
      shuffleOptions({
        question: "To find area using square paper, we count the number of ______ squares.",
        optionA: "coloured",
        optionB: "complete",
        optionC: "dotted",
        correctAnswer: "complete",
      }),
      shuffleOptions({
        question: "Perimeter tells us the total ______ around a closed figure.",
        optionA: "distance",
        optionB: "area",
        optionC: "squares",
        correctAnswer: "distance",
      }),
      shuffleOptions({
        question: "A square of side 10 cm has area ______ sq cm.",
        optionA: "50",
        optionB: "100",
        optionC: "10",
        correctAnswer: "100",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A rectangle always has all four sides equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Area is the amount of space a shape covers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Perimeter is measured in square units.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A square of side 1 cm has area 1 sq cm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Perimeter of a square is 4 × side.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Square kilometres are used to measure very small areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "When counting area on grid paper, more-than-half squares are counted as full squares.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The area of a rectangle is found by adding its length and breadth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Perimeter tells us how much boundary a shape has.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A square has two pairs of equal sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
