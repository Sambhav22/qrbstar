export const chapter = "Chapter - 11: Triangle and Its Properties";
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
        question: "Which triangle has all three angles less than 90°?",
        optionA: "Right-angled",
        optionB: "Obtuse-angled",
        optionC: "Acute-angled",
        correctAnswer: "Acute-angled",
      }),
      shuffleOptions({
        question: "Which side of a right-angled triangle is always opposite the right angle?",
        optionA: "Median",
        optionB: "Hypotenuse",
        optionC: "Altitude",
        correctAnswer: "Hypotenuse",
      }),
      shuffleOptions({
        question: "Which point is the meeting point of all three medians of a triangle?",
        optionA: "Orthocentre",
        optionB: "Centroid",
        optionC: "Incentre",
        correctAnswer: "Centroid",
      }),
      shuffleOptions({
        question: "Which triangle has all three sides of different lengths?",
        optionA: "Equilateral",
        optionB: "Scalene",
        optionC: "Isosceles",
        correctAnswer: "Scalene",
      }),
      shuffleOptions({
        question: "Which of the following is always true about an exterior angle of a triangle?",
        optionA: "It is smaller than each interior angle",
        optionB: "It equals the sum of the opposite interior angles",
        optionC: "It equals 90° always",
        correctAnswer: "It equals the sum of the opposite interior angles",
      }),
      shuffleOptions({
        question: "In which triangle can an altitude lie outside the triangle?",
        optionA: "Acute-angled",
        optionB: "Equilateral",
        optionC: "Obtuse-angled",
        correctAnswer: "Obtuse-angled",
      }),
      shuffleOptions({
        question: "Which property states that the sum of any two sides of a triangle must be greater than the third side?",
        optionA: "Angle Sum Property",
        optionB: "Exterior Angle Property",
        optionC: "Triangle Inequality Property",
        correctAnswer: "Triangle Inequality Property",
      }),
      shuffleOptions({
        question: "If a triangle has two equal sides, what type of triangle is it?",
        optionA: "Scalene",
        optionB: "Isosceles",
        optionC: "Right-angled",
        correctAnswer: "Isosceles",
      }),
      shuffleOptions({
        question: "In a right-angled triangle, which theorem relates the squares of its sides?",
        optionA: "Triangle Inequality",
        optionB: "Pythagoras Theorem",
        optionC: "Angle Sum Theorem",
        correctAnswer: "Pythagoras Theorem",
      }),
      shuffleOptions({
        question: "Which point is where the altitudes of a triangle intersect?",
        optionA: "Centroid",
        optionB: "Orthocentre",
        optionC: "Circumcentre",
        correctAnswer: "Orthocentre",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A triangle whose all three sides are unequal is called a ______ triangle.",
        optionA: "Isosceles",
        optionB: "Equilateral",
        optionC: "Scalene",
        correctAnswer: "Scalene",
      }),
      shuffleOptions({
        question: "The point where the medians meet is called the ______.",
        optionA: "Orthocentre",
        optionB: "Centroid",
        optionC: "Incentre",
        correctAnswer: "Centroid",
      }),
      shuffleOptions({
        question: "An altitude is always ______ to the opposite side.",
        optionA: "Parallel",
        optionB: "Perpendicular",
        optionC: "Equal",
        correctAnswer: "Perpendicular",
      }),
      shuffleOptions({
        question: "The angle sum of any triangle is always ______.",
        optionA: "90°",
        optionB: "180°",
        optionC: "360°",
        correctAnswer: "180°",
      }),
      shuffleOptions({
        question: "The longest side of a right-angled triangle is called the ______.",
        optionA: "Hypotenuse",
        optionB: "Median",
        optionC: "Base",
        correctAnswer: "Hypotenuse",
      }),
      shuffleOptions({
        question: "A triangle whose one angle is greater than 90° is called an ______ triangle.",
        optionA: "Acute",
        optionB: "Right",
        optionC: "Obtuse-angled",
        correctAnswer: "Obtuse-angled",
      }),
      shuffleOptions({
        question: "The side opposite the greatest angle in a triangle is always the ______ side.",
        optionA: "Longest",
        optionB: "Shortest",
        optionC: "Equal",
        correctAnswer: "Longest",
      }),
      shuffleOptions({
        question: "A median joins a vertex to the ______ of the opposite side.",
        optionA: "Midpoint",
        optionB: "End",
        optionC: "Altitude",
        correctAnswer: "Midpoint",
      }),
      shuffleOptions({
        question: "The altitudes of a triangle meet at a common point called the ______.",
        optionA: "Incentre",
        optionB: "Circumcentre",
        optionC: "Orthocentre",
        correctAnswer: "Orthocentre",
      }),
      shuffleOptions({
        question: "In a right triangle, the two sides forming the right angle are called ______.",
        optionA: "Legs",
        optionB: "Hypotenuse",
        optionC: "Bases",
        correctAnswer: "Legs",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A triangle can have three acute angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A triangle can have two obtuse angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The centroid of a triangle always lies inside the triangle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Pythagoras theorem applies to all triangles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In a scalene triangle, no two sides are equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The exterior angle of a triangle is always equal to the sum of the two interior opposite angles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The altitude of an obtuse triangle may fall outside the triangle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A triangle can have only one right angle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If two angles in a triangle are equal, then their opposite sides are also equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sum of any two sides of a triangle must be less than the third side.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
