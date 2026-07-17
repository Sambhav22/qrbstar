export const chapter = "Chapter - 16: The Liar";
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
        question: "Who was Labhu attached to as a Shikari?",
        optionA: "Missionary Sahib",
        optionB: "Subedar Deep Singh",
        optionC: "The narrator’s father",
        correctAnswer: "Subedar Deep Singh",
      }),
      shuffleOptions({
        question: "Labhu often sat under which tree?",
        optionA: "Peepal",
        optionB: "Banyan",
        optionC: "Neem",
        correctAnswer: "Banyan",
      }),
      shuffleOptions({
        question: "The narrator compared Labhu’s stories to:",
        optionA: "Truth",
        optionB: "Fancy",
        optionC: "Knowledge",
        correctAnswer: "Fancy",
      }),
      shuffleOptions({
        question: "What animal did the narrator see Labhu tracking into a cave?",
        optionA: "Ram",
        optionB: "Tiger",
        optionC: "Bear",
        correctAnswer: "Ram",
      }),
      shuffleOptions({
        question: "What was the Subedar’s son’s name?",
        optionA: "Deepak",
        optionB: "Kuldeep",
        optionC: "Jagdeep",
        correctAnswer: "Kuldeep",
      }),
      shuffleOptions({
        question: "Where did the hunting tour with Kuldeep and Sahibs go?",
        optionA: "Shimla",
        optionB: "Nepal",
        optionC: "Kashmir",
        correctAnswer: "Nepal",
      }),
      shuffleOptions({
        question: "According to the Subedar, Labhu could only shoot at:",
        optionA: "Deer",
        optionB: "Hare",
        optionC: "Tiger",
        correctAnswer: "Hare",
      }),
      shuffleOptions({
        question: "Labhu described a monster with the tail of a:",
        optionA: "Bull",
        optionB: "Horse",
        optionC: "Camel",
        correctAnswer: "Bull",
      }),
      shuffleOptions({
        question: "What was Labhu’s attitude when the magician tried to bury him alive?",
        optionA: "Afraid",
        optionB: "Brave",
        optionC: "Silent",
        correctAnswer: "Brave",
      }),
      shuffleOptions({
        question: "Who wrote The Liar?",
        optionA: "Premchand",
        optionB: "Mulk Raj Anand",
        optionC: "R.K. Narayan",
        correctAnswer: "Mulk Raj Anand",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Labhu was known as a ______.",
        optionA: "hunter",
        optionB: "liar",
        optionC: "soldier",
        correctAnswer: "liar",
      }),
      shuffleOptions({
        question: "The narrator’s mother asked him to ______ after listening to Labhu.",
        optionA: "wash",
        optionB: "take a bath",
        optionC: "eat",
        correctAnswer: "take a bath",
      }),
      shuffleOptions({
        question: "The devil-ram had eyes as big as ______.",
        optionA: "eggs",
        optionB: "stones",
        optionC: "marbles",
        correctAnswer: "eggs",
      }),
      shuffleOptions({
        question: "Kuldeep Singh was a ______ in the army.",
        optionA: "lieutenant",
        optionB: "captain",
        optionC: "major",
        correctAnswer: "lieutenant",
      }),
      shuffleOptions({
        question: "The Sahibs finished hundreds of ______.",
        optionA: "cartridges",
        optionB: "arrows",
        optionC: "bullets",
        correctAnswer: "cartridges",
      }),
      shuffleOptions({
        question: "The narrator sometimes called Labhu a ______.",
        optionA: "hero",
        optionB: "fool",
        optionC: "priest",
        correctAnswer: "fool",
      }),
      shuffleOptions({
        question: "Labhu compared the monster’s tissue to the veil of the ______ of Boondi.",
        optionA: "Rani",
        optionB: "Princess",
        optionC: "Queen",
        correctAnswer: "Rani",
      }),
      shuffleOptions({
        question: "The monster had the feet of a ______.",
        optionA: "goat",
        optionB: "camel",
        optionC: "donkey",
        correctAnswer: "goat",
      }),
      shuffleOptions({
        question: "The Subedar and Sahibs spread ______ about Labhu.",
        optionA: "scandal",
        optionB: "respect",
        optionC: "love",
        correctAnswer: "scandal",
      }),
      shuffleOptions({
        question: "Labhu laughed and said, “Have I told you this story ______?”",
        optionA: "before",
        optionB: "again",
        optionC: "already",
        correctAnswer: "before",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Labhu was always believed by the narrator.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The devil-ram sneezed and shook the mountain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kuldeep Singh was described as a skilled shooter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Sahibs were clumsy hunters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Labhu claimed to see a princess turned into a monster.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Labhu actually killed the monster in Nepal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The narrator always hated Labhu.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Labhu used imagination even in excuses for the narrator.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "According to others, Labhu was only good at tracking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Labhu ended his tale with humour despite limping.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
