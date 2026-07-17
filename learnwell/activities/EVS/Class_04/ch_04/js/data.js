export const chapter = "Chapter - 4: Fun and Fights at Play";
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
        question: "Who gives training of sports to students in school?",
        optionA: "Coach",
        optionB: "Sports teacher",
        optionC: "Principal",
        correctAnswer: "Sports teacher",
      }),
      shuffleOptions({
        question: "Who blows the whistle to start a kabaddi match?",
        optionA: "Umpire",
        optionB: "Referee",
        optionC: "Captain",
        correctAnswer: "Referee",
      }),
      shuffleOptions({
        question: "Which game is played with a bat and a ball?",
        optionA: "Cricket",
        optionB: "Chess",
        optionC: "Ludo",
        correctAnswer: "Cricket",
      }),
      shuffleOptions({
        question: "Who won the round in the kabaddi match at Apex International School?",
        optionA: "Kamya",
        optionB: "Kavita",
        optionC: "Narmada",
        correctAnswer: "Kamya",
      }),
      shuffleOptions({
        question: "Who should a sportsperson always respect during the game?",
        optionA: "Officials",
        optionB: "Friends",
        optionC: "Spectators",
        correctAnswer: "Officials",
      }),
      shuffleOptions({
        question: "Which quality should every player show while playing?",
        optionA: "Fair play",
        optionB: "Anger",
        optionC: "Selfishness",
        correctAnswer: "Fair play",
      }),
      shuffleOptions({
        question: "Who among the following is a famous Indian sportsperson mentioned in the chapter?",
        optionA: "P. T. Usha",
        optionB: "Rani Lakshmi Bai",
        optionC: "Kalpana Chawla",
        correctAnswer: "P. T. Usha",
      }),
      shuffleOptions({
        question: "What must be followed in every organised game?",
        optionA: "Rules",
        optionB: "Feelings",
        optionC: "Fights",
        correctAnswer: "Rules",
      }),
      shuffleOptions({
        question: "Who provides sports equipment to students at school?",
        optionA: "Sports teacher",
        optionB: "Parents",
        optionC: "Friends",
        correctAnswer: "Sports teacher",
      }),
      shuffleOptions({
        question: "Who became the first Indian woman to win an Olympic medal in Sydney?",
        optionA: "Karnam Malleshwari",
        optionB: "Mary Kom",
        optionC: "P. V. Sindh",
        correctAnswer: "Karnam Malleshwari",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Playing games is a healthy way to relax and spend our ______.",
        optionA: "leisure time",
        optionB: "free money",
        optionC: "holiday",
        correctAnswer: "leisure time",
      }),
      shuffleOptions({
        question: "Games at home like ludo and carrom are known as ______ games.",
        optionA: "indoor",
        optionB: "outdoor",
        optionC: "field",
        correctAnswer: "indoor",
      }),
      shuffleOptions({
        question: "Games played in the neighbourhood are mostly ______ games.",
        optionA: "outdoor",
        optionB: "water",
        optionC: "card",
        correctAnswer: "outdoor",
      }),
      shuffleOptions({
        question: "Without proper sports ______ we cannot play games like cricket.",
        optionA: "equipment",
        optionB: "shoes",
        optionC: "benches",
        correctAnswer: "equipment",
      }),
      shuffleOptions({
        question: "Rules in games help to maintain ______ among players.",
        optionA: "discipline",
        optionB: "confusion",
        optionC: "quarrel",
        correctAnswer: "discipline",
      }),
      shuffleOptions({
        question: "Games in school are played by following standard ______.",
        optionA: "rules",
        optionB: "guesses",
        optionC: "wishes",
        correctAnswer: "rules",
      }),
      shuffleOptions({
        question: "Fair play means showing ______ and good behaviour.",
        optionA: "honesty",
        optionB: "anger",
        optionC: "carelessness",
        correctAnswer: "honesty",
      }),
      shuffleOptions({
        question: "The match in the chapter was between girls of ______ House and Narmada House.",
        optionA: "Ganga",
        optionB: "Yamuna",
        optionC: "Saraswati",
        correctAnswer: "Ganga",
      }),
      shuffleOptions({
        question: "Playing games develops the spirit of ______ among children.",
        optionA: "competition",
        optionB: "fear",
        optionC: "laziness",
        correctAnswer: "competition",
      }),
      shuffleOptions({
        question: "A true sportsperson sacrifices personal interests for the ______ of the team.",
        optionA: "good",
        optionB: "loss",
        optionC: "delay",
        correctAnswer: "good",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Games and sports combine exercise with fun and excitement.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Schools have adopted sports as a part of their curriculum.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chess and ludo are played in the neighbourhood.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rules in games are not necessary.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A referee ensures that rules are followed during the match.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Players should hurt the other team to win.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sports bring the best out of individuals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fair play means respecting the opponent team.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Games like kabaddi are only for boys.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Playing games helps in keeping us fit and healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
