// Given Data 

let data = [
  {
    title: "Robot 2.0",
    rating: 4.3,
  },
  {
    title: "Adipurush",
    rating: 0.3,
  },
];

// Display Function 
let cnt = 0;
function display() {
  cnt = 0;
  let txt = "";
  data.forEach((element) => {
    txt += `<tr><td>${element.title}</td>
		<td>${element.rating}</td>
		<td><button id="search" onclick="delete_row(${cnt++})">X</button></td></tr>`;
  });
  $("#table_body").html(txt);
}
display();

// Delete Function 
function delete_row(val) {
  data.splice(val, 1);
  display();
}

// Add Function
function add() {
  let title = $("#title").val();
  let rating = $("#rating").val();
  let arr = {title: title , rating : rating };
  data.push(arr);
  // console.log(data);
  display();
}

// Filter Function 
function filtering() {
  let val1 = $("#filter_sort").val();
  let val2 = $("#filter_order").val();
  if (val1 && val2){
    if (val1 == "rating"){
      if (val2 == "ascending"){
        data = data.sort(function(a, b) {
          return a.rating - b.rating;
        });
      }
      else if(val2 == "descending") {
        data = data.sort(function(a, b) {
          return b.rating - a.rating;
        });
      }
    }
    else if (val1 == "title"){
      if (val2 == "ascending"){
        data = data.sort((a, b) => (a.title > b.title) ? 1: -1);
      }
      else if(val2 == "descending") {
        data = data.sort((a, b) => (a.title < b.title) ? 1: -1);
      }
    }
    display()
  }
}

