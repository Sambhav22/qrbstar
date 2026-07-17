export const chapter = "Chapter - 16: The True Devotee";
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
        question: "Who drove away the gods from heaven?",
        optionA: "Prahlada",
        optionB: "Hiranyakashipu",
        optionC: "Holika",
        correctAnswer: "Hiranyakashipu",
      }),
      shuffleOptions({
        question: "Who was a true devotee of God?",
        optionA: "Prahlada",
        optionB: "Hiranyakashipu",
        optionC: "Holika",
        correctAnswer: "Prahlada",
      }),
      shuffleOptions({
        question: "What did Hiranyakashipu ask everyone to do?",
        optionA: "Worship him",
        optionB: "Serve the poor",
        optionC: "Worship God",
        correctAnswer: "Worship him",
      }),
      shuffleOptions({
        question: "Who saved Prahlada from fire?",
        optionA: "Holika",
        optionB: "The shawl",
        optionC: "The guards",
        correctAnswer: "The shawl",
      }),
      shuffleOptions({
        question: "What did Hiranyakashipu order to trample Prahlada?",
        optionA: "Lions",
        optionB: "Elephants",
        optionC: "Horses",
        correctAnswer: "Elephants",
      }),
      shuffleOptions({
        question: "What did the guards fail to do?",
        optionA: "Protect Prahlada",
        optionB: "Kill Prahlada",
        optionC: "Worship Prahlada",
        correctAnswer: "Kill Prahlada",
      }),
      shuffleOptions({
        question: "Who sat on the woodpile with Prahlada?",
        optionA: "Holika",
        optionB: "Hiranyakashipu",
        optionC: "His mother",
        correctAnswer: "Holika",
      }),
      shuffleOptions({
        question: "From where did Lord Nrasimha appear?",
        optionA: "The sky",
        optionB: "The ocean",
        optionC: "The pillar",
        correctAnswer: "The pillar",
      }),
      shuffleOptions({
        question: "What form did Lord Nrasimha take?",
        optionA: "Half man, half lion",
        optionB: "Half man, half elephant",
        optionC: "Half man, half bird",
        correctAnswer: "Half man, half lion",
      }),
      shuffleOptions({
        question: "What happened to the demons after Hiranyakashipu’s death?",
        optionA: "They fled in terror",
        optionB: "They prayed to God",
        optionC: "They celebrated",
        correctAnswer: "They fled in terror",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Hiranyakashipu proclaimed, “There is no ______.”",
        optionA: "God",
        optionB: "King",
        optionC: "Heaven",
        correctAnswer: "God",
      }),
      shuffleOptions({
        question: "Prahlada said, “You are only a ______.”",
        optionA: "god",
        optionB: "man",
        optionC: "king",
        correctAnswer: "king",
      }),
      shuffleOptions({
        question: "The guards failed to kill Prahlada every ______.",
        optionA: "year",
        optionB: "day",
        optionC: "time",
        correctAnswer: "time",
      }),
      shuffleOptions({
        question: "Holika had an ______ shawl.",
        optionA: "red",
        optionB: "shining",
        optionC: "incombustible",
        correctAnswer: "incombustible",
      }),
      shuffleOptions({
        question: "Flames began to ______ the pile of wood.",
        optionA: "cook",
        optionB: "destroy",
        optionC: "swallow",
        correctAnswer: "swallow",
      }),
      shuffleOptions({
        question: "The wind took away Holika’s ______.",
        optionA: "crown",
        optionB: "shawl",
        optionC: "sword",
        correctAnswer: "shawl",
      }),
      shuffleOptions({
        question: "Hiranyakashipu ordered the pillar to be heated ______.",
        optionA: "red hot",
        optionB: "blue",
        optionC: "black",
        correctAnswer: "red hot",
      }),
      shuffleOptions({
        question: "Prahlada saw an ______ walking on the pillar.",
        optionA: "insect",
        optionB: "butterfly",
        optionC: "ant",
        correctAnswer: "ant",
      }),
      shuffleOptions({
        question: "The demons ran away in ______.",
        optionA: "terror",
        optionB: "joy",
        optionC: "peace",
        correctAnswer: "terror",
      }),
      shuffleOptions({
        question: "Lord Nrasimha blessed Prahlada to remain His ______.",
        optionA: "king",
        optionB: "devotee",
        optionC: "warrior",
        correctAnswer: "devotee",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Hiranyakashipu declared himself God.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Prahlada worshipped his father.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The spears killed Prahlada.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mad elephants could not harm Prahlada.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Holika had a shawl that caught fire quickly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The wind helped Prahlada survive the fire.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hiranyakashipu struck the iron pillar with a sword.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lord Shiva came out of the pillar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Prahlada wished for riches and power.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Pole Star helps travellers at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
