export const chapter = "Chapter - 18: Means of Communication";
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
        question: "What is communication?",
        optionA: "Travelling",
        optionB: "Exchange of ideas",
        optionC: "Eating",
        correctAnswer: "Exchange of ideas",
      }),
      shuffleOptions({
        question: "Which is the cheapest means of communication?",
        optionA: "Letter",
        optionB: "Telephone",
        optionC: "Message",
        correctAnswer: "Letter",
      }),
      shuffleOptions({
        question: "Which is the quickest means of communication?",
        optionA: "Letter",
        optionB: "Telephone",
        optionC: "None",
        correctAnswer: "Telephone",
      }),
      shuffleOptions({
        question: "Which of the following gives us news about the world?",
        optionA: "Newspaper",
        optionB: "Letter",
        optionC: "Post",
        correctAnswer: "Newspaper",
      }),
      shuffleOptions({
        question: "How can we send a letter?",
        optionA: "Through post",
        optionB: "Through television",
        optionC: "Through radio",
        correctAnswer: "Through post",
      }),
      shuffleOptions({
        question: "What should we do if a stranger calls us?",
        optionA: "Tell personal details",
        optionB: "Keep talking",
        optionC: "Do not share information",
        correctAnswer: "Do not share information",
      }),
      shuffleOptions({
        question: "What is written on paper and sent to others?",
        optionA: "Letter",
        optionB: "Telephone",
        optionC: "Book",
        correctAnswer: "Letter",
      }),
      shuffleOptions({
        question: "Which means of communication helps us talk quickly to far-off people?",
        optionA: "Telephone",
        optionB: "Newspaper",
        optionC: "Post",
        correctAnswer: "Telephone",
      }),
      shuffleOptions({
        question: "What do we get from reading a newspaper?",
        optionA: "Information",
        optionB: "Toys",
        optionC: "Clothes",
        correctAnswer: "Information",
      }),
      shuffleOptions({
        question: "What service is used to send and receive letters?",
        optionA: "Post",
        optionB: "School",
        optionC: "Shop",
        correctAnswer: "Post",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We exchange our ideas or thoughts with ______.",
        optionA: "Books",
        optionB: "Others",
        optionC: "Toys",
        correctAnswer: "Others",
      }),
      shuffleOptions({
        question: "A ______ is written on paper.",
        optionA: "Letter",
        optionB: "Note",
        optionC: "Message",
        correctAnswer: "Letter",
      }),
      shuffleOptions({
        question: "We can make a ______ through a telephone.",
        optionA: "Song",
        optionB: "Call",
        optionC: "Drawing",
        correctAnswer: "Call",
      }),
      shuffleOptions({
        question: "We get information through ______.",
        optionA: "Television",
        optionB: "Newspaper",
        optionC: "Radio",
        correctAnswer: "Newspaper",
      }),
      shuffleOptions({
        question: "A letter can be sent through ______ or courier.",
        optionA: "Post",
        optionB: "Train",
        optionC: "School",
        correctAnswer: "Post",
      }),
      shuffleOptions({
        question: "Communication means sharing our ______ with others.",
        optionA: "Ideas",
        optionB: "Games",
        optionC: "Lunch",
        correctAnswer: "Ideas",
      }),
      shuffleOptions({
        question: "The quickest means of communication is ______.",
        optionA: "Telephone",
        optionB: "Letter",
        optionC: "Newspaper",
        correctAnswer: "Telephone",
      }),
      shuffleOptions({
        question: "We should not tell our ______ details to strangers.",
        optionA: "Personal",
        optionB: "Friend’s",
        optionC: "Colour",
        correctAnswer: "Personal",
      }),
      shuffleOptions({
        question: "A newspaper tells us what is going on ______ us.",
        optionA: "Around",
        optionB: "Behind",
        optionC: "Under",
        correctAnswer: "Around",
      }),
      shuffleOptions({
        question: "The cheapest means of communication is ______.",
        optionA: "Letter",
        optionB: "Message",
        optionC: "Telephone",
        correctAnswer: "Letter",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A letter is written on paper.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Telephone is the quickest means of communication.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Newspaper gives us information about the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Talking face to face is a form of communication.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should tell strangers our personal details.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A letter can be sent by post or courier.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Post is used to send and receive letters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Newspaper is the cheapest means of communication.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Telephone helps to talk quickly with people far away.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Reading a newspaper helps us know what is happening around us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
