export const chapter = "Chapter - 11: Cycling Adventure";
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
        question: "Uncle Dev was how many years older than the narrator?",
        optionA: "10",
        optionB: "12",
        optionC: "14",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "Who forbade them from playing gilli-danda?",
        optionA: "Neighbour",
        optionB: "Mother",
        optionC: "Father",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "Which festival was near when they tried flying kites?",
        optionA: "Holi",
        optionB: "Basant",
        optionC: "Diwali",
        correctAnswer: "Basant",
      }),
      shuffleOptions({
        question: "Which road was surrounded by greenery and fun for cycling?",
        optionA: "Mall Road",
        optionB: "Market Road",
        optionC: "Station Road",
        correctAnswer: "Mall Road",
      }),
      shuffleOptions({
        question: "Where did the narrator and Dev sneak in with bicycles though not allowed?",
        optionA: "Mall Road",
        optionB: "Stadium track",
        optionC: "Old fort",
        correctAnswer: "Stadium track",
      }),
      shuffleOptions({
        question: "The departmental store where Uncle Dev worked was destroyed by—",
        optionA: "Fire",
        optionB: "Flood",
        optionC: "Theft",
        correctAnswer: "Fire",
      }),
      shuffleOptions({
        question: "The hotel was closed down because of—",
        optionA: "High rent",
        optionB: "A lizard in vegetable",
        optionC: "No customers",
        correctAnswer: "A lizard in vegetable",
      }),
      shuffleOptions({
        question: "What time did they begin their cycling adventure?",
        optionA: "7 am",
        optionB: "8 am",
        optionC: "9 am",
        correctAnswer: "8 am",
      }),
      shuffleOptions({
        question: "Who suggested trying bottled water?",
        optionA: "Narrator",
        optionB: "Uncle Dev",
        optionC: "Shopkeeper",
        correctAnswer: "Narrator",
      }),
      shuffleOptions({
        question: "What words were written on the building wall?",
        optionA: "“Health is Wealth”",
        optionB: "“Wellness of the mind is what we care about”",
        optionC: "“Peaceful Living”",
        correctAnswer: "“Wellness of the mind is what we care about”",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Uncle Dev called the narrator his ___.",
        optionA: "Pal",
        optionB: "Buddy",
        optionC: "Brother",
        correctAnswer: "Buddy",
      }),
      shuffleOptions({
        question: "Riding a bicycle allows freedom to ___ around.",
        optionA: "Sleep",
        optionB: "Look",
        optionC: "Hide",
        correctAnswer: "Look",
      }),
      shuffleOptions({
        question: "Gusts of wind on the face eliminate all ___.",
        optionA: "Fatigue",
        optionB: "Anger",
        optionC: "Fear",
        correctAnswer: "Fatigue",
      }),
      shuffleOptions({
        question: "Riding a motorcycle requires a ___ with glass cover.",
        optionA: "Helmet",
        optionB: "Cap",
        optionC: "Hat",
        correctAnswer: "Helmet",
      }),
      shuffleOptions({
        question: "The government’s cycle track became useless due to poor ___.",
        optionA: "Construction",
        optionB: "Lighting",
        optionC: "Painting",
        correctAnswer: "Construction",
      }),
      shuffleOptions({
        question: "The shopkeeper pointed them to the village ___.",
        optionA: "Pond",
        optionB: "Hand-pump",
        optionC: "Well",
        correctAnswer: "Hand-pump",
      }),
      shuffleOptions({
        question: "Uncle Dev discovered his ___ was missing.",
        optionA: "Purse",
        optionB: "Key",
        optionC: "Pen",
        correctAnswer: "Purse",
      }),
      shuffleOptions({
        question: "The guards thought Uncle Dev was a ___.",
        optionA: "Guest",
        optionB: "Lunatic",
        optionC: "Worker",
        correctAnswer: "Lunatic",
      }),
      shuffleOptions({
        question: "An ambulance brought another man shouting he was perfectly ___.",
        optionA: "Happy",
        optionB: "Sane",
        optionC: "Calm",
        correctAnswer: "Sane",
      }),
      shuffleOptions({
        question: "The doctor served them a rich ___.",
        optionA: "Banquet",
        optionB: "Juice",
        optionC: "Lunchbox",
        correctAnswer: "Banquet",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Uncle Dev once worked in a hotel that closed due to a lizard found in food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The narrator considered a motorcycle safer than a bicycle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "They always carried water bottles except on the day of adventure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The shopkeeper happily gave them bottled water for free.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The impressive building had no signboard outside.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The lady in white saree first spoke sweetly and then firmly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The guards thought Uncle Dev was a lunatic.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Uncle Dev shouted loudly that he was no patient.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The doctor apologised for the mistake and served them snacks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Finally, they left with snacks and a water bottle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
