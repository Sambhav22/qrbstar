export const chapter = "Chapter - 21: Diversity";
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
        question: "Which type of family includes grandparents, uncles, aunts and cousins living together?",
        optionA: "Nuclear family",
        optionB: "Joint family",
        optionC: "Blended family",
        correctAnswer: "Joint family",
      }),
      shuffleOptions({
        question: "Which religious community in India follows the teachings of Guru Nanak?",
        optionA: "Buddhists",
        optionB: "Sikhs",
        optionC: "Jains",
        correctAnswer: "Sikhs",
      }),
      shuffleOptions({
        question: "Which water body washes the western coast of India?",
        optionA: "Bay of Bengal",
        optionB: "Arabian Sea",
        optionC: "Indian Ocean",
        correctAnswer: "Arabian Sea",
      }),
      shuffleOptions({
        question: "Which region of India commonly uses coconut and rice in its food?",
        optionA: "Northern region",
        optionB: "Western region",
        optionC: "Southern region",
        correctAnswer: "Southern region",
      }),
      shuffleOptions({
        question: "Which festival is mainly celebrated in Assam?",
        optionA: "Baisakhi",
        optionB: "Bihu",
        optionC: "Onam",
        correctAnswer: "Bihu",
      }),
      shuffleOptions({
        question: "Which activity is an example of a tertiary occupation?",
        optionA: "Farming",
        optionB: "Fishing",
        optionC: "Banking",
        correctAnswer: "Banking",
      }),
      shuffleOptions({
        question: "Which part of India experiences snow for most of the year?",
        optionA: "Southern India",
        optionB: "Northern Himalayas",
        optionC: "Western plateau",
        correctAnswer: "Northern Himalayas",
      }),
      shuffleOptions({
        question: "Which sea lies to the east of India?",
        optionA: "Arabian Sea",
        optionB: "Bay of Bengal",
        optionC: "Red Sea",
        correctAnswer: "Bay of Bengal",
      }),
      shuffleOptions({
        question: "Which community in India celebrates Ganesh Chaturthi in a grand way?",
        optionA: "Kerala",
        optionB: "Maharashtra",
        optionC: "Gujarat",
        correctAnswer: "Maharashtra",
      }),
      shuffleOptions({
        question: "Which of the following is an example of cultural diversity?",
        optionA: "People wearing different traditional dresses",
        optionB: "People using the same mobile phones",
        optionC: "People living in the same building",
        correctAnswer: "People wearing different traditional dresses",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "India is famous for its ________.",
        optionA: "deserts",
        optionB: "unity in diversity",
        optionC: "identical culture",
        correctAnswer: "unity in diversity",
      }),
      shuffleOptions({
        question: "People in northern India usually eat more ________.",
        optionA: "wheat products",
        optionB: "coconut",
        optionC: "fish",
        correctAnswer: "wheat products",
      }),
      shuffleOptions({
        question: "The Constitution gives people freedom of ________.",
        optionA: "clothing",
        optionB: "religion",
        optionC: "transport",
        correctAnswer: "religion",
      }),
      shuffleOptions({
        question: "The language used often in public notices in India is ________.",
        optionA: "Hindi",
        optionB: "Tamil",
        optionC: "English",
        correctAnswer: "English",
      }),
      shuffleOptions({
        question: "The eastern coast of India is washed by the ________.",
        optionA: "Arabian Sea",
        optionB: "Indian Ocean",
        optionC: "Bay of Bengal",
        correctAnswer: "Bay of Bengal",
      }),
      shuffleOptions({
        question: "Festivals like Onam, Bihu and Durga Puja show India’s ________.",
        optionA: "cultural diversity",
        optionB: "physical diversity",
        optionC: "political unity",
        correctAnswer: "cultural diversity",
      }),
      shuffleOptions({
        question: "Agriculture, dairy farming and fishing are ________ activities.",
        optionA: "secondary",
        optionB: "tertiary",
        optionC: "primary",
        correctAnswer: "primary",
      }),
      shuffleOptions({
        question: "Snowfall is commonly seen in the ________ region of India.",
        optionA: "Himalayan",
        optionB: "coastal",
        optionC: "desert",
        correctAnswer: "Himalayan",
      }),
      shuffleOptions({
        question: "The number of officially recognised languages in India is ________.",
        optionA: "22",
        optionB: "10",
        optionC: "35",
        correctAnswer: "22",
      }),
      shuffleOptions({
        question: "People in different parts of India have different ________ habits.",
        optionA: "walking",
        optionB: "reading",
        optionC: "food",
        correctAnswer: "food",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The language spoken in India remains the same throughout the country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "India has deserts, mountains, islands and plains within one country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Primary activities include manufacturing goods in factories.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People of all religions in India preach love and brotherhood.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Bay of Bengal lies on the western coast of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Different communities in India contribute to its cultural richness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India experiences the same climate in all regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Wearing the same type of clothes everywhere would make life monotonous.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Himalayas are located in the southern part of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Diversity helps people become interdependent and cooperative.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
