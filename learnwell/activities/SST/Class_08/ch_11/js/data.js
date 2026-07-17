export const chapter = "Chapter - 11: Colonialism and Tribal Societies";
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
        question: "Which tribe in Orissa stitched leaves to make plates and cups?",
        optionA: "Bhils",
        optionB: "Khonds",
        optionC: "Nagas",
        optionD: "Gonds",
        correctAnswer: "Khonds",
      }),
      shuffleOptions({
        question: "Which cultivation method required burning forest patches to enrich soil?",
        optionA: "Wet farming",
        optionB: "Jhum cultivation",
        optionC: "Plantation farming",
        optionD: "Terrace farming",
        correctAnswer: "Jhum cultivation",
      }),
      shuffleOptions({
        question: "Which community regularly supplied kusum and plash flowers to local artisans?",
        optionA: "Oraons",
        optionB: "Khonds",
        optionC: "Santhals",
        optionD: "Garos",
        correctAnswer: "Khonds",
      }),
      shuffleOptions({
        question: "Who considered settled tribes more “civilised” than nomadic tribes?",
        optionA: "Missionaries",
        optionB: "Local zamindars",
        optionC: "Moneylenders",
        optionD: "British officers",
        correctAnswer: "British officers",
      }),
      shuffleOptions({
        question: "Which groups migrated seasonally when grass for their cattle was exhausted?",
        optionA: "Settled cultivators",
        optionB: "Hunters",
        optionC: "Pastoralists",
        optionD: "Traders",
        correctAnswer: "Pastoralists",
      }),
      shuffleOptions({
        question: "Which Act forced nomadic tribes to carry permits for movement?",
        optionA: "Plantation Act",
        optionB: "Criminal Tribes Act",
        optionC: "Forest Act",
        optionD: "Revenue Act",
        correctAnswer: "Criminal Tribes Act",
      }),
      shuffleOptions({
        question: "Which workers recruited Santhals and Oraons for tea plantations?",
        optionA: "Doctors",
        optionB: "Engineers",
        optionC: "Contractors",
        optionD: "School teachers",
        correctAnswer: "Contractors",
      }),
      shuffleOptions({
        question: "What did many poor pastoralists do when forced to pay high taxes on their animals?",
        optionA: "Increased their herds",
        optionB: "Borrowed money from moneylenders",
        optionC: "Stopped migration",
        optionD: "Started mining",
        correctAnswer: "Borrowed money from moneylenders",
      }),
      shuffleOptions({
        question: "What did the British cut forests for?",
        optionA: "Railway tracks and ships",
        optionB: "Building forts",
        optionC: "Jewellery",
        optionD: "Festivals",
        correctAnswer: "Railway tracks and ships",
      }),
      shuffleOptions({
        question: "Which tribal revolt opposed the British because of a road through their land?",
        optionA: "Munda revolt",
        optionB: "Khasi revolt",
        optionC: "Kol revolt",
        optionD: "Bhil revolt",
        correctAnswer: "Khasi revolt",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The flowers of ______ were used for making alcohol and food items.",
        optionA: "lotus",
        optionB: "mahua",
        optionC: "jasmine",
        correctAnswer: "mahua",
      }),
      shuffleOptions({
        question: "The tribals prepared soil for jhum cultivation using a ______.",
        optionA: "plough",
        optionB: "hoe",
        optionC: "axe",
        correctAnswer: "hoe",
      }),
      shuffleOptions({
        question: "The Khonds used seeds of the ______ tree for extracting cooking oil.",
        optionA: "neem",
        optionB: "sal",
        optionC: "teak",
        correctAnswer: "sal",
      }),
      shuffleOptions({
        question: "The land of the Munda tribe belonged to the entire ______.",
        optionA: "village",
        optionB: "chief",
        optionC: "clan",
        correctAnswer: "clan",
      }),
      shuffleOptions({
        question: "Nomadic tribes moved from place to place in search of fresh ______.",
        optionA: "crops",
        optionB: "pastures",
        optionC: "rivers",
        correctAnswer: "pastures",
      }),
      shuffleOptions({
        question: "Many tribals were forced to work in tea plantations and mines under ______ conditions.",
        optionA: "luxurious",
        optionB: "free",
        optionC: "harsh",
        correctAnswer: "harsh",
      }),
      shuffleOptions({
        question: "Tribals sold forest goods in the local markets to obtain ______.",
        optionA: "jewellery",
        optionB: "grains",
        optionC: "machines",
        correctAnswer: "grains",
      }),
      shuffleOptions({
        question: "Under British forest rules, collecting fuelwood and grazing cattle became ______.",
        optionA: "free",
        optionB: "legal",
        optionC: "illegal",
        correctAnswer: "illegal",
      }),
      shuffleOptions({
        question: "The British classified forests into reserved, protected, and ______ forests.",
        optionA: "urban",
        optionB: "village",
        optionC: "desert",
        correctAnswer: "village",
      }),
      shuffleOptions({
        question: "The British banning shifting cultivation forced many tribals to ______.",
        optionA: "migrate to other regions",
        optionB: "buy new land",
        optionC: "join the army",
        correctAnswer: "migrate to other regions",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Nomadic tribes needed permits to move from one place to another.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Khonds extracted cooking oil from sal seeds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tribals were allowed to freely hunt and collect firewood after the Forest Act.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Settled cultivators were considered easier to control by the British.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tribals used bamboo to make fences, baskets, and umbrellas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Many pastoralists reduced their cattle due to high taxes on grazing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tea plantation workers were paid high wages by contractors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Khasi revolt started because the British wanted to build a road.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Moneylenders treated tribals kindly and helped them avoid debts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Santhal rebellion spread across regions from Bihar to Odisha.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
