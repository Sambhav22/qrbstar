export const chapter = "Chapter - 8: The Coastal Plains and the Islands";
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
        question: "Which water body lies along the Eastern Coastal Plains?",
        optionA: "Arabian Sea",
        optionB: "Bay of Bengal",
        optionC: "Indian Ocean",
        correctAnswer: "Bay of Bengal",
      }),
      shuffleOptions({
        question: "Which city is an important port in the Northern Circars?",
        optionA: "Chennai",
        optionB: "Visakhapatnam",
        optionC: "Panaji",
        correctAnswer: "Visakhapatnam",
      }),
      shuffleOptions({
        question: "Which coast has rocky land that stretches into the sea, making navigation difficult?",
        optionA: "Gujarat Coast",
        optionB: "Malabar Coast",
        optionC: "Konkan Coast",
        correctAnswer: "Konkan Coast",
      }),
      shuffleOptions({
        question: "Which island in India has the only active volcano?",
        optionA: "Lakshadweep",
        optionB: "Barren Island",
        optionC: "Majuli",
        correctAnswer: "Barren Island",
      }),
      shuffleOptions({
        question: "What is the southernmost tip of India called?",
        optionA: "Kavaratti",
        optionB: "Indira Point",
        optionC: "Devka Point",
        correctAnswer: "Indira Point",
      }),
      shuffleOptions({
        question: "Which union territory was ruled by the Portuguese till 1954?",
        optionA: "Puducherry",
        optionB: "Daman and Diu",
        optionC: "Lakshadweep",
        correctAnswer: "Puducherry",
      }),
      shuffleOptions({
        question: "Which state is well known for its high literacy rate?",
        optionA: "Goa",
        optionB: "Kerala",
        optionC: "Gujarat",
        correctAnswer: "Kerala",
      }),
      shuffleOptions({
        question: "Which coast is famous for its backwaters?",
        optionA: "Konkan Coast",
        optionB: "Malabar Coast",
        optionC: "Coromandel Coast",
        correctAnswer: "Malabar Coast",
      }),
      shuffleOptions({
        question: "In which islands do people speak Hindi, Bengali and Telugu?",
        optionA: "Lakshadweep Islands",
        optionB: "Maldives",
        optionC: "Andaman and Nicobar Islands",
        correctAnswer: "Andaman and Nicobar Islands",
      }),
      shuffleOptions({
        question: "Which place is known for the popular dance form Kathakali?",
        optionA: "Gujarat",
        optionB: "Kerala",
        optionC: "Goa",
        correctAnswer: "Kerala",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The coastline of India begins from the Gulf of ________.",
        optionA: "Mannar",
        optionB: "Kachch",
        optionC: "Khambhat",
        correctAnswer: "Kachch",
      }),
      shuffleOptions({
        question: "Puducherry got freedom from ________ rule.",
        optionA: "Germany",
        optionB: "British",
        optionC: "French",
        correctAnswer: "French",
      }),
      shuffleOptions({
        question: "Barren Island is a ________ island.",
        optionA: "coral",
        optionB: "volcanic",
        optionC: "sandy",
        correctAnswer: "volcanic",
      }),
      shuffleOptions({
        question: "Kerala lies on the ________ Coast.",
        optionA: "Konkan",
        optionB: "Malabar",
        optionC: "Gujarat",
        correctAnswer: "Malabar",
      }),
      shuffleOptions({
        question: "The Northern Circars stretch up to the coast of ________.",
        optionA: "Odisha",
        optionB: "Karnataka",
        optionC: "Gujarat",
        correctAnswer: "Odisha",
      }),
      shuffleOptions({
        question: "The important rivers of Gujarat include Sabarmati, Tapi and ________.",
        optionA: "Godavari",
        optionB: "Narmada",
        optionC: "Krishna",
        correctAnswer: "Narmada",
      }),
      shuffleOptions({
        question: "The Lakshadweep Islands are made from ________ deposits.",
        optionA: "coral",
        optionB: "lava",
        optionC: "clay",
        correctAnswer: "coral",
      }),
      shuffleOptions({
        question: "Port Blair is the capital of ________.",
        optionA: "Lakshadweep",
        optionB: "Andaman and Nicobar Islands",
        optionC: "Puducherry",
        correctAnswer: "Andaman and Nicobar Islands",
      }),
      shuffleOptions({
        question: "Kerala receives ________ rainfall every year.",
        optionA: "low",
        optionB: "moderate",
        optionC: "heavy",
        correctAnswer: "heavy",
      }),
      shuffleOptions({
        question: "The traditional dress of men in Puducherry includes a short ________.",
        optionA: "kurta",
        optionB: "lungi",
        optionC: "sherwani",
        correctAnswer: "kurta",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Eastern Coastal Plains are wider than the Western Coastal Plains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Konkan Coast is smooth and sandy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chennai is the major port located on the Coromandel Coast.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lakshadweep consists of about 36 small islands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gujarat receives heavy rainfall throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Indira Point is located in the Andaman Islands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Malayalam is widely spoken in Kerala.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Puducherry grows crops such as rice, millets and pulses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lighthouses are not required along the Konkan Coast.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fishing is one of the main occupations in Goa.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
