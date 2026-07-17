export const chapter = "Chapter - 3: Old and Differently-Abled";
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
        question: "Who invented the Braille system for blind people?",
        optionA: "Louis Braille",
        optionB: "Alexander Graham Bell",
        optionC: "Isaac Newton",
        correctAnswer: "Louis Braille",
      }),
      shuffleOptions({
        question: "Who is the famous classical dancer mentioned in the chapter?",
        optionA: "Sudha Chandran",
        optionB: "Hema Malini",
        optionC: "Rukmini Devi",
        correctAnswer: "Sudha Chandran",
      }),
      shuffleOptions({
        question: "What helps people who cannot hear properly?",
        optionA: "Hearing aid",
        optionB: "Telescope",
        optionC: "Microphone",
        correctAnswer: "Hearing aid",
      }),
      shuffleOptions({
        question: "Who among these cannot speak?",
        optionA: "Deaf",
        optionB: "Mute",
        optionC: "Blind",
        correctAnswer: "Mute",
      }),
      shuffleOptions({
        question: "What happens to our body in old age?",
        optionA: "It becomes weak",
        optionB: "It becomes stronger",
        optionC: "It becomes taller",
        correctAnswer: "It becomes weak",
      }),
      shuffleOptions({
        question: "Who is shown helping his grandpa cross the road?",
        optionA: "Rohan",
        optionB: "Suyash",
        optionC: "Amit",
        correctAnswer: "Suyash",
      }),
      shuffleOptions({
        question: "What helps blind people to read by touching raised dots?",
        optionA: "Braille",
        optionB: "Spectacles",
        optionC: "Microscope",
        correctAnswer: "Braille",
      }),
      shuffleOptions({
        question: "What should we show towards the differently-abled?",
        optionA: "Kindness",
        optionB: "Anger",
        optionC: "Pride",
        correctAnswer: "Kindness",
      }),
      shuffleOptions({
        question: "Which of these may cause disability?",
        optionA: "Accidents",
        optionB: "Festivals",
        optionC: "Games",
        correctAnswer: "Accidents",
      }),
      shuffleOptions({
        question: "What does “differently-abled” mean?",
        optionA: "People whose body parts do not work properly",
        optionB: "People who are very tall",
        optionC: "People who travel a lot",
        correctAnswer: "People whose body parts do not work properly",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Maitri could not see but could ______ beautifully.",
        optionA: "dance",
        optionB: "sing",
        optionC: "paint",
        correctAnswer: "sing",
      }),
      shuffleOptions({
        question: "People whose one or more body parts do not work properly are called ______.",
        optionA: "fit persons",
        optionB: "differently-abled",
        optionC: "rich persons",
        correctAnswer: "differently-abled",
      }),
      shuffleOptions({
        question: "Braille is made up of raised ______ on thick paper.",
        optionA: "dots",
        optionB: "lines",
        optionC: "curves",
        correctAnswer: "dots",
      }),
      shuffleOptions({
        question: "A person who cannot hear is called ______.",
        optionA: "blind",
        optionB: "deaf",
        optionC: "lame",
        correctAnswer: "deaf",
      }),
      shuffleOptions({
        question: "The body becomes ______ and weak in old age.",
        optionA: "strong",
        optionB: "tired",
        optionC: "young",
        correctAnswer: "tired",
      }),
      shuffleOptions({
        question: "Hearing aids help people to ______ better.",
        optionA: "see",
        optionB: "hear",
        optionC: "walk",
        correctAnswer: "hear",
      }),
      shuffleOptions({
        question: "Sudha Chandran lost her ______ in an accident.",
        optionA: "hand",
        optionB: "leg",
        optionC: "eyesight",
        correctAnswer: "leg",
      }),
      shuffleOptions({
        question: "The ability of the body to fight diseases is called ______.",
        optionA: "immunity",
        optionB: "activity",
        optionC: "ability",
        correctAnswer: "immunity",
      }),
      shuffleOptions({
        question: "We must always be ______ and helpful to old people.",
        optionA: "rude",
        optionB: "kind",
        optionC: "angry",
        correctAnswer: "kind",
      }),
      shuffleOptions({
        question: "Braille was invented by ______.",
        optionA: "Louis Braille",
        optionB: "Marie Curie",
        optionC: "Thomas Edison",
        correctAnswer: "Louis Braille",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Differently-abled people cannot achieve anything in life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Louis Braille invented Braille for blind people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sudha Chandran stopped dancing after her accident.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Old age increases the strength of the body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hearing aids help deaf people to hear better.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mute people cannot speak.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Severe accidents can cause harm to the body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should laugh at differently-abled people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All people are unique in their own ways.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should always help our grandparents and treat them kindly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
