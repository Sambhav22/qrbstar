export const chapter = "Chapter - 8: Festivals We Celebrate";
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
        question: "Which festival is celebrated with colours and gulal?",
        optionA: "Pongal",
        optionB: "Holi",
        optionC: "Onam",
        correctAnswer: "Holi",
      }),
      shuffleOptions({
        question: "Which festival marks the burning of Ravana’s effigy?",
        optionA: "Christmas",
        optionB: "Dussehra",
        optionC: "Baisakhi",
        correctAnswer: "Dussehra",
      }),
      shuffleOptions({
        question: "Which festival is known as the ‘festival of lights’?",
        optionA: "Diwali",
        optionB: "Eid-ul-Fitr",
        optionC: "Bihu",
        correctAnswer: "Diwali",
      }),
      shuffleOptions({
        question: "During which festival do people prepare sewian?",
        optionA: "Holi",
        optionB: "Eid-ul-Fitr",
        optionC: "Pongal",
        correctAnswer: "Eid-ul-Fitr",
      }),
      shuffleOptions({
        question: "On which festival do Christians decorate a Christmas tree?",
        optionA: "Baisakhi",
        optionB: "Christmas",
        optionC: "Lohri",
        correctAnswer: "Christmas",
      }),
      shuffleOptions({
        question: "Which festival in Kerala is famous for its grand boat race?",
        optionA: "Onam",
        optionB: "Pongal",
        optionC: "Bihu",
        correctAnswer: "Onam",
      }),
      shuffleOptions({
        question: "During which festival are Bhangra and Giddha performed?",
        optionA: "Holi",
        optionB: "Baisakhi",
        optionC: "Christmas",
        correctAnswer: "Baisakhi",
      }),
      shuffleOptions({
        question: "On which festival do Sikhs visit Gurudwaras and join langars?",
        optionA: "Gurpurab",
        optionB: "Dussehra",
        optionC: "Diwali",
        correctAnswer: "Gurpurab",
      }),
      shuffleOptions({
        question: "During which festival is pongal, a dish made of rice and jaggery, prepared?",
        optionA: "Eid",
        optionB: "Pongal",
        optionC: "Onam",
        correctAnswer: "Pongal",
      }),
      shuffleOptions({
        question: "Which national festival is marked by a parade at Rajpath?",
        optionA: "Independence Day",
        optionB: "Republic Day",
        optionC: "Gandhi Jayanti",
        correctAnswer: "Republic Day",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "People offer ______ in the mosque during Eid.",
        optionA: "bhog",
        optionB: "namaz",
        optionC: "aarti",
        correctAnswer: "namaz",
      }),
      shuffleOptions({
        question: "The sweet dish called ______ is prepared on Holi.",
        optionA: "gujiya",
        optionB: "sewian",
        optionC: "pongal",
        correctAnswer: "gujiya",
      }),
      shuffleOptions({
        question: "The feast served during Onam is known as ______.",
        optionA: "giddha",
        optionB: "onasadya",
        optionC: "langar",
        correctAnswer: "onasadya",
      }),
      shuffleOptions({
        question: "The holy book of the Sikhs is ______.",
        optionA: "Ramayan",
        optionB: "Guru Granth Sahib",
        optionC: "Quran",
        correctAnswer: "Guru Granth Sahib",
      }),
      shuffleOptions({
        question: "______ is celebrated for ten days in Kerala.",
        optionA: "Onam",
        optionB: "Pongal",
        optionC: "Christmas",
        correctAnswer: "Onam",
      }),
      shuffleOptions({
        question: "The dance performed in Assam during Bihu is called ______.",
        optionA: "Kathak",
        optionB: "Bihu dance",
        optionC: "Giddha",
        correctAnswer: "Bihu dance",
      }),
      shuffleOptions({
        question: "Dussehra also marks the victory of ______ over evil.",
        optionA: "darkness",
        optionB: "good",
        optionC: "nature",
        correctAnswer: "good",
      }),
      shuffleOptions({
        question: "People worship Goddess Lakshmi during ______.",
        optionA: "Christmas",
        optionB: "Diwali",
        optionC: "Eid",
        correctAnswer: "Diwali",
      }),
      shuffleOptions({
        question: "Christians celebrate the birth of Jesus Christ on ______.",
        optionA: "25th December",
        optionB: "15th August",
        optionC: "14th November",
        correctAnswer: "25th December",
      }),
      shuffleOptions({
        question: "The people of Punjab celebrate the harvest festival of ______.",
        optionA: "Pongal",
        optionB: "Baisakhi",
        optionC: "Onam",
        correctAnswer: "Baisakhi",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Holi is a festival associated with the legend of Holika.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Diwali is celebrated 20 days after Dussehra.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pongal is celebrated in Haryana",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bihu is celebrated only one time in a year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Onam celebrations include a grand boat race.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Eid-ul-Fitr is celebrated at the end of the month of Ramzan.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Independence Day is celebrated on 26th January.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People burn the effigies of Ravana on Gurpurab.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Christians prepare cakes and light candles in church during Christmas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gandhi Jayanti is the birthday of Mahatma Gandhi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
