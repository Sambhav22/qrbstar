export const chapter = "Chapter -21: Monuments and Buildings";
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
          "question": "Who is credited with building about 84,000 stupas, with the most famous one situated at Sanchi?",
          "optionA": "Ashoka the Great",
          "optionB": "Chandala kings",
          "optionC": "Rajaraja",
          "correctAnswer": "Ashoka the Great"
        }),
      shuffleOptions({
          "question": "Which temple is famous for its annual Rath Yatra?",
          "optionA": "Lingaraja Temple at Bhubaneswar",
          "optionB": "Jagannath Temple at Puri",
          "optionC": "Brihadiswara Temple at Thanjavur",
          "correctAnswer": "Jagannath Temple at Puri"
        }),
      shuffleOptions({
          "question": "Who built the Taj Mahal in memory of his wife, Mumtaz Mahal?",
          "optionA": "Sher Shah",
          "optionB": "Shah Jahan",
          "optionC": "Akbar the Great",
          "correctAnswer": "Shah Jahan"
        }),
      shuffleOptions({
          "question": "Which monument was built by Raja Jai Singh of Amber to promote scientific learning?",
          "optionA": "Golden Temple at Amritsar",
          "optionB": "Jantar Mantar at New Delhi",
          "optionC": "Red Fort at New Delhi",
          "correctAnswer": "Jantar Mantar at New Delhi"
        }),
      shuffleOptions({
          "question": "Who built the Rashtrapati Bhavan during the British rule?",
          "optionA": "Guru Ramdas",
          "optionB": "Edwin Lutyens",
          "optionC": "BAPS foundation",
          "correctAnswer": "Edwin Lutyens"
        }),
      shuffleOptions({
          "question": "Which temple is known as the holy pilgrimage of the Sikhs?",
          "optionA": "Golden Temple at Amritsar",
          "optionB": "Akshardham Temple at New Delhi",
          "optionC": "Lotus Temple at New Delhi",
          "correctAnswer": "Golden Temple at Amritsar"
        }),
      shuffleOptions({
          "question": "The Lotus Temple at New Delhi was built by the followers of which sect?",
          "optionA": "Bahai",
          "optionB": "BAPS foundation",
          "optionC": "Swaminarayan",
          "correctAnswer": "Bahai"
        }),
      shuffleOptions({
          "question": "The Gateway of India in Mumbai was built during the British rule to welcome which British monarch?",
          "optionA": "King George V",
          "optionB": "Queen Victoria",
          "optionC": "King Edward VII",
          "correctAnswer": "King George V"
        }),
      shuffleOptions({
          "question": "Who constructed the Akshardham Temple in New Delhi?",
          "optionA": "Sher Shah",
          "optionB": "Shah Jahan",
          "optionC": "BAPS foundation",
          "correctAnswer": "BAPS foundation"
        }),
      shuffleOptions({
          "question": "Which monument is a modern day wonder of the world and is one of the biggest and most intricate religious places of worship ever constructed?",
          "optionA": "Taj Mahal",
          "optionB": "Red Fort",
          "optionC": "Akshardham Temple at New Delhi",
          "correctAnswer": "Akshardham Temple at New Delhi"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "The Iron Pillar at Mehrauli in New Delhi was built by early Gupta kings in the ancient times. It shows the developed state of metal casting in those times. This metal pillar has not _______ even after such a long period.",
          "optionA": "rusted",
          "optionB": "melted",
          "optionC": "corroded",
          "correctAnswer": "rusted"
        }),
      shuffleOptions({
          "question": "The Lingaraja Temple at Bhubaneswar was built by _______ kings and is a piece of exquisite art.",
          "optionA": "Chandala",
          "optionB": "Chola",
          "optionC": "Pallava",
          "correctAnswer": "Chandala"
        }),
      shuffleOptions({
          "question": "The Brihadiswara Temple was built by the _______ king, Rajaraja.",
          "optionA": "Pallava",
          "optionB": "Chandala",
          "optionC": "Chola",
          "correctAnswer": "Chola"
        }),
      shuffleOptions({
          "question": "The rock cut temples at Mahabalipuram were built by the great _______ king, Narsimhavarman.",
          "optionA": "Chandala",
          "optionB": "Chola",
          "optionC": "Pallava",
          "correctAnswer": "Pallava"
        }),
      shuffleOptions({
          "question": "The Taj Mahal at Agra was built with white marbles by Mughal emperor Shah Jahan in the memory of his wife, Mumtaz _______.",
          "optionA": "Khurram",
          "optionB": "Begum",
          "optionC": "Mahal",
          "correctAnswer": "Mahal"
        }),
      shuffleOptions({
          "question": "The Red Fort at New Delhi was built about 360 years ago by Mughal emperor Shah Jahan and is also called _______ Quila because it is built of red sandstone.",
          "optionA": "Amber",
          "optionB": "Lal",
          "optionC": "Qutub",
          "correctAnswer": "Lal"
        }),
      shuffleOptions({
          "question": "The Gateway of India in Mumbai was built during the British rule to welcome _______ on his visit to India.",
          "optionA": "King George V",
          "optionB": "Queen Victoria",
          "optionC": "King Edward VII",
          "correctAnswer": "King George V"
        }),
      shuffleOptions({
          "question": "The Rashtrapati Bhavan at New Delhi was built by _______ during the British rule.",
          "optionA": "Sher Shah",
          "optionB": "Edwin Lutyens",
          "optionC": "Jai Singh",
          "correctAnswer": "Edwin Lutyens"
        }),
      shuffleOptions({
          "question": "The Golden Temple at Amritsar was built by Guru Ramdas, the fourth Guru of the Sikhs. The main enclosure is embossed with _______ .",
          "optionA": "silver",
          "optionB": "bronze",
          "optionC": "gold",
          "correctAnswer": "gold"
        }),
      shuffleOptions({
          "question": "The Akshardham Temple in New Delhi, India, constructed by the BAPS foundation, is truely a modern day _______ of the world.",
          "optionA": "wonder",
          "optionB": "miracle",
          "optionC": "beauty",
          "correctAnswer": "wonder"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "The Iron Pillar at New Delhi was built by early Gupta kings.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "The Lingaraja Temple at Bhubaneswar was built by Chandala kings.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "The Brihadiswara Temple was built by the Chola king, Rajaraja.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "The Taj Mahal was built by Akbar the Great.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The Red Fort in New Delhi was built about 360 years ago by Mughal emperor Shah Jahan.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Jantar Mantar at New Delhi was built by the followers of Swaminarayan sect.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The Golden Temple at Amritsar is the grand residence of the President of India.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The Lotus Temple at New Delhi was built during the British rule in India.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The Gateway of India at Mumbai was built during the British rule to welcome Queen Victoria.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The Akshardham Temple in New Delhi was constructed by Sher Shah.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }
      ],
  };
}

export var activityData;
