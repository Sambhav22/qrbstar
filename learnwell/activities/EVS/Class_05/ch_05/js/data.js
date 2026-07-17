export const chapter = "Chapter - 5: Games";
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
        question: "Who encouraged Sanket to play badminton for fitness?",
        optionA: "Hari Singh",
        optionB: "Adit",
        optionC: "Virat Kohli",
        correctAnswer: "Adit",
      }),
      shuffleOptions({
        question: "Which sport is played on a wooden pole?",
        optionA: "Boxing",
        optionB: "Mallakhamb",
        optionC: "Tennis",
        correctAnswer: "Mallakhamb",
      }),
      shuffleOptions({
        question: "What is the traditional boat race of Kerala called?",
        optionA: "Vallam Kali",
        optionB: "Kushti",
        optionC: "Kabaddi",
        correctAnswer: "Vallam Kali",
      }),
      shuffleOptions({
        question: "Which ancient sport was once used for hunting and self-defence?",
        optionA: "Archery",
        optionB: "Kho-Kho",
        optionC: "Cricket",
        correctAnswer: "Archery",
      }),
      shuffleOptions({
        question: "Who leads and motivates a team during games?",
        optionA: "Coach",
        optionB: "Captain",
        optionC: "Referee",
        correctAnswer: "Captain",
      }),
      shuffleOptions({
        question: "The feeling of pride and loyalty among team members is called—",
        optionA: "Team spirit",
        optionB: "Friendship",
        optionC: "Competition",
        correctAnswer: "Team spirit",
      }),
      shuffleOptions({
        question: "Kushti, the local game of Haryana, is also known as—",
        optionA: "Kabaddi",
        optionB: "Pehalwani",
        optionC: "Karate",
        correctAnswer: "Pehalwani",
      }),
      shuffleOptions({
        question: "What does gender stereotyping mean?",
        optionA: "Judging people by their gender",
        optionB: "Treating everyone equally",
        optionC: "Sharing sports equipment",
        correctAnswer: "Judging people by their gender",
      }),
      shuffleOptions({
        question: "Which Indian state is famous for the martial art Kalaripayattu?",
        optionA: "Kerala",
        optionB: "Haryana",
        optionC: "Punjab",
        correctAnswer: "Kerala",
      }),
      shuffleOptions({
        question: "What does the word leisure mean?",
        optionA: "Free time",
        optionB: "Exercise",
        optionC: "Duty",
        correctAnswer: "Free time",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Games help us to stay ______ and strong.",
        optionA: "lazy",
        optionB: "healthy",
        optionC: "hungry",
        correctAnswer: "healthy",
      }),
      shuffleOptions({
        question: "In an ______ game, a player plays alone against another player.",
        optionA: "team",
        optionB: "individual",
        optionC: "group",
        correctAnswer: "individual",
      }),
      shuffleOptions({
        question: "A team captain must have the ability to ______ team members.",
        optionA: "punish",
        optionB: "inspire",
        optionC: "ignore",
        correctAnswer: "inspire",
      }),
      shuffleOptions({
        question: "Vallam Kali is also known as the ______ boat race.",
        optionA: "dragon",
        optionB: "snake",
        optionC: "paper",
        correctAnswer: "snake",
      }),
      shuffleOptions({
        question: "The teachers who train players of local games are called ______.",
        optionA: "masters",
        optionB: "gurus",
        optionC: "referees",
        correctAnswer: "gurus",
      }),
      shuffleOptions({
        question: "Mallakhamb is a traditional sport performed on a ______.",
        optionA: "table",
        optionB: "pole",
        optionC: "stage",
        correctAnswer: "pole",
      }),
      shuffleOptions({
        question: "______ and ______ both can participate in sports today.",
        optionA: "Men, women",
        optionB: "Boys, animals",
        optionC: "Men, machines",
        correctAnswer: "Men, women",
      }),
      shuffleOptions({
        question: "Kalaripayattu is an Indian art of ______.",
        optionA: "dancing",
        optionB: "self-defence",
        optionC: "swimming",
        correctAnswer: "self-defence",
      }),
      shuffleOptions({
        question: "Archery was included in the Olympics in the year ______.",
        optionA: "1972",
        optionB: "1980",
        optionC: "1990",
        correctAnswer: "1972",
      }),
      shuffleOptions({
        question: "The local game of Fatehpur village in Haryana is ______.",
        optionA: "Kho-Kho",
        optionB: "Kushti",
        optionC: "Kabaddi",
        correctAnswer: "Kushti",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Games teach us discipline and teamwork.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chess is a team game.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Team spirit helps players to work together.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vallam Kali is a sport from Haryana.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Archery originated in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gender stereotyping means equal treatment of boys and girls.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kushti is also called Indian wrestling.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mallakhamb is performed using a wooden pole.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gurus train the players of local games.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Leisure means time when one is not working.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
