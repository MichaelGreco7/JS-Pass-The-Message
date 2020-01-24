// Target Button
const sendBtn = document.querySelector("#sendBtn");

// Target Send Message
const messageIn = document.querySelector("#messageIn");

// Target Send Message
const messageOut = document.querySelector("#messageOut");

// Create event listener to button with call back function
sendBtn.addEventListener("click", sendMsg);

// Create callback function
function sendMsg() {
  let content = messageIn.value;
  //  console.log(content)
  if (content === "") {
    alert("Please Enter Valid Value.  Current Value Is Empty.");
  } else {
    messageOut.innerHTML = content;
    messageIn.value = "";
  }
}
