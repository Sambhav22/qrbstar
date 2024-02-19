export const chapter = "Chapter - 11: Work We Do";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the primary role of doctors?",
          optionA: "Teaching",
          optionB: "Treating Patients",
          optionC: "Law and Civil Services",
          correctAnswer: "B. Treating Patients",
        },
        {
          question:
            "Which profession is associated with teaching and shaping the future?",
          optionA: "Lawyers",
          optionB: "Doctors",
          optionC: "Teachers",
          correctAnswer: "C. Teachers",
        },
        {
          question:
            "Which job is considered as a respectable civil service in society?",
          optionA: "Newspaper Vendor",
          optionB: "Cobbler",
          optionC: "Police Officer",
          correctAnswer: "C. Police Officer",
        },
        {
          question:
            "Who are involved in mending and polishing shoes but often receive low income?",
          optionA: "Doctors",
          optionB: "Cobblers",
          optionC: "Greengrocers",
          correctAnswer: "B. Cobblers",
        },
        {
          question: "What is the primary job of a greengrocer?",
          optionA: "Selling newspapers",
          optionB: "Selling vegetables and fruits",
          optionC: "Sweeping streets",
          correctAnswer: "B. Selling vegetables and fruits",
        },
        {
          question:
            "Which profession involves bringing newspapers and selling them daily?",
          optionA: "Sweeper",
          optionB: "Newspaper Vendor",
          optionC: "Teacher",
          correctAnswer: "B. Newspaper Vendor",
        },
        {
          question:
            "Who is responsible for cleaning streets and drains but often receives low pay?",
          optionA: "Greengrocer",
          optionB: "Sweeper",
          optionC: "Pediatrician",
          correctAnswer: "B. Sweeper",
        },
        {
          question:
            "Which type of activities are considered as leisure time activities?",
          optionA: "Teaching",
          optionB: "Fun-loving activities",
          optionC: "Law and Civil Services",
          correctAnswer: "B. Fun-loving activities",
        },
        {
          question:
            "What are some children forced to do due to economic constraints in poor families?",
          optionA: "Child labor",
          optionB: "Teaching",
          optionC: "Civil Services",
          correctAnswer: "A. Child labor",
        },
        {
          question:
            "What steps have the government taken to address child labor in India?",
          optionA: "Encouraging child labor",
          optionB: "Penalizing employers of child labor",
          optionC: "Promoting child labor",
          correctAnswer: "B. Penalizing employers of child labor",
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
            "__________ treat patients and diagnose diseases, such as physicians, dentists, and surgeons.",
          optionA: "Lawyers",
          optionB: "Doctors",
          optionC: "Teachers",
          correctAnswer: "B. Doctors",
        },
        {
          question:
            "Teachers play a crucial role in shaping our future by imparting knowledge in various __________.",
          optionA: "Subjects",
          optionB: "Professions",
          optionC: "Hobbies",
          correctAnswer: "A. Subjects",
        },
        {
          question:
            "Law and Civil Services, including lawyers and police officers, are considered __________ jobs in society.",
          optionA: "Low-paying",
          optionB: "Respectable",
          optionC: "Temporary",
          correctAnswer: "B. Respectable",
        },
        {
          question: "Cobblers are individuals who mend and polish __________.",
          optionA: "Clothes",
          optionB: "Shoes",
          optionC: "Furniture",
          correctAnswer: "B. Shoes",
        },
        {
          question:
            "Greengrocers sell a variety of __________, including vegetables and fruits.",
          optionA: "Clothes",
          optionB: "Electronics",
          optionC: "Produce",
          correctAnswer: "C. Produce",
        },
        {
          question:
            "Newspaper vendors bring and sell newspapers, engaging in the business of __________.",
          optionA: "Food",
          optionB: "News",
          optionC: "Clothing",
          correctAnswer: "B. News",
        },
        {
          question:
            "Sweepers are responsible for cleaning streets and drains, contributing to the overall cleanliness of __________.",
          optionA: "Homes",
          optionB: "Public spaces",
          optionC: "Offices",
          correctAnswer: "B. Public spaces",
        },
        {
          question:
            "Leisure time activities are pursued to alleviate boredom and engage in __________.",
          optionA: "Work-related tasks",
          optionB: "Fun-loving activities",
          optionC: "Educational pursuits",
          correctAnswer: "B. Fun-loving activities",
        },
        {
          question:
            "Some children from poor families are forced to engage in __________, working in hotels, factories, or car garages.",
          optionA: "Child labor",
          optionB: "Educational activities",
          optionC: "Volunteer work",
          correctAnswer: "A. Child labor",
        },
        {
          question:
            "Government initiatives aim to forbid and penalize employers involved in the exploitation of __________ below the age of 18.",
          optionA: "Teachers",
          optionB: "Doctors",
          optionC: "Children",
          correctAnswer: "C. Children",
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
            "Doctors diagnose diseases and give treatment according to that.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Teachers work for the betterment of society and help in maintaining law and order.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Cobblers mend and polish shoes but receive high income in return.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Greengrocers are responsible for cleaning streets and drains.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Leisure time activities are pursued to alleviate boredom and engage in work-related tasks.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Child labor is forbidden, and employers engaging children below 18 are penalized under the law.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Sweepers are considered low-paid workers in society.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Newspaper vendors sell vegetables and fruits.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Law and Civil Services, such as police officers, are not respectable jobs in society.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Some working children are forced to do work in hotels, factories, and car garages.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
   };
}

export var activityData;
