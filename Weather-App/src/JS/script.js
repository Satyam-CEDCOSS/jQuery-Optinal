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
        $(".section__box span").css("border", "4px solid grey");
        $(".section__box span").css("padding", "30px 50px");
        return users;
      }
      fetchUsers().then((users) => {
        users;
        console.log(users);
        if (place.length!=0){
          $("#place").text(users.location.name+" ")
          $("#country").text(" "+users.location.country)
          $("#complete_date").text(users.current.last_updated)
          $("#temprature").text(users.current.temp_c+" °C")
          $("#weather").text(users.current.condition.text)
        }
        else{
          $("#place").text("")
          $("#country").text("")
          $("#complete_date").text("")
          $("#temprature").text("")
          $("#weather").text("")
        }
      });
    }
  });
});
