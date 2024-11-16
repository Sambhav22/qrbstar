export const chapter = "Chapter - 24: Notice and Messages";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the topic of the essay competition in Class VII-A?",
          optionA: "a) Importance of Sports in School",
          optionB: "b) Menace of Walking and Talking on Mobile Phone",
          optionC: "c) Role of Music in Education",
          correctAnswer: "b) Menace of Walking and Talking on Mobile Phone",
        },
        {
          question:
            "When is the essay competition scheduled to take place in Class VII-A?",
          optionA: "a) 12 December, 20xx",
          optionB: "b) 17 June, 20xx",
          optionC: "c) 27 April, 20xx",
          correctAnswer: "c) 27 April, 20xx",
        },
        {
          question:
            "Who is the monitor of Class VII-A and has signed the notice for the essay competition?",
          optionA: "a) Arun Gulati",
          optionB: "b) Purvi",
          optionC: "c) Satyam",
          correctAnswer: "b) Purvi",
        },
        {
          question:
            "What is the suggested date for the sports meet in athletics at Golden Era Public School?",
          optionA: "a) 12 December, 20xx",
          optionB: "b) 24 December, 20xx",
          optionC: "c) 17 June, 20xx",
          correctAnswer: "b) 24 December, 20xx",
        },
        {
          question: "Who is the sports secretary at Golden Era Public School?",
          optionA: "a) Arun Gulati",
          optionB: "b) Purvi",
          optionC: "c) Satyam",
          correctAnswer: "a) Arun Gulati",
        },
        {
          question:
            "What message does Anvi convey to her brother Abhay in the telephonic dialogue?",
          optionA: "a) Papa is coming home early.",
          optionB: "b) Abhay needs to buy groceries.",
          optionC:
            "c) Collect the packet of envelopes from Jain Uncle's house.",
          correctAnswer:
            "c) Collect the packet of envelopes from Jain Uncle's house.",
        },
        {
          question:
            "What is Anvi's reason for writing the message to Abhay in the dialogue?",
          optionA: "a) She needs him to pick her up from music class.",
          optionB: "b) She wants him to bring her lunch.",
          optionC: "c) She is going to music class and won't be home.",
          correctAnswer: "c) She is going to music class and won't be home.",
        },
        {
          question:
            "What is the special attraction mentioned for the class excursion to Delhi in Satyam's message?",
          optionA: "a) Science Exhibition",
          optionB: "b) Zoo and Book Fair in Pragati Maidan",
          optionC: "c) Historical Monuments Tour",
          correctAnswer: "b) Zoo and Book Fair in Pragati Maidan",
        },
        {
          question:
            "What is the amount mentioned for the charges of the excursion in Satyam's message?",
          optionA: "a) Rs. 100",
          optionB: "b) Rs. 150",
          optionC: "c) Rs. 200",
          correctAnswer: "b) Rs. 150",
        },
        {
          question:
            "Where does Satyam suggest Karan should bring the money for the excursion?",
          optionA: "a) To Karan's house",
          optionB: "b) To the school",
          optionC: "c) To the zoo",
          correctAnswer: "b) To the school",
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
            "On the next Monday, __________, there will be held an essay competition in the class during the __________ period, on the topic 'Menace of Walking and Talking on Mobile Phone'.",
          options: [
            "a) 20 April, 20xx, second",
            "b) 27 April, 20xx, first",
            "c) 24 December, 20xx, second",
          ],
          correctAnswer: "b) 27 April, 20xx, second",
        },
        {
          question:
            "It is proposed to hold a sports meet in all athletic events on the occasion of the school annual day on __________. All those students interested in taking part can submit their names with the __________ so that necessary arrangements can be made for practice.",
          options: [
            "a) 12 December, 20xx, monitor",
            "b) 24 December, 20xx, undersigned",
            "c) 20 April, 20xx, principal",
          ],
          correctAnswer: "b) 24 December, 20xx, undersigned",
        },
        {
          question: "I am going to music class and will be back by __________.",
          options: ["a) 5:30 pm", "b) 6:30 pm", "c) 7:00 pm"],
          correctAnswer: "b) 6:30 pm",
        },
        {
          question:
            "Our class is going on an excursion to Delhi next Monday; the special attraction will be the zoo and the book fair in Pragati Maidan. The charges for it are Rs. __________ including traveling and snacks.",
          options: ["a) 100", "b) 150", "c) 200"],
          correctAnswer: "b) 150",
        },
        {
          question: "You will have to carry your lunch __________.",
          options: ["a) from home", "b) yourself", "c) together"],
          correctAnswer: "b) yourself",
        },
        {
          question: "The essay competition's topic is '__________'.",
          options: [
            "a) Importance of Music in Education",
            "b) Menace of Walking and Talking on Mobile Phone",
            "c) Benefits of Sports in School",
          ],
          correctAnswer: "b) Menace of Walking and Talking on Mobile Phone",
        },
        {
          question: "The sports meet is scheduled for __________.",
          options: [
            "a) 20 April, 20xx",
            "b) 24 December, 20xx",
            "c) 12 December, 20xx",
          ],
          correctAnswer: "b) 24 December, 20xx",
        },
        {
          question:
            "Anvi's father wants Abhay to bring a packet of envelopes from __________.",
          options: ["a) Anvi's house", "b) Jain Uncle's house", "c) Delhi"],
          correctAnswer: "b) Jain Uncle's house",
        },
        {
          question: "Satyam wrote the message to Karan at __________.",
          options: ["a) 5:00 pm", "b) 4:00 pm", "c) 6:30 pm"],
          correctAnswer: "b) 4:00 pm",
        },
        {
          question:
            "If interested in the excursion, students must carry the money to school __________.",
          options: [
            "a) on the day of the excursion",
            "b) tomorrow",
            "c) next Monday",
          ],
          correctAnswer: "b) tomorrow",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3)
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "The essay competition in Class VII-A is scheduled for 27 April, 20xx during the second period.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The sports meet in athletics at Golden Era Public School is proposed for 12 December, 20xx.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Anvi decides to write a message for Abhay because she is going to her dance class.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Satyam's class excursion to Delhi includes a visit to a Science Exhibition.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In the telephonic dialogue, Abhay's father asks him to collect a packet of envelopes from Jain Uncle's house.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The sports meet at Golden Era Public School is for all academic events on the annual day.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Anvi's message to Abhay mentions that she will be back by 5:30 pm.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Karan's house is locked when Satyam goes to convey the excursion message.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "Not specified",
        },
        {
          question:
            "The essay competition topic is 'Benefits of Sports in School'.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Satyam suggests that interested students must carry the money for the excursion to the zoo and book fair in Pragati Maidan.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
      ],
  };

export var activityData;
