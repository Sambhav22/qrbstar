export const chapter = "Chapter - 30 : Story Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What made the lion hide in the cave?",
            options: [
              "He was tired",
              "He wanted to play a prank",
              "He was hungry",
            ],
            answer: "He was hungry",
          },
          {
            question: "Whose cave did the lion enter?",
            options: ["Bear", "Fox", "Tiger"],
            answer: "Fox",
          },
          {
            question: "How did the fox discover the lion in the cave?",
            options: [
              "He saw the lion",
              "He heard the lion",
              "He smelled the lion",
            ],
            answer: "He heard the lion",
          },
          {
            question:
              "How did the lion respond when the fox asked if he could enter the cave?",
            options: ["Stay away!", "Come in!", "I'm not here!"],
            answer: "Come in!",
          },
          {
            question:
              "What did the lion think when the fox called out to the cave?",
            options: [
              "The cave talked to the fox",
              "The fox was lost",
              "The lion misunderstood",
            ],
            answer: "The cave talked to the fox",
          },
          {
            question: "Why did the fox run away from the cave?",
            options: [
              "He was scared of the lion",
              "He remembered he left something behind",
              "He found a better hiding spot",
            ],
            answer: "He was scared of the lion",
          },
          {
            question: "What did the fox say when he approached the cave?",
            options: ["I am lost.", "Can I enter you?", "Stay away, danger!"],
            answer: "Can I enter you?",
          },
          {
            question: "What did the lion think the fox said to the cave?",
            options: ["Can I enter you?", "Stay away, danger!", "I am lost."],
            answer: "Can I enter you?",
          },
          {
            question: "Why did the lion reply to the fox's question?",
            options: [
              "He wanted to scare the fox",
              "He thought the cave talked",
              "He wanted a new friend",
            ],
            answer: "He thought the cave talked",
          },
          {
            question: "What was the lion's motive for hiding in the cave?",
            options: [
              "To sleep",
              "To find a friend",
              "To catch an animal for food",
            ],
            answer: "To catch an animal for food",
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
            question:
              "The lion hid himself in the cave because he was ___________.",
            options: ["Tired", "Hungry", "Scared"],
            answer: "Hungry",
          },
          {
            question: "The cave belonged to a ___________.",
            options: ["Tiger", "Fox", "Bear"],
            answer: "Fox",
          },
          {
            question:
              "The fox wanted to confirm if the lion was in the cave by checking the ___________.",
            options: [
              "Color of the cave",
              "Footprints of the lion",
              "Temperature inside the cave",
            ],
            answer: "Footprints of the lion",
          },
          {
            question:
              "The lion thought the cave talked when the fox called out, 'O cave, I am back. Can I enter you?' The lion replied, 'O fox, you are welcome to the ___________.",
            options: ["Jungle", "Den", "Cave"],
            answer: "Cave",
          },
          {
            question:
              "The fox ran away when he discovered there was a ___________ in the cave.",
            options: ["Tiger", "Bear", "Lion"],
            answer: "Lion",
          },
          {
            question:
              "The lion thought the cave talked to the fox, so he replied, 'O fox, you are welcome to the ___________.",
            options: ["Hideout", "Den", "Cave"],
            answer: "Cave",
          },
          {
            question:
              "The fox called out to the cave, asking, 'Can I ___________ you?'",
            options: ["Hunt", "Enter", "Explore"],
            answer: "Enter",
          },
          {
            question:
              "The lion thought the cave responded to the fox, saying, 'O fox, you are welcome to the ___________.",
            options: ["Jungle", "Cave", "Den"],
            answer: "Cave",
          },
          {
            question:
              "The fox ran away because he was ___________ of the lion in the cave.",
            options: ["Curious", "Scared", "Excited"],
            answer: "Scared",
          },
          {
            question:
              "The lion's motive for hiding in the cave was to catch an ___________ for food.",
            options: ["Insect", "Animal", "Fish"],
            answer: "Animal",
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
            question: "The lion hid in the cave because he was tired.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The cave belonged to a tiger.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The fox discovered the lion in the cave by seeing its footprints.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "The lion thought the cave talked to the fox.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "The fox ran away because it found a better hiding spot.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The lion believed the cave responded to the fox.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "The fox wanted to hunt inside the cave.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The lion thought the cave said, 'Stay away, danger!'",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The lion wanted to sleep in the cave.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "The fox was excited to discover the lion in the cave.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
