export const chapter = "Chapter - 15: Astronomy and Astrology";
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
        question: "Who declared that the sun is at the centre of the solar system?",
        optionA: "Modern scientists",
        optionB: "Ancient sages",
        optionC: "Astronauts",
        correctAnswer: "Ancient sages",
      }),
      shuffleOptions({
        question: "The moon gets its light from the ______.",
        optionA: "stars",
        optionB: "sun",
        optionC: "earth",
        correctAnswer: "sun",
      }),
      shuffleOptions({
        question: "Who made the Hindu Panchang?",
        optionA: "Ancient Indian astronomers",
        optionB: "Astrologers",
        optionC: "Farmers",
        correctAnswer: "Ancient Indian astronomers",
      }),
      shuffleOptions({
        question: "Which is based on scientific facts?",
        optionA: "Astrology",
        optionB: "Astronomy",
        optionC: "None",
        correctAnswer: "Astronomy",
      }),
      shuffleOptions({
        question: "Who claimed they could predict a person’s future?",
        optionA: "Astronomers",
        optionB: "Astrologers",
        optionC: "Scientists",
        correctAnswer: "Astrologers",
      }),
      shuffleOptions({
        question: "What does a superstition-minded person believe in?",
        optionA: "Astronomy",
        optionB: "Astrology",
        optionC: "Physics",
        correctAnswer: "Astrology",
      }),
      shuffleOptions({
        question: "Which heavenly body is at the centre of the solar system?",
        optionA: "Earth",
        optionB: "Sun",
        optionC: "Moon",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "The Hindu Panchang can predict the next ______ eclipse.",
        optionA: "star",
        optionB: "solar",
        optionC: "comet",
        correctAnswer: "solar",
      }),
      shuffleOptions({
        question: "Who became astrologers in ancient times?",
        optionA: "Astronomers",
        optionB: "Engineers",
        optionC: "Sailors",
        correctAnswer: "Astronomers",
      }),
      shuffleOptions({
        question: "What do constellations consist of?",
        optionA: "Planets",
        optionB: "Stars",
        optionC: "Clouds",
        correctAnswer: "Stars",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "______ is the science of stars and planets.",
        optionA: "Astronomy",
        optionB: "Astrology",
        optionC: "Physics",
        correctAnswer: "Astronomy",
      }),
      shuffleOptions({
        question: "Ancient people believed the ______ was in the centre of the universe.",
        optionA: "earth",
        optionB: "sun",
        optionC: "moon",
        correctAnswer: "earth",
      }),
      shuffleOptions({
        question: "Astrology deals with predicting the ______ of people.",
        optionA: "clothes",
        optionB: "future",
        optionC: "houses",
        correctAnswer: "future",
      }),
      shuffleOptions({
        question: "The Hindu Panchang is a ______.",
        optionA: "belief",
        optionB: "calendar",
        optionC: "story",
        correctAnswer: "calendar",
      }),
      shuffleOptions({
        question: "The moon shines from the light of the ______.",
        optionA: "earth",
        optionB: "sun",
        optionC: "stars",
        correctAnswer: "sun",
      }),
      shuffleOptions({
        question: "A ______-minded person will believe in astronomy.",
        optionA: "scientific",
        optionB: "superstition",
        optionC: "lazy",
        correctAnswer: "scientific",
      }),
      shuffleOptions({
        question: "The sun’s light and heat have an effect on the ______.",
        optionA: "earth",
        optionB: "moon",
        optionC: "Mars",
        correctAnswer: "earth",
      }),
      shuffleOptions({
        question: "The Hindu Panchang is based on the study of ______ bodies.",
        optionA: "heavenly",
        optionB: "living",
        optionC: "sea",
        correctAnswer: "heavenly",
      }),
      shuffleOptions({
        question: "Belief in astrology is a matter of personal ______.",
        optionA: "opinion",
        optionB: "fact",
        optionC: "proof",
        correctAnswer: "opinion",
      }),
      shuffleOptions({
        question: "A group of stars with a particular shape is called a ______.",
        optionA: "planet",
        optionB: "constellation",
        optionC: "galaxy",
        correctAnswer: "constellation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Astronomy is a science based on facts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The earth is at the centre of the solar system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Astrology is based on scientific study.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Hindu Panchang can predict eclipses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Constellations are made up of planets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The moon gets light from the sun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All people born at the same time have the same life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ancient sages had telescopes for their study.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Astronomy observes the motion of heavenly bodies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Astrology studies the movement of galaxies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
