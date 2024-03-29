export const chapter = "Chapter -5: Visit to a fair";
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
            "question": "What are examples of recreational activities mentioned in the text?",
            "optionA": "Sports and games",
            "optionB": "Music and travel",
            "optionC": "Dance and art",
            "correctAnswer": "Music and travel"
        }),
      shuffleOptions({
            "question": "In olden times, what did people generally prefer to do in their leisure time?",
            "optionA": "Visit theme parks",
            "optionB": "Participate in sports",
            "optionC": "Attend fairs",
            "correctAnswer": "Attend fairs"
        }),
      shuffleOptions({
            "question": "What types of fairs are organized in villages or rural areas on festivals or special occasions?",
            "optionA": "Modern fairs",
            "optionB": "Amusement fairs",
            "optionC": "Traditional fairs",
            "correctAnswer": "Traditional fairs"
        }),
      shuffleOptions({
            "question": "What is the objective of modern fairs like the Auto Expo mentioned in the text?",
            "optionA": "To promote books of different publishers",
            "optionB": "To showcase upcoming car and bike models",
            "optionC": "To sell traditional handicraft items",
            "correctAnswer": "To showcase upcoming car and bike models"
        }),
      shuffleOptions({
            "question": "What do exhibitors and visitors do in modern fairs?",
            "optionA": "Only meet with innovative ideas",
            "optionB": "Fulfill their needs under one roof",
            "optionC": "Only get educated by market trends",
            "correctAnswer": "Fulfill their needs under one roof"
        }),
      shuffleOptions({
            "question": "Which of the following is not mentioned as a big fair held in India?",
            "optionA": "Kumbh Mela",
            "optionB": "Kolkata Book Fair",
            "optionC": "Disneyland Fair",
            "correctAnswer": "Disneyland Fair"
        }),
      shuffleOptions({
            "question": "What modern recreational places have taken the craze of fairs?",
            "optionA": "Theme parks and amusement parks",
            "optionB": "Supermarkets and malls",
            "optionC": "Beaches and resorts",
            "correctAnswer": "Theme parks and amusement parks"
        }),
      shuffleOptions({
            "question": "What can people enjoy in theme parks and amusement parks?",
            "optionA": "Food, fun rides, and parks",
            "optionB": "Only food",
            "optionC": "Only fun rides",
            "correctAnswer": "Food, fun rides, and parks"
        }),
      shuffleOptions({
            "question": "What type of fairs promotes the Indian handicraft industry by selling traditional handicraft items?",
            "optionA": "Modern fairs",
            "optionB": "Auto Expo",
            "optionC": "Traditional fairs",
            "correctAnswer": "Traditional fairs"
        }),
      shuffleOptions({
            "question": "What has replaced the craze of fairs in big cities as a source of recreation?",
            "optionA": "Traditional fairs",
            "optionB": "Amusement parks and theme parks",
            "optionC": "Book fairs",
            "correctAnswer": "Amusement parks and theme parks"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "Recreational activities are done by people in their free time. They include sports, games, music, flying kites, travel, dance, __________, etc.",
            "optionA": "painting",
            "optionB": "cooking",
            "optionC": "gardening",
            "correctAnswer": "gardening"
        }),
      shuffleOptions({
            "question": "In olden times, people had very less recreational equipment and they generally preferred to visit a __________ in their leisure time.",
            "optionA": "museum",
            "optionB": "zoo",
            "optionC": "fair",
            "correctAnswer": "fair"
        }),
      shuffleOptions({
            "question": "There are two types of fairs in India: Traditional Fairs and __________.",
            "optionA": "Cultural Fairs",
            "optionB": "Modern Fairs",
            "optionC": "International Fairs",
            "correctAnswer": "Modern Fairs"
        }),
      shuffleOptions({
            "question": "Modern fairs are multifunctional and objective-based, like to promote a book of an author. You can go to a book fair where you only get __________ of different publishers.",
            "optionA": "clothes",
            "optionB": "books",
            "optionC": "toys",
            "correctAnswer": "books"
        }),
      shuffleOptions({
            "question": "In modern fairs, exhibitors and visitors both meet together to fulfill their needs under one roof, thereby meeting with innovative ideas and get educated by the market trends and latest __________.",
            "optionA": "technologies",
            "optionB": "information",
            "optionC": "products",
            "correctAnswer": "information"
        }),
      shuffleOptions({
            "question": "A number of big fairs are held in India like Kumbh Mela, Kolkata Book Fair, Sonepur Cattle Fair, __________, etc.",
            "optionA": "Jaipur Literature Festival",
            "optionB": "Delhi Auto Expo",
            "optionC": "Mumbai Film Festival",
            "correctAnswer": "Pushkar Fair"
        }),
      shuffleOptions({
            "question": "With the passage of time, the means of recreation are changing rapidly. Now, the theme parks and amusement parks have totally snatched the craze of __________.",
            "optionA": "zoos",
            "optionB": "malls",
            "optionC": "fairs",
            "correctAnswer": "fairs"
        }),
      shuffleOptions({
            "question": "These are created for people in big cities permanently as a source of recreation. Here people enjoy food, fun rides, supermarkets, and parks under one __________.",
            "optionA": "roof",
            "optionB": "sky",
            "optionC": "ground",
            "correctAnswer": "roof"
        }),
      shuffleOptions({
            "question": "In olden days, people used to build simple houses and buildings but they were large in size. The common building materials used were bricks, mud, and __________.",
            "optionA": "concrete",
            "optionB": "steel",
            "optionC": "wood",
            "correctAnswer": "wood"
        }),
      shuffleOptions({
            "question": "The houses in present times are made with different architecture and with newer building materials like cement, concrete, glass, bricks, __________, and iron.",
            "optionA": "plastic",
            "optionB": "aluminum",
            "optionC": "copper",
            "correctAnswer": "steel"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "Recreational activities include only physical activities like sports and games.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Modern fairs are objective-based and multifunctional, serving various purposes beyond traditional fair activities.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Traditional fairs in India are primarily focused on promoting modern technology and innovations.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "People visit book fairs to purchase books from different publishers and explore new literary works.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Modern fairs provide a platform for exhibitors and visitors to exchange ideas and stay updated on market trends.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Kumbh Mela is an example of a traditional fair held in India.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Theme parks and amusement parks have gained more popularity than fairs in modern times.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Theme parks are only established in rural areas to provide recreation to villagers.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "In olden times, houses were built using materials like bricks, mud, and wood.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Modern houses are typically constructed using outdated materials like limestone and stone chips.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }
    ]
    
    ],
  };
}

export var activityData;
