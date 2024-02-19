export const chapter = "Chapter - 23: Letters and Application  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the nature of letters and postcards to friends and family members?",
          optionA: "Formal",
          optionB: "Informal and personal",
          optionC: "Strictly business",
          correctAnswer: "b) Informal and personal",
        },
        {
          question:
            "How should letters to newspaper editors or businessmen be written?",
          optionA: "In a warm language with lots of sentiments",
          optionB: "Formally, sticking to the topic without many formalities",
          optionC: "Following strict business protocols",
          correctAnswer:
            "b) Formally, sticking to the topic without many formalities",
        },
        {
          question:
            "What is the topic of Ravish Tanwar's letter to the Editor of The Statesman?",
          optionA: "Request for booking a table at a hotel",
          optionB: "Spread of terrorism and its impact on society",
          optionC: "Opening a savings account at Punjab National Bank",
          correctAnswer: "b) Spread of terrorism and its impact on society",
        },
        {
          question:
            "What does Sachin Kaushik request from the Manager of Delux Hotel?",
          optionA: "Booking a table for dinner",
          optionB: "Arrangement for cake, balloons, and other necessary things",
          optionC: "Both A and B",
          correctAnswer: "c) Both A and B",
        },
        {
          question:
            "What reason does Vidhi Bansal give for requesting leave from school?",
          optionA: "Acute cough and cold",
          optionB: "Attending a family function",
          optionC: "Going on a vacation",
          correctAnswer: "a) Acute cough and cold",
        },
        {
          question:
            "What is the purpose of Shubh Singh's application to the Principal?",
          optionA: "Requesting leave of absence",
          optionB: "Congratulating the Principal on her new appointment",
          optionC:
            "Highlighting accidents near the school gate and the need for speed-brakers",
          correctAnswer:
            "c) Highlighting accidents near the school gate and the need for speed-brakers",
        },
        {
          question:
            "What does Kriti Sharma propose to organize in her application to the Principal?",
          optionA: "A birthday party for the Principal",
          optionB: "A cleanliness drive in the school premises",
          optionC: "A fundraising event for charity",
          correctAnswer: "b) A cleanliness drive in the school premises",
        },
        {
          question:
            "What is Avdhesh Dattre complaining about in his application to the Sanitary Inspector?",
          optionA:
            "Lack of cleanliness leading to breeding of mosquitoes and flies",
          optionB: "Noise pollution in the area",
          optionC: "Traffic congestion due to poor road conditions",
          correctAnswer:
            "a) Lack of cleanliness leading to breeding of mosquitoes and flies",
        },
        {
          question:
            "What does Khushi Chaudhary request from the Branch Manager of Punjab National Bank?",
          optionA: "Booking a fixed deposit",
          optionB: "Opening a Savings Account",
          optionC: "Applying for a loan",
          correctAnswer: "b) Opening a Savings Account",
        },
        {
          question: "In which city is the Exalted Public School located?",
          optionA: "Saharanpur",
          optionB: "New Delhi",
          optionC: "Patna",
          correctAnswer: "a) Saharanpur",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "Letters and postcards to friends and family members are characterized by their __________ nature.",
          options: ["Formal", "Informal", "Official"],
          correctAnswer: "Informal",
        },
        {
          question:
            "The language used in letters and postcards should be __________ to the occasion or purpose.",
          options: ["Casual", "Suitable", "Formal"],
          correctAnswer: "Suitable",
        },
        {
          question:
            "Letters to newspaper editors or businessmen should be written in a __________ language.",
          options: ["Warm", "Formal", "Casual"],
          correctAnswer: "Formal",
        },
        {
          question:
            "Ravish Tanwar's letter to the Editor of The Statesman discusses the __________ of terrorism.",
          options: ["Spread", "Elimination", "Impact"],
          correctAnswer: "Spread",
        },
        {
          question:
            "Sachin Kaushik requested the Manager of Delux Hotel to book a table for __________ guests.",
          options: ["10", "12", "15"],
          correctAnswer: "12",
        },
        {
          question:
            "Vidhi Bansal requested __________ days' leave from school due to illness.",
          options: ["1", "2", "3"],
          correctAnswer: "2",
        },
        {
          question:
            "Shubh Singh highlighted the need for construction of __________ near the school gate.",
          options: ["Speed-brakers", "Speed-breakers", "Speed-breaks"],
          correctAnswer: "Speed-breakers",
        },
        {
          question:
            "Kriti Sharma proposed to organize a cleanliness drive due to damage caused by the __________ storm.",
          options: ["Phailin", "Cyclone", "Monsoon"],
          correctAnswer: "Phailin",
        },
        {
          question:
            "Avdhesh Dattre complained about the lack of cleanliness leading to breeding of __________.",
          options: [
            "Mosquitoes and bees",
            "Mosquitoes and flies",
            "Flies and ants",
          ],
          correctAnswer: "Mosquitoes and flies",
        },
        {
          question:
            "Khushi Chaudhary requested the Branch Manager of Punjab National Bank to open a __________ Account.",
          options: ["Fixed Deposit", "Savings", "Current"],
          correctAnswer: "Savings",
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
            "Letters and postcards to friends and family members are typically formal in nature.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Letters to newspaper editors or businessmen should be written in a casual language.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Ravish Tanwar's letter to the Editor of The Statesman discusses the spread of terrorism.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Sachin Kaushik requested the Manager of Delux Hotel to book a table for 15 guests.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Vidhi Bansal requested 3 days' leave from school due to illness.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Shubh Singh highlighted the need for construction of speed-breakers near the school gate.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Kriti Sharma proposed to organize a cleanliness drive due to damage caused by the Monsoon storm.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Avdhesh Dattre complained about the lack of cleanliness leading to breeding of mosquitoes and bees.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Khushi Chaudhary requested the Branch Manager of Punjab National Bank to open a Fixed Deposit Account.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In the provided text, there is mention of letters being written to doctors or healthcare professionals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
