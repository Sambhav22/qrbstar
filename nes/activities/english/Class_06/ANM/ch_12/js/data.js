export const chapter = "Chapter - 12: Jimmy Scarecrow's Presents ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What was Jimmy Scarecrow's greatest sorrow during the winter?",
        optionA: "Lack of food",
        optionB: "Lack of friends",
        optionC: "Lack of occupation",
        correctAnswer: "Lack of occupation",
      },
      {
        question:
          "What did Jimmy Scarecrow ask Santa Claus for on Christmas Eve?",
        optionA: "A new coat",
        optionB: "A doll-baby",
        optionC: "A warm fire",
        correctAnswer: "A doll-baby",
      },
      {
        question:
          "What did Betsey give to Jimmy Scarecrow as a Christmas present?",
        optionA: "A crazy quilt",
        optionB: "A new hat",
        optionC: "A pair of shoes",
        correctAnswer: "A crazy quilt",
      },
      {
        question:
          "What did Santa Claus ask Jimmy Scarecrow to do at the North Pole?",
        optionA: "Scare away crows",
        optionB: "Scare away Arctic Explorers",
        optionC: "Scare away polar bears",
        correctAnswer: "Scare away Arctic Explorers",
      },
      {
        question:
          "How long did Santa Claus offer to keep Jimmy Scarecrow at the North Pole?",
        optionA: "One day",
        optionB: "One week",
        optionC: "A thousand years",
        correctAnswer: "A thousand years",
      },
      {
        question:
          "What happened to the crazy quilt given to Aunt Hannah and Betsey?",
        optionA: "It was lost",
        optionB: "It was stolen",
        optionC: "It was remodeled and matched perfectly",
        correctAnswer: "It was remodeled and matched perfectly",
      },
      {
        question:
          "Why did crows stop coming to the cornfield the following summer?",
        optionA: "Because Jimmy Scarecrow scared them away",
        optionB: "Because Santa Claus left a notice to crows",
        optionC: "Because the cornfield was empty",
        correctAnswer: "Because Santa Claus left a notice to crows",
      },
      {
        question: "What did Santa Claus write on the notice to crows?",
        optionA: "A message to eat more corn",
        optionB: "A warning to stay away",
        optionC: "A love letter to the crows",
        correctAnswer: "A warning to stay away",
      },
      {
        question:
          "What change did Betsey notice in her doll-baby when she received it again the following Christmas?",
        optionA: "It had become smaller",
        optionB: "It had learned to talk",
        optionC: "It had grown an inch and could walk and talk",
        correctAnswer: "It had grown an inch and could walk and talk",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Jimmy Scarecrow led a ______________ life in the winter.",
        options: ["happy", "sad", "busy"],
        correctAnswer: "sad",
      },
      {
        question: "Jimmy's greatest grief was his lack of ______________.",
        options: ["food", "occupation", "friends"],
        correctAnswer: "occupation",
      },
      {
        question:
          "Every morning, when the wintry sun peered like a hard yellow eye across the dry ______________, Jimmy felt sad.",
        options: ["meadow", "forest", "corn-stubble"],
        correctAnswer: "corn-stubble",
      },
      {
        question:
          "On Christmas Eve, Santa Claus came in his sledge heaped high with presents, urging his team of reindeer across the field. He was on his way to the farmhouse where Betsey lived with her Aunt ______________.",
        options: ["Emily", "Susan", "Mary"],
        correctAnswer: "Susan",
      },
      {
        question:
          "Betsey was a very good little girl with very smooth yellow curls, and she had a great many ______________.",
        options: ["toys", "presents", "friends"],
        correctAnswer: "presents",
      },
      {
        question:
          'Santa Claus! Here I am!" he cried out, but Santa Claus did not ______________ him.',
        options: ["see", "hear", "recognize"],
        correctAnswer: "hear",
      },
      {
        question:
          '"Santa Claus, please give me a little ______________. I was good all summer and kept the crows out of the corn," pleaded the poor Scarecrow in his choking voice, but Santa Claus passed by with a merry halloo and a great clamor of ______________.',
        options: ["present, bells", "candy, laughter", "toy, music"],
        correctAnswer: "present, bells",
      },
      {
        question:
          "The next morning Betsey sat at the window holding her Christmas doll-baby, and she looked out at Jimmy Scarecrow standing alone in the field amidst the ______________.",
        options: ["flowers", "snow", "corn-stubble"],
        correctAnswer: "corn-stubble",
      },
      {
        question:
          '"I\'ve brought you a Christmas ______________," said she to Jimmy Scarecrow.',
        options: ["card", "present", "tree"],
        correctAnswer: "present",
      },
      {
        question:
          "The bright flash of colors under Jimmy's hat-brim dazzled his eyes, and he felt a little ______________.",
        options: ["happy", "surprised", "alarmed"],
        correctAnswer: "alarmed",
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
          "Mountains look beautiful and mysterious, especially when covered with snow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The Himalayas are the highest mountain range in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Bachendri Pal's first climb started on 8 May, 1984.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Bachendri Pal and her team encountered an avalanche at Camp III.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Bachendri Pal and her teammate Ang Dorjee reached the Summit Camp in less than two hours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The temperature at the South Col camp on 23 May, 1984, was about 10 degrees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Bachendri Pal and her team used backpacks to prevent skidding on the steep frozen slopes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Bachendri Pal was the first woman in the world to reach the summit of Mount Everest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Bachendri Pal buried an image of Lord Buddha at the summit of Mount Everest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Bachendri Pal's ascent to the summit of Mount Everest took less than an hour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
