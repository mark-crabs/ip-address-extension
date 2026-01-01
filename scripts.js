
document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.ipify.org/?format=json")
    .then(response => response.json())
    .then(data => {
        console.log("Public IP Address:", data.ip);
        document.getElementById("ip-address-data").innerText = data.ip;
    })
    .catch(error => {
        console.error("Error fetching IP data:", error);
    });
})
