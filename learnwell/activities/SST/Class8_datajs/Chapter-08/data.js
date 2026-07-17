export const chapter = "Chapter - 8: When, Where and How";
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
        question: "Who calculated the height of Mount Everest?",
        optionA: "George Washington",
        optionB: "George Everest",
        optionC: "Herbert Baker",
        correctAnswer: "George Everest",
      }),
      shuffleOptions({
        question: "Who wrote Stri Purush Tulana?",
        optionA: "Tarabai Shinde",
        optionB: "Surendranath Banerjee",
        optionC: "Bankim Chandra",
        correctAnswer: "Tarabai Shinde",
      }),
      shuffleOptions({
        question: "Who directed the film Pather Panchali?",
        optionA: "Himanshu Rai",
        optionB: "Satyajit Ray",
        optionC: "Dadasaheb Phalke",
        correctAnswer: "Satyajit Ray",
      }),
      shuffleOptions({
        question: "Who discovered the continent of America?",
        optionA: "Vasco da Gama",
        optionB: "Magellan",
        optionC: "Christopher Columbus",
        correctAnswer: "Christopher Columbus",
      }),
      shuffleOptions({
        question: "Who founded the newspaper Kesari?",
        optionA: "Raja Ram Mohan Roy",
        optionB: "Bal Gangadhar Tilak",
        optionC: "Dadabhai Naoroji",
        correctAnswer: "Bal Gangadhar Tilak",
      }),
      shuffleOptions({
        question: "Who introduced many social reforms such as opposing sati and child marriage?",
        optionA: "Swami Vivekananda",
        optionB: "Raja Ram Mohan Roy",
        optionC: "Herbert Baker",
        correctAnswer: "Raja Ram Mohan Roy",
      }),
      shuffleOptions({
        question: "Who wrote the book A Nation in the Making?",
        optionA: "Surendranath Banerjee",
        optionB: "Louis Fischer",
        optionC: "Jawaharlal Nehru",
        correctAnswer: "Surendranath Banerjee",
      }),
      shuffleOptions({
        question: "Who invented the spinning jenny?",
        optionA: "Arkwright",
        optionB: "James Hargreaves",
        optionC: "Cartwright",
        correctAnswer: "James Hargreaves",
      }),
      shuffleOptions({
        question: "Who was one of the pioneers of Indian cinema?",
        optionA: "Himanshu Rai",
        optionB: "Dadasaheb Phalke",
        optionC: "Satyajit Ray",
        correctAnswer: "Dadasaheb Phalke",
      }),
      shuffleOptions({
        question: "Who was the Surveyor General of India whose name was given to Mount Everest?",
        optionA: "James Mill",
        optionB: "George Everest",
        optionC: "Edwin Lutyens",
        correctAnswer: "George Everest",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The British preserved important documents in special ______.",
        optionA: "archives",
        optionB: "temples",
        optionC: "galleries",
        correctAnswer: "archives",
      }),
      shuffleOptions({
        question: "The first modern Malayalam novel was ______.",
        optionA: "Neel Darpan",
        optionB: "Indulekha",
        optionC: "Anandamath",
        correctAnswer: "Indulekha",
      }),
      shuffleOptions({
        question: "Newspapers became common after the spread of the ______.",
        optionA: "telephone",
        optionB: "printing press",
        optionC: "telegraph",
        correctAnswer: "printing press",
      }),
      shuffleOptions({
        question: "The French society was divided into the clergy, the nobles and the ______.",
        optionA: "traders",
        optionB: "commoners",
        optionC: "landlords",
        correctAnswer: "commoners",
      }),
      shuffleOptions({
        question: "The British encouraged the cultivation of ______ to benefit their industries.",
        optionA: "vegetables",
        optionB: "fruits",
        optionC: "cash crops",
        correctAnswer: "cash crops",
      }),
      shuffleOptions({
        question: "The voyage of ______ opened the sea route to India.",
        optionA: "Christopher Columbus",
        optionB: "Vasco da Gama",
        optionC: "Cabral",
        correctAnswer: "Vasco da Gama",
      }),
      shuffleOptions({
        question: "The Americans declared independence on ______ 1776.",
        optionA: "4 July",
        optionB: "2 October",
        optionC: "14 August",
        correctAnswer: "4 July",
      }),
      shuffleOptions({
        question: "The ______ advocated liberty, equality and fraternity.",
        optionA: "American Congress",
        optionB: "French National Assembly",
        optionC: "British Parliament",
        correctAnswer: "French National Assembly",
      }),
      shuffleOptions({
        question: "The film ______ shows the social position of a dalit girl.",
        optionA: "Pather Panchali",
        optionB: "Achhut Kannya",
        optionC: "Mangal Pandey",
        correctAnswer: "Achhut Kannya",
      }),
      shuffleOptions({
        question: "Many monuments like India Gate were designed by ______.",
        optionA: "Herbert Baker",
        optionB: "Sir Edwin Lutyens",
        optionC: "Both a and b",
        correctAnswer: "Both a and b",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Industrial Revolution first began in England.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Surveys helped the British understand India’s topography and resources.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "America was discovered by Vasco da Gama.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Films are considered important sources for studying the modern period.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Census operations were carried out every 10 years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The French Revolution was led mainly by the nobles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Britain established four presidency cities including Bombay and Calcutta.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The British promoted only Indian handicrafts to strengthen local industries.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tilly Kettle painted themes such as Sati and Indian ceremonies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Radio broadcasts of leaders like Nehru have been preserved as historical sources.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
