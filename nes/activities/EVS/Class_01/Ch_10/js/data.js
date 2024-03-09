export const chapter = "Chapter - 10: Clothes We Wear";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is Diwali primarily known as?",
          optionA: "Festival of Colors",
          optionB: "Festival of Lights",
          optionC: "Festival of Independence",
          correctAnswer: "Festival of Lights",
        },
        {
          question: "Which festival is celebrated after Ramadan?",
          optionA: "Holi",
          optionB: "Gurpurao",
          optionC: "Eid",
          correctAnswer: "Eid",
        },
        {
          question:
            "What is celebrated on 15th August as mentioned in the text?",
          optionA: "Christmas",
          optionB: "Independence Day",
          optionC: "Republic Day",
          correctAnswer: "Independence Day",
        },
        {
          question: "Which festival marks the birthday of the Sikh Gurus?",
          optionA: "Gurpurao",
          optionB: "Mahavir Jayanti",
          optionC: "Holi",
          correctAnswer: "Gurpurao",
        },
        {
          question: "When is Republic Day celebrated every year?",
          optionA: "2nd October",
          optionB: "15th August",
          optionC: "26th January",
          correctAnswer: "26th January",
        },
        {
          question: "What is Mahavir Jayanti celebrating?",
          optionA: "Lord Mahavir's victory",
          optionB: "Lord Mahavir's birthday",
          optionC: "Lord Mahavir's teachings",
          correctAnswer: "Lord Mahavir's birthday",
        },
        {
          question:
            "Which festival is associated with the birthday of Jesus Christ?",
          optionA: "Diwali",
          optionB: "Christmas",
          optionC: "Holi",
          correctAnswer: "Christmas",
        },
        {
          question: "Which festival is described as the festival of colors?",
          optionA: "Diwali",
          optionB: "Holi",
          optionC: "Gurpurao",
          correctAnswer: "Holi",
        },
        {
          question: "What is celebrated on 2nd October every year?",
          optionA: "Independence Day",
          optionB: "Christmas",
          optionC: "Gandhi Jayanti",
          correctAnswer: "Gandhi Jayanti",
        },
        {
          question:
            "What is celebrated as the national festival on the 26th of January?",
          optionA: "Independence Day",
          optionB: "Christmas",
          optionC: "Republic Day",
          correctAnswer: "Republic Day",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "Festivals are the days of great celebration. People celebrate different festivals round the year. Some of them are Diwali (festival of _______________).",
          optionA: "Music",
          optionB: "Lights",
          optionC: "Colors",
          correctAnswer: "Lights",
        },
        {
          question: "Holi is the festival of _______________.",
          optionA: "Lights",
          optionB: "Colors",
          optionC: "Music",
          correctAnswer: "Colors",
        },
        {
          question: "Eid is celebrated after _______________.",
          optionA: "Diwali",
          optionB: "Holi",
          optionC: "Ramadan",
          correctAnswer: "Ramadan",
        },
        {
          question: "Gurpurao is the birthday of the _______________.",
          optionA: "Hindu Gods",
          optionB: "Sikh Gurus",
          optionC: "Buddhist Monks",
          correctAnswer: "Sikh Gurus",
        },
        {
          question: "Mahavir Jayanti is the birthday of Lord _______________.",
          optionA: "Krishna",
          optionB: "Mahavir",
          optionC: "Ganesh",
          correctAnswer: "Mahavir",
        },
        {
          question: "Christmas is the birthday of _______________.",
          optionA: "Santa Claus",
          optionB: "Jesus Christ",
          optionC: "Mother Mary",
          correctAnswer: "Jesus Christ",
        },
        {
          question:
            "Independence Day is celebrated on the _______________ of August.",
          optionA: "1st",
          optionB: "15th",
          optionC: "30th",
          correctAnswer: "15th",
        },
        {
          question:
            "Republic Day is celebrated on _______________ January every year.",
          optionA: "2nd",
          optionB: "26th",
          optionC: "30th",
          correctAnswer: "26th",
        },
        {
          question:
            "Gandhi Jayanti is celebrated on the _______________ of October every year.",
          optionA: "1st",
          optionB: "2nd",
          optionC: "10th",
          correctAnswer: "2nd",
        },
        {
          question: "Our country got freedom on _______________.",
          optionA: "15th August",
          optionB: "26th January",
          optionC: "2nd October",
          correctAnswer: "15th August",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Festivals are occasions of mourning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Holi is celebrated during the winter season.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Eid is celebrated before the month of Ramadan.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Gurpurao is the birthday celebration of Sikh Gurus.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Mahavir Jayanti commemorates the birthday of Lord Krishna.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Christmas marks the birthday of Santa Claus.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Independence Day is celebrated on the 15th of August.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Republic Day is celebrated on the 2nd of October.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Gandhi Jayanti is celebrated on the 26th of January.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Our country got freedom on the 26th of January.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
