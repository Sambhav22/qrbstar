export const chapter = "Chapter - 14: Early States";
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
        question: "Which mahajanapada had its capital at Ujjain?",
        optionA: "Avanti",
        optionB: "Anga",
        optionC: "Chedi",
        correctAnswer: "Avanti",
      }),
      shuffleOptions({
        question: "Who strengthened Magadha by using conquests, marriage alliances and political alliances?",
        optionA: "Ashoka",
        optionB: "Bimbisara",
        optionC: "Porus",
        correctAnswer: "Bimbisara",
      }),
      shuffleOptions({
        question: "Which sea port mentioned in the chapter was known as Surparka?",
        optionA: "Broach",
        optionB: "Sopara",
        optionC: "Tamralipti",
        correctAnswer: "Sopara",
      }),
      shuffleOptions({
        question: "Which group of people in society performed rituals using Sanskrit?",
        optionA: "Kshatriyas",
        optionB: "Brahmins",
        optionC: "Vaishyas",
        correctAnswer: "Brahmins",
      }),
      shuffleOptions({
        question: "Which river did not surround Patliputra?",
        optionA: "Gandak",
        optionB: "Son",
        optionC: "Krishna",
        correctAnswer: "Krishna",
      }),
      shuffleOptions({
        question: "Why did people shift from barter to coin-based trade?",
        optionA: "Barter became inconvenient with growing trade",
        optionB: "Coins were colourful",
        optionC: "Priests asked them to",
        correctAnswer: "Barter became inconvenient with growing trade",
      }),
      shuffleOptions({
        question: "Which town type was the smallest in size?",
        optionA: "Purās",
        optionB: "Nagaras",
        optionC: "Mahanagaras",
        correctAnswer: "Purās",
      }),
      shuffleOptions({
        question: "Which clan in the Vajji Confederacy is mentioned as the most important?",
        optionA: "Pauravas",
        optionB: "Lichchhavis",
        optionC: "Mauryas",
        correctAnswer: "Lichchhavis",
      }),
      shuffleOptions({
        question: "Who rewarded good officers and punished corrupt ones?",
        optionA: "Ajatasatru",
        optionB: "Bimbisara",
        optionC: "Mahapadma Nanda",
        correctAnswer: "Bimbisara",
      }),
      shuffleOptions({
        question: "Which resource from forests became a major military advantage for Magadha?",
        optionA: "Cotton",
        optionB: "Elephants",
        optionC: "Gems",
        correctAnswer: "Elephants",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The early coins used in trade were made of copper and ______.",
        optionA: "gold",
        optionB: "silver",
        optionC: "bronze",
        correctAnswer: "silver",
      }),
      shuffleOptions({
        question: "The medium-sized towns in this period were known as ______.",
        optionA: "puras",
        optionB: "nagaras",
        optionC: "mahanagaras",
        correctAnswer: "nagaras",
      }),
      shuffleOptions({
        question: "The simple languages spoken by common people were ______ and Prakrit.",
        optionA: "Sanskrit",
        optionB: "Pali",
        optionC: "Hindi",
        correctAnswer: "Pali",
      }),
      shuffleOptions({
        question: "Magadha’s fertile land produced ______ crops each year.",
        optionA: "surplus",
        optionB: "insufficient",
        optionC: "no",
        correctAnswer: "surplus",
      }),
      shuffleOptions({
        question: "The birth of a girl was seen as a ______ in society.",
        optionA: "blessing",
        optionB: "curse",
        optionC: "celebration",
        correctAnswer: "curse",
      }),
      shuffleOptions({
        question: "The Vajjis ran their government through a system called ______.",
        optionA: "monarchy",
        optionB: "gana or sangha",
        optionC: "dictatorship",
        correctAnswer: "gana or sangha",
      }),
      shuffleOptions({
        question: "Tax paid by craftsmen often came in the form of ______.",
        optionA: "free services",
        optionB: "precious stones",
        optionC: "cattle",
        correctAnswer: "free services",
      }),
      shuffleOptions({
        question: "The language used by Brahmins during rituals was ______.",
        optionA: "Tamil",
        optionB: "Sanskrit",
        optionC: "Prakrit",
        correctAnswer: "Sanskrit",
      }),
      shuffleOptions({
        question: "The town of Patliputra was surrounded by rivers to keep it ______.",
        optionA: "wealthy",
        optionB: "protected",
        optionC: "deserted",
        correctAnswer: "protected",
      }),
      shuffleOptions({
        question: "Many people joined the ______ due to increasing opportunities in cities.",
        optionA: "army",
        optionB: "temple",
        optionC: "theatre",
        correctAnswer: "army",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Iron tools helped people clear forests to form new settlements.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mahajanapadas were always friendly and never fought with each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The jati system eventually became rigid and hereditary.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Only rich women could receive education during this period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Punch-marked coins made trade easier than barter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Patliputra’s location made it vulnerable to attacks from all sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The forests of Magadha provided elephants for the army.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Vajji Confederacy had committees for justice and foreign affairs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bimbisara defeated the king of Anga to expand his kingdom.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ajatasatru built strong relations with the Lichchhavis throughout his rule.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
