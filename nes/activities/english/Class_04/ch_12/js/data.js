export const chapter = "Chapter - 12: The Great Feast";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
}

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "What is the setting of the story when the Play Angel arrives?",
        optionA: "A bakery",
        optionB: "A playground",
        optionC: "A nursery",
        correctAnswer: "A nursery",
     }),
      shuffleOptions({
        question:
          "Why do the children in the nursery have sad and troubled faces?",
        optionA: "They don't like cookies.",
        optionB:
          "They wanted to have a grand feast, but there's only one small cookie.",
        optionC: "They are tired of playing.",
        correctAnswer:
          "They wanted to have a grand feast, but there's only one small cookie.",
     }),
      shuffleOptions({
        question: "Who breaks the cookie into four pieces?",
        optionA: "The littlest child",
        optionB: "The child whose nursery it is",
        optionC: "The Play Angel",
        correctAnswer: "The Play Angel",
     }),
      shuffleOptions({
        question:
          "What does the Play Angel call the first piece of the cookie she gives to the littlest child?",
        optionA: "A roast rusk",
        optionB: "A chocolate bar",
        optionC: "A cupcake",
        correctAnswer: "A roast rusk",
     }),
      shuffleOptions({
        question:
          "What does the child who receives the second piece of the cookie describe it as?",
        optionA: "A sandwich",
        optionB: "A little pie",
        optionC: "A muffin",
        correctAnswer: "A little pie",
     }),
      shuffleOptions({
        question:
          "How does the Play Angel describe the cake she gives to the third child?",
        optionA: "A chocolate cake",
        optionB: "A plain cake",
        optionC: "A round cake with frosting and decorations",
        correctAnswer: "A round cake with frosting and decorations",
     }),
      shuffleOptions({
        question:
          "What is the fourth piece of the cookie transformed into by the Play Angel?",
        optionA: "A piece of candy",
        optionB: "An ice-cream rabbit",
        optionC: "A brownie",
        correctAnswer: "An ice-cream rabbit",
     }),
      shuffleOptions({
        question:
          "What does the Play Angel ask the children to do after they eat the feast?",
        optionA: "Clap their hands",
        optionB: "Sing a song",
        optionC: "Share the crumbs with the birds",
        correctAnswer: "Share the crumbs with the birds",
     }),
      shuffleOptions({
        question:
          "Who originally raises a concern that the child whose nursery it is addresses?",
        optionA: "The littlest child",
        optionB: "The child whose nursery it is",
        optionC: "The Play Angel",
        correctAnswer: "The child whose nursery it is",
     }),
      shuffleOptions({
        question:
          "What does the Play Angel reveal about herself at the end of the story?",
        optionA: "She's a fairy",
        optionB: "She's an illusion",
        optionC: "She had the feast all along",
        correctAnswer: "She had the feast all along",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question:
          "Once the Play Angel came into a ________ where four little children sat on the floor with sad and troubled faces.",
        options: ["bakery", "garden", "nursery"],
        correctAnswer: "nursery",
     }),
      shuffleOptions({
        question:
          '"What is the matter, dears?" asked the Play Angel. "We wanted to have a grand ________!" said the child whose nursery it was.',
        options: ["meal", "feast", "party"],
        correctAnswer: "feast",
     }),
      shuffleOptions({
        question:
          '"But there is only one ________!" said the child whose nursery it was.',
        options: ["toy", "cookie", "friend"],
        correctAnswer: "cookie",
     }),
      shuffleOptions({
        question:
          '"And it is a very small ________!" said the child who was a cousin, and therefore felt a right to speak.',
        options: ["cake", "cookie", "gift"],
        correctAnswer: "cookie",
     }),
      shuffleOptions({
        question: "She broke the cookie into four ________.",
        options: ["pieces", "crumbs", "slices"],
        correctAnswer: "pieces",
     }),
      shuffleOptions({
        question:
          '"See!" she said. "This is a roast rusk. It is just as brown and crispy as it can be, and there is cranberry sauce on one side, and on the other a little mountain of mashed ________; it must be a volcano, it smokes so. Do you see?"',
        options: ["potato", "bread", "cookie"],
        correctAnswer: "potato",
     }),
      shuffleOptions({
        question:
          '"Now here," said the Angel to the third child, "is a round cake. Look at it! The frosting is half an inch thick, with candied rose-leaves and ________ laid on in true-lovers\' knots; and inside there are chopped-up almonds and raisins and great slices of citron. It is the prettiest cake I ever saw, and the best."',
        options: ["candy canes", "chocolate chips", "angelica"],
        correctAnswer: "angelica",
     }),
      shuffleOptions({
        question:
          'So the children ate the feast all up. "There!" said the Angel. "Did ever you see such a grand ________?"',
        options: ["banquet", "meal", "feast"],
        correctAnswer: "feast",
     }),
      shuffleOptions({
        question:
          '"But you didn\'t have any!" said the child whose nursery it was. "Oh, yes!" said the Angel. "I had it all!" "And there are some ________ left over," said the Angel. "Come, and we will give them to the little birds who are our brothers and sisters!"',
        options: ["toys", "crumbs", "cookies"],
        correctAnswer: "crumbs",
     }),
      shuffleOptions({
        question:
          '"And there are some ________ left over," said the Angel. "Come, and we will give them to the little birds who are our brothers and sisters!"',
        options: ["toys", "crumbs", "cookies"],
        correctAnswer: "crumbs",
      }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Play Angel arrived at a bakery.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The children in the nursery wanted to have a grand feast.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question: "The cookie was large enough to satisfy all the children.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The Play Angel gave the littlest child a piece of cake.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The second child received a piece of a roast rusk.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The cake given to the third child had candied rose-leaves and angelica.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The Play Angel described the cake as plain and unattractive.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question:
          "The Play Angel asked the children to leave some crumbs for the little birds.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
     }),
      shuffleOptions({
        question:
          "The children refused to share the feast with the little birds.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
     }),
      shuffleOptions({
        question: "The Play Angel consumed most of the feast herself.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      }),
    ]),
  }
}

export var activityData;
