export const chapter = "Chapter - 13: Perimeter and Area";
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
        question: "What do we call the total distance around a closed figure?",
        optionA: "Area",
        optionB: "Perimeter",
        optionC: "Surface",
        correctAnswer: "Perimeter",
      }),
      shuffleOptions({
        question: "Which shape has all four sides equal?",
        optionA: "Square",
        optionB: "Rectangle",
        optionC: "Triangle",
        correctAnswer: "Square",
      }),
      shuffleOptions({
        question: "What is the unit used to measure area?",
        optionA: "Centimetre",
        optionB: "Square centimetre",
        optionC: "Kilogram",
        correctAnswer: "Square centimetre",
      }),
      shuffleOptions({
        question: "What happens to the perimeter of a square if its side becomes double?",
        optionA: "It becomes four times",
        optionB: "It becomes double",
        optionC: "It becomes half",
        correctAnswer: "It becomes double",
      }),
      shuffleOptions({
        question: "Which rule is used when counting squares to find area of an irregular shape?",
        optionA: "Count only full squares and ignore the rest",
        optionB: "Count full and more-than-half squares as one unit",
        optionC: "Count all squares as full",
        correctAnswer: "Count full and more-than-half squares as one unit",
      }),
      shuffleOptions({
        question: "What do we multiply to find the area of a rectangle?",
        optionA: "Length × diagonal",
        optionB: "Length × breadth",
        optionC: "Length × breadth Bredth × perimeter",
        correctAnswer: "Length × breadth Bredth × perimeter",
      }),
      shuffleOptions({
        question: "What is the perimeter of a regular polygon equal to?",
        optionA: "Side × 2",
        optionB: "Number of sides × side length",
        optionC: "Length × breadth",
        correctAnswer: "Number of sides × side length",
      }),
      shuffleOptions({
        question: "Which figure always has four right angles?",
        optionA: "Triangle",
        optionB: "Rectangle",
        optionC: "Regular pentagon",
        correctAnswer: "Rectangle",
      }),
      shuffleOptions({
        question: "What does area represent in a shape?",
        optionA: "The boundary",
        optionB: "The surface enclosed by the shape",
        optionC: "The height of the shape",
        correctAnswer: "The surface enclosed by the shape",
      }),
      shuffleOptions({
        question: "Which squares are not counted when finding area on grid paper?",
        optionA: "Full squares",
        optionB: "More-than-half squares",
        optionC: "Less-than-half squares",
        correctAnswer: "Less-than-half squares",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The perimeter of a rectangle is found by adding its length and ______.",
        optionA: "height",
        optionB: "breadth",
        optionC: "diagonal",
        correctAnswer: "breadth",
      }),
      shuffleOptions({
        question: "The area of a square is calculated by multiplying side × ______.",
        optionA: "length",
        optionB: "itself (side)",
        optionC: "breadth",
        correctAnswer: "itself (side)",
      }),
      shuffleOptions({
        question: "A regular polygon has all its sides ______.",
        optionA: "equal",
        optionB: "curved",
        optionC: "doubled",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "Area is the ______ enclosed by a closed figure.",
        optionA: "line",
        optionB: "surface",
        optionC: "border",
        correctAnswer: "surface",
      }),
      shuffleOptions({
        question: "A figure having six equal sides is called a regular ______.",
        optionA: "pentagon",
        optionB: "hexagon",
        optionC: "octagon",
        correctAnswer: "hexagon",
      }),
      shuffleOptions({
        question: "In area measurement, half squares count as ______ unit.",
        optionA: "one",
        optionB: "zero",
        optionC: "half",
        correctAnswer: "half",
      }),
      shuffleOptions({
        question: "Perimeter of a square is 4 × ______.",
        optionA: "breadth",
        optionB: "side",
        optionC: "area",
        correctAnswer: "side",
      }),
      shuffleOptions({
        question: "The unit used to measure perimeter is ______.",
        optionA: "square metre",
        optionB: "metre (m)",
        optionC: "cubic metre",
        correctAnswer: "metre (m)",
      }),
      shuffleOptions({
        question: "Running around a field requires calculating its ______.",
        optionA: "area",
        optionB: "perimeter",
        optionC: "volume",
        correctAnswer: "perimeter",
      }),
      shuffleOptions({
        question: "The number of tiles needed to cover a floor depends on the floor’s ______.",
        optionA: "perimeter",
        optionB: "area",
        optionC: "height",
        correctAnswer: "area",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Perimeter is measured in square units.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Area is the surface enclosed by a closed figure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All rectangles have four right angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "More-than-half squares on grid paper count as full squares.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A regular hexagon has six equal sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The area of a square becomes four times when its side is doubled.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Perimeter of a triangle is found by multiplying its sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Area is measured in square units like cm² or m².",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The boundary of a shape is referred to as its area.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Less-than-half squares are ignored while finding area on grid paper.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
