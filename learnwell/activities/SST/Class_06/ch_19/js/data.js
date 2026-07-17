export const chapter = "Chapter - 19: Political Developments (AD 300 to AD 700)";
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
        question: "Who is known as the “Napoleon of India”?",
        optionA: "Chandragupta II",
        optionB: "Samudragupta",
        optionC: "Skandagupta",
        correctAnswer: "Samudragupta",
      }),
      shuffleOptions({
        question: "Who wrote the Prayag Prashasti praising Samudragupta’s conquests?",
        optionA: "Fa-Hien",
        optionB: "Harisena",
        optionC: "Banabhatta",
        correctAnswer: "Harisena",
      }),
      shuffleOptions({
        question: "Who among the following was a famous poet in the court of Chandragupta II?",
        optionA: "Varahamihira",
        optionB: "Xuanzang",
        optionC: "Kalidasa",
        correctAnswer: "Kalidasa",
      }),
      shuffleOptions({
        question: "Which Gupta ruler made Ujjain his second capital?",
        optionA: "Kumaragupta",
        optionB: "Chandragupta II",
        optionC: "Srigupta",
        correctAnswer: "Chandragupta II",
      }),
      shuffleOptions({
        question: "Who visited India during Harsha’s reign and stayed for nearly fifteen years?",
        optionA: "Fa-Hien",
        optionB: "Xuanzang",
        optionC: "Alberuni",
        correctAnswer: "Xuanzang",
      }),
      shuffleOptions({
        question: "Who defeated Harshavardhana on the banks of the Narmada?",
        optionA: "Narasimhavarman",
        optionB: "Pulakeshin II",
        optionC: "Mahendravarman",
        correctAnswer: "Pulakeshin II",
      }),
      shuffleOptions({
        question: "Which king issued land grants to maintain soldiers and provide war equipment?",
        optionA: "Samantas",
        optionB: "Gramikas",
        optionC: "Vishayapatis",
        correctAnswer: "Samantas",
      }),
      shuffleOptions({
        question: "Which dynasty had its capital at Kanchipuram?",
        optionA: "Chalukyas",
        optionB: "Pallavas",
        optionC: "Vakatakas",
        correctAnswer: "Pallavas",
      }),
      shuffleOptions({
        question: "Who was murdered by Shashank, the ruler of Bengal?",
        optionA: "Harsha",
        optionB: "Rajyavardhana",
        optionC: "Prabhakar Vardhana",
        correctAnswer: "Rajyavardhana",
      }),
      shuffleOptions({
        question: "Who built rock-cut temples at Badami and Aihole?",
        optionA: "Cholas",
        optionB: "Chalukyas",
        optionC: "Pandyas",
        correctAnswer: "Chalukyas",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Gupta dynasty was founded by ________.",
        optionA: "Srigupta",
        optionB: "Chandragupta I",
        optionC: "Ghatotkacha",
        correctAnswer: "Srigupta",
      }),
      shuffleOptions({
        question: "The title “maharajadhiraja” was assumed by ________.",
        optionA: "Samudragupta",
        optionB: "Chandragupta I",
        optionC: "Skandagupta",
        correctAnswer: "Chandragupta I",
      }),
      shuffleOptions({
        question: "The Gupta empire was divided into provinces known as ________.",
        optionA: "vishayas",
        optionB: "bhuktis",
        optionC: "mandalas",
        correctAnswer: "bhuktis",
      }),
      shuffleOptions({
        question: "The lowest administrative post in the Gupta system was the ________.",
        optionA: "samanta",
        optionB: "gramika",
        optionC: "uparika",
        correctAnswer: "gramika",
      }),
      shuffleOptions({
        question: "Under Chandragupta II, the western ________ coast came under Gupta control.",
        optionA: "western",
        optionB: "eastern",
        optionC: "northern",
        correctAnswer: "western",
      }),
      shuffleOptions({
        question: "The brick temples at Deogarh were built during the ________ period.",
        optionA: "Chola",
        optionB: "Gupta",
        optionC: "Mughal",
        correctAnswer: "Gupta",
      }),
      shuffleOptions({
        question: "Harsha organised the fifth Buddhist council at ________.",
        optionA: "Nalanda",
        optionB: "Kannauj",
        optionC: "Vatapi",
        correctAnswer: "Kannauj",
      }),
      shuffleOptions({
        question: "The Pallava inscriptions mention village assemblies called ________.",
        optionA: "sabhas",
        optionB: "samitis",
        optionC: "sanghas",
        correctAnswer: "sabhas",
      }),
      shuffleOptions({
        question: "The Hunas attacked the Gupta empire from ________.",
        optionA: "south-east",
        optionB: "north-west",
        optionC: "south",
        correctAnswer: "north-west",
      }),
      shuffleOptions({
        question: "The Pancha Rathas were built at ________.",
        optionA: "Vaisali",
        optionB: "Mahabalipuram",
        optionC: "Prayag",
        correctAnswer: "Mahabalipuram",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Chandragupta II defeated the Sakas and controlled the western sea coast.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fa-Hien described the Gupta punishments as extremely harsh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The caste system became more complex during the Gupta period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kalidasa was one of the nine gems in Samudragupta’s court.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Harsha shifted his capital from Thanesar to Kannauj.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Chalukyas had trade relations with Iran and Arabia.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mahendravarman I was a Pallava ruler known for patronising art and architecture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Gupta army had elephants, cavalry, infantry and chariots.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Xuanzang visited India during the reign of Chandragupta II.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kanchipuram was famous for silk weaving under the Pallavas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
