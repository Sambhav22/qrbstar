export const chapter = "Chapter - 14: Mumbai –The Gateway of India";
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
        question: "Which coast does Mumbai lie on?",
        optionA: "Eastern Coast",
        optionB: "Western Coast",
        optionC: "Northern Coast",
        correctAnswer: "Western Coast",
      }),
      shuffleOptions({
        question: "Which place in Mumbai is famous for its shining night view known as the \"Queen’s Necklace\"?",
        optionA: "Marine Drive",
        optionB: "Juhu Beach",
        optionC: "Kamla Nehru Park",
        correctAnswer: "Marine Drive",
      }),
      shuffleOptions({
        question: "Which garden in Mumbai is known for its famous Shoe House attraction?",
        optionA: "Hanging Gardens",
        optionB: "Kamla Nehru Park",
        optionC: "Essel World",
        correctAnswer: "Kamla Nehru Park",
      }),
      shuffleOptions({
        question: "Which amusement park in Mumbai attracts many children and tourists?",
        optionA: "Essel World",
        optionB: "Vile Parle Garden",
        optionC: "Nehru Stadium",
        correctAnswer: "Essel World",
      }),
      shuffleOptions({
        question: "Which hill area gives a beautiful view of Mumbai city?",
        optionA: "Malabar Hills",
        optionB: "Aravalli Hills",
        optionC: "Tiger Hills",
        correctAnswer: "Malabar Hills",
      }),
      shuffleOptions({
        question: "Which popular food is commonly enjoyed by Mumbaikars on beaches?",
        optionA: "Bhelpuri",
        optionB: "Rasgulla",
        optionC: "Idli",
        correctAnswer: "Bhelpuri",
      }),
      shuffleOptions({
        question: "Which landmark was built to welcome King George V and Queen Mary?",
        optionA: "Taj Hotel",
        optionB: "Gateway of India",
        optionC: "Victoria Terminus",
        correctAnswer: "Gateway of India",
      }),
      shuffleOptions({
        question: "Which caves near Mumbai are famous for their rock-cut temples?",
        optionA: "Ajanta Caves",
        optionB: "Ellora Caves",
        optionC: "Elephanta Caves",
        correctAnswer: "Elephanta Caves",
      }),
      shuffleOptions({
        question: "Which gallery in Mumbai displays many artworks and paintings?",
        optionA: "National Museum",
        optionB: "Jahangir Art Gallery",
        optionC: "Red Fort Museum",
        correctAnswer: "Jahangir Art Gallery",
      }),
      shuffleOptions({
        question: "Which industry is famous in Mumbai for producing Hindi films?",
        optionA: "Tollywood",
        optionB: "Bollywood",
        optionC: "Sandalwood",
        correctAnswer: "Bollywood",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mumbai’s beaches are located along the ________.",
        optionA: "Bay of Bengal",
        optionB: "Arabian Sea",
        optionC: "Indian Ocean",
        correctAnswer: "Arabian Sea",
      }),
      shuffleOptions({
        question: "The busy harbour of Mumbai helps large ships to ________.",
        optionA: "rest",
        optionB: "dock safely",
        optionC: "catch fish",
        correctAnswer: "dock safely",
      }),
      shuffleOptions({
        question: "Mumbai is home to people from many states, so it has many different ________.",
        optionA: "colours",
        optionB: "rivers",
        optionC: "cultures",
        correctAnswer: "cultures",
      }),
      shuffleOptions({
        question: "The famous ________ Caves are situated on an island near Mumbai.",
        optionA: "Ajanta",
        optionB: "Elephanta",
        optionC: "Jogeshwari",
        correctAnswer: "Elephanta",
      }),
      shuffleOptions({
        question: "Essel World is known for its exciting ________.",
        optionA: "temples",
        optionB: "rides and entertainment",
        optionC: "libraries",
        correctAnswer: "rides and entertainment",
      }),
      shuffleOptions({
        question: "________ Drive looks beautiful at night with bright lights.",
        optionA: "Marine",
        optionB: "Palm",
        optionC: "Eastern",
        correctAnswer: "Marine",
      }),
      shuffleOptions({
        question: "Mumbai Harbour helps India trade with many other ________.",
        optionA: "villages",
        optionB: "countries",
        optionC: "states",
        correctAnswer: "countries",
      }),
      shuffleOptions({
        question: "Pav bhaji is a famous ________ of Mumbai.",
        optionA: "sweet",
        optionB: "street food",
        optionC: "fruit",
        correctAnswer: "street food",
      }),
      shuffleOptions({
        question: "Kamla Nehru Park is famous for its ________ House.",
        optionA: "Cat",
        optionB: "Mouse",
        optionC: "Shoe",
        correctAnswer: "Shoe",
      }),
      shuffleOptions({
        question: "The Prince of Wales Museum displays old ________.",
        optionA: "toys",
        optionB: "artefacts and artworks",
        optionC: "jewellery shops",
        correctAnswer: "artefacts and artworks",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mumbai has several beaches such as Chowpatty and Juhu.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mumbai’s climate is moderate throughout the month.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mumbai was first developed by the British as a trading centre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Elephanta Caves are located on an island near Mumbai Harbour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bhelpuri and pav bhaji are non-famous foods in Mumbai.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The city of Mumbai has many industries other than textile mills.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bollywood is known for producing Hindi films.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Marine Drive is famous for its night view called the Queen’s Necklace.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mumbai becomes extremely cold in winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Essel World is one of the popular amusement parks in Mumbai.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
