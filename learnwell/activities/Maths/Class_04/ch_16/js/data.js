export const chapter = "Chapter - 16: Bar Graph";
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
        question: "A bar graph helps us to __________ data.",
        optionA: "compare",
        optionB: "erase",
        optionC: "hide",
        correctAnswer: "compare",
      }),
      shuffleOptions({
        question: "The height of a bar shows the __________ of the data.",
        optionA: "picture",
        optionB: "value",
        optionC: "colour",
        correctAnswer: "value",
      }),
      shuffleOptions({
        question: "Bars in a bar graph must have __________ width.",
        optionA: "equal",
        optionB: "any",
        optionC: "double",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "The spaces between bars must be __________.",
        optionA: "equal",
        optionB: "absent",
        optionC: "uneven",
        correctAnswer: "equal",
      }),
      shuffleOptions({
        question: "The X-axis generally shows the __________.",
        optionA: "values",
        optionB: "categories",
        optionC: "scale",
        correctAnswer: "categories",
      }),
      shuffleOptions({
        question: "The Y-axis usually shows the __________.",
        optionA: "colours",
        optionB: "designs",
        optionC: "numbers/values",
        correctAnswer: "numbers/values",
      }),
      shuffleOptions({
        question: "A bar graph is also called a __________ graph.",
        optionA: "circle",
        optionB: "column",
        optionC: "pointed",
        correctAnswer: "column",
      }),
      shuffleOptions({
        question: "A scale is used to show what each __________ represents.",
        optionA: "division",
        optionB: "picture",
        optionC: "bar",
        correctAnswer: "division",
      }),
      shuffleOptions({
        question: "A vertical bar graph has bars standing __________.",
        optionA: "sideways",
        optionB: "up vertically",
        optionC: "in circles",
        correctAnswer: "up vertically",
      }),
      shuffleOptions({
        question: "The title of a graph tells us what the graph __________.",
        optionA: "hides",
        optionB: "looks like",
        optionC: "shows",
        correctAnswer: "shows",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A bar graph represents data using __________.",
        optionA: "bars",
        optionB: "circles",
        optionC: "points",
        correctAnswer: "bars",
      }),
      shuffleOptions({
        question: "In a horizontal bar graph, bars extend along the __________ axis.",
        optionA: "vertical",
        optionB: "slant",
        optionC: "horizontal",
        correctAnswer: "horizontal",
      }),
      shuffleOptions({
        question: "The __________ of a bar graph helps us understand what the graph is about.",
        optionA: "picture",
        optionB: "title",
        optionC: "border",
        correctAnswer: "title",
      }),
      shuffleOptions({
        question: "The __________ tells what each division on the axis stands for.",
        optionA: "scale",
        optionB: "colour",
        optionC: "pattern",
        correctAnswer: "scale",
      }),
      shuffleOptions({
        question: "Bars should have equal width and equal __________ between them.",
        optionA: "colours",
        optionB: "distance",
        optionC: "designs",
        correctAnswer: "distance",
      }),
      shuffleOptions({
        question: "The X-axis shows different __________.",
        optionA: "categories",
        optionB: "totals",
        optionC: "pictures",
        correctAnswer: "categories",
      }),
      shuffleOptions({
        question: "The Y-axis generally shows __________.",
        optionA: "months",
        optionB: "fruits",
        optionC: "values/numbers",
        correctAnswer: "values/numbers",
      }),
      shuffleOptions({
        question: "The process of reading and understanding a graph is called __________.",
        optionA: "decorating",
        optionB: "interpretation",
        optionC: "mixing",
        correctAnswer: "interpretation",
      }),
      shuffleOptions({
        question: "The __________ of a bar shows its value.",
        optionA: "height/length",
        optionB: "border",
        optionC: "colour",
        correctAnswer: "height/length",
      }),
      shuffleOptions({
        question: "A bar graph makes it easy to __________ values.",
        optionA: "compare",
        optionB: "hide",
        optionC: "erase",
        correctAnswer: "compare",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Bars in a bar graph can touch each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A bar graph uses rectangular bars to show data.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Scale is not needed to read a bar graph.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "If two bars have the same height, their values are equal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Y-axis is used to show categories like months or items.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A taller bar represents a larger value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The title of a bar graph is optional.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A horizontal bar graph has bars drawn sideways.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Interpretation means colouring the bars.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bars must have equal width and equal spacing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
