export const chapter = "Chapter - 6: The Indomitable Fighter";
export const noOfActivities = 3;

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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
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
        question: "In which year was Shivaji born?",
        optionA: "1630",
        optionB: "1660",
        optionC: "1659",
        correctAnswer: "1630",
      }),
      shuffleOptions({
        question: "Who was Shivaji’s mother?",
        optionA: "Jijabai",
        optionB: "Jodha Bai",
        optionC: "Rani Durgavati",
        correctAnswer: "Jijabai",
      }),
      shuffleOptions({
        question: "Who was Shivaji’s father?",
        optionA: "Shahji",
        optionB: "Afzal Khan",
        optionC: "Aurangzeb",
        correctAnswer: "Shahji",
      }),
      shuffleOptions({
        question: "How many forts did Shivaji conquer during his career?",
        optionA: "150",
        optionB: "250",
        optionC: "300",
        correctAnswer: "250",
      }),
      shuffleOptions({
        question: "Who commanded the Bijapur army during the siege of Panhala?",
        optionA: "Afzal Khan",
        optionB: "Siddi Jauhar",
        optionC: "Shaista Khan",
        correctAnswer: "Siddi Jauhar",
      }),
      shuffleOptions({
        question: "Who commanded 2000 horsemen against Shivaji?",
        optionA: "Masud",
        optionB: "Shaista Khan",
        optionC: "Baji Deshpande",
        correctAnswer: "Masud",
      }),
      shuffleOptions({
        question: "Who sacrificed his life at Pavan Khind?",
        optionA: "Masud",
        optionB: "Baji Deshpande",
        optionC: "Afzal Khan",
        correctAnswer: "Baji Deshpande",
      }),
      shuffleOptions({
        question: "How many fingers did Shaista Khan lose in Shivaji’s night attack?",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "In which year did Shivaji’s daring night raid on Shaista Khan take place?",
        optionA: "1660",
        optionB: "1663",
        optionC: "1670",
        correctAnswer: "1663",
      }),
      shuffleOptions({
        question: "Which fort served as Shivaji’s capital?",
        optionA: "Panhala",
        optionB: "Rajgad",
        optionC: "Vishalgarh",
        correctAnswer: "Rajgad",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Shivaji was the son of Shahji and ______.",
        optionA: "Jodha",
        optionB: "Jijabai",
        optionC: "Janki",
        correctAnswer: "Jijabai",
      }),
      shuffleOptions({
        question: "Siddi Jauhar’s son-in-law was ______.",
        optionA: "Shaista Khan",
        optionB: "Masud",
        optionC: "Afzal Khan",
        correctAnswer: "Masud",
      }),
      shuffleOptions({
        question: "From Panhala, Shivaji moved towards the fort of ______.",
        optionA: "Rajgad",
        optionB: "Vishalgarh",
        optionC: "Ahmednagar",
        correctAnswer: "Vishalgarh",
      }),
      shuffleOptions({
        question: "Shivaji escaped from Panhala on ______ July 1660.",
        optionA: "13",
        optionB: "15",
        optionC: "5",
        correctAnswer: "13",
      }),
      shuffleOptions({
        question: "The Maratha soldiers fought till their ______.",
        optionA: "surrender",
        optionB: "last breath",
        optionC: "escape",
        correctAnswer: "last breath",
      }),
      shuffleOptions({
        question: "Shivaji launched nightly sallies near ______.",
        optionA: "Rajgad",
        optionB: "Poona",
        optionC: "Delhi",
        correctAnswer: "Poona",
      }),
      shuffleOptions({
        question: "The word ‘chivalry’ means ______.",
        optionA: "bravery",
        optionB: "trick",
        optionC: "defeat",
        correctAnswer: "bravery",
      }),
      shuffleOptions({
        question: "The palanquin trick deceived ______.",
        optionA: "Masud",
        optionB: "Afzal Khan",
        optionC: "Aurangzeb",
        correctAnswer: "Masud",
      }),
      shuffleOptions({
        question: "Shivaji was admired because he never disrespected ______.",
        optionA: "forts",
        optionB: "women",
        optionC: "soldiers",
        correctAnswer: "women",
      }),
      shuffleOptions({
        question: "After Shivaji’s night raid, Shaista Khan shifted from Poona to ______.",
        optionA: "Ahmednagar",
        optionB: "Rajgad",
        optionC: "Delhi",
        correctAnswer: "Ahmednagar",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Afzal Khan was defeated by Shivaji in 1659.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bijapur’s army had 20,000 horsemen and 40,000 footmen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shivaji chose to fight till death at Panhala.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Masud captured Shivaji successfully at Vishalgarh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Baji Deshpande sacrificed his life at Pavan Khind.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shivaji attacked Shaista Khan’s palace at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shaista Khan lost three toes in the attack.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Indian Army’s 2016 operation was called a surgical strike.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shivaji’s capital was at Poona.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shaista Khan shifted his base from Poona to Ahmednagar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
