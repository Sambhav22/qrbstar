export const chapter = "Chapter - 18: Contacts with Distant Lands";
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
        question: "Which temple in Cambodia shows a strong influence of Indian culture?",
        optionA: "Sanchi Stupa",
        optionB: "Angkor Wat",
        optionC: "Amaravati",
        correctAnswer: "Angkor Wat",
      }),
      shuffleOptions({
        question: "Which South-East Asian monument contains 436 images of Lord Buddha?",
        optionA: "Barabudur Stupa in Java",
        optionB: "Ananda Temple",
        optionC: "Golden Pagoda",
        correctAnswer: "Barabudur Stupa in Java",
      }),
      shuffleOptions({
        question: "Which group of people first brought Indian goods to Europe through trade?",
        optionA: "Greeks",
        optionB: "Romans",
        optionC: "Persians",
        correctAnswer: "Romans",
      }),
      shuffleOptions({
        question: "Who conquered the north-west regions of India during the 5th–6th century BC?",
        optionA: "Cyrus",
        optionB: "Xerxes",
        optionC: "Darius I",
        correctAnswer: "Darius I",
      }),
      shuffleOptions({
        question: "Who invaded India in 326 BC, establishing contact between India and Greek culture?",
        optionA: "Seleucus",
        optionB: "Alexander the Great",
        optionC: "Antiochus",
        correctAnswer: "Alexander the Great",
      }),
      shuffleOptions({
        question: "Who was the Indo-Greek ruler known as “Milind” in Buddhist texts?",
        optionA: "Demetrius",
        optionB: "Menander",
        optionC: "Gondophernes",
        correctAnswer: "Menander",
      }),
      shuffleOptions({
        question: "Which tribe from Central Asia eventually occupied large parts of north-west India?",
        optionA: "Kushanas",
        optionB: "Lydians",
        optionC: "Assyrians",
        correctAnswer: "Kushanas",
      }),
      shuffleOptions({
        question: "Who defeated the Chinese general Pan Chiang?",
        optionA: "Ashoka",
        optionB: "Kanishka",
        optionC: "Rudradaman",
        correctAnswer: "Kanishka",
      }),
      shuffleOptions({
        question: "Which ruler helped spread Buddhism to China, Korea and Japan?",
        optionA: "Harsha",
        optionB: "Kanishka",
        optionC: "Chandragupta II",
        correctAnswer: "Kanishka",
      }),
      shuffleOptions({
        question: "Which South-East Asian region was known as Suvarnadvipa?",
        optionA: "Tibet",
        optionB: "Java-Sumatra-Bali region",
        optionC: "Persia",
        correctAnswer: "Java-Sumatra-Bali region",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Sangam literature contains nearly ______ poems.",
        optionA: "2000",
        optionB: "2381",
        optionC: "1000",
        correctAnswer: "2381",
      }),
      shuffleOptions({
        question: "The poem describing heroic deeds of the southern dynasties is called ______.",
        optionA: "Jataka",
        optionB: "Pattapattu",
        optionC: "Charita",
        correctAnswer: "Pattapattu",
      }),
      shuffleOptions({
        question: "Indian traders first bought ______ from South-East Asian countries.",
        optionA: "Spices",
        optionB: "Horses",
        optionC: "Cotton",
        correctAnswer: "Spices",
      }),
      shuffleOptions({
        question: "The Arabs called Indian numerals “Hindse”, meaning ______.",
        optionA: "Divine",
        optionB: "From India",
        optionC: "Old numbers",
        correctAnswer: "From India",
      }),
      shuffleOptions({
        question: "Barabudur Stupa in Java has ______ storeys.",
        optionA: "Ten",
        optionB: "Twelve",
        optionC: "Six",
        correctAnswer: "Twelve",
      }),
      shuffleOptions({
        question: "The inland route used to trade silk and other luxuries was called the ______.",
        optionA: "Royal Road",
        optionB: "Silk Route",
        optionC: "Persian Way",
        correctAnswer: "Silk Route",
      }),
      shuffleOptions({
        question: "Menander extended his rule from Afghanistan to ______.",
        optionA: "Mathura",
        optionB: "Kashi",
        optionC: "Ujjain",
        correctAnswer: "Mathura",
      }),
      shuffleOptions({
        question: "Shaka rulers were known as ______.",
        optionA: "Satraps",
        optionB: "Maharathis",
        optionC: "Governors",
        correctAnswer: "Satraps",
      }),
      shuffleOptions({
        question: "The ______ statue in Bamiyan represented the spread of Buddhism in Central Asia.",
        optionA: "Gold",
        optionB: "Buddha",
        optionC: "Shiva",
        correctAnswer: "Buddha",
      }),
      shuffleOptions({
        question: "Kanishka made ______ his capital.",
        optionA: "Taxila",
        optionB: "Purushpura (Peshawar)",
        optionC: "Mathura",
        correctAnswer: "Purushpura (Peshawar)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Sangam literature includes themes such as love, war and governance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Indian cultural influence is clearly visible in Angkor Wat and Barabudur monuments.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roman traders came to India mainly to buy cotton and sugar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Indo-Greeks introduced the use of curtains in Indian theatre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Shakas were originally a Central Asian nomadic tribe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gondophernes was a famous Kushana ruler.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kanishka encouraged both the Gandhara and Mathura schools of art.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Buddhism spread to Central Asia partly due to the efforts of Ashoka and Kanishka.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Silk Route was used for silk only and not for other goods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Arabs transferred Indian mathematical concepts, including numerals, to the Western world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
