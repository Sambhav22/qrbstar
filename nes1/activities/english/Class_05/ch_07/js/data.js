export const chapter = "Chapter - 7: The Sky Is Falling ";
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
}

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "Who was the first character to meet Hermy when she decided to go tell the King about the falling sky?",
        optionA: "Cocky",
        optionB: "Ducky",
        optionC: "Goosey",
        correctAnswer: "Cocky",
     }),
      shuffleOptions({
        question: "What did Hermy initially think had hit her on the head?",
        optionA: "A corn",
        optionB: "An acorn",
        optionC: "The sky",
        correctAnswer: "An acorn",
     }),
      shuffleOptions({
        question:
          "Who decided to join Hermy on her journey to tell the King about the falling sky?",
        optionA: "Hermy and Cocky",
        optionB: "Hermy, Cocky, and Ducky",
        optionC: "Hermy, Cocky, Ducky, and Goosey",
        correctAnswer: "Hermy, Cocky, Ducky, and Goosey",
     }),
      shuffleOptions({
        question:
          "What animal led Hermy, Cocky, Ducky, Goosey, and Turkey through a dark hole on their way to the King?",
        optionA: "A rabbit",
        optionB: "A squirrel",
        optionC: "A fox",
        correctAnswer: "A fox",
     }),
      shuffleOptions({
        question:
          "What happened to Turkey when he entered the dark hole in the burrow?",
        optionA: "He turned around and left.",
        optionB: "His head was snapped off by Foxy.",
        optionC: "He emerged unharmed on the other side.",
        correctAnswer: "His head was snapped off by Foxy.",
     }),
      shuffleOptions({
        question:
          "Why did Hermy suddenly leave the group while in the dark burrow?",
        optionA: "To lay her egg",
        optionB: "To find a way out",
        optionC: "To look for food",
        correctAnswer: "To lay her egg",
     }),
      shuffleOptions({
        question:
          "What sound did Cocky make when he entered the burrow, just before his demise?",
        optionA: "Hrumph!",
        optionB: "Cock-a-doo-dle do",
        optionC: "Caw, caw",
        correctAnswer: "Cock-a-doo-dle do",
     }),
      shuffleOptions({
        question: "Who was the only one of the group to escape Foxy's trap?",
        optionA: "Cocky",
        optionB: "Hermy",
        optionC: "Goosey",
        correctAnswer: "Hermy",
     }),
      shuffleOptions({
        question:
          "What was the original reason for the group's journey to see the King?",
        optionA: "To ask for help",
        optionB: "To deliver a message",
        optionC: "To report that the sky was falling",
        correctAnswer: "To report that the sky was falling",
     }),
      shuffleOptions({
        question:
          "Why did Foxy mislead the group by leading them to the dark hole?",
        optionA: "To save them from danger",
        optionB: "To help them find the King",
        optionC: "To trap and eat them",
        correctAnswer: "To trap and eat them",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "One day, Hermy the hen was picking up ____ in the backyard when-whack!-an acorn hit her upon the head.",
        optionA: "flowers",
        optionB: "rocks",
        optionC: "corn",
        correctAnswer: "corn",
     }),
      shuffleOptions({
        question:
          'Goodness gracious me!" said Hermy, "the sky is going to fall; I must go and tell the ____."',
        optionA: "farmer",
        optionB: "King",
        optionC: "neighbors",
        correctAnswer: "King",
     }),
      shuffleOptions({
        question:
          "So she went along, and she went along, and she went along, till she met Cocky the ____.",
        optionA: "rabbit",
        optionB: "cat",
        optionC: "cock",
        correctAnswer: "cock",
     }),
      shuffleOptions({
        question:
          '"Where are you going, Hermy?" said Cocky.\n"Oh! I\'m going to tell the ____ that the sky is falling," said Hermy.',
        optionA: "Queen",
        optionB: "King",
        optionC: "Mayor",
        correctAnswer: "King",
     }),
      shuffleOptions({
        question: '"May I come with you?" said Cocky.\n"Certainly," said ____.',
        optionA: "Cocky",
        optionB: "Hermy",
        optionC: "Hermy and Cocky",
        correctAnswer: "Hermy and Cocky",
     }),
      shuffleOptions({
        question:
          'So Hermy, Cocky, and Ducky went to tell the King that the sky was ____.""',
        optionA: "clear",
        optionB: "falling",
        optionC: "blue",
        correctAnswer: "falling",
     }),
      shuffleOptions({
        question:
          "So they went along, and they went along, and they went along, till they met Goosey the ____.",
        optionA: "duck",
        optionB: "turkey",
        optionC: "goose",
        correctAnswer: "goose",
     }),
      shuffleOptions({
        question:
          '"Where are you going to, Hermy, Cocky, Ducky, and Goosey?" said Turkey.\n"Oh! We are going to tell the ____ that the sky is falling," said Hermy, Cocky, Ducky, and Goosey.',
        optionA: "Queen",
        optionB: "Mayor",
        optionC: "King",
        correctAnswer: "King",
     }),
      shuffleOptions({
        question:
          '"May I come with you, Hermy, Cocky, Ducky, and Goosey?" said Foxy.\n"Oh, certainly, Turkey," said Hermy, Cocky, Ducky, and Goosey. So they all went to tell the King that the sky was ____."',
        optionA: "shining",
        optionB: "falling",
        optionC: "cloudy",
        correctAnswer: "falling",
     }),
      shuffleOptions({
        question:
          'Now when Hermy, who had just got into the dark burrow, heard Cocky crow, she said to herself: "My goodness! It must be ____. It is time for me to lay my egg."',
        optionA: "dawn",
        optionB: "dusk",
        optionC: "noon",
        correctAnswer: "dawn",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Hermy found a pot of gold in the backyard.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Hermy decided to tell the Queen about the falling sky.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "Cocky, Ducky, Goosey, and Turkey joined Hermy on her journey.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Foxy led the group to the King through a dark hole.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "Turkey lost his head in Foxy's burrow.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "Hermy went to lay her egg after hearing Cocky crow.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The stone was considered better than gold and silver.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The stone was going to be used to open the window.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The stone transformed into a creature with lanky legs, ears, and a tail.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The woman considered herself unlucky after encountering the 'Bogey-Beast.'",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
