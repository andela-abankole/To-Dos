// function to add lists
var addList = function (table) {
    var table = document.getElementById(table);
    var tableLength = getTableLength(table);
    //stores the element "textBox" as textBoxInput
    var textBoxInput = document.getElementById("textBox").value;

        //Checks if the textBoxInput that has been declared above is empty and should return negative
        if (textBoxInput === ""){
          return -1;
        }
        
    //Sets number of rows "tr"
    var addRow = table.insertRow(0);

        // adds list items
            //Sets number of rows "td" as 0
            var addCell = addRow.insertCell(0);
            //Creates a empty element input and pass in the styles on it
            var cellValue = document.createElement("input");
                //Styles, type and value
                cellValue.type = "text";
                cellValue.style.width = "760px";
                cellValue.style.marginTop = "5px";
                cellValue.name = "textBox";
                cellValue.value = textBoxInput;

        // adds check boxes
            //Sets number of rows "td" as 1
            var addCheckBox = addRow.insertCell(1);
            //Creates a empty element input and pass in the styles on it
            var checkBoxValue = document.createElement("input");
                //Styles, type
                checkBoxValue.type = "checkbox";
                checkBoxValue.style.width = "15px";
                checkBoxValue.style.height = "20px";
                checkBoxValue.style.backgroundColor = "#E3DEDB";
                checkBoxValue.style.marginTop = "5px";
                checkBoxValue.name = "checkBox";

        // adds priority
            //Creates a variable priority to be equall the element selectBox coming in from HTML
            var priority = document.getElementById("selectBox");
            var priorityValue = priority.options[priority.selectedIndex].value;
            var priorityText = priority.options[priority.selectedIndex].innerHTML;
                addRow.id = priorityValue;

            //Sets number of rows "td" as 2
            var addPriorityLabel = addRow.insertCell(2);
            //Creates a empty element text and pass in the styles on it
            var priorityBoxText = document.createElement("text");

            //Creates a text node so priorityBoxTextNode is a Text node while priorityText is a string 
            //containing the data to be put in the text node.
              var priorityBoxTextNode = document.createTextNode(priorityText);
              //Inserts 
              priorityBoxText.appendChild(priorityBoxTextNode);
                //Styles
                priorityBoxText.style.marginTop = "5px";
                priorityBoxText.style.color = "white";
                priorityBoxText.style.fontWeight = "medium";
                priorityBoxText.name = "textLabel";

      //Sets priority Color for every condition selected
      if (priorityText === "High") {
          priorityBoxText.style.backgroundColor = "green";
        } else if (priorityText === "Medium") {
          priorityBoxText.style.backgroundColor = "orange";
        } else if (priorityText === "Low") {
          priorityBoxText.style.backgroundColor = "red";
        } else if (priorityText === "None") {
          priorityBoxText.style.backgroundColor = "black";
        } else {
          priorityBoxText.style.backgroundColor = "grey";
          priorityBoxText.style.color = "transparent";
        }
          //Inserts the value from e.g cellValue into addCell
          addCell.appendChild(cellValue);
          addPriorityLabel.appendChild(priorityBoxText);
          addCheckBox.appendChild(checkBoxValue);
            sortList();
          document.getElementById("textBox").value = "";
}
  // returns length of table
  var getTableLength = function (rows) {
      return rows.rows.length;
    }
  //Sets date for all post
  var date = new Date();
  document.getElementById("d").innerHTML = date.toUTCString();

// Deletes selected lists
var deleteList = function (table) {
  var table = document.getElementById(table);
  var tableLength = getTableLength(table);
    for (var i = 0; i < tableLength; i++) { // loops through the lists
        var tableRow = table.rows[i]; 
        // So, first we check if the object is not empty, if the object has child nodes
        var checkBox = tableRow.cells[1].childNodes[0];
            if (checkBox !== null && checkBox.checked === true) { // delete if checkbox selected
              table.deleteRow(i);
              tableLength--;
              i--
            } // end if
    } // end for loop
} // end deleteList method

//Clears all Checked and Unchecked Box
function deleteAllList(table) {
    var table = document.getElementById(table);
    var tableLength = getTableLength(table);
      for (var i = 0; i < tableLength; i++) { // loop through the lists
        var tableRow = table.rows[i]; 
        var checkBox = tableRow.cells[1].childNodes[0];
          if (checkBox !== null || checkBox.checked === true) { // delete if checkbox selected or not
            table.deleteRow(i);
            tableLength--;
            i--
          } // end if
      } // end for loop
} // end deleteAllList method
