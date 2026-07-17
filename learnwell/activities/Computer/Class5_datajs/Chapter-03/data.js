export const chapter = "Chapter - 3: Exploring Word";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Which key helps you move from one cell to the next in a table?",
        optionA: "Enter",
        optionB: "Tab",
        optionC: "Shift",
        correctAnswer: "Tab",
      }),
      shuffleOptions({
        question: "Which tool in Word allows you to draw a table freely?",
        optionA: "Draw Table",
        optionB: "Insert Table",
        optionC: "Quick Tables",
        correctAnswer: "Draw Table",
      }),
      shuffleOptions({
        question: "Which tab contains the Quick Tables option?",
        optionA: "Insert",
        optionB: "Layout",
        optionC: "Design",
        correctAnswer: "Insert",
      }),
      shuffleOptions({
        question: "Which option is used to divide one cell into many cells?",
        optionA: "Split Cells",
        optionB: "Merge Cells",
        optionC: "Delete Cells",
        correctAnswer: "Split Cells",
      }),
      shuffleOptions({
        question: "Which group contains options like Insert Above and Insert Below?",
        optionA: "Rows & Columns",
        optionB: "Paragraph",
        optionC: "Clipboard",
        correctAnswer: "Rows & Columns",
      }),
      shuffleOptions({
        question: "Which feature automatically adjusts the width of columns to fit text?",
        optionA: "Autofit",
        optionB: "Borders",
        optionC: "Alignment",
        correctAnswer: "Autofit",
      }),
      shuffleOptions({
        question: "On which tab will you find the Borders option?",
        optionA: "Design",
        optionB: "Insert",
        optionC: "Review",
        correctAnswer: "Design",
      }),
      shuffleOptions({
        question: "Which option combines two or more cells into one?",
        optionA: "Merge Cells",
        optionB: "Split Cells",
        optionC: "Join Table",
        correctAnswer: "Merge Cells",
      }),
      shuffleOptions({
        question: "Which key, when pressed in the last cell of a table, creates a new row?",
        optionA: "Tab",
        optionB: "Enter",
        optionC: "Shift",
        correctAnswer: "Tab",
      }),
      shuffleOptions({
        question: "Which tab lets you resize the height and width of cells?",
        optionA: "Layout",
        optionB: "Insert",
        optionC: "View",
        correctAnswer: "Layout",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A table organises data into ________ and ________.",
        optionA: "lines, pages",
        optionB: "words, paragraphs",
        optionC: "rows, columns",
        correctAnswer: "rows, columns",
      }),
      shuffleOptions({
        question: "The Quick Tables option provides ready-made ________.",
        optionA: "fonts",
        optionB: "borders",
        optionC: "templates",
        correctAnswer: "templates",
      }),
      shuffleOptions({
        question: "The ________ key moves the cursor to the next cell.",
        optionA: "Ctrl",
        optionB: "Shift",
        optionC: "Tab",
        correctAnswer: "Tab",
      }),
      shuffleOptions({
        question: "Borders and ________ make a table look attractive.",
        optionA: "Text",
        optionB: "Autofit",
        optionC: "Shading",
        correctAnswer: "Shading",
      }),
      shuffleOptions({
        question: "The ________ option is used to remove a selected row or column.",
        optionA: "Erase",
        optionB: "Clear All",
        optionC: "Delete Cells",
        correctAnswer: "Delete Cells",
      }),
      shuffleOptions({
        question: "You can add a new column by using the ________ option.",
        optionA: "Insert Left",
        optionB: "Insert Below",
        optionC: "Insert Right",
        correctAnswer: "Insert Right",
      }),
      shuffleOptions({
        question: "The smallest box in a table is called a ________.",
        optionA: "grid",
        optionB: "block",
        optionC: "cell",
        correctAnswer: "cell",
      }),
      shuffleOptions({
        question: "________ cells means joining two or more cells together.",
        optionA: "Splitting",
        optionB: "Deleting",
        optionC: "Merging",
        correctAnswer: "Merging",
      }),
      shuffleOptions({
        question: "The ________ option divides one cell into two or more.",
        optionA: "Merge Cells",
        optionB: "Join Cells",
        optionC: "Split Cells",
        correctAnswer: "Split Cells",
      }),
      shuffleOptions({
        question: "To change cell height and width, use the ________ group under Layout.",
        optionA: "Rows & Columns",
        optionB: "Table Styles",
        optionC: "Cell Size",
        correctAnswer: "Cell Size",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Insert Table option lets you choose rows and columns.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pressing the Tab key in the last cell adds a new row.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Split Cells option is used to combine multiple cells.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Quick Tables cannot be edited after insertion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Borders make a table clear and well-organised.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Merge Cells option is found under the Layout tab.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shading adds colour to the background of selected cells.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A table is made up of rows and columns.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Draw Table option is available on the Insert tab.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "You cannot delete a column from a table once it is created.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
