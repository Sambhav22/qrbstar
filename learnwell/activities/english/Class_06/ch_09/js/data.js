export const chapter = "Chapter - 9: Fish or Fishes";
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
        question: "Which fish is also called Mully?",
        optionA: "Catfish",
        optionB: "Hilsa",
        optionC: "Rohu",
        correctAnswer: "Catfish",
      }),
      shuffleOptions({
        question: "Which fish is known for its flight above water?",
        optionA: "Ribbon fish",
        optionB: "Flying fish",
        optionC: "Chital",
        correctAnswer: "Flying fish",
      }),
      shuffleOptions({
        question: "Which is the largest fish group living today?",
        optionA: "Whales",
        optionB: "Sharks",
        optionC: "Salmon",
        correctAnswer: "Sharks",
      }),
      shuffleOptions({
        question: "Which fish is popularly eaten as bhekti?",
        optionA: "Hilsa",
        optionB: "Bhekti",
        optionC: "Rohu",
        correctAnswer: "Bhekti",
      }),
      shuffleOptions({
        question: "Which organ helps fishes detect sound under water?",
        optionA: "Ears",
        optionB: "Internal ear",
        optionC: "Fins",
        correctAnswer: "Internal ear",
      }),
      shuffleOptions({
        question: "Which fish is known as Indian carp?",
        optionA: "Hilsa",
        optionB: "Rohu",
        optionC: "Salmon",
        correctAnswer: "Rohu",
      }),
      shuffleOptions({
        question: "Which fish is also called ribbon fish?",
        optionA: "Chital",
        optionB: "Catfish",
        optionC: "Ribbon fish",
        correctAnswer: "Ribbon fish",
      }),
      shuffleOptions({
        question: "Fishes can taste through their ______.",
        optionA: "tongue",
        optionB: "oral membrane",
        optionC: "fins",
        correctAnswer: "oral membrane",
      }),
      shuffleOptions({
        question: "Which fish is known for uncanny smell sense?",
        optionA: "Salmon",
        optionB: "Hilsa",
        optionC: "Shark",
        correctAnswer: "Salmon",
      }),
      shuffleOptions({
        question: "Which sea creatures emit light apart from fishes?",
        optionA: "Frogs",
        optionB: "Glow worms",
        optionC: "Fireflies",
        correctAnswer: "Fireflies",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Whales look like fish but are actually ______.",
        optionA: "Mammals",
        optionB: "Fishes",
        optionC: "Amphibians",
        correctAnswer: "Mammals",
      }),
      shuffleOptions({
        question: "The backbone in fishes proves they are ______.",
        optionA: "Invertebrates",
        optionB: "Amphibians",
        optionC: "Vertebrates",
        correctAnswer: "Vertebrates",
      }),
      shuffleOptions({
        question: "Fishes inhabit rivers, lakes, seas and ______.",
        optionA: "Estuaries",
        optionB: "Mountains",
        optionC: "Forests",
        correctAnswer: "Estuaries",
      }),
      shuffleOptions({
        question: "Experiments proved fishes register sound better through ______ than air.",
        optionA: "Earth",
        optionB: "Water",
        optionC: "Fire",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Some fishes have venom which is used only when ______.",
        optionA: "Sleeping",
        optionB: "Provoked",
        optionC: "Swimming",
        correctAnswer: "Provoked",
      }),
      shuffleOptions({
        question: "The mucus or ______ was earlier believed to produce young fishes.",
        optionA: "Oil",
        optionB: "Slime",
        optionC: "Shells",
        correctAnswer: "Slime",
      }),
      shuffleOptions({
        question: "Fishes move by the ______ movement of their body.",
        optionA: "Sinuous",
        optionB: "Straight",
        optionC: "Circular",
        correctAnswer: "Sinuous",
      }),
      shuffleOptions({
        question: "The phenomenon of light in deep-sea fishes is called ______.",
        optionA: "Bioluminescence",
        optionB: "Photosynthesis",
        optionC: "Reflection",
        correctAnswer: "Bioluminescence",
      }),
      shuffleOptions({
        question: "Some fishes use light to ______ their enemies.",
        optionA: "Attack",
        optionB: "Confuse",
        optionC: "Kill",
        correctAnswer: "Confuse",
      }),
      shuffleOptions({
        question: "Cod, salmon or plaice can lay up to ______ eggs.",
        optionA: "5,000",
        optionB: "50,000",
        optionC: "500,000",
        correctAnswer: "500,000",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Jellyfish and crayfish are true fishes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sharks are found in abundance in Indian seas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fishes do not have tongues but taste through oral membranes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Whales are the largest fishes in the ocean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Some fishes use light as recognition marks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fish venom is always fatal to humans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Deep-sea sharks can produce greenish light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fishes cannot hear sounds at all.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fishes emerged about 430 million years ago.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fishes have both males and females for reproduction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
