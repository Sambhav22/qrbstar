export const chapter =
  "Chapter - 8: The Medieval Period : Art and Architecture";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "During which Mughal ruler's rule was literature and fine arts considered the high point?",
        optionA: "Akbar",
        optionB: "Shah Jahan",
        optionC: "Jahangir",
        correctAnswer: "C",
      },
      {
        question:
          "Which ruler is often referred to as the 'Engineer King' and is credited with building splendid and glorious structures in marble?",
        optionA: "Akbar",
        optionB: "Jahangir",
        optionC: "Shah Jahan",
        correctAnswer: "C",
      },
      {
        question:
          "What marked the high point of Shah Jahan's rule in terms of architecture?",
        optionA: "Red Fort and Jama Masjid",
        optionB: "Moti Mahal and Hira Mahal",
        optionC: "Taj Mahal and Moti Mahal",
        correctAnswer: "C",
      },
      {
        question:
          "What was the distinctive type of architecture undertaken by Sawai Raja Jai Singh of Jaipur during the Mughal period?",
        optionA: "Forts and Palaces",
        optionB: "Temples and Mosques",
        optionC: "Astronomical Observatories (Jantar Mantar)",
        correctAnswer: "C",
      },
      {
        question:
          "Who ordered the closure of karkhanas during the Mughal period, leading to the departure of artists and painters from the Mughal territory?",
        optionA: "Akbar",
        optionB: "Aurangzeb",
        optionC: "Jahangir",
        correctAnswer: "B",
      },
      {
        question:
          "What style of architecture evolved greatly during the Mughal period, blending Hindu and Persian styles?",
        optionA: "Trabeate",
        optionB: "Arcuate",
        optionC: "Fusion",
        correctAnswer: "B",
      },
      {
        question:
          "Which Mughal ruler was more interested in painting and literature than architecture?",
        optionA: "Akbar",
        optionB: "Jahangir",
        optionC: "Shah Jahan",
        correctAnswer: "B",
      },
      {
        question:
          "Which Mughal ruler laid gardens and built the Mausoleum of Itmad-ud-daula but lacked a taste in architecture?",
        optionA: "Akbar",
        optionB: "Jahangir",
        optionC: "Aurangzeb",
        correctAnswer: "C",
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
          "The Mughal ruler ____________ encouraged art and painting, setting up karkahanas where artists and painters worked during his reign.",
        options: {
          A: "Aurangzeb",
          B: "Akbar",
          C: "Jahangir",
        correctAnswer: "B",
      },
      {
        question:
          "Miniature painting reached new heights during the Mughal period due to the fusion of ____________ styles.",
        options: {
          A: "Chinese and Indian",
          B: "Indian and Persian",
          C: "Persian and Greek",
        correctAnswer: "B",
      },
      {
        question:
          "Tansen, a great musician, fused ____________ styles of music during his time in the court of Akbar.",
        options: {
          A: "African and Indian",
          B: "Persian and Indian",
          C: "Indian and Chinese",
        correctAnswer: "B",
      },
      {
        question:
          "Shah Jahan, often called the Engineer King, reached the zenith of Mughal architecture during his rule, with a fine taste for using ____________ in buildings.",
        options: {
          A: "Granite",
          B: "Marble",
          C: "Sandstone",
        correctAnswer: "B",
      },
      {
        question:
          "The fusion of different styles is evident in the Govind Dev Temple at Vrindavan, showcasing a blend of ____________.",
        options: {
          A: "Hindu and Roman",
          B: "Indian and Persian",
          C: "Greek and Egyptian",
        correctAnswer: "B",
      },
      {
        question:
          "Mughal architecture had a fine fusion of ____________ styles, as seen in buildings like Buland Darwaza and Panch Mahal.",
        options: {
          A: "Greek and Roman",
          B: "Persian and Indian",
          C: "Chinese and Egyptian",
        correctAnswer: "B",
      },
      {
        question:
          "Aurangzeb, in contrast to his predecessors, was against ____________ and ____________ and expelled artists and painters from the Mughal empire.",
        options: {
          A: "Music; Art",
          B: "Literature; Sculpture",
          C: "Science; Mathematics",
        correctAnswer: "A",
      },
      {
        question:
          "The Durgah of Salim Chishti at Fatehpur Sikri is built in the ____________ style.",
        options: {
          A: "Greek",
          B: "Persian",
          C: "Roman",
        correctAnswer: "B",
      },
      {
        question:
          "Sawai Raja Jai Singh of Ambar built astronomical observatories called ____________ at various locations.",
        options: {
          A: "Solarium Mantar",
          B: "Jantar Mantar",
          C: "Astro Mantar",
        correctAnswer: "B",
      },
      {
        question:
          "The Taj Mahal, built by Shah Jahan, is made entirely of ____________.",
        options: {
          A: "Granite",
          B: "Marble",
          C: "Sandstone",
        correctAnswer: "B",
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
          "The Mughal ruler Akbar encouraged art and painting, setting up karkahanas where artists and painters worked during his reign.",
        options: {
          True: true,
          False: false,
        correctAnswer: true,
      },
      {
        question:
          "Miniature painting reached new heights during the Mughal period due to the fusion of Indian and Persian styles.",
        options: {
          True: true,
          False: false,
        correctAnswer: true,
      },
      {
        question:
          "Tansen, a great musician, fused African and Indian styles of music during his time in the court of Akbar.",
        options: {
          True: true,
          False: false,
        correctAnswer: false,
      },
      {
        question:
          "Shah Jahan, often called the Engineer King, reached the zenith of Mughal architecture during his rule, with a fine taste for using Sandstone in buildings.",
        options: {
          True: true,
          False: false,
        correctAnswer: false,
      },
      {
        question:
          "The fusion of different styles is evident in the Govind Dev Temple at Vrindavan, showcasing a blend of Hindu and Roman styles.",
        options: {
          True: true,
          False: false,
        correctAnswer: false,
      },
      {
        question:
          "Mughal architecture had a fine fusion of Greek and Roman styles, as seen in buildings like Buland Darwaza and Panch Mahal.",
        options: {
          True: true,
          False: false,
        correctAnswer: false,
      },
      {
        question:
          "Aurangzeb, in contrast to his predecessors, was against Music and Art and expelled artists and painters from the Mughal empire.",
        options: {
          True: true,
          False: false,
        correctAnswer: true,
      },
      {
        question:
          "The Durgah of Salim Chishti at Fatehpur Sikri is built in the Persian style.",
        options: {
          True: true,
          False: false,
        correctAnswer: true,
      },
      {
        question:
          "Sawai Raja Jai Singh of Ambar built astronomical observatories called Jantar Mantar at various locations.",
        options: {
          True: true,
          False: false,
        correctAnswer: true,
      },
      {
        question:
          "The Taj Mahal, built by Shah Jahan, is made entirely of Marble.",
        options: {
          True: true,
          False: false,
        correctAnswer: true,
      },
    ],
  };
}

export var activityData;
