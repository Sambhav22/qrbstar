export const chapter = "Chapter - 12: Celebrating Festivals";
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
        question: "Which festival is celebrated with candles, bulbs and diyas?",
        optionA: "Eid",
        optionB: "Diwali",
        optionC: "Christmas",
        correctAnswer: "Diwali",
      }),
      shuffleOptions({
        question: "Which festival includes playing with coloured water and gulal?",
        optionA: "Holi",
        optionB: "Eid",
        optionC: "Christmas",
        correctAnswer: "Holi",
      }),
      shuffleOptions({
        question: "On which festival do people hug each other and say “Eid Mubarak”?",
        optionA: "Holi",
        optionB: "Eid",
        optionC: "Gurpurab",
        correctAnswer: "Eid",
      }),
      shuffleOptions({
        question: "On which festival is a sweet dish called Sewain prepared?",
        optionA: "Christmas",
        optionB: "Eid",
        optionC: "Holi",
        correctAnswer: "Eid",
      }),
      shuffleOptions({
        question: "Which festival celebrates the birthday of Jesus Christ?",
        optionA: "Christmas",
        optionB: "Holi",
        optionC: "Gurpurab",
        correctAnswer: "Christmas",
      }),
      shuffleOptions({
        question: "On which festival is a dish called Gujia prepared?",
        optionA: "Eid",
        optionB: "Holi",
        optionC: "Christmas",
        correctAnswer: "Holi",
      }),
      shuffleOptions({
        question: "On which festival do Sikhs take out big processions?",
        optionA: "Christmas",
        optionB: "Holi",
        optionC: "Gurpurab",
        correctAnswer: "Gurpurab",
      }),
      shuffleOptions({
        question: "On which day is a grand parade held at Rajpath?",
        optionA: "Independence Day",
        optionB: "Republic Day",
        optionC: "Children’s Day",
        correctAnswer: "Republic Day",
      }),
      shuffleOptions({
        question: "On which day does the Prime Minister hoist the National Flag at the Red Fort?",
        optionA: "Independence Day",
        optionB: "Eid",
        optionC: "Onam",
        correctAnswer: "Independence Day",
      }),
      shuffleOptions({
        question: "Which day is celebrated on 2nd October every year?",
        optionA: "Children’s Day",
        optionB: "Teacher’s Day",
        optionC: "Gandhi Jayanti",
        correctAnswer: "Gandhi Jayanti",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "People decorate their homes with ______ during Diwali.",
        optionA: "balloons",
        optionB: "diyas",
        optionC: "flowers",
        correctAnswer: "diyas",
      }),
      shuffleOptions({
        question: "Holi is the festival of ______.",
        optionA: "colours",
        optionB: "lamps",
        optionC: "sweets",
        correctAnswer: "colours",
      }),
      shuffleOptions({
        question: "A special dish called ______ is prepared on Eid.",
        optionA: "cake",
        optionB: "Sewain",
        optionC: "Gujia",
        correctAnswer: "Sewain",
      }),
      shuffleOptions({
        question: "Sikhs pray before the holy book called ______.",
        optionA: "Bible",
        optionB: "Quran",
        optionC: "Guru Granth Sahib",
        correctAnswer: "Guru Granth Sahib",
      }),
      shuffleOptions({
        question: "Christmas celebrates the birth of ______.",
        optionA: "Jesus Christ",
        optionB: "Guru Nanak",
        optionC: "Mahatma Gandhi",
        correctAnswer: "Jesus Christ",
      }),
      shuffleOptions({
        question: "People prepare ______ on Holi.",
        optionA: "Gujia",
        optionB: "Sewain",
        optionC: "Cake",
        correctAnswer: "Gujia",
      }),
      shuffleOptions({
        question: "The Republic Day parade shows India’s ______.",
        optionA: "forests",
        optionB: "cultures",
        optionC: "games",
        correctAnswer: "cultures",
      }),
      shuffleOptions({
        question: "On Children’s Day, schools organise ______.",
        optionA: "functions",
        optionB: "meetings",
        optionC: "exams",
        correctAnswer: "functions",
      }),
      shuffleOptions({
        question: "The Onam festival includes ______ races.",
        optionA: "horse",
        optionB: "boat",
        optionC: "cycle",
        correctAnswer: "boat",
      }),
      shuffleOptions({
        question: "People exchange ______ and sweets on Diwali.",
        optionA: "books",
        optionB: "gifts",
        optionC: "toys",
        correctAnswer: "gifts",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "People burn crackers and enjoy themselves during Diwali.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gujia is prepared on Christmas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People sing and dance with joy during Holi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Special prayers are held in mosques on Diwali",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Santa Claus brings gifts for children at Christmas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sikhs take out large processions on Gurpurabs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Republic Day is not celebrated on 26th January.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Independence Day is celebrated on 2nd October.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Boat races are a part of Onam celebrations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gandhi Jayanti celebrates the birth of Mahatma Gandhi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
