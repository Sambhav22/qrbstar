export const chapter = "Chapter - 27 :  Essay Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What does the cow give us?",
            options: ["Eggs", "Milk", "Wool"],
            answer: "Milk",
          },
          {
            question: "How many legs does the cow have?",
            options: ["Two", "Four", "Six"],
            answer: "Four",
          },
          {
            question: "Where does the speaker study?",
            options: ["Park", "School", "Library"],
            answer: "School",
          },
          {
            question: "What does the speaker's school have?",
            options: ["Swimming pool", "Big lawn", "Basketball court"],
            answer: "Big lawn",
          },
          {
            question: "What does the father do for a living?",
            options: ["Farmer", "Teacher", "Bank clerk"],
            answer: "Bank clerk",
          },
          {
            question: "How many ears does the cow have?",
            options: ["One", "Two", "Three"],
            answer: "Two",
          },
          {
            question: "In which place does the speaker study on Sundays?",
            options: ["Home", "Park", "Classroom"],
            answer: "Classroom",
          },
          {
            question: "What is the father's profession?",
            options: ["Doctor", "Engineer", "Bank clerk"],
            answer: "Bank clerk",
          },
          {
            question: "What day does the father play with the speaker?",
            options: ["Monday", "Saturday", "Sunday"],
            answer: "Sunday",
          },
          {
            question: "How many horns does the cow have?",
            options: ["None", "One", "Two"],
            answer: "Two",
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
            question: "This is a cow. It has ____ legs.",
            options: ["Two", "Four", "Six"],
            answer: "Four",
          },
          {
            question: "The cow has a long ____.",
            options: ["Tail", "Neck", "Horn"],
            answer: "Tail",
          },
          {
            question: "I study in a ____.",
            options: ["Park", "School", "Library"],
            answer: "School",
          },
          {
            question: "My school has many ____.",
            options: ["Windows", "Rooms", "Desks"],
            answer: "Rooms",
          },
          {
            question: "All rooms in my school are ____ and clean.",
            options: ["Messy", "Dirty", "Neat"],
            answer: "Neat",
          },
          {
            question: "My father's name is Mr. ____.",
            options: ["John", "Smith", "[Fill in the blank]"],
            answer: "[Fill in the blank]",
          },
          {
            question: "My father is a clerk in a ____.",
            options: ["School", "Bank", "Hospital"],
            answer: "Bank",
          },
          {
            question: "On Sunday, my father plays with ____.",
            options: ["Friends", "Me", "Teachers"],
            answer: "Me",
          },
          {
            question: "My father is tall and ____.",
            options: ["Short", "Handsome", "Funny"],
            answer: "Handsome",
          },
          {
            question: "I love my ____ very much.",
            options: ["Mother", "School", "Father"],
            answer: "Father",
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
            question: "The cow has six legs.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "All rooms in my school are messy and dirty.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The father is a doctor.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "My school has a swimming pool.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The cow gives us eggs.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "On Sundays, the father plays with friends.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "My father is short and funny.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The school has only one room.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The cow has one ear.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "I study in a park.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
