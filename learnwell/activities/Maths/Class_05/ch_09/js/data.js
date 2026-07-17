export const chapter = "Chapter - 9: Measurement";
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
        question: "What is the value of 1 decagram (dag) in grams?",
        optionA: "1 g",
        optionB: "10 g",
        optionC: "100 g",
        correctAnswer: "10 g",
      }),
      shuffleOptions({
        question: "Which unit is the most appropriate for measuring the capacity of a big water tank?",
        optionA: "litre",
        optionB: "millilitre",
        optionC: "kilolitre",
        correctAnswer: "kilolitre",
      }),
      shuffleOptions({
        question: "What is the value of 1 centilitre (cl) in litres?",
        optionA: "0.01 l",
        optionB: "1 l",
        optionC: "0.1 l",
        correctAnswer: "0.01 l",
      }),
      shuffleOptions({
        question: "Which unit increases by 10 times when moving from centimetre to decimetre?",
        optionA: "decimetre",
        optionB: "millimetre",
        optionC: "hectometre",
        correctAnswer: "decimetre",
      }),
      shuffleOptions({
        question: "What is the weight of 1 hectogram (hg)?",
        optionA: "10 g",
        optionB: "100 g",
        optionC: "1000 g",
        correctAnswer: "100 g",
      }),
      shuffleOptions({
        question: "Which of the following is the smallest unit of length?",
        optionA: "kilometre",
        optionB: "metre",
        optionC: "millimetre",
        correctAnswer: "millimetre",
      }),
      shuffleOptions({
        question: "What is the value of 1 kilolitre (kl)?",
        optionA: "100 l",
        optionB: "1000 l",
        optionC: "10 l",
        correctAnswer: "1000 l",
      }),
      shuffleOptions({
        question: "Which unit would be best to measure the thickness of a book?",
        optionA: "metre",
        optionB: "centimetre",
        optionC: "millimetre",
        correctAnswer: "millimetre",
      }),
      shuffleOptions({
        question: "What is the mass of 1 milligram (mg) in grams?",
        optionA: "0.1 g",
        optionB: "0.01 g",
        optionC: "0.001 g",
        correctAnswer: "0.001 g",
      }),
      shuffleOptions({
        question: "Which unit will you use to measure the capacity of a medicine bottle?",
        optionA: "ml",
        optionB: "l",
        optionC: "kl",
        correctAnswer: "ml",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "1 km is equal to ______ metres.",
        optionA: "100",
        optionB: "1000",
        optionC: "10",
        correctAnswer: "1000",
      }),
      shuffleOptions({
        question: "1 g is equal to ______ milligrams.",
        optionA: "100 mg",
        optionB: "1000 mg",
        optionC: "10 mg",
        correctAnswer: "1000 mg",
      }),
      shuffleOptions({
        question: "1 dl is equal to ______ litres.",
        optionA: "1 l",
        optionB: "0.1 l",
        optionC: "0.01 l",
        correctAnswer: "0.1 l",
      }),
      shuffleOptions({
        question: "1 cm is equal to ______ metres.",
        optionA: "0.01 m",
        optionB: "1 m",
        optionC: "0.1 m",
        correctAnswer: "0.01 m",
      }),
      shuffleOptions({
        question: "1 kg is equal to ______ grams.",
        optionA: "100 g",
        optionB: "1000 g",
        optionC: "10 g",
        correctAnswer: "1000 g",
      }),
      shuffleOptions({
        question: "1 ml is equal to ______ litres.",
        optionA: "0.001 l",
        optionB: "0.1 l",
        optionC: "1 l",
        correctAnswer: "0.001 l",
      }),
      shuffleOptions({
        question: "1 hectolitre (hl) is equal to ______ litres.",
        optionA: "10 l",
        optionB: "100 l",
        optionC: "1000 l",
        correctAnswer: "100 l",
      }),
      shuffleOptions({
        question: "1 decimetre (dm) is equal to ______ metres.",
        optionA: "0.1 m",
        optionB: "1 m",
        optionC: "0.01 m",
        correctAnswer: "0.1 m",
      }),
      shuffleOptions({
        question: "1 centigram (cg) is equal to ______ grams.",
        optionA: "0.001 g",
        optionB: "0.1 g",
        optionC: "0.01 g",
        correctAnswer: "0.01 g",
      }),
      shuffleOptions({
        question: "1 dal (decalitre) is equal to ______ litres.",
        optionA: "1 l",
        optionB: "100 l",
        optionC: "10 l",
        correctAnswer: "10 l",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "1 kl is equal to 1000 l.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 mm is larger than 1 cm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 dag is equal to 10 g.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 l is equal to 10 dl.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 m is equal to 100 cm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 cg is equal to 0.01 g.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 kg is equal to 10,000 mg.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 hm is greater than 1 dam.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "1 ml is equal to 0.01 l.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "1 dal is larger than 1 l.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
