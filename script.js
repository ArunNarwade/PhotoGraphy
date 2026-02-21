
document.getElementById("sendBtn").addEventListener("click", () => {
    const msg = document.getElementById("successMsg");
    msg.classList.add("show");

    setTimeout(() => {
        msg.classList.remove("show");
    }, 3000);
});




