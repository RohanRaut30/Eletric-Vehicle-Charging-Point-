function populate(s1, s2) {
     var s1 = document.getElementById(s1);
     var s2 = document.getElementById(s2);

     s2.innerHTML = "";

     if (s1.value == "scooty") {
          var optionArray = ["ola|Ola", "ather|Ather", "bajaj|Bajaj", "tvs|TVS"];
     } else if (s1.value == "bike") {
          var optionArray = [
               "",
               "revolt|Revolt",
               "ride1up|Ride1UP",
               "tern|Tern",
               "gazelle|Gazelle",
          ];
     } else if (s1.value == "car") {
          var optionArray = [
               "",
               "tesla|Tesla",
               "tata|Tata",
               "mercedes|Mercedes",
               "apple|Apple",
          ];
     } else if (s1.value == "truckBus") {
          var optionArray = [
               "",
               "ashok|Ashok",
               "tata|Tata",
               "mercedes|Mercedes",
               "eichier|Eicher",
          ];
     }
     for (var option in optionArray) {
          var pair = optionArray[option].split("|");
          var newoption = document.createElement("option");

          newoption.value = pair[0];
          newoption.innerHTML = pair[1];
          s2.options.add(newoption);
     }
}

function populate1(m1, m2) {
     var m1 = document.getElementById(m1);
     var m2 = document.getElementById(m2);

     
     if (m1.value == "ola") {
        
          var optionArray1 = ["ola s1|Ola S1", "ola s1 pro|Ola S1 Pro"];
     }
     else if (m1.value == "ather") {
          
          var optionArray1 = ["ather 1|Ather 1", "ather 2|Ather 2"];
     } 
     else if (m1.value == "bajaj") {
         
          var optionArray1 = ["chetak 1|Chetak 1", "chetak pro|Chetak Pro"];
     } 
     else if (m1.value == "tvs") {
         
          var optionArray1 = ["tvs m|TVS M", "tvs 1|TVS 1"];
     }
     for (var option1 in optionArray1) {
         
          var pair = optionArray1[option1].split("|");
          var newoption1 = document.createElement("option");

          newoption1.value = pair[0];
          newoption1.innerHTML = pair[1];
          m2.options.add(newoption1);
     } 
}



