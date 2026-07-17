export const chapter = "Chapter - 9: Humour in Science";
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
        question: "Who risked death by refusing amputation of his arm?",
        optionA: "Dalton",
        optionB: "Banting",
        optionC: "Bohr",
        correctAnswer: "Banting",
      }),
      shuffleOptions({
        question: "Who was about to inject himself with poison?",
        optionA: "Archimedes",
        optionB: "J.C. Bose",
        optionC: "Bunsen",
        correctAnswer: "J.C. Bose",
      }),
      shuffleOptions({
        question: "Who said, “There are some things that are so serious that you can only joke about them”?",
        optionA: "Bohr",
        optionB: "Dalton",
        optionC: "Pierre Curie",
        correctAnswer: "Bohr",
      }),
      shuffleOptions({
        question: "Who admitted that honours mattered only because they pleased his mother?",
        optionA: "Archimedes",
        optionB: "Bunsen",
        optionC: "Banting",
        correctAnswer: "Bunsen",
      }),
      shuffleOptions({
        question: "Who corrected a boy’s arithmetic before greeting a visitor?",
        optionA: "Dalton",
        optionB: "S.N. Bose",
        optionC: "Marie Curie",
        correctAnswer: "Dalton",
      }),
      shuffleOptions({
        question: "Who disguised herself as a housekeeper to avoid attention?",
        optionA: "Marie Curie",
        optionB: "Pierre Curie",
        optionC: "Dalton",
        correctAnswer: "Marie Curie",
      }),
      shuffleOptions({
        question: "Who troubled detectives by crossing streets at odd places?",
        optionA: "Bohr",
        optionB: "Banting",
        optionC: "J.C. Bose",
        correctAnswer: "Bohr",
      }),
      shuffleOptions({
        question: "Whose laboratory was described as “a cross between a horse-stable and a potato cellar”?",
        optionA: "The Curies",
        optionB: "Bunsen",
        optionC: "Archimedes",
        correctAnswer: "The Curies",
      }),
      shuffleOptions({
        question: "Who stayed with a priest’s family for nearly thirty years?",
        optionA: "Dalton",
        optionB: "Banting",
        optionC: "S.N. Bose",
        correctAnswer: "Dalton",
      }),
      shuffleOptions({
        question: "Who declared, “Radium is an instrument of mercy and it belongs to the world”?",
        optionA: "The Curies",
        optionB: "Bohr",
        optionC: "Bunsen",
        correctAnswer: "The Curies",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Banting reported to a hospital base in ______.",
        optionA: "Ottawa",
        optionB: "London",
        optionC: "Paris",
        correctAnswer: "Ottawa",
      }),
      shuffleOptions({
        question: "J.C. Bose conducted his experiment in ______.",
        optionA: "Berlin",
        optionB: "London",
        optionC: "New York",
        correctAnswer: "London",
      }),
      shuffleOptions({
        question: "Archimedes amazed ______ with his pulley system.",
        optionA: "King Hieron",
        optionB: "Caesar",
        optionC: "Newton",
        correctAnswer: "King Hieron",
      }),
      shuffleOptions({
        question: "Bohr worked on the secret ______ Project.",
        optionA: "Apollo",
        optionB: "Manhattan",
        optionC: "Mercury",
        correctAnswer: "Manhattan",
      }),
      shuffleOptions({
        question: "S.N. Bose sat with his eyes ______ during the meeting.",
        optionA: "closed",
        optionB: "open",
        optionC: "half-open",
        correctAnswer: "closed",
      }),
      shuffleOptions({
        question: "Bunsen mistook a visitor either for Kekule or ______.",
        optionA: "Strecker",
        optionB: "Dalton",
        optionC: "Bohr",
        correctAnswer: "Strecker",
      }),
      shuffleOptions({
        question: "Radium was first used in the treatment of ______.",
        optionA: "cancer",
        optionB: "malaria",
        optionC: "typhoid",
        correctAnswer: "cancer",
      }),
      shuffleOptions({
        question: "The reporter thought Marie Curie was the ______.",
        optionA: "guest",
        optionB: "housekeeper",
        optionC: "assistant",
        correctAnswer: "housekeeper",
      }),
      shuffleOptions({
        question: "Dalton resigned from ______ University.",
        optionA: "Manchester",
        optionB: "Oxford",
        optionC: "Cambridge",
        correctAnswer: "Manchester",
      }),
      shuffleOptions({
        question: "Dalton was found helping a boy with his ______.",
        optionA: "drawing",
        optionB: "arithmetic",
        optionC: "grammar",
        correctAnswer: "arithmetic",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Banting gladly accepted being promoted to Colonel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "J.C. Bose’s first experiment failed because the poison was replaced with water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Archimedes used great force to lift the ship out of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bohr always obeyed traffic signals while in New York.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "S.N. Bose solved a problem on the board despite having his eyes closed before.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bunsen always remembered visitors’ names.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Marie Curie wore wigs and glasses to hide from reporters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pierre Curie wanted a laboratory instead of an honour medal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dalton lived in a luxurious mansion in town.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dalton eventually stayed with the clergyman’s family for nearly thirty years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
