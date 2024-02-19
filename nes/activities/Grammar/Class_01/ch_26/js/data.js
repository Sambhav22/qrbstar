export const chapter = "Chapter - 26 :  Picture Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What is one historical example of 'picture writing' mentioned in the text?",
            options: ["Morse code", "Hieroglyphics", "Braille"],
            answer: "Hieroglyphics",
          },
          {
            question:
              "In the context of ancient civilizations, what did symbols represent in hieroglyphics?",
            options: [
              "Mathematical equations",
              "Objects or sounds",
              "Abstract concepts",
            ],
            answer: "Objects or sounds",
          },
          {
            question:
              "Which contemporary form of 'picture writing' involves combining images and text to convey a narrative?",
            options: ["Morse code", "Graphic novels and comics", "Braille"],
            answer: "Graphic novels and comics",
          },
          {
            question:
              "How is 'picture writing' related to visual communication in a broader sense?",
            options: [
              "It focuses only on drawing and doodling",
              "It involves written descriptions without visuals",
              "It heavily relies on visual elements to convey information",
            ],
            answer:
              "It heavily relies on visual elements to convey information",
          },
          {
            question:
              "What is one contemporary example of 'picture writing' mentioned in the text?",
            options: ["Morse code", "Hieroglyphics", "Infographics"],
            answer: "Infographics",
          },
          {
            question:
              "In the modern sense, what is another way people might use 'picture writing' to express themselves?",
            options: [
              "Through traditional writing",
              "Through coding languages",
              "Through drawing or doodling",
            ],
            answer: "Through drawing or doodling",
          },
          {
            question:
              "Which term refers to a form of communication where individuals convey ideas through visual representation rather than traditional writing?",
            options: ["Symbolism", "Pictograms", "Picture writing"],
            answer: "Picture writing",
          },
          {
            question:
              "What is the primary purpose of graphic novels and comics, as mentioned in the text?",
            options: [
              "To convey information through text only",
              "To entertain through drawings",
              "To tell a story through a combination of pictures and text",
            ],
            answer:
              "To tell a story through a combination of pictures and text",
          },
          {
            question:
              "In ancient Egypt, what type of writing involved symbols representing objects or sounds?",
            options: ["Morse code", "Pictograms", "Hieroglyphics"],
            answer: "Hieroglyphics",
          },
          {
            question:
              "What does the term 'picture writing' encompass in its broader sense, as mentioned in the text?",
            options: [
              "Exclusively includes ancient scripts",
              "Refers only to graphic novels",
              "Encompasses any form of communication heavily relying on visual elements",
            ],
            answer:
              "Encompasses any form of communication heavily relying on visual elements",
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
              "In ancient civilizations, people often used symbols, pictures, or pictorial representations as a form of _______.",
            options: [
              "Oral communication",
              "Written communication",
              "Hieroglyphics",
            ],
            answer: "Hieroglyphics",
          },
          {
            question:
              "Graphic novels and comics are examples of using images and illustrations to tell a _______.",
            options: ["Mathematical equation", "Story", "Historical account"],
            answer: "Story",
          },
          {
            question:
              '"Picture writing" might encompass any form of communication that heavily relies on _______ elements.',
            options: ["Auditory", "Visual", "Tactile"],
            answer: "Visual",
          },
          {
            question:
              'Sometimes, people use the term "picture writing" to describe a form of expression through _______ rather than traditional writing.',
            options: [
              "Verbal communication",
              "Drawing or doodling",
              "Abstract symbolism",
            ],
            answer: "Drawing or doodling",
          },
          {
            question:
              "_____ were used by ancient Egyptians, where symbols represented objects or sounds.",
            options: ["Alphabets", "Hieroglyphics", "Ciphers"],
            answer: "Hieroglyphics",
          },
          {
            question:
              'In a more contemporary sense, "picture writing" can refer to the use of images and illustrations in _______.',
            options: [
              "Scientific papers",
              "Graphic novels and comics",
              "Business reports",
            ],
            answer: "Graphic novels and comics",
          },
          {
            question:
              'Sometimes, people use "picture writing" to convey ideas, emotions, or messages through _______.',
            options: [
              "Mathematical equations",
              "Written essays",
              "Drawing or doodling",
            ],
            answer: "Drawing or doodling",
          },
          {
            question:
              '"Picture writing" might encompass any form of communication that relies on visual elements, such as _______.',
            options: [
              "Audio recordings",
              "Infographics",
              "Text-only documents",
            ],
            answer: "Infographics",
          },
          {
            question:
              "In ancient Egypt, symbols in hieroglyphics represented either objects or _______.",
            options: ["Emotions", "Sounds", "Abstract concepts"],
            answer: "Sounds",
          },
          {
            question:
              'In a broader sense, "picture writing" might include communication forms like _______ that use visual aids to convey information.',
            options: ["Telepathy", "Presentations", "Handwritten letters"],
            answer: "Presentations",
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
            question: "Hieroglyphics were used by ancient Romans.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Graphic novels and comics exclusively use text to convey a narrative.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Visual communication only relies on auditory elements.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Drawing or doodling is not considered a form of expression in picture writing.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Infographics are a form of picture writing that uses visual elements to convey information.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "In a leap year, February always has 30 days.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The month of July is traditionally associated with new beginnings and resolutions.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Symbols in hieroglyphics represented abstract concepts in ancient Egypt.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Text-only documents fall under the category of picture writing.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Handwritten letters are a form of telepathic communication.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
