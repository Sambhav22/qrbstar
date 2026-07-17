export const chapter = "Chapter - 12: Means of Communication";
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
        question: "Which bird was used to carry messages in olden times?",
        optionA: "Parrot",
        optionB: "Pigeon",
        optionC: "Eagle",
        correctAnswer: "Pigeon",
      }),
      shuffleOptions({
        question: "Which means of communication requires a postage stamp to send messages?",
        optionA: "Letter",
        optionB: "Radio",
        optionC: "Smartphone",
        correctAnswer: "Letter",
      }),
      shuffleOptions({
        question: "Which device helps us talk instantly with our friends and relatives?",
        optionA: "Television",
        optionB: "Telephone",
        optionC: "Camera",
        correctAnswer: "Telephone",
      }),
      shuffleOptions({
        question: "Which means of communication works even while travelling?",
        optionA: "Landline",
        optionB: "Mobile phone",
        optionC: "Fax machine",
        correctAnswer: "Mobile phone",
      }),
      shuffleOptions({
        question: "Which improved device allows video calls and emails through the internet?",
        optionA: "Pager",
        optionB: "Smartphone",
        optionC: "Typewriter",
        correctAnswer: "Smartphone",
      }),
      shuffleOptions({
        question: "Which machine sends written messages and pictures quickly through telephone lines?",
        optionA: "Washing machine",
        optionB: "Fax machine",
        optionC: "Photocopier",
        correctAnswer: "Fax machine",
      }),
      shuffleOptions({
        question: "Which modern means connects computers around the world?",
        optionA: "Newspaper",
        optionB: "Internet",
        optionC: "Loudspeaker",
        correctAnswer: "Internet",
      }),
      shuffleOptions({
        question: "Which printed medium helps reach the masses with news and information?",
        optionA: "Notebook",
        optionB: "Newspaper",
        optionC: "Water bottle",
        correctAnswer: "Newspaper",
      }),
      shuffleOptions({
        question: "Which communication method is used to send urgent parcels?",
        optionA: "Normal post",
        optionB: "Speed post",
        optionC: "Messenger pigeon",
        correctAnswer: "Speed post",
      }),
      shuffleOptions({
        question: "Which network helps India stay connected with the world?",
        optionA: "Road network",
        optionB: "Railway network",
        optionC: "Internet network",
        correctAnswer: "Internet network",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Urgent letters can be sent through ______.",
        optionA: "speed post",
        optionB: "taxi",
        optionC: "train",
        correctAnswer: "speed post",
      }),
      shuffleOptions({
        question: "Messages are dropped into a ______ for delivery.",
        optionA: "dustbin",
        optionB: "letter box",
        optionC: "cupboard",
        correctAnswer: "letter box",
      }),
      shuffleOptions({
        question: "The postal system is a ______ means of communication.",
        optionA: "cheap",
        optionB: "slow",
        optionC: "harmful",
        correctAnswer: "cheap",
      }),
      shuffleOptions({
        question: "Mobile phones can send messages even while ______.",
        optionA: "cooking",
        optionB: "travelling",
        optionC: "sleeping",
        correctAnswer: "travelling",
      }),
      shuffleOptions({
        question: "The internet connects computers globally through ______.",
        optionA: "tunnels",
        optionB: "satellites",
        optionC: "books",
        correctAnswer: "satellites",
      }),
      shuffleOptions({
        question: "A fax machine sends written messages ______.",
        optionA: "immediately",
        optionB: "after one month",
        optionC: "never",
        correctAnswer: "immediately",
      }),
      shuffleOptions({
        question: "Newspapers and magazines are types of ______.",
        optionA: "toys",
        optionB: "mass media",
        optionC: "vehicles",
        correctAnswer: "mass media",
      }),
      shuffleOptions({
        question: "We stick a ______ stamp on an envelope before posting it.",
        optionA: "wooden",
        optionB: "plastic",
        optionC: "postage",
        correctAnswer: "postage",
      }),
      shuffleOptions({
        question: "Smartphones allow us to make ______ calls.",
        optionA: "silent",
        optionB: "video",
        optionC: "stone",
        correctAnswer: "video",
      }),
      shuffleOptions({
        question: "India has a highly developed network of ______ lines.",
        optionA: "telephone",
        optionB: "chocolate",
        optionC: "railway",
        correctAnswer: "telephone",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Fax machines send messages through telephone lines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Internet helps us get information using search engines like Google.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Newspapers are used to send personal letters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A smartphone is an improved version of a mobile phone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In olden times, pigeons were used to carry messages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Television is a means of mass communication.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Speed post is used for sending urgent parcels.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The internet connects computers only within one city.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Telephone allows direct and instant communication.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India is not connected to the world through the internet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
