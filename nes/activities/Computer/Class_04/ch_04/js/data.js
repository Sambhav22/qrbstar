export const chapter = "Chapter - 4: Advanced Features of Paint  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is the purpose of Rectangle selection in Paint?",
            options: [
              "To draw irregular shapes",
              "To select a rectangular region of an image",
              "To rotate an image",
            ],
            answer: "To select a rectangular region of an image",
          },
          {
            question:
              "How is Free-form selection different from Rectangle selection?",
            options: [
              "Free-form selects only square regions",
              "Free-form selects irregular shapes",
              "Free-form is used for resizing images",
            ],
            answer: "Free-form selects irregular shapes",
          },
          {
            question:
              "When using Transparent selection, what does it allow you to do?",
            options: [
              "Change image colors",
              "Select images without background color",
              "Rotate the image",
            ],
            answer: "Select images without background color",
          },
          {
            question: "How can you rotate an image in Paint?",
            options: [
              "Use the Resize option",
              "Select the image and click on Rotate",
              "Choose Flip vertical/Flip horizontal",
            ],
            answer: "Select the image and click on Rotate",
          },
          {
            question: "What does the Flip option in Paint allow you to do?",
            options: [
              "Change image colors",
              "Resize the image",
              "Flip the image or its part vertically or horizontally",
            ],
            answer: "Flip the image or its part vertically or horizontally",
          },
          {
            question: "What does the Resize option in Paint allow you to do?",
            options: [
              "Rotate the image",
              "Change image colors",
              "Resize and skew an image or selection",
            ],
            answer: "Resize and skew an image or selection",
          },
          {
            question:
              "How can you copy or cut an image or a portion of it in Paint?",
            options: [
              "Select the image and press Ctrl + V",
              "Right-click on the image and choose Copy or Cut",
              "Use the Resize option",
            ],
            answer: "Right-click on the image and choose Copy or Cut",
          },
          {
            question: "What is the purpose of the Paste option in Paint?",
            options: [
              "Change image colors",
              "Rotate the image",
              "Paste the cut or copied portion at the desired place",
            ],
            answer: "Paste the cut or copied portion at the desired place",
          },
          {
            question:
              "Which shortcut key can be used for cutting an image in Paint?",
            options: ["Ctrl + C", "Ctrl + X", "Ctrl + V"],
            answer: "Ctrl + X",
          },
          {
            question:
              "How can you paste an image or a portion of it in Paint using a shortcut key?",
            options: ["Ctrl + C", "Ctrl + X", "Ctrl + V"],
            answer: "Ctrl + V",
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
              "Rectangle selection is used to select a __________ region of an image.",
            options: ["Circular", "Rectangular", "Irregular"],
            answer: "Rectangular",
          },
          {
            question:
              "Free-form selection is used to select any __________ shaped portion of the image.",
            options: ["Square", "Circular", "Irregular"],
            answer: "Irregular",
          },
          {
            question:
              "Transparent selection is used to select the image without __________ color.",
            options: ["Black", "White", "Red"],
            answer: "White",
          },
          {
            question:
              "The Rotate option allows you to rotate an image by 90° right or left, or __________.",
            options: ["45°", "180°", "360°"],
            answer: "180°",
          },
          {
            question:
              "To Flip an image or a part of it, you can choose Flip vertical/Flip __________ option.",
            options: ["Diagonal", "Horizontal", "Angular"],
            answer: "Horizontal",
          },
          {
            question:
              "The Resize option allows you to resize and __________ an image or selection.",
            options: ["Crop", "Skew", "Rotate"],
            answer: "Skew",
          },
          {
            question:
              "To copy or cut an image or a portion of it, you can press the shortcut key Ctrl + __________ to Copy or Ctrl + X to Cut.",
            options: ["C", "V", "A"],
            answer: "C",
          },
          {
            question:
              "Once you have cut or copied an image, you can paste it using the shortcut key Ctrl + __________.",
            options: ["V", "P", "X"],
            answer: "V",
          },
          {
            question:
              "The Flip option in Paint allows you to flip the image or its part __________ or horizontally.",
            options: ["Vertically", "Diagonally", "Radially"],
            answer: "Vertically",
          },
          {
            question:
              "The major canal built to provide water to the Thar Desert is the Indira Gandhi __________.",
            options: [
              "Ganges Canal",
              "Brahmaputra Canal",
              "Sutlej-Yamuna Link",
            ],
            answer: "Ganges Canal",
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
            question:
              "Rectangle selection is used to draw irregular shapes in Paint.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Free-form selection is used to select only square regions.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Transparent selection works with any background color.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The Rotate option in Paint allows you to rotate an image by 180°.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "The Flip option in Paint allows you to change image colors.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The Resize option in Paint only allows changing the size of an image.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Copying or cutting an image in Paint can only be done using the Ctrl + C shortcut.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Pasting an image in Paint can be done using the shortcut Ctrl + P.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Flipping an image vertically in Paint is not possible.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The major canal providing water to the Thar Desert is the Ganges Canal.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
