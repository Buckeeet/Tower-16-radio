const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginScreen = document.getElementById("login-screen");
const bootScreen = document.getElementById("boot-screen");
const bootContent = document.getElementById("boot-content");
const mainUI = document.getElementById("main-ui");
const keywordInput = document.getElementById("keyword");
const submitKeyword = document.getElementById("submit-keyword");
const archive = document.getElementById("archive");

const tada = document.getElementById("tada");
const ps1 = document.getElementById("ps1");
const vhs = document.getElementById("vhs");

const correctUsername = "Junction";
const correctPassword = "XII12";

loginBtn.addEventListener("click", () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === correctUsername && password === correctPassword) {
    tada.play();
    loginScreen.classList.add("hidden");
    bootScreen.classList.remove("hidden");
    startBootSequence();
  } else {
    alert("Incorrect login. Try again.");
  }
});

function startBootSequence() {
  const bootLines = [
    "Starting up...",
    "Checking system integrity...",
    "Initializing core modules...",
    "Booting memory stacks...",
    "Engaging subroutines...",
    "Loading fuse box...",
    "Stabilizing input/output flow...",
    "Accessing vault memory...",
    "Finalizing environment...",
    "System ready."
  ];

  let index = 0;
  const interval = setInterval(() => {
    if (index < bootLines.length) {
      bootContent.textContent += bootLines[index] + "\n";
      index++;
    } else {
      clearInterval(interval);
      setTimeout(loadMainUI, 500);
    }
  }, 400);
}

function loadMainUI() {
  bootScreen.classList.add("hidden");
  mainUI.classList.remove("hidden");
  ps1.play();
  ps1.addEventListener("ended", () => {
    vhs.play();
  });
}

submitKeyword.addEventListener("click", () => {
  const code = keywordInput.value.trim();
  if (code === "LINK01") {
    window.location.href = "https://www.youtube.com";
  } else if (code === "ARCHIVE01") {
    archive.classList.remove("hidden");
  } else {
    alert("Invalid code.");
  }
});
