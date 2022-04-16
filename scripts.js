function doForm(){
    var xhr = new XMLHttpRequest();
    var url = 'api.hsforms.com/submissions/v3/integration/submit/3df04ea6-c44b-4622-b223-78713fd26d9d';
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var hutk = document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    
    var data = 
           {"fields": [
            {
              "objectTypeId": "0-1",
              "name": "email",
              "value": email
            },
            {
              "objectTypeId": "0-1",
              "name": "firstname",
              "value": firstName
            },
              {
              "objectTypeId": "0-1",
              "name": "lastname",
              "value": lastName
            }
             
          ],
          "context": {
            "hutk": hutk}
        };
      var final_data = JSON.stringify(data)
    
    
     
      xhr.open('POST', url);
 
      xhr.setRequestHeader('Content-Type', 'application/json');
  
      xhr.onreadystatechange = function() {
          if(xhr.readyState == 4 && xhr.status == 200) { 
            alert(xhr.responseText);
          } else if (xhr.readyState == 4 && xhr.status == 400){ 
              alert(xhr.responseText); 
          } else if (xhr.readyState == 4 && xhr.status == 403){ 
              alert(xhr.responseText); 
          } else if (xhr.readyState == 4 && xhr.status == 404){ 
              alert(xhr.responseText); 
          }
         }
      
      xhr.send(final_data)
      alert("Pawwww yeah! You succuessfuly submited your info!");
   }
