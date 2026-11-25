const service = document.querySelector("#service");
const repairs = document.querySelector("#repairs");
const total = document.querySelector("#total");

function showEstimate() {
  const count = Number(repairs.value);

  if (repairs.value === "" || !Number.isInteger(count) || count < 0) {
    total.textContent = "Enter a whole number from 0";
    return;
  }

  const price = Number(service.value) + count * 5;
  total.textContent = "EUR " + price;
}

service.addEventListener("change", showEstimate);
repairs.addEventListener("input", showEstimate);

showEstimate();

const booking = document.querySelector("#booking");
const message = document.querySelector("#message");

booking.addEventListener("submit", function (event) {
  event.preventDefault();

  message.textContent =
    "Nothing was sent and nothing was booked. " +
    "This page cannot store bookings.";
});