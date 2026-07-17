export const chapter = "Chapter - 24: Key Features of a Democratic Government";
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
        question: "Who said that in a democracy, people elect representatives who take decisions for them?",
        optionA: "Judges",
        optionB: "Elected leaders",
        optionC: "Police",
        correctAnswer: "Elected leaders",
      }),
      shuffleOptions({
        question: "Who highlights the problems faced by people in a democracy?",
        optionA: "Scientists",
        optionB: "Media",
        optionC: "Athletes",
        correctAnswer: "Media",
      }),
      shuffleOptions({
        question: "Which group faces discrimination in society as mentioned in the chapter?",
        optionA: "Tourists",
        optionB: "Women",
        optionC: "Soldiers",
        correctAnswer: "Women",
      }),
      shuffleOptions({
        question: "Who resolves conflicts between two states in India when required?",
        optionA: "Central Government",
        optionB: "Local shopkeepers",
        optionC: "School authorities",
        correctAnswer: "Central Government",
      }),
      shuffleOptions({
        question: "Who is the nominal head of the Indian state?",
        optionA: "Prime Minister",
        optionB: "President",
        optionC: "Speaker",
        correctAnswer: "President",
      }),
      shuffleOptions({
        question: "Who takes part in dharnas, rallies and strikes to raise issues?",
        optionA: "Only ministers",
        optionB: "Citizens",
        optionC: "Only students",
        correctAnswer: "Citizens",
      }),
      shuffleOptions({
        question: "Who among the following fought against untouchability?",
        optionA: "Ambedkar",
        optionB: "Vasco da Gama",
        optionC: "Napoleon",
        correctAnswer: "Ambedkar",
      }),
      shuffleOptions({
        question: "Who must approve the actions of the Prime Minister?",
        optionA: "Parliament",
        optionB: "Police",
        optionC: "Artists",
        correctAnswer: "Parliament",
      }),
      shuffleOptions({
        question: "Who plays an important role in keeping the ruling party in check?",
        optionA: "Opposition party",
        optionB: "Sports teams",
        optionC: "Traders",
        correctAnswer: "Opposition party",
      }),
      shuffleOptions({
        question: "Who can vote in a democratic election in India?",
        optionA: "Citizens aged 18 and above",
        optionB: "Children",
        optionC: "Foreign tourists",
        correctAnswer: "Citizens aged 18 and above",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "People elect their representatives for a fixed ______.",
        optionA: "festival",
        optionB: "tenure",
        optionC: "holiday",
        correctAnswer: "tenure",
      }),
      shuffleOptions({
        question: "People may organise rallies and dharnas to raise their voice against ______.",
        optionA: "injustice",
        optionB: "celebrations",
        optionC: "games",
        correctAnswer: "injustice",
      }),
      shuffleOptions({
        question: "Conflicts arise when interests ______.",
        optionA: "collide",
        optionB: "match perfectly",
        optionC: "disappear",
        correctAnswer: "collide",
      }),
      shuffleOptions({
        question: "The practice of ______ has been abolished by the government.",
        optionA: "gardening",
        optionB: "untouchability",
        optionC: "storytelling",
        correctAnswer: "untouchability",
      }),
      shuffleOptions({
        question: "Equal ______ for equal work ensures economic justice.",
        optionA: "prizes",
        optionB: "wages",
        optionC: "uniforms",
        correctAnswer: "wages",
      }),
      shuffleOptions({
        question: "Media helps people by informing them about important ______.",
        optionA: "issues",
        optionB: "recipes",
        optionC: "songs",
        correctAnswer: "issues",
      }),
      shuffleOptions({
        question: "The Judiciary helps resolve ______.",
        optionA: "conflicts",
        optionB: "birthday plans",
        optionC: "sports events",
        correctAnswer: "conflicts",
      }),
      shuffleOptions({
        question: "Women often face ______ in matters of health and education.",
        optionA: "discrimination",
        optionB: "extra benefits",
        optionC: "superiority",
        correctAnswer: "discrimination",
      }),
      shuffleOptions({
        question: "A party forms a coalition government when no party gets a clear ______.",
        optionA: "majority",
        optionB: "classroom",
        optionC: "poem",
        correctAnswer: "majority",
      }),
      shuffleOptions({
        question: "Right to ______ allows people to express their views freely.",
        optionA: "speech",
        optionB: "painting",
        optionC: "sleeping",
        correctAnswer: "speech",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "People in a democracy can criticise government decisions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Media plays no role in informing people about public issues.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Conflicts can arise over river water sharing between states.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In a democracy, only men have the right to vote.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Untouchability is a punishable offence in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Prime Minister must act without Parliament’s approval.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Citizens can participate in government by joining protests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Women receive equal opportunities everywhere in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Judiciary helps settle disputes fairly in a democracy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Democracy allows people freedom of speech and expression.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
