export const chapter = "Chapter - 2: Working With Table In Word";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the primary function of Microsoft Word?",
          optionA: "Creating spreadsheets",
          optionB: "Developing presentations",
          optionC: "Word processing",
          correctAnswer: "C",
        },
        {
          question: "What is the purpose of using tables in Microsoft Word?",
          optionA: "Encrypting data",
          optionB: "Organizing information in a tabular form",
          optionC: "Creating graphical representations",
          correctAnswer: "B",
        },
        {
          question: "How is a table inserted in a Word document?",
          optionA: "By clicking on the Format tab",
          optionB:
            "By selecting Table and then Insert Table from the Insert tab",
          optionC:
            "By choosing Table and then Table Properties from the Home tab",
          correctAnswer: "B",
        },
        {
          question: "How can the style of a table be modified in Word?",
          optionA: "Through the Layout tab",
          optionB: "By right-clicking on the table",
          optionC: "By selecting the Table Design tab and choosing a style",
          correctAnswer: "C",
        },
        {
          question:
            "Which action allows users to insert text into a table cell?",
          optionA: "Right-clicking and selecting 'Insert Text'",
          optionB: "Triple-clicking the cell",
          optionC: "Clicking on the Table Design tab",
          correctAnswer: "B",
        },
        {
          question: "How can a range of cells be selected in a table?",
          optionA: "Triple-clicking the cells",
          optionB: "Clicking and dragging the mouse over the cells",
          optionC: "Right-clicking and choosing 'Select Range'",
          correctAnswer: "B",
        },
        {
          question: "What action selects an entire row in a table?",
          optionA: "Double-clicking on the row",
          optionB: "Triple-clicking near the border of the row",
          optionC: "Clicking near the border of the row",
          correctAnswer: "C",
        },
        {
          question: "How are additional rows added to an existing table?",
          optionA: "Through the Insert tab",
          optionB: "By right-clicking and selecting 'Add Row'",
          optionC:
            "Using the Layout tab and choosing Insert Above or Insert Below",
          correctAnswer: "C",
        },
        {
          question: "How can a column be deleted from a table?",
          optionA: "By selecting Delete Column from the Home tab",
          optionB:
            "Through the Layout tab, by choosing Delete and then Delete Columns",
          optionC: "Right-clicking and choosing 'Remove Column'",
          correctAnswer: "B",
        },
        {
          question:
            "Where can users change the alignment of text within table cells in Word?",
          optionA: "Home tab",
          optionB: "Layout tab",
          optionC: "Design tab",
          correctAnswer: "A",
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
            "To insert a table in Word, you need to place the cursor within the document and select ___________ from the Insert tab.",
          optionA: "Table Design",
          optionB: "Table Properties",
          optionC: "Insert Table",
          correctAnswer: "Insert Table",
        },
        {
          question:
            "Text can be inserted into a table cell by ___________ the cell and typing the text.",
          optionA: "double-clicking",
          optionB: "right-clicking",
          optionC: "triple-clicking",
          correctAnswer: "triple-clicking",
        },
        {
          question:
            "Users can select an entire row in a table by clicking ___________ the border of the row.",
          optionA: "near",
          optionB: "on",
          optionC: "away from",
          correctAnswer: "near",
        },
        {
          question:
            "The action to add a new column to an existing table is performed by clicking in the column and then using the ___________ tab.",
          optionA: "Design",
          optionB: "Layout",
          optionC: "Insert",
          correctAnswer: "Layout",
        },
        {
          question:
            "Deleting a row in a table involves selecting the row and using the options available in the ___________ tab.",
          optionA: "Insert",
          optionB: "Format",
          optionC: "Layout",
          correctAnswer: "Layout",
        },
        {
          question:
            "Users can resize a table in Word by dragging the ___________ that appears on the table's borders.",
          optionA: "handle",
          optionB: "cursor",
          optionC: "toolbar",
          correctAnswer: "handle",
        },
        {
          question:
            "To change the alignment of text within table cells, users should navigate to the ___________ tab.",
          optionA: "Home",
          optionB: "Layout",
          optionC: "Format",
          correctAnswer: "Home",
        },
        {
          question:
            "Additional information can be added to an existing table by inserting ___________ or ___________.",
          optionA: "columns, rows",
          optionB: "cells, paragraphs",
          optionC: "shapes, images",
          correctAnswer: "columns, rows",
        },
        {
          question:
            "Users can move a table within a document by dragging it using the ___________ that appears on the table's upper left corner.",
          optionA: "handle",
          optionB: "toolbar",
          optionC: "ribbon",
          correctAnswer: "handle",
        },
        {
          question:
            "The style of a table in Word can be modified by selecting a different style from the ___________ tab.",
          optionA: "Design",
          optionB: "Format",
          optionC: "Table Tools",
          correctAnswer: "Design",
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
            "Microsoft Word is primarily used for spreadsheet calculations.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Tables in Word can only contain text and not graphics.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "One can add or delete rows and columns in a Word table.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The layout and style of a table cannot be modified in Microsoft Word.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Tables inserted in a Word document cannot be moved to another location.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Text cannot be inserted into a table cell in Microsoft Word.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In a Word table, users cannot select entire rows or columns.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Tables in Word cannot be resized to adjust their dimensions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "A table's alignment cannot be changed in Microsoft Word.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Users cannot format the text within the cells of a table in Word.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
