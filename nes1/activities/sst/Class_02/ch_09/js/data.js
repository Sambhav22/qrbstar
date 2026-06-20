export const chapter = "Chapter - 9: Places of Worship ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the main theme of the text?",
        optionA: "Religious festivals",
        optionB: "Places of worship",
        optionC: "Different cultures",
        correctAnswer: "Places of worship",
      },
      {
        question: "What do people primarily pray for in the text?",
        optionA: "Good grades",
        optionB: "Safety, happiness, and prosperity",
        optionC: "Entertainment",
        correctAnswer: "Safety, happiness, and prosperity",
      },
      {
        question: "What do Hindus call the place where they go to pray?",
        optionA: "Church",
        optionB: "Mosque",
        optionC: "Temple",
        correctAnswer: "Temple",
      },
      {
        question: "What is the holy book of Islam mentioned in the text?",
        optionA: "Ramayana",
        optionB: "Bhagwat Gita",
        optionC: "Quran",
        correctAnswer: "Quran",
      },
      {
        question: "Which religious group attends prayers on Sundays in church?",
        optionA: "Sikhs",
        optionB: "Muslims",
        optionC: "Christians",
        correctAnswer: "Christians",
      },
      {
        question:
          "What is the place of worship for Sikhs mentioned in the text?",
        optionA: "Gurudwara",
        optionB: "Mosque",
        optionC: "Temple",
        correctAnswer: "Gurudwara",
      },
      {
        question:
          "What do Muslims call their prayer ritual mentioned in the text?",
        optionA: "Puja",
        optionB: "Namaz",
        optionC: "Gurbani",
        correctAnswer: "Namaz",
      },
      {
        question:
          "Which religious group worships idols of Gods and Goddesses in the temple?",
        optionA: "Christians",
        optionB: "Muslims",
        optionC: "Hindus",
        correctAnswer: "Hindus",
      },
      {
        question:
          "What are the holy books of Christians mentioned in the text?",
        optionA: "Ramayana and Bhagwat Gita",
        optionB: "Bible and Quran",
        optionC: "Guru Granth Sahib and Gurbani",
        correctAnswer: "Bible",
      },
      {
        question: "What is the holy book of Sikhs mentioned in the text?",
        optionA: "Bible",
        optionB: "Quran",
        optionC: "Guru Granth Sahib",
        correctAnswer: "Guru Granth Sahib",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question:
          "People of different religions have different places of worship, such as the Hindu temple. The people who follow Hinduism are called ________________. They go to the temple to pray. There are many idols of Gods and Goddesses in the temple. The holy books of the Hindus are _______________ and _______________.",
        optionA: "Hindus, Quran, Bible",
        optionB: "Muslims, Bhagwat Gita, Ramayana",
        optionC: "Hindus, Ramayana, Bhagwat Gita",
        correctAnswer: "Hindus, Ramayana, Bhagwat Gita",
      },
      {
        question:
          "The people who follow Islam are called Muslims. They pray in the _______________. They offer Namaz ________________ times a day. The Quran is their holy book.",
        optionA: "Temple, three",
        optionB: "Mosque, five",
        optionC: "Church, two",
        correctAnswer: "Mosque, five",
      },
      {
        question:
          "The people who follow Christianity are called Christians. Christians go to church to pray. They pray to _______________ or Mother Mary. The Bible is their holy book. They attend prayers on _______________ in church.",
        optionA: "Allah, Saturday",
        optionB: "Jesus Christ, Sunday",
        optionC: "Guru Granth Sahib, Friday",
        correctAnswer: "Jesus Christ, Sunday",
      },
      {
        question:
          "The people who follow Sikhism are called Sikhs. Sikhs worship in _______________. They pray before their holy book _______________. They sing hymns called Gurbani.",
        optionA: "Church, Bible",
        optionB: "Mosque, Quran",
        optionC: "Temple, Ramayana",
        correctAnswer: "Gurudwara, Guru Granth Sahib",
      },
      {
        question:
          "People of our country follow different religions. They call God by different names and have different ways of offering _______________. People mainly belong to any of the following four religions.",
        optionA: "Prayers",
        optionB: "Worship",
        optionC: "Festivals",
        correctAnswer: "Worship",
      },
      {
        question:
          "God is the ______________ power. We always pray to God for safety, happiness, and prosperity.",
        optionA: "Human",
        optionB: "Divine",
        optionC: "Religious",
        correctAnswer: "Divine",
      },
      {
        question:
          "People who follow Hinduism are called ________________. They go to the temple to pray. There are many idols of Gods and Goddesses in the temple.",
        optionA: "Christians",
        optionB: "Muslims",
        optionC: "Hindus",
        correctAnswer: "Hindus",
      },
      {
        question:
          "The Quran is the holy book of _______________. They pray in the mosque and offer Namaz five times a day.",
        optionA: "Christians",
        optionB: "Sikhs",
        optionC: "Muslims",
        correctAnswer: "Muslims",
      },
      {
        question:
          "Sikhs worship in _______________. They pray before their holy book Guru Granth Sahib. They sing hymns called Gurbani.",
        optionA: "Church",
        optionB: "Gurudwara",
        optionC: "Temple",
        correctAnswer: "Gurudwara",
      },
      {
        question:
          "People who follow Islam are called _______________. They pray in the mosque and offer Namaz five times a day. The _______________ is their holy book.",
        optionA: "Christians, Guru Granth Sahib",
        optionB: "Muslims, Quran",
        optionC: "Sikhs, Bible",
        correctAnswer: "Muslims, Quran",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "God is the supreme power.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "People of our country follow different religions.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Hindus worship in a church.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Muslims offer Namaz five times a day.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Christians pray to Buddha.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Sikhs have Guru Granth Sahib as their holy book.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "People mainly belong to one of the four mentioned religions.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "The Bible is the holy book of Hindus.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "All people call God by the same name.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "The Quran is the holy book of Muslims.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
