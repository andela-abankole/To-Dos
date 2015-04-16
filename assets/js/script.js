// function to add lists
  function addList(table) {
      var table = document.getElementById(table);
        var tableLength = getTableLength(table);
          var textBoxInput = document.getElementById("textBox").value;

  if (textBoxInput === ""){
        return -1;
    }
      var addRow = table.insertRow(0);

// adds list items
    var addCell = addRow.insertCell(0);
    var cellValue = document.createElement("input");
        cellValue.type = "text";
        cellValue.style.width = "760px";
        cellValue.style.marginTop = "5px";
        cellValue.name = "textBox";
        cellValue.value = textBoxInput;

// adds check boxes
    var addCheckBox = addRow.insertCell(1);
    var checkBoxValue = document.createElement("input");
        checkBoxValue.type = "checkbox";
        checkBoxValue.style.width = "15px";
        checkBoxValue.style.height = "20px";
        checkBoxValue.style.backgroundColor = "#E3DEDB";
        checkBoxValue.style.marginTop = "5px";
        checkBoxValue.name = "checkBox";

// adds priority
    var priority = document.getElementById("selectBox");
    var priorityValue = priority.options[priority.selectedIndex].value;
    var priorityText = priority.options[priority.selectedIndex].innerHTML;
        addRow.id = priorityValue;

    var addPriorityLabel = addRow.insertCell(2);
    var priorityBoxText = document.createElement("text");
    var priorityBoxTextNode = document.createTextNode(priorityText);
        priorityBoxText.appendChild(priorityBoxTextNode);
        priorityBoxText.style.marginTop = "5px";
        priorityBoxText.style.color = "white";
        priorityBoxText.style.fontWeight = "bold";
        priorityBoxText.name = "textLabel";

//Sets priority Color for every condition selected
  if (priorityText === "High") {
       priorityBoxText.style.backgroundColor = "green";
    }
    else if (priorityText === "Medium") {
        priorityBoxText.style.backgroundColor = "orange";
      }
      else if (priorityText === "Low") {
            priorityBoxText.style.backgroundColor = "red";
        }
        else if (priorityText === "None") {
              priorityBoxText.style.backgroundColor = "transparent";
        } 
          else {
               priorityBoxText.style.backgroundColor = "transparent";
               priorityBoxText.style.color = "transparent";
   }

    addCell.appendChild(cellValue);
    addPriorityLabel.appendChild(priorityBoxText);
    addCheckBox.appendChild(checkBoxValue);
    sortList();
    document.getElementById("textBox").value = "";
}

// returns length of table
  function getTableLength(rows) {
      return rows.rows.length;
  }


// Deletes selected lists
  function deleteList(table) {
    var table = document.getElementById(table);
      var tableLength = getTableLength(table);

      for (var i = 0; i < tableLength; i++) { // loop through the lists
          var tableRow = table.rows[i]; 
            var checkBox = tableRow.cells[1].childNodes[0];
              if (checkBox !== null && checkBox.checked === true) { // delete if checkbox selected
                  table.deleteRow(i);
                  tableLength--;
                  i--
          } // end if
      } // end for loop
  } // end deleteList method


//Clears all Checked and Uncheck Box
function deleteAllList(table) {
    var table = document.getElementById(table);
      var tableLength = getTableLength(table);

      for (var i = 0; i < tableLength; i++) { // loop through the lists
          var tableRow = table.rows[i]; 
            var checkBox = tableRow.cells[1].childNodes[0];
              if (checkBox !== null || checkBox.checked === true) { // delete if checkbox selected
                  table.deleteRow(i);
                  tableLength--;
                  i--
        } // end if
    } // end for loop
} // end deleteList method

