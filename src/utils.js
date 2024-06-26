export function displayDialogue(text, onDisplayEnd) {
  const dialogueUI = document.getElementById("textbox-container");
  const dialogue = document.getElementById("dialogue");

  dialogueUI.style.display = "block"; // Make the textbox container visible

  // Text scrolling implementation
  let index = 0;
  let currentText = "";
  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      dialogue.innerHTML = currentText;
      index++;
      return;
    }

    clearInterval(intervalRef);
  }, 5);

  // Logic for close-btn
  const closeBtn = document.getElementById("close");

  function onCloseBtnClick() {
    onDisplayEnd();
    dialogueUI.style.display = "none"; // Hide the textbox container
    dialogue.innerHTML = ""; // Clear the textbox
    clearInterval(intervalRef);
    closeBtn.removeEventListener("click", onCloseBtnClick); // Remove the function itself so its recursively called
  }

  closeBtn.addEventListener("click", onCloseBtnClick);
}

export function setCamScale(k) {
  const resizeFactor = k.width() / k.height();
  if (resizeFactor < 1) {
    k.setCamScale(k.vec2(1));
    return;
  }

  k.camScale(k.vec2(1.5));
}
