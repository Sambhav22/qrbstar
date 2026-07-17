export const chapter = "Chapter - 18: Communication";
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
        question: "Which animal was used in early times to carry messages?",
        optionA: "Dog",
        optionB: "Horseback messenger",
        optionC: "Pigeon",
        correctAnswer: "Pigeon",
      }),
      shuffleOptions({
        question: "Which means of communication can show both sound and moving pictures?",
        optionA: "Radio",
        optionB: "Television",
        optionC: "Newspaper",
        correctAnswer: "Television",
      }),
      shuffleOptions({
        question: "Which medium sends information to many people at the same time?",
        optionA: "Letter",
        optionB: "Newspaper",
        optionC: "Parcel",
        correctAnswer: "Newspaper",
      }),
      shuffleOptions({
        question: "Which device sends a copy of a document through a telephone line?",
        optionA: "Printer",
        optionB: "Scanner",
        optionC: "Fax machine",
        correctAnswer: "Fax machine",
      }),
      shuffleOptions({
        question: "Which communication device works with the help of mobile towers?",
        optionA: "Landline telephone",
        optionB: "Radio",
        optionC: "Mobile phone",
        correctAnswer: "Mobile phone",
      }),
      shuffleOptions({
        question: "Which means became very popular after its invention because people can carry it anywhere?",
        optionA: "Mobile phone",
        optionB: "Fax",
        optionC: "Television",
        correctAnswer: "Mobile phone",
      }),
      shuffleOptions({
        question: "Which medium can be understood even by people who cannot read?",
        optionA: "Radio",
        optionB: "Newspaper",
        optionC: "E-mail",
        correctAnswer: "Radio",
      }),
      shuffleOptions({
        question: "Which communication method needs a computer or mobile phone and an internet connection?",
        optionA: "Fax",
        optionB: "E-mail",
        optionC: "Courier",
        correctAnswer: "E-mail",
      }),
      shuffleOptions({
        question: "Which medium provides the latest news, views and world information every day?",
        optionA: "Radio",
        optionB: "Newspaper",
        optionC: "Fax",
        correctAnswer: "Newspaper",
      }),
      shuffleOptions({
        question: "Which system made direct telecast of programmes possible?",
        optionA: "Courier service",
        optionB: "Satellite communication",
        optionC: "Postal service",
        correctAnswer: "Satellite communication",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Early messages were sometimes carried by ________.",
        optionA: "pigeons",
        optionB: "satellites",
        optionC: "fax machines",
        correctAnswer: "pigeons",
      }),
      shuffleOptions({
        question: "E-mail works only when ________ is available.",
        optionA: "internet",
        optionB: "newspaper",
        optionC: "radio signal",
        correctAnswer: "internet",
      }),
      shuffleOptions({
        question: "A television shows programmes with the help of ________.",
        optionA: "mountains",
        optionB: "satellites",
        optionC: "post offices",
        correctAnswer: "satellites",
      }),
      shuffleOptions({
        question: "A fax machine sends the ________ of a document.",
        optionA: "original",
        optionB: "handwritten copy",
        optionC: "copy",
        correctAnswer: "copy",
      }),
      shuffleOptions({
        question: "A newspaper provides information from all over the ________.",
        optionA: "school",
        optionB: "world",
        optionC: "state",
        correctAnswer: "world",
      }),
      shuffleOptions({
        question: "Radio broadcasts programmes in ________ form.",
        optionA: "written",
        optionB: "audible",
        optionC: "visual",
        correctAnswer: "audible",
      }),
      shuffleOptions({
        question: "Mobile phones work with the help of ________.",
        optionA: "rivers",
        optionB: "towers",
        optionC: "cables only",
        correctAnswer: "towers",
      }),
      shuffleOptions({
        question: "India launched its first satellite named ________.",
        optionA: "Aryabhata",
        optionB: "Vikram",
        optionC: "Prithvi",
        correctAnswer: "Aryabhata",
      }),
      shuffleOptions({
        question: "Postal service sends letters, parcels and ________.",
        optionA: "toys",
        optionB: "money orders",
        optionC: "computers",
        correctAnswer: "money orders",
      }),
      shuffleOptions({
        question: "Television is an ________-visual medium.",
        optionA: "audio",
        optionB: "audio-visual",
        optionC: "silent",
        correctAnswer: "audio-visual",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Radio programmes can be enjoyed even by people who cannot read.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A fax machine is attached to a telephone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Television provides sound only, not pictures.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mobile phones became common after new technology was developed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Newspapers can be enjoyed by illiterate people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Satellite communication helps in weather forecasting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Courier companies are cheaper than postal services.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "E-mail can be sent without an internet connection.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pigeons were once used to carry messages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Television is the most popular means of mass communication today.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
