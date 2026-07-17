export const chapter = "Chapter - 28: Livelihood";
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
        question: "Which activity gives villagers additional income along with farming?",
        optionA: "Tailoring",
        optionB: "Teaching",
        optionC: "Dairy farming",
        correctAnswer: "Dairy farming",
      }),
      shuffleOptions({
        question: "Why do traders earn higher profit from fish?",
        optionA: "They catch fish themselves",
        optionB: "They sell fish at higher prices in cities",
        optionC: "They sell fish only in villages",
        correctAnswer: "They sell fish at higher prices in cities",
      }),
      shuffleOptions({
        question: "Which group earns only when hired for work?",
        optionA: "Salaried workers",
        optionB: "Big farmers",
        optionC: "Casual workers",
        correctAnswer: "Casual workers",
      }),
      shuffleOptions({
        question: "What do small fishermen depend on for their daily needs?",
        optionA: "Weekly catch",
        optionB: "Day’s catch",
        optionC: "Monthly supply",
        correctAnswer: "Day’s catch",
      }),
      shuffleOptions({
        question: "Which occupation is commonly practised in coastal villages?",
        optionA: "Pottery",
        optionB: "Fishing",
        optionC: "Carpentry",
        correctAnswer: "Fishing",
      }),
      shuffleOptions({
        question: "Why are many city workers called wage-earners?",
        optionA: "They work daily and get wages for the day’s work",
        optionB: "They own factories",
        optionC: "They are government officers",
        correctAnswer: "They work daily and get wages for the day’s work",
      }),
      shuffleOptions({
        question: "Who usually sells goods while moving from place to place?",
        optionA: "Hawker",
        optionB: "Judge",
        optionC: "Teacher",
        correctAnswer: "Hawker",
      }),
      shuffleOptions({
        question: "Which type of worker is usually hired only when factories receive bulk orders?",
        optionA: "Permanent worker",
        optionB: "Casual worker",
        optionC: "Salaried officer",
        correctAnswer: "Casual worker",
      }),
      shuffleOptions({
        question: "Who helps maintain law and order in urban areas?",
        optionA: "Police personnel",
        optionB: "Carpenters",
        optionC: "Drivers",
        correctAnswer: "Police personnel",
      }),
      shuffleOptions({
        question: "Which activity helps villagers earn during off-season?",
        optionA: "Basket-making",
        optionB: "Mining",
        optionC: "Call centre work",
        correctAnswer: "Basket-making",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Big farmers often use modern tools such as ________.",
        optionA: "bicycles",
        optionB: "tractors",
        optionC: "carts",
        correctAnswer: "tractors",
      }),
      shuffleOptions({
        question: "Anand in Gujarat is famous for its ________ co-operative.",
        optionA: "textile",
        optionB: "dairy",
        optionC: "fishing",
        correctAnswer: "dairy",
      }),
      shuffleOptions({
        question: "People who make cloth from thread are called ________.",
        optionA: "carpenters",
        optionB: "drivers",
        optionC: "weavers",
        correctAnswer: "weavers",
      }),
      shuffleOptions({
        question: "Small fishermen depend mainly on the ________ catch.",
        optionA: "day’s catch",
        optionB: "weekly catch",
        optionC: "stored catch",
        correctAnswer: "day’s catch",
      }),
      shuffleOptions({
        question: "________ workers get jobs only when needed.",
        optionA: "Permanent",
        optionB: "Casual",
        optionC: "Salaried",
        correctAnswer: "Casual",
      }),
      shuffleOptions({
        question: "Cities have more ________ facilities than villages.",
        optionA: "farming",
        optionB: "service-related",
        optionC: "forest",
        correctAnswer: "service-related",
      }),
      shuffleOptions({
        question: "Landless farmers usually work for big farmers and are paid in ________.",
        optionA: "cash or kind",
        optionB: "silver",
        optionC: "vouchers",
        correctAnswer: "cash or kind",
      }),
      shuffleOptions({
        question: "Collecting mahua and tendu leaves is done mainly in ________ areas.",
        optionA: "forest",
        optionB: "desert",
        optionC: "industrial",
        correctAnswer: "forest",
      }),
      shuffleOptions({
        question: "Call centres help customers facing ________ problems.",
        optionA: "service-related",
        optionB: "agricultural",
        optionC: "religious",
        correctAnswer: "service-related",
      }),
      shuffleOptions({
        question: "Migration puts pressure on urban ________.",
        optionA: "forests",
        optionB: "facilities",
        optionC: "rivers",
        correctAnswer: "facilities",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Big fishermen can invest in better fishing equipment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dormant farmers work daily on their fields.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Small farmers sometimes hire tractors from big farmers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hawkers usually sell goods while moving around.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Most urban workers receive monthly salaries.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Casual workers get paid only when they are hired.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fishing is an important occupation in coastal villages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Basket-making and pottery are common non-farm activities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Call centre jobs require good communication skills.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Migration reduces the population of cities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
