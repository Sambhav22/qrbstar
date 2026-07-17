export const chapter = "Chapter - 15: Emergence of New Ideas";
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
        question: "Who explained the unity between jeeva (individual soul) and Brahma (supreme soul)?",
        optionA: "Writers of the Vedas",
        optionB: "Composers of the Upanishads",
        optionC: "Followers of Ashoka",
        correctAnswer: "Composers of the Upanishads",
      }),
      shuffleOptions({
        question: "Who left his palace life after witnessing old age, sickness and death?",
        optionA: "Mahavira",
        optionB: "Siddhartha Gautama",
        optionC: "Rishabhdeva",
        correctAnswer: "Siddhartha Gautama",
      }),
      shuffleOptions({
        question: "Who attained enlightenment while meditating under the Bodhi tree?",
        optionA: "Buddha",
        optionB: "Mahavira",
        optionC: "Kanishka",
        correctAnswer: "Buddha",
      }),
      shuffleOptions({
        question: "Who taught that desire is the root cause of human suffering?",
        optionA: "Vyasa",
        optionB: "Gautam Buddha",
        optionC: "Dara Shikoh",
        correctAnswer: "Gautam Buddha",
      }),
      shuffleOptions({
        question: "Who travelled for several years before attaining Kevalya (supreme knowledge)?",
        optionA: "Ashoka",
        optionB: "Mahavira",
        optionC: "Parshvanath",
        correctAnswer: "Mahavira",
      }),
      shuffleOptions({
        question: "Who organised the sangha to spread religious teachings among common people?",
        optionA: "Buddha",
        optionB: "Kautilya",
        optionC: "Harsha",
        correctAnswer: "Buddha",
      }),
      shuffleOptions({
        question: "Who preached that every living being deserves love and respect?",
        optionA: "Mahadev",
        optionB: "Mahavira",
        optionC: "Gautam Buddha",
        correctAnswer: "Mahavira",
      }),
      shuffleOptions({
        question: "Who taught that liberation can be achieved by following right faith, right knowledge and right conduct?",
        optionA: "Vedic priests",
        optionB: "Mahavira",
        optionC: "Alexander",
        correctAnswer: "Mahavira",
      }),
      shuffleOptions({
        question: "Who travelled across Magadha, Anga, Mithila and Koshala to spread his teachings?",
        optionA: "Buddha",
        optionB: "Mahavira",
        optionC: "Confucius",
        correctAnswer: "Mahavira",
      }),
      shuffleOptions({
        question: "Who discouraged complicated rituals and sacrifices, emphasising simple living instead?",
        optionA: "Brahmin scholars",
        optionB: "Teachers of the Upanishads",
        optionC: "Persian kings",
        correctAnswer: "Teachers of the Upanishads",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mahavira taught that the path to liberation begins with right ________.",
        optionA: "wealth",
        optionB: "faith",
        optionC: "punishment",
        correctAnswer: "faith",
      }),
      shuffleOptions({
        question: "The Buddha encouraged people to free themselves from ________.",
        optionA: "desires",
        optionB: "festivals",
        optionC: "armies",
        correctAnswer: "desires",
      }),
      shuffleOptions({
        question: "The permanent residences of monks were called ________.",
        optionA: "forts",
        optionB: "viharas",
        optionC: "palaces",
        correctAnswer: "viharas",
      }),
      shuffleOptions({
        question: "Buddhist monks who lived on alms were known as ________.",
        optionA: "traders",
        optionB: "bhikshus",
        optionC: "warriors",
        correctAnswer: "bhikshus",
      }),
      shuffleOptions({
        question: "The language used by Buddha to preach was mainly ________.",
        optionA: "Sanskrit",
        optionB: "Pali",
        optionC: "French",
        correctAnswer: "Pali",
      }),
      shuffleOptions({
        question: "The doctrine that one’s actions determine future life is called ________.",
        optionA: "astronomy",
        optionB: "karma",
        optionC: "astrology",
        correctAnswer: "karma",
      }),
      shuffleOptions({
        question: "The life of Buddha shows that suffering can be overcome by following the ________ Path.",
        optionA: "Golden",
        optionB: "Eightfold",
        optionC: "Royal",
        correctAnswer: "Eightfold",
      }),
      shuffleOptions({
        question: "Jainism strongly emphasises the practice of ________.",
        optionA: "agriculture",
        optionB: "ahimsa",
        optionC: "trading",
        correctAnswer: "ahimsa",
      }),
      shuffleOptions({
        question: "Mahavira believed that every soul could achieve ________.",
        optionA: "moksha",
        optionB: "punishment",
        optionC: "kingship",
        correctAnswer: "moksha",
      }),
      shuffleOptions({
        question: "The teachers of the Upanishads taught through ________ form.",
        optionA: "drama",
        optionB: "dialogue",
        optionC: "poems",
        correctAnswer: "dialogue",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Buddha taught that all human suffering arises because of desire.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mahavira did not believe in discrimination between high and low castes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sangha allowed only men to join and strictly banned women.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Upanishads reject unnecessary rituals and sacrifices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jain monks believed in strict control over their senses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Buddhism spread easily because it was taught in common languages like Pali and Prakrit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Buddha encouraged animal sacrifices as part of religious ceremonies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mahavira emphasised the three jewels—right faith, right knowledge and right conduct.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nirvana means freedom from the cycle of birth and rebirth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Viharas were temporary shelters that monks used only during festivals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
