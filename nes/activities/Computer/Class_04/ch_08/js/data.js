export const chapter = "Chapter - 8: Blocks in Scratch";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the purpose of the Code Tab in Scratch?",
          optionA: "To add sound and music to sprites",
          optionB: "To control the movement of sprites",
          optionC: "To change the appearance of sprites",
          correctAnswer: "To control the movement of sprites",
        },
        {
          question: "Which category do the Motion Blocks belong to in Scratch?",
          optionA: "Yellow",
          optionB: "Purple",
          optionC: "Blue",
          correctAnswer: "Blue",
        },
        {
          question: "What do the Looks Blocks in Scratch primarily control?",
          optionA: "Sprite movement",
          optionB: "Sprite appearance",
          optionC: "Sprite sound",
          correctAnswer: "Sprite appearance",
        },
        {
          question:
            "Which block category includes blocks for starting a script based on events?",
          optionA: "Sound Blocks",
          optionB: "Control Blocks",
          optionC: "Events Blocks",
          correctAnswer: "Events Blocks",
        },
        {
          question:
            "Which block shape in Scratch always comes at the top of a script and starts it?",
          optionA: "Reporter Block",
          optionB: "Hat Block",
          optionC: "Stack Block",
          correctAnswer: "Hat Block",
        },
        {
          question: "How can you make a sprite move backward in Scratch?",
          optionA: "Use 'turn' block",
          optionB: "Add a positive number of steps to 'move' block",
          optionC: "Add a negative number of steps to 'move' block",
          correctAnswer: "Add a negative number of steps to 'move' block",
        },
        {
          question:
            "What is the purpose of the 'pauses' block in Control Blocks?",
          optionA: "To avoid overlapping speech bubbles",
          optionB: "To repeat a set of blocks for a given time",
          optionC: "To stop all added sound on all sprites",
          correctAnswer: "To avoid overlapping speech bubbles",
        },
        {
          question:
            "Which block shape in Scratch is used for conditions like True or False?",
          optionA: "Boolean Block",
          optionB: "C Block",
          optionC: "Reporter Block",
          correctAnswer: "Boolean Block",
        },
        {
          question: "What does the 'Green Flag' button do in Scratch?",
          optionA: "Stops all added sound on all sprites",
          optionB: "Activates a script when the go button is clicked",
          optionC: "Pauses the script for a given time",
          correctAnswer: "Activates a script when the go button is clicked",
        },
        {
          question:
            "In the provided project, what text is added to the Looks block for the Cat sprite?",
          optionA: "'Hey Fox, How are you?'",
          optionB: "'I am good. Cat !'",
          optionC: "'Let's move and talk'",
          correctAnswer: "'Hey Fox, How are you?'",
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
            "The Code Tab in Scratch consists of different sections that allow you to code scripts to control __________.",
          optionA: "Sound and music",
          optionB: "Sprites",
          optionC: "Appearance",
          correctAnswer: "Sprites",
        },
        {
          question:
            "The Block palette in Scratch consists of nine block categories. Blocks are like commands used to create a program. Each block connects with others to perform a __________.",
          optionA: "Movement",
          optionB: "Task",
          optionC: "Sound effect",
          correctAnswer: "Task",
        },
        {
          question:
            "Motion Blocks in Scratch are used to control the movement of a sprite. They are __________ in color.",
          optionA: "Yellow",
          optionB: "Purple",
          optionC: "Blue",
          correctAnswer: "Blue",
        },
        {
          question:
            "Looks Blocks in Scratch are used to add thought or speech bubble to the sprite. They are __________ in color.",
          optionA: "Pink",
          optionB: "Blue",
          optionC: "Purple",
          correctAnswer: "Purple",
        },
        {
          question:
            "Sound Blocks in Scratch are used to add sound and music to the sprite/backdrop. They are __________ in color.",
          optionA: "Pink",
          optionB: "Yellow",
          optionC: "Blue",
          correctAnswer: "Pink",
        },
        {
          question:
            "Events Blocks in Scratch control the action of the script. They are __________ in color. They start a script.",
          optionA: "Blue",
          optionB: "Yellow",
          optionC: "Orange",
          correctAnswer: "Yellow",
        },
        {
          question:
            "Control Blocks in Scratch are used when a particular set of blocks has to be repeated non-stop for a given time. They are __________ in color.",
          optionA: "Pink",
          optionB: "Orange",
          optionC: "Purple",
          correctAnswer: "Orange",
        },
        {
          question:
            "There are six kinds of block shapes in Scratch. The Hat Block always comes at the __________ of a script as they start a script.",
          optionA: "Top",
          optionB: "Middle",
          optionC: "Bottom",
          correctAnswer: "Top",
        },
        {
          question:
            "In the provided project, click on the Cat sprite. Drag the Looks block to coding area. Type the text, 'Hey Fox, How __________?'.",
          optionA: "Do you do?",
          optionB: "Are you?",
          optionC: "Have you been?",
          correctAnswer: "Are you?",
        },
        {
          question:
            "To make a sprite move backward in Scratch, add a (-) minus sign before the __________ of steps.",
          optionA: "Positive",
          optionB: "Negative",
          optionC: "Random",
          correctAnswer: "Negative",
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
            "The Code Tab in Scratch consists of different sections that allow you to code scripts to control sprites.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Motion Blocks in Scratch control the appearance of sprites.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Looks Blocks in Scratch are used to add sound and music to the sprite/backdrop.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Events Blocks in Scratch start a script when the chosen key is pressed.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Control Blocks in Scratch are orange in color and are used for sprite movement.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Hat Blocks in Scratch always come at the bottom of a script.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Alluvial soil in India is found mainly in the Western Ghats.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Black soil is most abundant in the Northern Plains of India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Red soil gets its distinct color from calcium found in its composition in a crystallized form.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Yellow soil appears when red soil is dry.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
