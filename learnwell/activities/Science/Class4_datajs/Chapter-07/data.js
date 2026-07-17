export const chapter = "Chapter - 7: Clothes";
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
        question: "Which season do we wear woollen clothes in?",
        optionA: "Summer",
        optionB: "Winter",
        optionC: "Rainy",
        correctAnswer: "Winter",
      }),
      shuffleOptions({
        question: "What are fibres made into?",
        optionA: "Threads",
        optionB: "Fabrics",
        optionC: "Buttons",
        correctAnswer: "Fabrics",
      }),
      shuffleOptions({
        question: "Which fabric dries quickly and is wrinkle-free?",
        optionA: "Cotton",
        optionB: "Wool",
        optionC: "Nylon",
        correctAnswer: "Nylon",
      }),
      shuffleOptions({
        question: "What did early humans use to cover their bodies?",
        optionA: "Plastic",
        optionB: "Bark and leaves",
        optionC: "Paper",
        correctAnswer: "Bark and leaves",
      }),
      shuffleOptions({
        question: "Which of these is a synthetic fibre?",
        optionA: "Silk",
        optionB: "Rayon",
        optionC: "Cotton",
        correctAnswer: "Rayon",
      }),
      shuffleOptions({
        question: "People of Kerala wear –",
        optionA: "Kimono and Hanbok",
        optionB: "Mundu and Neriyathu",
        optionC: "Saree and Phiran",
        correctAnswer: "Mundu and Neriyathu",
      }),
      shuffleOptions({
        question: "Which country’s national dress is the Hanbok?",
        optionA: "Japan",
        optionB: "Korea",
        optionC: "India",
        correctAnswer: "Korea",
      }),
      shuffleOptions({
        question: "Who wears white coats as a uniform?",
        optionA: "Lawyers",
        optionB: "Doctors",
        optionC: "Soldiers",
        correctAnswer: "Doctors",
      }),
      shuffleOptions({
        question: "Which of these is used to keep insects away from woollen clothes?",
        optionA: "Dried neem leaves",
        optionB: "Lemon",
        optionC: "Rose petals",
        correctAnswer: "Dried neem leaves",
      }),
      shuffleOptions({
        question: "Why do we iron cotton clothes before wearing them?",
        optionA: "To look neat",
        optionB: "To change colour",
        optionC: "To make them thick",
        correctAnswer: "To look neat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "_______ fibres are obtained from plants or animals.",
        optionA: "Natural",
        optionB: "Synthetic",
        optionC: "Plastic",
        correctAnswer: "Natural",
      }),
      shuffleOptions({
        question: "_______ fibres are made by chemical processes in factories.",
        optionA: "Artificial",
        optionB: "Plant",
        optionC: "Woollen",
        correctAnswer: "Artificial",
      }),
      shuffleOptions({
        question: "People of Jammu and Kashmir wear a thick long dress called _______.",
        optionA: "Hanbok",
        optionB: "Phiran",
        optionC: "Kimono",
        correctAnswer: "Phiran",
      }),
      shuffleOptions({
        question: "_______ is the national dress of Indian women.",
        optionA: "Saree",
        optionB: "Skirt",
        optionC: "Gown",
        correctAnswer: "Saree",
      }),
      shuffleOptions({
        question: "Wool and silk are _______ fibres.",
        optionA: "Plant",
        optionB: "Animal",
        optionC: "Synthetic",
        correctAnswer: "Animal",
      }),
      shuffleOptions({
        question: "_______ is made from jute plant.",
        optionA: "Nylon",
        optionB: "Rope",
        optionC: "Polyester",
        correctAnswer: "Rope",
      }),
      shuffleOptions({
        question: "We use _______ in the rainy season.",
        optionA: "Umbrella and raincoat",
        optionB: "Woollen clothes",
        optionC: "Cotton bedsheet",
        correctAnswer: "Umbrella and raincoat",
      }),
      shuffleOptions({
        question: "Woollen and silk clothes should be washed with a _______ detergent.",
        optionA: "Mild",
        optionB: "Harsh",
        optionC: "Strong",
        correctAnswer: "Mild",
      }),
      shuffleOptions({
        question: "Dark-coloured clothes should be dried in the _______.",
        optionA: "Shade",
        optionB: "Sun",
        optionC: "Washing machine",
        correctAnswer: "Shade",
      }),
      shuffleOptions({
        question: "_______ was the first synthetic fibre made in 1934.",
        optionA: "Polyester",
        optionB: "Nylon",
        optionC: "Rayon",
        correctAnswer: "Nylon",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Clothes protect our body from cold, heat and dust.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In summer we wear woollen clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Synthetic fibres are obtained from animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Phiran is worn in Kerala.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lawyers wear white coats in their profession.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Woollen and silk clothes are delicate and need special care.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dry-cleaning is used for cotton clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Saree is the national dress of Indian women.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Neem leaves or naphthalene balls keep insects away from clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All clothes can be washed with the same detergent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
