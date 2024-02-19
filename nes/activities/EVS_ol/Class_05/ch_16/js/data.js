export const chapter = "Chapter - 16: Adventure and Exploration";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          " _________are always fascinated by the things that they see in the sky",
        optionA: "humans",
        optionB: "animals",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question:
          "__________  are small bodies of iron and rock floating in space",
        optionA: "meteors",
        optionB: "asteroids",
        optionC: "meteorites",

        correctAnswer: "",
      },

      {
        question:
          " _________are balls of ice and gas that orbit around stars. ",
        optionA: "comets",
        optionB: "meteors",
        optionC: "asteroids",

        correctAnswer: "",
      },

      {
        question: "There are___________ planets in our solar system. ",
        optionA: " eight",
        optionB: "nine",
        optionC: "ten",

        correctAnswer: "",
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
          "All the objects that we see in the sky are called ______ bodies",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "When a meteoroid enters in Earth's atmosphere, it is called a _____ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "A ____________ is also called an EVA.  ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: " ________was the first person, who go on a spacewalk. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      {
        question:
          " The sport or activity of climbing mountains is called _____  ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Yuri Gagarin did not go into space.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Rakesh Sharma was the first Indian to go into space in 1984.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Mountaineering is also a fun for travellers",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Bachendri Pal went into space in 1984",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
      {
        question: "Mount Everest is the highest peak in the world.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
