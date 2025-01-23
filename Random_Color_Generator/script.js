const getColor = () =>{
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomnumber.toString(16);
    document.body.style.background = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    document.getElementById("color-code").style.color = randomCode;
    // document.getElementById("btn").style.color = randomCode;

    navigator.clipboard.writeText(randomCode);

    const notification = document.getElementById("notification");

    notification.style.display = "block";
    
    setTimeout(() => {
        notification.style.display = "none";
    }, 1000);

}
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
getColor();