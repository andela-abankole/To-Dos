var sortList = function (ToDoListTable) {
      //query the DOM for the element with id of containing element, and create a new jQuery object saved to table 
      var table =  $('#ToDoListTable');
      //capturing any number of "tr" that are descendants of table
      var rows = table.find('tr').get();
        //sorts the elements for priorities and returns
        rows.sort(function (a, b) {
            var keyA = $(a).attr('id');
              var keyB = $(b).attr('id');

              if (keyA < keyB) 
                 return 1;

              if (keyA > keyB)
                 return -1;
          return 0;
        });
      //Loop over both objects and callback
      $.each(rows, function (index, row) {
          //Get the children "tbody" of table and inserts row as the content 
          table.children('tbody').append(row);
  });
}