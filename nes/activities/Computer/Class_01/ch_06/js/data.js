export const chapter = "Chapter - 6: Mouse";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        text: "Just like a house mouse, generally a computer mouse also has a long tail. The tail of the computer mouse is called wire. The mouse is connected to the CPU with the help of its wire.\n\nParts of a Mouse\nA mouse has two or three buttons. The buttons on either sides are left button and right button. The button in the centre is the scroll wheel.\n\nA mouse is placed on a thin mat called mouse pad.\n\nHolding a Mouse\nA mouse should be held correctly while working. Follow the given steps to hold a mouse correctly:\nStep 1: Put the index finger on the left button.\nStep 2: Put the middle finger on the right button.\nStep 3: Rest your palm gently on the mouse.\nStep 4: Keep your thumb on one side, and the ring finger and the little finger on the other side.\n\nMouse Pointer\nAs you move the mouse on mouse pad, an arrow called pointer moves on the computer screen.\n\nClicking a Mouse\nPressing a mouse button is called clicking. Pressing a mouse button twice quickly is called double-clicking.",
        questions: [
          {
            question:
              "What is the tail of a computer mouse commonly referred to as?",
            options: ["Wire", "Tail", "Connector"],
            answer: "Wire",
          },
          {
            question: "How is a mouse connected to the CPU?",
            options: ["Bluetooth", "USB Cable", "Wireless Connection"],
            answer: "USB Cable",
          },
          {
            question:
              "Which part of the mouse is often placed on a thin mat called a mouse pad?",
            options: ["Tail", "Scroll wheel", "Bottom surface"],
            answer: "Bottom surface",
          },
          {
            question: "How many buttons does a typical mouse have?",
            options: ["One", "Two or three", "Four"],
            answer: "Two or three",
          },
          {
            question:
              "Which fingers are typically placed on the left and right buttons of the mouse?",
            options: [
              "Index and thumb",
              "Index and middle",
              "Ring and little finger",
            ],
            answer: "Index and middle",
          },
          {
            question:
              "What finger is suggested to be placed on the scroll wheel of the mouse?",
            options: ["Index finger", "Thumb", "Middle finger"],
            answer: "Index finger",
          },
          {
            question:
              "What is the surface called where a mouse is intended to be used?",
            options: ["Pad", "Mat", "Mouse surface"],
            answer: "Mat",
          },
          {
            question:
              "What moves on the computer screen as the mouse moves on the mouse pad?",
            options: ["Cursor", "Pointer", "Arrow"],
            answer: "Pointer",
          },
          {
            question:
              "What action is referred to as 'pressing a mouse button twice quickly'?",
            options: ["Right-clicking", "Scrolling", "Double-clicking"],
            answer: "Double-clicking",
          },
          {
            question: "What term is used for pressing a mouse button?",
            options: ["Pushing", "Clicking", "Tapping"],
            answer: "Clicking",
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
        text: "Just like a house mouse, generally a computer mouse also has a long tail. The tail of the computer mouse is called wire. The mouse is connected to the CPU with the help of its wire.\n\nParts of a Mouse\nA mouse has two or three buttons. The buttons on either side are left button and right button. The button in the center is the scroll wheel.\n\nA mouse is placed on a thin mat called a mouse pad.\n\nHolding a Mouse\nA mouse should be held correctly while working. Follow the given steps to hold a mouse correctly:\nStep 1: Put the index finger on the left button.\nStep 2: Put the middle finger on the right button.\nStep 3: Rest your palm gently on the mouse.\nStep 4: Keep your thumb on one side, and the ring finger and the little finger on the other side.\n\nMouse Pointer\nAs you move the mouse on the mouse pad, an arrow called pointer moves on the computer screen.\n\nClicking a Mouse\nPressing a mouse button is called clicking. Pressing a mouse button twice quickly is called double-clicking.",
        questions: [
          {
            question:
              "A computer mouse is connected to the CPU with the help of its _______.",
            options: ["Wire", "Bluetooth", "Battery"],
            answer: "Wire",
          },
          {
            question:
              "The button in the center of a mouse is referred to as the _______.",
            options: ["Left button", "Scroll wheel", "Right button"],
            answer: "Scroll wheel",
          },
          {
            question:
              "To hold a mouse correctly, Step 4 suggests keeping your thumb on one side and the ring finger and the little finger on the _______.",
            options: ["Palm", "Left button", "Other side"],
            answer: "Other side",
          },
          {
            question:
              "When a mouse moves on a mouse pad, an arrow known as the _______ moves on the computer screen.",
            options: ["Cursor", "Pointer", "Scroll wheel"],
            answer: "Pointer",
          },
          {
            question:
              "Pressing a mouse button twice quickly is referred to as _______.",
            options: ["Right-clicking", "Scrolling", "Double-clicking"],
            answer: "Double-clicking",
          },
          {
            question:
              "The tail of a computer mouse is commonly called a _______.",
            options: ["Connector", "Tail", "Wire"],
            answer: "Wire",
          },
          {
            question:
              "A mouse is typically placed on a thin mat known as a _______.",
            options: ["Mouse surface", "Pad", "Mouse pad"],
            answer: "Mouse pad",
          },
          {
            question:
              "Holding a mouse correctly involves resting your palm gently on the _______.",
            options: ["Thumb", "Mouse", "Scroll wheel"],
            answer: "Mouse",
          },
          {
            question:
              "The buttons on either side of a mouse are the left button and the _______.",
            options: ["Palm", "Right button", "Scroll wheel"],
            answer: "Right button",
          },
          {
            question: "A mouse is intended to be used on a _______.",
            options: ["Hard surface", "Soft surface", "Mat"],
            answer: "Hard surface",
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
            question: "A computer mouse is connected to the CPU wirelessly.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "A mouse typically has two buttons: left and right.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Resting your palm gently on a mouse is an essential step in holding it correctly.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "The tail of a computer mouse is commonly referred to as a wire.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "The scroll wheel of a mouse is usually located at the bottom.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "A mouse pad is a thick surface designed for a comfortable grip while using a mouse.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Double-clicking involves pressing a mouse button twice quickly.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "A mouse pointer moves on the computer screen as the mouse moves on the mouse pad.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "A mouse should be held with the thumb on one side and the middle finger on the other.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "A mouse is intended to be used on a hard surface.",
            options: ["True", "False"],
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
