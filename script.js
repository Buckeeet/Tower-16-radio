const loginScreen = document.getElementById("login-screen");
const bootScreen = document.getElementById("boot-screen");
const mainUI = document.getElementById("main-ui");
const bootLines = document.getElementById("boot-lines");

function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Junction" && password === "XII12") {
    document.getElementById("tada").play();
    loginScreen.classList.add("hidden");

    setTimeout(() => {
      bootScreen.classList.remove("hidden");
      runBootSequence();
    }, 1000);
  } else {
    alert("Incorrect login.");
  }
}

function runBootSequence() {
  const lines = [
    "> Initializing boot core...",
    "> Starting up the fuse box...",
    "> Connecting to mainframe...",
    "> Finalizing launch...",
  ];

  let i = 0;
  const interval = setInterval(() => {
    if (i < lines.length) {
      bootLines.innerHTML += lines[i] + "<br/>";
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        bootScreen.classList.add("hidden");
        loadMainUI();
      }, 1000);
    }
  }, 1000);
}

function loadMainUI() {
  mainUI.classList.remove("hidden");
  const ps1 = document.getElementById("ps1");
  const vhs = document.getElementById("vhs");
  ps1.play();

  ps1.addEventListener("ended", () => {
    vhs.play();
  });
}

function processKeyword() {
  const keyword = document.getElementById("keyword").value.trim().toUpperCase();

  if (keyword === "LINK01") {
    window.location.href = "https://www.youtube.com";
  } else if (keyword === "ARCHIVE01") {
    document.getElementById("archive").classList.remove("hidden");
  } else {
    alert("Invalid code.");
  }
}
