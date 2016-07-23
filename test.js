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
            wellSection.addClass('well');
            wellSection.attr('id', 'characterWell-' + i)
            $('#wellSection').append(wellSection);
            $("#characterWell-" + i).append("<h2>" + data[i].name + "</h2>");
            $("#characterWell-" + i).append("<h3>Role: " + data[i].role + "</h4>");
            $("#characterWell-" + i).append("<h3>Age: " + data[i].age + "</h4>");
            $("#characterWell-" + i).append("<h3>Force Points: " + data[i].forcePoints + "</h4>");
        }
    })
    