export const chapter = "Chapter -6: The Saintly Scientist";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What fascinated Albert Einstein as a young boy?",
          optionA: "A toy compass",
          optionB: "A toy train",
          optionC: "A toy airplane",
          correctAnswer: "A) A toy compass",
        },
        {
          question: "What musical instrument did Einstein enjoy playing?",
          optionA: "Piano",
          optionB: "Violin",
          optionC: "Guitar",
          correctAnswer: "B) Violin",
        },
        {
          question: "What did Einstein's father want him to study?",
          optionA: "Medicine",
          optionB: "Electrical engineering",
          optionC: "Law",
          correctAnswer: "B) Electrical engineering",
        },
        {
          question:
            "What was Einstein's initial job before becoming a famous scientist?",
          optionA: "Engineer",
          optionB: "Clerk",
          optionC: "Teacher",
          correctAnswer: "B) Clerk",
        },
        {
          question:
            "For what contribution did Einstein win the Nobel Prize in Physics?",
          optionA: "Theory of general relativity",
          optionB: "Theory of relativity",
          optionC: "Law of the photoelectric effect",
          correctAnswer: "C) Law of the photoelectric effect",
        },
        {
          question: "How did Einstein travel to the Queen of Belgium's palace?",
          optionA: "By car",
          optionB: "On foot",
          optionC: "By train",
          correctAnswer: "B) On foot",
        },
        {
          question: "What did Einstein believe the world needed most?",
          optionA: "Wealth",
          optionB: "Peace",
          optionC: "Power",
          correctAnswer: "B) Peace",
        },
        {
          question:
            "Which country's nationality did Einstein choose over German?",
          optionA: "French",
          optionB: "Swiss",
          optionC: "English",
          correctAnswer: "B) Swiss",
        },
        {
          question:
            "In which country did Einstein refuse to ride a man-pulled rickshaw?",
          optionA: "China",
          optionB: "India",
          optionC: "Japan",
          correctAnswer: "B) India",
        },
        {
          question: "How did Einstein view children?",
          optionA: "As a nuisance",
          optionB: "As the future hope of the world",
          optionC: "As irrelevant",
          correctAnswer: "B) As the future hope of the world",
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
            "Albert Einstein's father brought him a _________ as a small boy.",
          optionA: "compass",
          optionB: "toy train",
          optionC: "telescope",
          correctAnswer: "A) compass",
        },
        {
          question:
            "Albert Einstein was filled with excitement when he looked at the _________ turning towards north.",
          optionA: "magic needle",
          optionB: "clock",
          optionC: "thermometer",
          correctAnswer: "A) magic needle",
        },
        {
          question:
            "Einstein's father wanted him to study _________ engineering.",
          optionA: "mechanical",
          optionB: "electrical",
          optionC: "civil",
          correctAnswer: "B) electrical",
        },
        {
          question:
            "Einstein entered the Zurich Polytechnic Academy to prepare for a teaching position in _________ and physics.",
          optionA: "biology",
          optionB: "mathematics",
          optionC: "chemistry",
          correctAnswer: "B) mathematics",
        },
        {
          question:
            "Einstein's job before becoming a scientist was a _________.",
          optionA: "engineer",
          optionB: "clerk",
          optionC: "teacher",
          correctAnswer: "B) clerk",
        },
        {
          question:
            "Einstein won the Nobel Prize in Physics for his discovery of the law of the _________.",
          optionA: "gravitational force",
          optionB: "photoelectric effect",
          optionC: "electromagnetism",
          correctAnswer: "B) photoelectric effect",
        },
        {
          question: "Einstein was awarded the Nobel Prize in _________.",
          optionA: "Chemistry",
          optionB: "Physics",
          optionC: "Literature",
          correctAnswer: "B) Physics",
        },
        {
          question:
            "Einstein traveled to the Queen of Belgium's palace _________.",
          optionA: "by car",
          optionB: "on foot",
          optionC: "by train",
          correctAnswer: "B) on foot",
        },
        {
          question:
            "Einstein believed that the world needed _________ the most.",
          optionA: "wealth",
          optionB: "power",
          optionC: "peace",
          correctAnswer: "C) peace",
        },
        {
          question:
            "Einstein refused to ride a man-pulled rickshaw in _________.",
          optionA: "China",
          optionB: "India",
          optionC: "Japan",
          correctAnswer: "B) India",
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
            "Albert Einstein understood the principle of magnetism when he received the compass.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Albert Einstein's father wanted him to study electrical engineering.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Albert Einstein entered the Zurich Polytechnic Academy to become an electrical engineer.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Albert Einstein received a Nobel Prize for his contribution to physics and especially for his discovery of the law of the photoelectric effect.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Albert Einstein refused to support the German government during the First World War.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Albert Einstein chose German nationality over Swiss.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Albert Einstein rode a man-pulled rickshaw while he was in India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Albert Einstein lived his last years in a small house in Germany.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Albert Einstein died when he was sixty years old.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
   ],
  };
}

export var activityData;
