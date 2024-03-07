export const chapter = "Chapter - 8: Reasoning and Critical Thinking";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        text: "Pattern\nA pattern is something that appears or happens in a repeated way. They can be numbers, images, or even shapes. Such as: Shapes\nA shape is the form of an object. It can also be an outline, outer surface of an object. Let's learn about basic shapes. There are four basic shapes Square ♦ It has four sides. ♦ It has four corners. ♦ Its all sides are equal in length like ludo. Rectangle ♦ It also has four sides and four corners. ♦ Its opposite sides are equal in length like a pencil box. Triangle ♦ It has three sides and three corners. ♦ Its all sides may or may not be equal in length like an ice cream cone. Circle ♦ It has zero sides and zero corners like a pizza. ♦ A full stop is also an example of a circle.",
        questions: [
          {
            question: "What is a pattern?",
            options: [
              "Something that never repeats",
              "Something that appears or happens in a repeated way",
              "Something irregular and unpredictable",
            ],
            answer: "Something that appears or happens in a repeated way",
          },
          {
            question: "Which of the following can be a pattern?",
            options: [
              "Only numbers",
              "Only shapes",
              "Numbers, images, or shapes",
            ],
            answer: "Numbers, images, or shapes",
          },
          {
            question: "How many basic shapes are mentioned in the text?",
            options: ["Five", "Three", "Four"],
            answer: "Four",
          },
          {
            question: "What characterizes a square?",
            options: [
              "Three sides and three corners",
              "Four sides and four corners, all equal in length",
              "Four sides and four corners, not necessarily equal in length",
            ],
            answer: "Four sides and four corners, all equal in length",
          },
          {
            question:
              "Which shape has sides that may or may not be equal in length?",
            options: ["Square", "Rectangle", "Triangle"],
            answer: "Triangle",
          },
          {
            question:
              "How many sides does a circle have according to the text?",
            options: ["One", "Two", "Zero"],
            answer: "Zero",
          },
          {
            question:
              "Which shape is compared to a ludo in terms of having equal sides?",
            options: ["Rectangle", "Triangle", "Square"],
            answer: "Square",
          },
          {
            question:
              "What is another example of a circle mentioned in the text?",
            options: ["Ice cream cone", "Full stop", "Pizza"],
            answer: "Full stop",
          },
          {
            question:
              "What shape is compared to a pencil box in terms of opposite sides being equal?",
            options: ["Triangle", "Rectangle", "Circle"],
            answer: "Rectangle",
          },
          {
            question:
              "How many corners does a triangle have according to the text?",
            options: ["Four", "Three", "Two"],
            answer: "Three",
          },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        text: "Pattern\nA pattern is something that appears or happens in a repeated way. They can be numbers, images, or even shapes. Such as: Shapes\nA shape is the form of an object. It can also be an outline, outer surface of an object. Let's learn about basic shapes. There are four basic shapes Square ♦ It has four sides. ♦ It has four corners. ♦ Its all sides are equal in length like ludo. Rectangle ♦ It also has four sides and four corners. ♦ Its opposite sides are equal in length like a pencil box. Triangle ♦ It has three sides and three corners. ♦ Its all sides may or may not be equal in length like an ice cream cone. Circle ♦ It has zero sides and zero corners like a pizza. ♦ A full stop is also an example of a circle.",
        questions: [
          {
            question: "A square has ____ sides.",
            options: ["three", "four", "five"],
            answer: "four",
          },
          {
            question: "Opposite sides of a rectangle are ____ in length.",
            options: ["equal", "unequal", "parallel"],
            answer: "equal",
          },
          {
            question: "A triangle has ____ corners.",
            options: ["two", "three", "four"],
            answer: "three",
          },
          {
            question: "A circle has ____ sides and ____ corners.",
            options: ["zero, zero", "one, one", "two, two"],
            answer: "zero, zero",
          },
          {
            question: "A full stop is an example of a ____.",
            options: ["square", "triangle", "circle"],
            answer: "circle",
          },
          {
            question: "An ice cream cone is an example of a ____.",
            options: ["square", "rectangle", "triangle"],
            answer: "triangle",
          },
          {
            question: "Shapes, images, and numbers can be considered as ____.",
            options: ["patterns", "circles", "rectangles"],
            answer: "patterns",
          },
          {
            question: "The sides of a square are ____ in length.",
            options: ["equal", "unequal", "parallel"],
            answer: "equal",
          },
          {
            question: "A pattern is something that appears in a ____ way.",
            options: ["random", "repeated", "singular"],
            answer: "repeated",
          },
          {
            question:
              "A shape can be an outline or the outer ____ of an object.",
            options: ["core", "surface", "interior"],
            answer: "surface",
          },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        text: "Pattern\nA pattern is something that appears or happens in a repeated way. They can be numbers, images, or even shapes. Such as: Shapes\nA shape is the form of an object. It can also be an outline, outer surface of an object. Let's learn about basic shapes. There are four basic shapes Square ♦ It has four sides. ♦ It has four corners. ♦ Its all sides are equal in length like ludo. Rectangle ♦ It also has four sides and four corners. ♦ Its opposite sides are equal in length like a pencil box. Triangle ♦ It has three sides and three corners. ♦ Its all sides may or may not be equal in length like an ice cream cone. Circle ♦ It has zero sides and zero corners like a pizza. ♦ A full stop is also an example of a circle.",
        questions: [
          {
            question: "A square has five sides.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Opposite sides of a rectangle are unequal in length.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "A triangle has four corners.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "A circle has one side and one corner.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "An ice cream cone is an example of a square.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Shapes cannot be considered as patterns.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "All sides of a square are unequal in length.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "A pattern is something that appears in a random way.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "A shape can only be the interior of an object.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "A full stop cannot be an example of a circle.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
    ],
  };
}

export var activityData;
