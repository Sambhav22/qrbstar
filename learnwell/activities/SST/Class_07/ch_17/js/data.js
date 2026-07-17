export const chapter = "Chapter - 17: Mobile and Settled Communities";
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
        question: "Which tribal group moved in caravans called tandas?",
        optionA: "Gaddis",
        optionB: "Banjaras",
        optionC: "Vetars",
        correctAnswer: "Banjaras",
      }),
      shuffleOptions({
        question: "Who recorded detailed observations about the Banjaras in the 17th century?",
        optionA: "Peter Mundy",
        optionB: "Ibn Battuta",
        optionC: "Al-Biruni",
        correctAnswer: "Peter Mundy",
      }),
      shuffleOptions({
        question: "Who fought bravely against Akbar’s army and refused to surrender?",
        optionA: "Rani Durgawati",
        optionB: "Rani Laxmi Bai",
        optionC: "Rani Avantibai",
        correctAnswer: "Rani Durgawati",
      }),
      shuffleOptions({
        question: "Which tribal community originally migrated from China to Brahmaputra valley?",
        optionA: "Gonds",
        optionB: "Ahoms",
        optionC: "Kolis",
        correctAnswer: "Ahoms",
      }),
      shuffleOptions({
        question: "Who built the city of Rangpur?",
        optionA: "Dalpat Shah",
        optionB: "Rudra Singh",
        optionC: "Aman Das",
        correctAnswer: "Rudra Singh",
      }),
      shuffleOptions({
        question: "Which tribal group lived mainly in the forested Narmada valley?",
        optionA: "Santhals",
        optionB: "Gonds",
        optionC: "Mundas",
        correctAnswer: "Gonds",
      }),
      shuffleOptions({
        question: "Which group mostly survived on milk products and pastoral movement?",
        optionA: "Nomadic tribes",
        optionB: "Settled farmers",
        optionC: "Metal workers",
        correctAnswer: "Nomadic tribes",
      }),
      shuffleOptions({
        question: "Which name was earlier used for modern-day Assam?",
        optionA: "Kamrupa",
        optionB: "Garha Katanga",
        optionC: "Gondwana",
        correctAnswer: "Kamrupa",
      }),
      shuffleOptions({
        question: "Who gave land grants to Brahmins to elevate his social status?",
        optionA: "Dalpat Shah",
        optionB: "Aman Das",
        optionC: "Sukaphaa",
        correctAnswer: "Aman Das",
      }),
      shuffleOptions({
        question: "Who briefly captured the Ahom capital of Garhgaon in 1662?",
        optionA: "Ala-ud-din Khalji",
        optionB: "Mir Jumla",
        optionC: "Aurangzeb",
        correctAnswer: "Mir Jumla",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Tribal societies often exchanged forest products like honey and herbs for ______.",
        optionA: "perfumes",
        optionB: "grains and cotton",
        optionC: "spices",
        correctAnswer: "grains and cotton",
      }),
      shuffleOptions({
        question: "The Gonds practised shifting or ______ cultivation.",
        optionA: "terrace",
        optionB: "swidden",
        optionC: "wet",
        correctAnswer: "swidden",
      }),
      shuffleOptions({
        question: "Each Gond garh was divided into units of 84 villages called ______.",
        optionA: "khels",
        optionB: "tandas",
        optionC: "chaurasi",
        correctAnswer: "chaurasi",
      }),
      shuffleOptions({
        question: "The Ahoms kept historical records known as ______.",
        optionA: "Raikas",
        optionB: "Buranjis",
        optionC: "Granthas",
        correctAnswer: "Buranjis",
      }),
      shuffleOptions({
        question: "Many nomadic groups travelled with thousands of ______.",
        optionA: "elephants",
        optionB: "oxen",
        optionC: "horses",
        correctAnswer: "oxen",
      }),
      shuffleOptions({
        question: "Tribes preferred living in forests and hills to maintain their ______.",
        optionA: "wealth",
        optionB: "independence and identity",
        optionC: "taxes",
        correctAnswer: "independence and identity",
      }),
      shuffleOptions({
        question: "The village land in Ahom society was controlled by the ______.",
        optionA: "king alone",
        optionB: "soldiers",
        optionC: "village community",
        correctAnswer: "village community",
      }),
      shuffleOptions({
        question: "The Ahoms converted to ______ over time.",
        optionA: "Buddhism",
        optionB: "Hinduism",
        optionC: "Jainism",
        correctAnswer: "Hinduism",
      }),
      shuffleOptions({
        question: "The Banjaras transported large quantities of grain during ______.",
        optionA: "famines",
        optionB: "wars and military campaigns",
        optionC: "festivals",
        correctAnswer: "wars and military campaigns",
      }),
      shuffleOptions({
        question: "The Gonds’ homeland was often called ______.",
        optionA: "Sindh",
        optionB: "Gondwanaland",
        optionC: "Kamarup",
        correctAnswer: "Gondwanaland",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Tribal communities often used natural forest resources for their daily needs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nomads regularly stayed in one village throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Banjaras acted as travelling merchants carrying grain across many regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Gonds were organised into several clans, each under its own chief.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rani Durgawati expanded the Gond kingdom after her husband’s death.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Ahoms originally came from Central India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Ahoms used gunpowder and cannons in warfare.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The village community in Ahom society owned land collectively.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Burmese invasion weakened the power of the Ahom rulers before the British took over.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Buranjis were historical records maintained by the Gonds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
