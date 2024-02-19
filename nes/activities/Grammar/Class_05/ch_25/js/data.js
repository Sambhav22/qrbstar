export const chapter = "Chapter - 25: Application Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the reason for Vinay's leave application?",
          optionA: "Religious celebration",
          optionB: "Medical emergency",
          optionC: "School event",
          correctAnswer: "Religious celebration",
        },
        {
          question:
            "In the second application, what event does the student propose to organize?",
          optionA: "Science fair",
          optionB: "Cleanliness drive",
          optionC: "Sports day",
          correctAnswer: "Cleanliness drive",
        },
        {
          question:
            "What does the student claim in the third application to the principal?",
          optionA: "Winning a cricket match",
          optionB: "Scoring 54 runs in a cricket match",
          optionC: "Being awarded the Best Batsman trophy",
          correctAnswer: "Scoring 54 runs in a cricket match",
        },
        {
          question:
            "Which historical place does Anuj suggest for the school tour?",
          optionA: "Mumbai",
          optionB: "Delhi",
          optionC: "Agra",
          correctAnswer: "Mumbai",
        },
        {
          question: "What is the reason given by Vinay for his leave request?",
          optionA: "Family vacation",
          optionB: "Urgent domestic need",
          optionC: "School event",
          correctAnswer: "Urgent domestic need",
        },
        {
          question:
            "What activity does the student propose for the school premises in the second application?",
          optionA: "Cricket match",
          optionB: "Cleanliness drive",
          optionC: "Debate competition",
          correctAnswer: "Cleanliness drive",
        },
        {
          question:
            "What sport does the student want to participate in according to the third application?",
          optionA: "Football",
          optionB: "Cricket",
          optionC: "Basketball",
          correctAnswer: "Cricket",
        },
        {
          question:
            "What does Anuj request in his application to the principal?",
          optionA: "Permission for a tour",
          optionB: "Permission for a cricket match",
          optionC: "Permission for a dance competition",
          correctAnswer: "Permission for a tour",
        },
        {
          question: "What is the occasion mentioned in Vinay's application?",
          optionA: "Religious celebration",
          optionB: "School trip",
          optionC: "Family reunion",
          correctAnswer: "Religious celebration",
        },
        {
          question:
            "Which subject does the student propose to improve the school premises for?",
          optionA: "Mathematics",
          optionB: "Science",
          optionC: "General cleanliness",
          correctAnswer: "General cleanliness",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "Date: ________",
          options: [
            "Monday, February 10",
            "Friday, February 7",
            "Saturday, February 8",
          ],
          correctAnswer: "Saturday, February 8",
        },
        {
          question: "Date: ________",
          options: [
            "Wednesday, October 15",
            "Monday, September 30",
            "Friday, November 1",
          ],
          correctAnswer: "Monday, September 30",
        },
        {
          question: "Date: ________",
          options: [
            "Monday, April 21",
            "Wednesday, June 5",
            "Thursday, September 12",
          ],
          correctAnswer: "Thursday, September 12",
        },
        {
          question: "Date: ________",
          options: [
            "Monday, March 10",
            "Friday, June 14",
            "Wednesday, August 28",
          ],
          correctAnswer: "Friday, June 14",
        },
        {
          question: "Leave Date: ________",
          options: [
            "Monday, February 10",
            "Friday, February 7",
            "Saturday, February 8",
          ],
          correctAnswer: "Monday, February 10",
        },
        {
          question: "Leave Date: ________",
          options: [
            "Wednesday, October 15",
            "Monday, September 30",
            "Friday, November 1",
          ],
          correctAnswer: "Wednesday, October 15",
        },
        {
          question: "Class: ________",
          options: ["Class: IX", "Class: X", "Class: XI"],
          correctAnswer: "Class: IX",
        },
        {
          question: "Destination: ________",
          options: ["Jaipur", "Mumbai", "Agra"],
          correctAnswer: "Mumbai",
        },
        {
          question: "Student's Name: ________",
          options: ["Vinay", "Anuj", "Farhan"],
          correctAnswer: "Vinay",
        },
        {
          question: "Student's Name: ________",
          options: ["Farhan", "Niti", "Anuj"],
          correctAnswer: "Anuj",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "The religious celebration at Vinay's house is scheduled for 25th December.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Vinay requests leave for two days due to the religious celebration.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The proposed event at the school premises aims to improve academic performance.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The student claims to have scored 60 runs in the Inter-School Final Championship.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Anuj recommends Delhi as the destination for the school tour.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Vinay's leave application is due to an urgent family need.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The proposed event is expected to last for two hours.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In the third application, the student requests inclusion in the School Football Team.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "According to Anuj, Mumbai is only an important historical place.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The proposed cleanliness drive aims to improve the image of the city.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
