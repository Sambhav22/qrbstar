export const chapter = "Chapter - 12: Congruence of Triangles";
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
        question: "When do two triangles have exactly the same shape and size?",
        optionA: "When they are similar",
        optionB: "When their corresponding parts are equal",
        optionC: "When their areas are equal",
        correctAnswer: "When their corresponding parts are equal",
      }),
      shuffleOptions({
        question: "In SAS congruence, the included angle is between which elements?",
        optionA: "Two angles",
        optionB: "Two sides and one non-included angle",
        optionC: "Two sides only (included between them)",
        correctAnswer: "Two sides only (included between them)",
      }),
      shuffleOptions({
        question: "In the RHS rule, what does the letter R stand for?",
        optionA: "Reflex",
        optionB: "Right angle",
        optionC: "Rotation",
        correctAnswer: "Right angle",
      }),
      shuffleOptions({
        question: "What does superimposition help us determine?",
        optionA: "Perimeter",
        optionB: "Congruency of figures",
        optionC: "Similarity",
        correctAnswer: "Congruency of figures",
      }),
      shuffleOptions({
        question: "When are two rectangles congruent?",
        optionA: "When their areas match",
        optionB: "When their diagonals match",
        optionC: "When their length and breadth are equal in pairs",
        correctAnswer: "When their length and breadth are equal in pairs",
      }),
      shuffleOptions({
        question: "Which side is always opposite the right angle in a right triangle?",
        optionA: "Base",
        optionB: "Hypotenuse",
        optionC: "Any side",
        correctAnswer: "Hypotenuse",
      }),
      shuffleOptions({
        question: "Which of the following is NOT a valid congruence rule?",
        optionA: "SSS",
        optionB: "ASA",
        optionC: "Equality of two sides and a non-included angle",
        correctAnswer: "Equality of two sides and a non-included angle",
      }),
      shuffleOptions({
        question: "Angle A in triangle ABC corresponds to which angle in triangle PQR if the triangles are congruent?",
        optionA: "Angle Q",
        optionB: "Angle R",
        optionC: "The matching vertex angle in triangle PQR (Angle P)",
        correctAnswer: "The matching vertex angle in triangle PQR (Angle P)",
      }),
      shuffleOptions({
        question: "Which method is used to check congruency by placing one figure over another?",
        optionA: "Rotation",
        optionB: "Superimposition",
        optionC: "Flipping",
        correctAnswer: "Superimposition",
      }),
      shuffleOptions({
        question: "Which congruency rule is applicable only in right-angled triangles?",
        optionA: "SSS",
        optionB: "RHS",
        optionC: "ASA",
        correctAnswer: "RHS",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Two figures that have the same shape and size are called ________.",
        optionA: "congruent",
        optionB: "similar",
        optionC: "equal",
        correctAnswer: "congruent",
      }),
      shuffleOptions({
        question: "In a right triangle, the longest side is called the ________.",
        optionA: "base",
        optionB: "hypotenuse",
        optionC: "altitude",
        correctAnswer: "hypotenuse",
      }),
      shuffleOptions({
        question: "Two triangles completely match when one is ________ on the other.",
        optionA: "rotated",
        optionB: "superimposed",
        optionC: "flipped",
        correctAnswer: "superimposed",
      }),
      shuffleOptions({
        question: "ASA requires two angles and the ________ side.",
        optionA: "included",
        optionB: "opposite",
        optionC: "smallest",
        correctAnswer: "included",
      }),
      shuffleOptions({
        question: "If two angles and a non-included side are equal in two triangles, we ________ prove congruency.",
        optionA: "can",
        optionB: "cannot",
        optionC: "always",
        correctAnswer: "cannot",
      }),
      shuffleOptions({
        question: "The RHS rule uses a right angle, hypotenuse and ________.",
        optionA: "one side",
        optionB: "an angle",
        optionC: "perimeter",
        correctAnswer: "one side",
      }),
      shuffleOptions({
        question: "If two squares have equal side lengths, they are ________.",
        optionA: "identical",
        optionB: "congruent",
        optionC: "similar",
        correctAnswer: "congruent",
      }),
      shuffleOptions({
        question: "In triangles ABC and PQR, the side AB corresponds to ________.",
        optionA: "QR",
        optionB: "PQ",
        optionC: "PR",
        correctAnswer: "PQ",
      }),
      shuffleOptions({
        question: "The symbol “≅” means ________.",
        optionA: "equal to",
        optionB: "similar to",
        optionC: "congruent to",
        correctAnswer: "congruent to",
      }),
      shuffleOptions({
        question: "CPCT stands for Corresponding Parts of ________ Triangles.",
        optionA: "equal",
        optionB: "congruent",
        optionC: "similar",
        correctAnswer: "congruent",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Congruent triangles always have equal areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Similar triangles are always congruent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Both SAS and SSS compare the lengths of sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The RHS rule can be used for any triangle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All corresponding angles of congruent triangles are equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Two squares with sides 4 cm and 5 cm are congruent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A triangle with all three angles equal must also have all three sides equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In ASA, the side must lie between the two angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Congruency requires exact matching of both shape and size.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All rectangles are congruent because their angles are equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
