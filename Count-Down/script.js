const endDate = "23 January 2025 08:00 PM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    let difference = Math.floor((end - now) / 1000);

    if (difference <= 0) {
        clearInterval(timer);
        inputs.forEach(input => input.value = "0");
        return;
    }

    inputs[0].value = Math.floor(difference / (3600 * 24)); // Days
    inputs[1].value = Math.floor(difference / 3600) % 24;   // Hours
    inputs[2].value = Math.floor(difference / 60) % 60;     // Minutes
    inputs[3].value = difference % 60;                      // Seconds
};

clock();
const timer = setInterval(clock, 1000);
