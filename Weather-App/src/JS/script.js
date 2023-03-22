// Main Function
let API_URL =
  "https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=$location=";

$(document).ready(function () {
  $("#search_bar").keypress(function () {
    if (event.which == 13) {
      let place = $("#search_bar").val();
      async function fetchUsers() {
        const response = await fetch(API_URL + place);
        const users = await response.json();
        return users;
      }
      fetchUsers().then((users) => {
        users;
        console.log(users);
        // console.log(dates)
        // console.log(dates.getDay())
        $("#place").text(users.location.name)
        $("#country").text(users.location.country)
        $("#complete_date").text(users.current.last_updated)
        $("#temprature").text(users.current.temp_c)
        $("#weather").text(users.current.condition.text)
        
        // users.forEach(element => {
        //   txt+="<tr><td>"+element.id+"</td><td>"+element.title+"</td><td>"+element.completed+"</td></tr>";
        // });
        // body.innerHTML = txt;
      });
    }
  });
});
