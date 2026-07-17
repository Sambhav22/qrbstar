export const chapter = "Chapter - 3: More on Access";
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
        question: "Which view allows you to enter records in a row-and-column layout?",
        optionA: "Form View",
        optionB: "Layout View",
        optionC: "Datasheet View",
        correctAnswer: "Datasheet View",
      }),
      shuffleOptions({
        question: "Which tab must you open to create a new table in Access?",
        optionA: "Home",
        optionB: "Create",
        optionC: "Database Tools",
        correctAnswer: "Create",
      }),
      shuffleOptions({
        question: "Which field is created automatically when a new table is made?",
        optionA: "Code",
        optionB: "Auto Field",
        optionC: "ID",
        correctAnswer: "ID",
      }),
      shuffleOptions({
        question: "Which key helps you move the cursor to the next field while entering data?",
        optionA: "Shift",
        optionB: "Tab",
        optionC: "Ctrl",
        correctAnswer: "Tab",
      }),
      shuffleOptions({
        question: "What does Access use to show all tables, queries, forms and reports in one place?",
        optionA: "Navigation Pane",
        optionB: "Ribbon",
        optionC: "Task Window",
        correctAnswer: "Navigation Pane",
      }),
      shuffleOptions({
        question: "Which view lets you define field names and select data types?",
        optionA: "Datasheet View",
        optionB: "Design View",
        optionC: "Layout View",
        correctAnswer: "Design View",
      }),
      shuffleOptions({
        question: "Which data type is suitable for long text entries?",
        optionA: "Short Text",
        optionB: "Memo",
        optionC: "Number",
        correctAnswer: "Memo",
      }),
      shuffleOptions({
        question: "Which button is used to insert a new empty column in Datasheet View?",
        optionA: "Insert Column",
        optionB: "Add Row",
        optionC: "New Field",
        correctAnswer: "Insert Column",
      }),
      shuffleOptions({
        question: "Which sorting option displays records from highest to lowest?",
        optionA: "Sort A to Z",
        optionB: "Sort Z to A",
        optionC: "Filter",
        correctAnswer: "Sort Z to A",
      }),
      shuffleOptions({
        question: "Which keyboard shortcut is used to open an existing database?",
        optionA: "Ctrl + S",
        optionB: "Ctrl + O",
        optionC: "Ctrl + W",
        correctAnswer: "Ctrl + O",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Access can store many objects inside a single _______.",
        optionA: "table",
        optionB: "database",
        optionC: "column",
        correctAnswer: "database",
      }),
      shuffleOptions({
        question: "A table is made up of fields and _______.",
        optionA: "records",
        optionB: "objects",
        optionC: "pages",
        correctAnswer: "records",
      }),
      shuffleOptions({
        question: "In Datasheet View, new fields can be added using the _______ option.",
        optionA: "Insert Table",
        optionB: "Add New Field",
        optionC: "Add Value",
        correctAnswer: "Add New Field",
      }),
      shuffleOptions({
        question: "The _______ drop-down allows selection of the field’s data type.",
        optionA: "Layout",
        optionB: "View Style",
        optionC: "Data Type",
        correctAnswer: "Data Type",
      }),
      shuffleOptions({
        question: "The _______ tab helps in viewing the table’s structure.",
        optionA: "Home",
        optionB: "Design",
        optionC: "Create",
        correctAnswer: "Design",
      }),
      shuffleOptions({
        question: "Pressing _______ moves you to the next field during data entry.",
        optionA: "Enter",
        optionB: "Tab",
        optionC: "Shift",
        correctAnswer: "Tab",
      }),
      shuffleOptions({
        question: "A new table is automatically named as _______.",
        optionA: "Main Table",
        optionB: "Table 1",
        optionC: "Default Table",
        correctAnswer: "Table 1",
      }),
      shuffleOptions({
        question: "A deleted field loses all its stored _______.",
        optionA: "names",
        optionB: "data",
        optionC: "formats",
        correctAnswer: "data",
      }),
      shuffleOptions({
        question: "Fields can be rearranged by using the _______ action.",
        optionA: "drag and drop",
        optionB: "copy and paste",
        optionC: "mark and align",
        correctAnswer: "drag and drop",
      }),
      shuffleOptions({
        question: "Sorting in ascending order corresponds to _______.",
        optionA: "Sort A to Z",
        optionB: "Sort Downwards",
        optionC: "Sort Last First",
        correctAnswer: "Sort A to Z",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A field can be renamed by right-clicking it in Datasheet View.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Access can import or link data stored in other applications.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Splitting a table into smaller related tables reduces redundancy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A table’s data type cannot be changed once the field is created.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sorting permanently changes the physical storage order of records.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Field names can include uppercase, lowercase, numbers, and special characters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Using Ctrl + W saves the table and also closes it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The ID field uses the AutoNumber data type by default.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Records can be added only in Design View.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Access is included in the professional and higher editions of MS Office.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
