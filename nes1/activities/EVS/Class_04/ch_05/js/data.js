export const chapter = "Chapter - 5: Visit to a Fair ";
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
    questions: [
      {
        questions: [
          {
            question: "What is Munia going to see in Punjab?",
            options: ["a) Art exhibition", "b) Baisakhi fair", "c) Auto Expo"],
            answer: "b) Baisakhi fair",
          },
          {
            question:
              "What recreational activities do people engage in during their free time, according to the passage?",
            options: [
              "a) Cooking and gardening",
              "b) Sports, games, and music",
              "c) Business and finance",
            ],
            answer: "b) Sports, games, and music",
          },
          {
            question:
              "What did people prefer to do in their leisure time in olden times?",
            options: [
              "a) Visit supermarkets",
              "b) Visit fairs",
              "c) Watch movies",
            ],
            answer: "b) Visit fairs",
          },
          {
            question:
              "What is the main focus of Traditional Fairs in villages or rural areas?",
            options: [
              "a) Promoting modern technology",
              "b) Selling traditional handicraft items",
              "c) Hosting wrestling matches",
            ],
            answer: "b) Selling traditional handicraft items",
          },
          {
            question: "How have modern fairs changed over time?",
            options: [
              "a) They have become more traditional",
              "b) They have become less popular",
              "c) They have become multifunctional and objective-based",
            ],
            answer: "c) They have become multifunctional and objective-based",
          },
          {
            question:
              "What is the purpose of a book fair, according to the passage?",
            options: [
              "a) To promote traditional handicrafts",
              "b) To promote books of different publishers",
              "c) To promote food and fun rides",
            ],
            answer: "b) To promote books of different publishers",
          },
          {
            question: "What is an Amusement Park created for in big cities?",
            options: [
              "a) Selling handicraft items",
              "b) Promoting agriculture",
              "c) Serving as a permanent source of recreation",
            ],
            answer: "c) Serving as a permanent source of recreation",
          },
          {
            question:
              "What has replaced the craze of fairs, according to the passage?",
            options: [
              "a) Traditional handicrafts",
              "b) Theme parks and amusement parks",
              "c) Auto Expo",
            ],
            answer: "b) Theme parks and amusement parks",
          },
          {
            question:
              "What do people enjoy in theme parks and amusement parks under one roof?",
            options: [
              "a) Traditional fairs",
              "b) Food, fun rides, supermarkets, and parks",
              "c) Book fairs",
            ],
            answer: "b) Food, fun rides, supermarkets, and parks",
          },
          {
            question:
              "How do exhibitors and visitors benefit from modern fairs?",
            options: [
              "a) They learn traditional crafts",
              "b) They meet innovative ideas and get educated by market trends",
              "c) They enjoy food and fun rides",
            ],
            answer:
              "b) They meet innovative ideas and get educated by market trends",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        fill_in_the_blank_questions: [
          {
            question:
              "Munia is going to see the famous __________ fair in Punjab.",
            options: ["a) Diwali", "b) Baisakhi", "c) Holi"],
            answer: "b) Baisakhi",
          },
          {
            question:
              "Recreational activities include sports, games, music, flying kites, travel, dance, art, craft, etc., which people engage in during their __________ time.",
            options: ["a) Working", "b) Leisure", "c) School"],
            answer: "b) Leisure",
          },
          {
            question:
              "In olden times, people generally preferred to visit a __________ in their leisure time.",
            options: ["a) Movie theater", "b) Supermarket", "c) Fair"],
            answer: "c) Fair",
          },
          {
            question:
              "Traditional fairs in villages promote the Indian __________ industry by selling traditional handicraft items.",
            options: ["a) Technology", "b) Handicraft", "c) Automobile"],
            answer: "b) Handicraft",
          },
          {
            question:
              "Modern fairs are multifunctional and objective-based, such as promoting upcoming models of cars and bikes in the __________.",
            options: ["a) Auto Expo", "b) Book Fair", "c) Food Festival"],
            answer: "a) Auto Expo",
          },
          {
            question:
              "Theme parks and amusement parks have replaced the craze of __________.",
            options: [
              "a) Traditional fairs",
              "b) Movie theaters",
              "c) Art exhibitions",
            ],
            answer: "a) Traditional fairs",
          },
          {
            question:
              "__________ are created in big cities permanently as a source of recreation, offering food, fun rides, supermarkets, and parks under one roof.",
            options: [
              "a) Traditional fairs",
              "b) Supermarkets",
              "c) Amusement parks",
            ],
            answer: "c) Amusement parks",
          },
          {
            question:
              "Traditional fairs in villages are organized on festivals or special occasions and serve as places where traditional __________ items are sold.",
            options: ["a) Clothing", "b) Handicraft", "c) Technology"],
            answer: "b) Handicraft",
          },
          {
            question:
              "In modern times, fairs have become __________ and objective-based, serving as a platform for exhibitors and visitors to meet innovative ideas and market trends.",
            options: ["a) Traditional", "b) Multifunctional", "c) Exclusive"],
            answer: "b) Multifunctional",
          },
          {
            question:
              "Recreational activities, including sports and games, help people pass their __________ time.",
            options: ["a) Working", "b) Leisure", "c) School"],
            answer: "b) Leisure",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        true_false_questions: [
          {
            question:
              "Munia is going to see the famous Baisakhi fair in Punjab.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question: "Recreational activities include cooking and gardening.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "In olden times, people generally preferred to visit supermarkets in their leisure time.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "Traditional fairs in villages promote the Indian technology industry.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "Modern fairs are multifunctional and objective-based, such as promoting upcoming models of cars and bikes in the Auto Expo.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "Theme parks and amusement parks have replaced the craze of art exhibitions.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "Amusement parks are created in big cities permanently as a source of recreation.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "Traditional fairs in villages are organized on festivals or special occasions and serve as places where traditional clothing items are sold.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "In modern times, fairs have become traditional and objective-based.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "Recreational activities, including sports and games, help people pass their working time.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
        ],
      },
    ],
  };
}

export var activityData;
