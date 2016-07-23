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