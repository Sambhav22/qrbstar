export const chapter = "Chapter - 31 : Unseen Comprehension ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "On what occasion did the narrator start attending the new school?",
            options: ["Summer vacation", "Family function", "Father's posting"],
            answer: "Father's posting",
          },
          {
            question: "How did the narrator feel on the first day of school?",
            options: ["Excited", "Scared", "Confident"],
            answer: "Scared",
          },
          {
            question: "How did the narrator feel about the school building?",
            options: [
              "Small and unimpressive",
              "Big and beautiful",
              "Old and worn-out",
            ],
            answer: "Big and beautiful",
          },
          {
            question: "Where did the narrator sit in the classroom?",
            options: ["Last row", "Second row", "Front row"],
            answer: "Front row",
          },
          {
            question:
              "What did the narrator ask the peon when they arrived at the school?",
            options: [
              "Where the playground was",
              "Where the library was",
              "Where the class second was",
            ],
            answer: "Where the class second was",
          },
          {
            question:
              "How did the students react to the narrator on the first day?",
            options: [
              "Ignored",
              "Welcomed and befriended",
              "Teased and bullied",
            ],
            answer: "Welcomed and befriended",
          },
          {
            question:
              "What is the theme of the poem mentioned at the end of the passage?",
            options: ["Nature", "Friendship", "Kindness and love"],
            answer: "Kindness and love",
          },
          {
            question:
              "According to the poem, what do little drops of water and little grains of sand make?",
            options: [
              "A desert",
              "A mountain",
              "The mighty ocean and the pleasant land",
            ],
            answer: "The mighty ocean and the pleasant land",
          },
          {
            question:
              "What comparison does the poem make between the earth and heaven?",
            options: [
              "They are identical",
              "Earth is like heaven",
              "Heaven is like earth",
            ],
            answer: "Earth is like heaven",
          },
          {
            question:
              "What is the overall mood of the narrator on the first day at school?",
            options: ["Sad", "Excited", "Pleased"],
            answer: "Pleased",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question: "My father came to this town on ________________.",
            options: ["Vacation", "Business trip", "Posting"],
            answer: "Posting",
          },
          {
            question: "It was my ________________ at school.",
            options: ["Second day", "Third day", "First day"],
            answer: "First day",
          },
          {
            question: "The school building was ________________.",
            options: ["Small and old", "Big and beautiful", "Crumbling"],
            answer: "Big and beautiful",
          },
          {
            question:
              "As I approached the building, I turned and saw the ________________.",
            options: ["Playground", "Library", "School building"],
            answer: "School building",
          },
          {
            question: "I asked a ________________ where the class second was.",
            options: ["Teacher", "Peon", "Student"],
            answer: "Peon",
          },
          {
            question: "The peon pointed to ________________.",
            options: ["The sky", "One side", "The ground"],
            answer: "One side",
          },
          {
            question: "I sat down at a desk in ________________.",
            options: ["The last row", "The second row", "The first row"],
            answer: "The first row",
          },
          {
            question: "Many students ________________.",
            options: ["Ignored me", "Welcomed me", "Teased me"],
            answer: "Welcomed me",
          },
          {
            question: "It was a fine ________________ at school.",
            options: ["Evening", "Morning", "Day"],
            answer: "Day",
          },
          {
            question:
              "Little deeds of kindness, little words of love, make this earth an ________________.",
            options: ["Oasis", "Eden", "Inferno"],
            answer: "Eden",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "The school building was small and unimpressive.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The peon pointed to the sky when asked about the class second.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The narrator sat in the last row in the classroom.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The students teased and bullied the narrator on the first day.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The poem at the end of the passage compares little deeds of kindness to an inferno.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The narrator's father came to the town for a vacation.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The peon directed the narrator to the library when asked about the class second.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The students welcomed and befriended the narrator on the first day.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "The overall mood of the narrator on the first day was sad.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The poem at the end of the passage compares little drops of water to a desert.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
