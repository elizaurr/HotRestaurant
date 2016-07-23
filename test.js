// On the click the newCharacter data will be added

    $('#addBtn').on("click", function(){

      var newTable = 
      {
        name: $("#name").val().trim(),
        phoneNumber: $("#phone").val().trim(),
        eMail: $("#eMail").val().trim(),
        uniqueID: $("#ID").val().trim()
      };

      // Question: What does this code do??
      $.post( "http://localhost:3000/api/new", newTable)
        .done(function(data){
          console.log(data);
          alert("Adding character...")
        })

      return false;

    }); 

    // Code to push all data on the click

     var currentURL = window.location.origin;
    console.log(currentURL + "/api");
    $.get(currentURL + "/api", function(data) {
        for (var i = 0; i < data.length; i++) {
            var wellSection = $("<div>");
            tableSection.addClass('well');
            tableSection.attr('id', 'tableWell-' + i)
            $('#wellSection').append(wellSection);
            $("#tableWell-" + i).append("<h2>data: " + data[i].name + "</h2>");
            $("#tableWell-" + i).append("<h3>phoneNumber: " + data[i].phoneNumber + "</h4>");
            $("#tableWell-" + i).append("<h3>eMail: " + data[i].eMail + "</h4>");
            $("#tableWell-" + i).append("<h3>uniqueID: " + data[i].uniqueID + "</h4>");
        }
    })
    