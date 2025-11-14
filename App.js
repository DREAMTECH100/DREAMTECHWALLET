function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("errorMsg");

  if (user === "Staceyjordan" && pass === "stacey1234") {
    window.location.href = "wallet.html";
  } else {
    msg.textContent = "Invalid username or password";
  }
}

/* COUNTDOWN LOGIC */
function updateCountdown() {
  const releaseDate = new Date();
  releaseDate.setMonth(releaseDate.getMonth() + 3); // 3 months later

  const now = new Date();
  const diff = releaseDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerHTML =
    `${days} days ${hours} hrs ${minutes} mins`;
}

if (window.location.pathname.includes("wallet.html")) {
  setInterval(updateCountdown, 1000);
}
