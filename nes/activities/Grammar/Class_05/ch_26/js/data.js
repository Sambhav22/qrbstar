export const chapter = "Chapter - 26: Letter Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the purpose of Ritika Gupta's letter to the Health Officer?",
          optionA: "Requesting a holiday",
          optionB: "Reporting an outbreak of cholera in the neighborhood",
          optionC: "Inquiring about medical facilities",
          correctAnswer: "Reporting an outbreak of cholera in the neighborhood",
        },
        {
          question:
            "In the letter from Rahul/Raina to his elder brother, where is the scholarship awarded for higher studies?",
          optionA: "Oxford University",
          optionB: "London School of Commerce in England",
          optionC: "Harvard University",
          correctAnswer: "London School of Commerce in England",
        },
        {
          question:
            "What amount does Ankit Jain enclose with his letter to the bank for opening a Savings Account?",
          optionA: "₹5,000",
          optionB: "₹2,000",
          optionC: "₹10,000",
          correctAnswer: "₹2,000",
        },
        {
          question:
            "In the letter to M/s Jain Book House, what is the book Ankit Jain is ordering?",
          optionA: "Basic Mathematics",
          optionB: "Advanced English Grammar",
          optionC: "History of Science",
          correctAnswer: "Advanced English Grammar",
        },
        {
          question:
            "What is missing in the blank space in the letter to M/s Jain Book House?",
          optionA: "Sender's Name",
          optionB: "Receiver's Address",
          optionC: "Book Title",
          correctAnswer: "Book Title",
        },
        {
          question:
            "In the letter wishing a friend good health, what is the friend urged to do to maintain good health?",
          optionA: "Go on a vacation",
          optionB: "Take precaution to keep good health",
          optionC: "Stop working",
          correctAnswer: "Take precaution to keep good health",
        },
        {
          question:
            "According to the letter, how long was the friend in bed due to illness?",
          optionA: "One week",
          optionB: "Two weeks",
          optionC: "Three weeks",
          correctAnswer: "Two weeks",
        },
        {
          question: "What is the common feature among all the letters?",
          optionA: "Request for a loan",
          optionB: "Informal tone",
          optionC: "Addressing a health-related issue",
          correctAnswer: "Addressing a health-related issue",
        },
        {
          question:
            "What date is mentioned in Ankit Jain's letter to the bank for opening a savings account?",
          optionA: "5th September, 20xx",
          optionB: "22nd October, 20xx",
          optionC: "Not mentioned",
          correctAnswer: "5th September, 20xx",
        },
        {
          question:
            "What is the closing salutation used in the letter to the Health Officer?",
          optionA: "Yours loving brother",
          optionB: "Yours sincerely",
          optionC: "Yours faithfully",
          correctAnswer: "Yours faithfully",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question: "Date: ________",
          options: ["22 October, 20xx", "5 September, 20xx", "________"],
          correctAnswer: "22 October, 20xx",
        },
        {
          question: "Date: ________",
          options: ["22 October, 20xx", "5 September, 20xx", "________"],
          correctAnswer: "5 September, 20xx",
        },
        {
          question: "Date: ________",
          options: ["22 October, 20xx", "5 September, 20xx", "________"],
          correctAnswer: "________",
        },
        {
          question: "Date: ________",
          options: ["22 October, 20xx", "5 September, 20xx", "________"],
          correctAnswer: "22 October, 20xx",
        },
        {
          question: "Your Address: ________",
          options: [
            "43 Jeevan Colony, Chandigarh",
            "94 Svasthya Vihar, Agra",
            "687, Safdarjung Qila, Rampur",
          ],
          correctAnswer: "94 Svasthya Vihar, Agra",
        },
        {
          question: "Date: ________",
          options: ["22 October, 20xx", "5 September, 20xx", "________"],
          correctAnswer: "5 September, 20xx",
        },
        {
          question: "Receiver's address: ________",
          options: [
            "Indian Bank, Chandigarh",
            "London School of Commerce in England",
            "________",
          ],
          correctAnswer: "Indian Bank, Chandigarh",
        },
        {
          question: "Book Title: ________",
          options: [
            "Basic Mathematics",
            "Advanced English Grammar",
            "History of Science",
          ],
          correctAnswer: "Advanced English Grammar",
        },
        {
          question: "Dear: ________",
          options: ["Rahul", "Raina", "________"],
          correctAnswer: "Rahul",
        },
        {
          question: "Yours: ________",
          options: ["loving brother", "sincerely", "________"],
          correctAnswer: "loving brother",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "Ritika Gupta is writing to the Health Officer about a recent outbreak of dengue in her neighbourhood.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Rahul/Raina's elder brother has been awarded a foreign scholarship for higher studies in England.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Ankit Jain is requesting the bank manager to close his existing savings account.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In the letter to M/s Jain Book House, the book Ankit Jain is ordering is named 'Basic English Grammar'.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Ankit Jain is enclosing a cheque for Rs. 2,000 with his letter to the bank manager.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The letter to M/s Jain Book House is missing the receiver's address.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The letter to the friend expressing good wishes after recovery suggests keeping good health for enjoying life's amenities.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The friend mentioned in the letter was ill and in bed for three weeks.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Rahul/Raina is asking the bank manager for a loan in the letter.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Ankit Jain is requesting the bank manager to open a fixed deposit account.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
