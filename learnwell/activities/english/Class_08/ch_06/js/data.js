export const chapter = "Chapter - 6: The Bravest Warriors";
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
        question: "Who commanded D Company of 4 Kumaon Regiment in 1947?",
        optionA: "Subedar Joginder Singh",
        optionB: "Major Somnath Sharma",
        optionC: "Captain Vikram Batra",
        correctAnswer: "Major Somnath Sharma",
      }),
      shuffleOptions({
        question: "How many soldiers did Somnath Sharma lead at Badgam?",
        optionA: "90",
        optionB: "150",
        optionC: "300",
        correctAnswer: "90",
      }),
      shuffleOptions({
        question: "Pakistani soldiers in 1947 entered Kashmir disguised as –",
        optionA: "Farmers",
        optionB: "Local villagers",
        optionC: "Traders",
        correctAnswer: "Local villagers",
      }),
      shuffleOptions({
        question: "What was the battle cry of Joginder Singh’s men?",
        optionA: "Jai Hind",
        optionB: "Bharat Mata ki Jai",
        optionC: "Jo bole so Nihal, Sat Sri Akal",
        correctAnswer: "Jo bole so Nihal, Sat Sri Akal",
      }),
      shuffleOptions({
        question: "Which unit did Lt Col Tarapore command?",
        optionA: "17 Horse",
        optionB: "4 Kumaon",
        optionC: "13 J&K Rifles",
        correctAnswer: "17 Horse",
      }),
      shuffleOptions({
        question: "How many Pakistani tanks did Tarapore’s men destroy?",
        optionA: "30",
        optionB: "60",
        optionC: "90",
        correctAnswer: "60",
      }),
      shuffleOptions({
        question: "Fg Offr Sekhon scrambled with –",
        optionA: "Flt Lt Ghumman",
        optionB: "Sanjay Kumar",
        optionC: "Abdul Hamid",
        correctAnswer: "Flt Lt Ghumman",
      }),
      shuffleOptions({
        question: "Where did Sekhon fight against the Sabre jets?",
        optionA: "Delhi",
        optionB: "Srinagar",
        optionC: "Kargil",
        correctAnswer: "Srinagar",
      }),
      shuffleOptions({
        question: "Which hilltop did Sanjay Kumar capture in Kargil War?",
        optionA: "Tiger Hill",
        optionB: "Point 4875",
        optionC: "Tololing",
        correctAnswer: "Point 4875",
      }),
      shuffleOptions({
        question: "What weapon did Sanjay Kumar use against the fleeing enemy?",
        optionA: "Rifle",
        optionB: "Grenade",
        optionC: "Machinegun",
        correctAnswer: "Machinegun",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Major Somnath Sharma went to war despite a fractured ______.",
        optionA: "Leg",
        optionB: "Hand",
        optionC: "Shoulder",
        correctAnswer: "Hand",
      }),
      shuffleOptions({
        question: "He was killed in the battle of ______.",
        optionA: "Badgam",
        optionB: "Chavinda",
        optionC: "Srinagar",
        correctAnswer: "Badgam",
      }),
      shuffleOptions({
        question: "Subedar Joginder Singh was taken prisoner by ______.",
        optionA: "Pakistan",
        optionB: "China",
        optionC: "Britain",
        correctAnswer: "China",
      }),
      shuffleOptions({
        question: "His men fixed ______ on their rifles to attack.",
        optionA: "Bayonets",
        optionB: "Grenades",
        optionC: "Bombs",
        correctAnswer: "Bayonets",
      }),
      shuffleOptions({
        question: "Tarapore continued to fight though he was ______.",
        optionA: "Hungry",
        optionB: "Wounded",
        optionC: "Alone",
        correctAnswer: "Wounded",
      }),
      shuffleOptions({
        question: "Pakistani Sabre jets attacked ______ airfield in 1971.",
        optionA: "Delhi",
        optionB: "Srinagar",
        optionC: "Amritsar",
        correctAnswer: "Srinagar",
      }),
      shuffleOptions({
        question: "Fg Offr Sekhon flew a ______ aircraft.",
        optionA: "Sabre",
        optionB: "Gnat",
        optionC: "Sukhoi",
        correctAnswer: "Gnat",
      }),
      shuffleOptions({
        question: "Sanjay Kumar belonged to the ______ Rifles.",
        optionA: "17 Horse",
        optionB: "13 J&K",
        optionC: "4 Kumaon",
        correctAnswer: "13 J&K",
      }),
      shuffleOptions({
        question: "Point 4875 was strongly fortified on ______.",
        optionA: "Hilltops",
        optionB: "Valleys",
        optionC: "Plains",
        correctAnswer: "Hilltops",
      }),
      shuffleOptions({
        question: "Sanjay Kumar was honoured with the ______.",
        optionA: "Vir Chakra",
        optionB: "Ashok Chakra",
        optionC: "Param Vir Chakra",
        correctAnswer: "Param Vir Chakra",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Somnath Sharma was the first Param Vir Chakra awardee.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "He refused to fight because of his fractured hand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Joginder Singh’s men charged with bayonets shouting their battle cry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tarapore destroyed more tanks than he lost.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "He was killed while retreating from the battlefield.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fg Offr Sekhon shot down one Sabre jet before dying.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sekhon was awarded the Param Vir Chakra posthumously.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sanjay Kumar was wounded but still advanced to capture bunkers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Point 4875 was captured during the 1965 war.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Kargil War took place in summer 1999.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
