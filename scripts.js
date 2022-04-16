function doForm(){
    var xhr = new XMLHttpRequest();
    var url = 'api.hsforms.com/submissions/v3/integration/submit/3df04ea6-c44b-4622-b223-78713fd26d9d';
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    
    
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
            "hutk": ':hutk'}
        };
      var final_data = JSON.stringify(data)
    
    
     
      xhr.open('POST', url);
      // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
      xhr.setRequestHeader('Content-Type', 'application/json');
  
      xhr.onreadystatechange = function() {
          if(xhr.readyState == 4 && xhr.status == 200) { 
              alert(xhr.responseText); // Returns a 200 response if the submission is successful.
          } else if (xhr.readyState == 4 && xhr.status == 400){ 
              alert(xhr.responseText); // Returns a 400 error the submission is rejected.          
          } else if (xhr.readyState == 4 && xhr.status == 403){ 
              alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.           
          } else if (xhr.readyState == 4 && xhr.status == 404){ 
              alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found     
          }
         }
  
  
      // Sends the request 
      
      xhr.send(final_data)
   }
