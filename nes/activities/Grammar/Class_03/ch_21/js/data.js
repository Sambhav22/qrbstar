export const chapter = "Chapter - 21: Picture Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is one example of an ancient picture writing system?",
          optionA: "Alphabet",
          optionB: "Hieroglyphics",
          optionC: "Cuneiform",
          correctAnswer: "Hieroglyphics",
        },
        {
          question:
            "In which region were Mayan hieroglyphs commonly used as a picture writing system?",
          optionA: "Europe",
          optionB: "Middle East",
          optionC: "Mesoamerica",
          correctAnswer: "Mesoamerica",
        },
        {
          question:
            "What does picture writing in visual storytelling often rely on for conveying messages?",
          optionA: "Audio narration",
          optionB: "Traditional written language",
          optionC: "Series of images or illustrations",
          correctAnswer: "Series of images or illustrations",
        },
        {
          question:
            "Which of the following is a modern example of picture writing in digital communication?",
          optionA: "Morse code",
          optionB: "Emojis and emoticons",
          optionC: "Braille",
          correctAnswer: "Emojis and emoticons",
        },
        {
          question:
            "What role do pictures play in graphic novels, comic books, and storyboards?",
          optionA: "Minimal role",
          optionB: "No role",
          optionC: "Significant role",
          correctAnswer: "Significant role",
        },
        {
          question:
            "Chinese characters often started as stylized pictures representing what?",
          optionA: "Sounds",
          optionB: "Words or ideas",
          optionC: "Emotions",
          correctAnswer: "Words or ideas",
        },
        {
          question:
            "Which of the following is NOT mentioned as an example of picture writing?",
          optionA: "Alphabet",
          optionB: "Hieroglyphics",
          optionC: "Morse code",
          correctAnswer: "Alphabet",
        },
        {
          question:
            "What is the primary purpose of using emojis and emoticons in digital communication?",
          optionA: "Conveying complex ideas",
          optionB: "Enhancing grammar",
          optionC: "Conveying emotions in a visual manner",
          correctAnswer: "Conveying emotions in a visual manner",
        },
        {
          question:
            "What do logograms in East Asian writing systems represent?",
          optionA: "Phonetic sounds",
          optionB: "Abstract concepts",
          optionC: "Stylized pictures representing words or ideas",
          correctAnswer: "Stylized pictures representing words or ideas",
        },
        {
          question:
            "In which context might 'picture writing' refer to the use of symbols to represent specific words or sounds?",
          optionA: "Audio recording",
          optionB: "Graphic design",
          optionC: "Ancient writing systems",
          correctAnswer: "Ancient writing systems",
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
            "Picture writing can refer to ancient writing systems that use ____________ to represent words or sounds.",
          options: ["Letters", "Pictures or symbols", "Numbers"],
          correctAnswer: "Pictures or symbols",
        },
        {
          question:
            "In visual storytelling, picture writing involves conveying a story through a series of ____________ or illustrations.",
          options: ["Numbers", "Words", "Images"],
          correctAnswer: "Images",
        },
        {
          question:
            "Emoji and emoticons are modern examples of picture writing in ____________ communication.",
          options: ["Verbal", "Digital", "Written"],
          correctAnswer: "Digital",
        },
        {
          question:
            "Chinese characters often started as ____________ representing words or ideas.",
          options: ["Phonetic sounds", "Letters", "Stylized pictures"],
          correctAnswer: "Stylized pictures",
        },
        {
          question:
            "Picture writing in graphic novels relies on the use of ____________ to convey messages.",
          options: ["Words", "Colors", "Images"],
          correctAnswer: "Images",
        },
        {
          question:
            "Mayan hieroglyphs are an example of picture writing systems used in ____________.",
          options: ["Europe", "Mesoamerica", "Middle East"],
          correctAnswer: "Mesoamerica",
        },
        {
          question:
            "The act of conveying a story through a series of images rather than traditional written language is common in ____________.",
          options: ["Poetry", "Novels", "Graphic novels"],
          correctAnswer: "Graphic novels",
        },
        {
          question:
            "Picture writing might describe the use of symbols to represent specific words or sounds in ancient writing systems such as ____________.",
          options: ["Cuneiform", "Morse code", "Hieroglyphics"],
          correctAnswer: "Hieroglyphics",
        },
        {
          question:
            "Logograms in East Asian writing systems represent words or ideas through ____________.",
          options: [
            "Phonetic sounds",
            "Stylized pictures",
            "Abstract concepts",
          ],
          correctAnswer: "Stylized pictures",
        },
        {
          question:
            "The use of emojis and emoticons in digital communication is a way to convey ____________ in a visual manner.",
          options: ["Complex ideas", "Emotions", "Facts"],
          correctAnswer: "Emotions",
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
            "The Mayan hieroglyphs are an example of an ancient picture writing system.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Emoji and emoticons are forms of picture writing used in ancient civilizations.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Chinese characters started as phonetic sounds before evolving into stylized pictures.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Visual storytelling often relies on traditional written language rather than images.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Logograms in East Asian writing systems primarily represent abstract concepts.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Graphic novels and comic books use pictures to play a minimal role in storytelling.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Hieroglyphics in ancient Egypt used symbols that could represent specific words or sounds.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The act of conveying a story through a series of images is common in graphic novels.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Emojis and emoticons are modern examples of picture writing used in digital communication.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In East Asian writing systems, logograms are essentially stylized pictures representing words or ideas.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
