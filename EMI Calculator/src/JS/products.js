function calculate() {
  let principle = $("#principle").val()
  let rate = $("#rate").val()
  let time = $("#time").val()
  if (principle && rate && time){
    intrest = (principle*time*rate)/100
    amount = (Number(principle) + Number(intrest))
    monthly_emi = amount/(time*12)
    $("#body--box").html(`<p><b>Total Intrest: ${intrest} ₹</b><br>
    <b>Total Payment: ${amount} ₹</b><br>
    <b>Monthly EMI: ${monthly_emi} ₹</b></p><br>`);
  }
  else{
    $("#body--box").html("<p><b>Please Fill All the Field</b></p>");
  }
}