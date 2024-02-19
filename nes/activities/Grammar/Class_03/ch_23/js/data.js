export const chapter = "Chapter - 23: Application  Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "Why is Anjali/Rahul writing the application to the principal?",
          optionA: "Going on a vacation",
          optionB: "Seeking leave of absence due to illness",
          optionC: "Requesting permission for an event",
          correctAnswer: "Seeking leave of absence due to illness",
        },
        {
          question:
            "What symptoms does Anjali/Rahul mention in the application?",
          optionA: "Headache, cold, and fever",
          optionB: "Back pain and sore throat",
          optionC: "Stomachache and fatigue",
          correctAnswer: "Headache, cold, and fever",
        },
        {
          question: "Who has advised Anjali/Rahul to take rest for three days?",
          optionA: "School principal",
          optionB: "Class teacher",
          optionC: "Doctor",
          correctAnswer: "Doctor",
        },
        {
          question:
            "How many days of leave is Anjali/Rahul requesting in the application?",
          optionA: "One day",
          optionB: "Two days",
          optionC: "Three days",
          correctAnswer: "Three days",
        },
        {
          question:
            "Which word can be used to describe Anjali/Rahul's tone in the application?",
          optionA: "Angry",
          optionB: "Polite",
          optionC: "Rude",
          correctAnswer: "Polite",
        },
        {
          question: "What is the closing salutation used in the application?",
          optionA: "Yours truly",
          optionB: "Sincerely",
          optionC: "Yours faithfully",
          correctAnswer: "Yours faithfully",
        },
        {
          question:
            "In the application, what information is missing in the date field?",
          optionA: "Date of birth",
          optionB: "Date of joining the school",
          optionC: "Actual date of writing the application",
          correctAnswer: "Actual date of writing the application",
        },
        {
          question:
            "What does Anjali/Rahul mention as the reason for not attending school?",
          optionA: "Family function",
          optionB: "Personal vacation",
          optionC: "Illness",
          correctAnswer: "Illness",
        },
        {
          question:
            "Which section is left blank in the application, requiring Anjali/Rahul to fill it in?",
          optionA: "Date of joining the school",
          optionB: "Roll No.",
          optionC: "Class",
          correctAnswer: "Roll No.",
        },
        {
          question: "What is the main theme of the application?",
          optionA: "Request for extra classes",
          optionB: "Request for leave due to illness",
          optionC: "Complaint about school facilities",
          correctAnswer: "Request for leave due to illness",
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
          question:
            "I, Anjali/Rahul, am writing an application to the principal for leave of absence for ____________ days due to illness.",
          options: ["One", "Two", "Three"],
          correctAnswer: "Three",
        },
        {
          question:
            'The application begins with addressing the principal as "__________."',
          options: ["Sir", "Madam", "Mr. Principal"],
          correctAnswer: "Madam",
        },
        {
          question:
            "The reason for seeking leave is a severe headache, cold, and __________.",
          options: ["Cough", "Fatigue", "Fever"],
          correctAnswer: "Fever",
        },
        {
          question:
            "The doctor has advised Anjali/Rahul to have rest for ____________ days.",
          options: ["One", "Two", "Three"],
          correctAnswer: "Three",
        },
        {
          question:
            "Anjali/Rahul expresses inability to attend school due to ____________.",
          options: ["Family function", "Illness", "Personal vacation"],
          correctAnswer: "Illness",
        },
        {
          question:
            "The application requests leave from ____________ to ____________.",
          options: [
            "Monday to Wednesday",
            "Tuesday to Thursday",
            "Wednesday to Friday",
          ],
          correctAnswer: "Tuesday to Thursday",
        },
        {
          question:
            "Anjali/Rahul mentions being grateful for the granted ____________ days of leave.",
          options: ["One", "Two", "Three"],
          correctAnswer: "Three",
        },
        {
          question:
            'The closing salutation in the application is "Yours ____________."',
          options: ["Sincerely", "Truly", "Faithfully"],
          correctAnswer: "Faithfully",
        },
        {
          question:
            "Anjali/Rahul includes the information about their ____________ and Roll No. in the application.",
          options: ["Grade", "Class", "Section"],
          correctAnswer: "Class",
        },
        {
          question:
            "The date field in the application is left blank, requiring Anjali/Rahul to fill in the ____________ date.",
          options: ["Birth", "Admission", "Actual"],
          correctAnswer: "Actual",
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
            "Anjali/Rahul is seeking leave for two days due to illness.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The doctor has advised Anjali/Rahul to rest for four days.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Anjali/Rahul mentions suffering from a severe headache, cold, and fever.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The application requests leave from Thursday to Saturday.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The closing salutation in the application is 'Yours Sincerely.'",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Anjali/Rahul expresses gratitude for being granted four days of leave.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The doctor advised Anjali/Rahul to attend school despite feeling unwell.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Anjali/Rahul mentions being unable to attend school due to a family function.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The application includes the information about Anjali/Rahul's grade and roll number.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The date field in the application is left blank, requiring Anjali/Rahul to fill in the correct date.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
