export const chapter = "Chapter -4: Byomkesh Bakshi";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question: "Who created the fictional character Byomkesh Bakshi?",
          optionA: "Arthur Conan Doyle",
          optionB: "Sharadindu Bandyopadhyay",
          optionC: "Satyajit Ray",
          correctAnswer: "Sharadindu Bandyopadhyay",
        }),
      shuffleOptions({
          question:
            "What was the first Byomkesh Bakshi story written by Sharadindu Bandyopadhyay?",
          optionA: "Chiriyakhana",
          optionB: "Satyanveshi",
          optionC: "Lahar Biscuit",
          correctAnswer: "Satyanveshi",
        }),
      shuffleOptions({
          question:
            "In which year did Sharadindu Bandyopadhyay start characterizing Byomkesh Bakshi?",
          optionA: "1932",
          optionB: "1951",
          optionC: "1967",
          correctAnswer: "1932",
        }),
      shuffleOptions({
          question:
            "Who played the role of Byomkesh Bakshi in the 1967 film directed by Satyajit Ray?",
          optionA: "Uttam Kumar",
          optionB: "Rajit Kapoor",
          optionC: "Satindra Bhattacharya",
          correctAnswer: "Uttam Kumar",
        }),
      shuffleOptions({
          question:
            "How many completed stories of Byomkesh Bakshi did Sharadindu Bandyopadhyay write?",
          optionA: "22",
          optionB: "32",
          optionC: "42",
          correctAnswer: "32",
        }),
      shuffleOptions({
          question: "What is the name of Byomkesh Bakshi's wife?",
          optionA: "Satyaboti",
          optionB: "Sukanya Kulkarni",
          optionC: "Rajit Kapoor",
          correctAnswer: "Satyaboti",
        }),
      shuffleOptions({
          question:
            "In which year did the Doordarshan telecast the Byomkesh Bakshi serial starring Rajit Kapoor?",
          optionA: "1974",
          optionB: "1993",
          optionC: "2004",
          correctAnswer: "1993",
        }),
      shuffleOptions({
          question:
            "Who directed the 2015 film 'Detective Byomkesh Bakshi' starring Sushant Singh Rajput?",
          optionA: "Satyajit Ray",
          optionB: "Dibankar Banerjee",
          optionC: "Manju Dey",
          correctAnswer: "Dibankar Banerjee",
        }),
      shuffleOptions({
          question:
            "How does Byomkesh Bakshi prefer to be called instead of 'detective'?",
          optionA: "Satyanveshi",
          optionB: "Sherlock",
          optionC: "Poirot",
          correctAnswer: "Satyanveshi",
        }),
      shuffleOptions({
          question:
            "Which TV series referred to Byomkesh Bakshi in 2014, calling him the 'Indian Sherlock Holmes'?",
          optionA: "The Big Bang Theory",
          optionB: "Mahabharata",
          optionC: "Sunday Suspense",
          correctAnswer: "The Big Bang Theory",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "Byomkesh Bakshi has been a popular character in Bengali literature since ____ when he was characterized by the writer in 1932.",
          optionA: "1920",
          optionB: "1932",
          optionC: "1945",
          correctAnswer: "1932",
        }),
      shuffleOptions({
          question:
            "The last complete story, Lahar Biscuit, was published in _____.",
          optionA: "1969",
          optionB: "1970",
          optionC: "1975",
          correctAnswer: "1969",
        }),
      shuffleOptions({
          question:
            "The first film based on Byomkesh Bakshi came in ____ and was based on Sharadindu's story Chiriyakhana.",
          optionA: "1967",
          optionB: "1974",
          optionC: "1980",
          correctAnswer: "1967",
        }),
      shuffleOptions({
          question:
            "Rajit Kapoor portrayed Byomkesh Bakshi in the serial telecast in _____.",
          optionA: "1985",
          optionB: "1993",
          optionC: "2000",
          correctAnswer: "1993",
        }),
      shuffleOptions({
          question:
            "The Doordarshan made another series in ____ on this great detective, titled Byomkesh Bakshi.",
          optionA: "2000",
          optionB: "2004",
          optionC: "2010",
          correctAnswer: "2004",
        }),
      shuffleOptions({
          question:
            "In 2014, a television series titled Byomkesh was aired on ETV Bangla, in which the role of Byomkesh Bakshi was played by ____.",
          optionA: "Rajit Kapoor",
          optionB: "Saptarshi Roy",
          optionC: "Gaurav Chakrabarty",
          correctAnswer: "Gaurav Chakrabarty",
        }),
      shuffleOptions({
          question:
            "The 2015 film 'Detective Byomkesh Bakshi' starred Sushant Singh Rajput and was directed by ____.",
          optionA: "Satyajit Ray",
          optionB: "Dibankar Banerjee",
          optionC: "Manju Dey",
          correctAnswer: "Dibankar Banerjee",
        }),
      shuffleOptions({
          question:
            "The audio adaptation for the Sunday Suspense series included novels such as Satyanveshi, Makorshar Rosh, Agnibaan, Roktomukhi Neela, Khinji Khunji Nari, Adwitiyo, and ____.",
          optionA: "Benishonghar",
          optionB: "Lahar Biscuit",
          optionC: "Shailo Rahasya",
          correctAnswer: "Lahar Biscuit",
        }),
      shuffleOptions({
          question:
            "Byomkesh Bakshi abhors the word 'detective' and prefers to be called '____,' one who is the seeker of truth.",
          optionA: "Detective",
          optionB: "Satyanveshi",
          optionC: "Investigator",
          correctAnswer: "Satyanveshi",
        }),
      shuffleOptions({
          question:
            "Which TV series referred to Byomkesh Bakshi in 2014, calling him the 'Indian Sherlock Holmes'?",
          optionA: "The Big Bang Theory",
          optionB: "Mahabharata",
          optionC: "Sunday Suspense",
          correctAnswer: "The Big Bang Theory",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "Byomkesh Bakshi was characterized by Sharadindu Bandyopadhyay in 1922.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The last complete story written by Sharadindu Bandyopadhyay was Lahar Biscuit.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The first film based on Byomkesh Bakshi was released in 1967 and directed by Satyajit Ray.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Rajit Kapoor portrayed Byomkesh Bakshi in the 1993 TV serial telecast on Doordarshan.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Byomkesh Bakshi prefers to be called 'Sherlock' instead of 'Satyanveshi.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The 2015 film 'Detective Byomkesh Bakshi' starred Aamir Khan in the lead role.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question: "Byomkesh Bakshi's wife's name is Sukanya Kulkarni.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The audio adaptation for the Sunday Suspense series included a novel titled 'Benishonghar.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Byomkesh Bakshi uses deductive reasoning to arrive at the final opinion or inference.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "The TV series 'Byomkesh' aired in 2014 on ETV Bangla, and Gaurav Chakrabarty played the role of Byomkesh Bakshi.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
