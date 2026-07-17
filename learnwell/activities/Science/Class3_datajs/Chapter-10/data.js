export const chapter = "Chapter - 10: Light, Sound and Force";
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
        question: "Which living creatures glow at night and give out light?",
        optionA: "Fireflies and glow-worms",
        optionB: "Cats and dogs",
        optionC: "Lions and tigers",
        correctAnswer: "Fireflies and glow-worms",
      }),
      shuffleOptions({
        question: "The Sun helps us to —",
        optionA: "See things during the day",
        optionB: "Sleep at night",
        optionC: "Hear sounds clearly",
        correctAnswer: "See things during the day",
      }),
      shuffleOptions({
        question: "Which of the following is a source of artificial light?",
        optionA: "Torch",
        optionB: "Moon",
        optionC: "Mirror",
        correctAnswer: "Torch",
      }),
      shuffleOptions({
        question: "A shadow is formed when —",
        optionA: "Something blocks the light",
        optionB: "There is no object",
        optionC: "Light bends around corners",
        correctAnswer: "Something blocks the light",
      }),
      shuffleOptions({
        question: "Shadows are the shortest —",
        optionA: "At noon",
        optionB: "In the morning",
        optionC: "In the evening",
        correctAnswer: "At noon",
      }),
      shuffleOptions({
        question: "Which of the following produces a pleasant sound?",
        optionA: "Flute",
        optionB: "Crackers",
        optionC: "Loudspeaker",
        correctAnswer: "Flute",
      }),
      shuffleOptions({
        question: "The roar of an engine is an example of —",
        optionA: "Noise",
        optionB: "Music",
        optionC: "Silence",
        correctAnswer: "Noise",
      }),
      shuffleOptions({
        question: "Friction is caused when two objects —",
        optionA: "Touch or rub each other",
        optionB: "Fly apart",
        optionC: "Do not move",
        correctAnswer: "Touch or rub each other",
      }),
      shuffleOptions({
        question: "What happens when friction is less?",
        optionA: "Things slide easily",
        optionB: "Things stop quickly",
        optionC: "Things become heavy",
        correctAnswer: "Things slide easily",
      }),
      shuffleOptions({
        question: "Which of these activities shows the use of force?",
        optionA: "Pushing a swing",
        optionB: "Reading a book",
        optionC: "Watching TV",
        correctAnswer: "Pushing a swing",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Sun is the main source of ______ on Earth.",
        optionA: "heat",
        optionB: "light",
        optionC: "sound",
        correctAnswer: "light",
      }),
      shuffleOptions({
        question: "Objects which give light are called ______ objects.",
        optionA: "transparent",
        optionB: "luminous",
        optionC: "non-luminous",
        correctAnswer: "luminous",
      }),
      shuffleOptions({
        question: "We can see things only when there is ______.",
        optionA: "light",
        optionB: "darkness",
        optionC: "sound",
        correctAnswer: "light",
      }),
      shuffleOptions({
        question: "Shadows are always formed on the ______ side of the source of light.",
        optionA: "same",
        optionB: "opposite",
        optionC: "front",
        correctAnswer: "opposite",
      }),
      shuffleOptions({
        question: "The sound of crackers is ______.",
        optionA: "pleasant",
        optionB: "soft",
        optionC: "unpleasant",
        correctAnswer: "unpleasant",
      }),
      shuffleOptions({
        question: "Loud and unpleasant sounds are called ______.",
        optionA: "tunes",
        optionB: "noise",
        optionC: "music",
        correctAnswer: "noise",
      }),
      shuffleOptions({
        question: "______ helps us to walk without slipping.",
        optionA: "Force",
        optionB: "Friction",
        optionC: "Light",
        correctAnswer: "Friction",
      }),
      shuffleOptions({
        question: "A push or a pull on an object is called ______.",
        optionA: "sound",
        optionB: "shadow",
        optionC: "force",
        correctAnswer: "force",
      }),
      shuffleOptions({
        question: "Fireflies are examples of ______ bodies.",
        optionA: "living luminous",
        optionB: "non-luminous",
        optionC: "metallic",
        correctAnswer: "living luminous",
      }),
      shuffleOptions({
        question: "Friction is a kind of ______ that slows down a moving object.",
        optionA: "sound",
        optionB: "light",
        optionC: "force",
        correctAnswer: "force",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Moon produces its own light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shadows are longer in the morning and evening.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Music is a pleasant sound.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Noise can disturb our sleep.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Friction helps us to walk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Sun is a non-luminous object.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We can see things even when there is no light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Force can change the shape of an object.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "When friction is high, things do not move easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A shadow is formed on the same side as the light source.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
