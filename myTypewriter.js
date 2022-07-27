const textContainer = document.querySelector("#my-typewriter");

let count = 0;
let index = 0;
let currentText = "";
let containerText = "";
let direction = true;

const typeWriter = ({
  texts,
  letterPause = 1200,
  typeSpeed = 0,
  eraseSpeed = 100,
  blinkSpeed = 300,
  speed = 200,
}) => {
  // Blink Cursor
  const blinkCursor = document.createElement("span");
  blinkCursor.textContent = "|";
  setInterval(() => {
    blinkCursor.style.opacity = blinkCursor.style.opacity == 0 ? 1 : 0;
  }, blinkSpeed);

  const typing = () => {
    // Reset count after loop
    if (count === texts.length) {
      count = 0;
    }

    currentText = texts[count];

    if (containerText.length === currentText.length) {
      direction = false;
    }
    if (containerText.length === 1) {
      direction = true;
    }

    if (direction) {
      // typing speed if available
      if (typeSpeed > 0) {
        speed = typeSpeed;
      }
      containerText = currentText.slice(0, index++);
      textContainer.textContent = containerText;
      textContainer.appendChild(blinkCursor);
      if (containerText.length === currentText.length) {
        // If letterPause if defined
        if (letterPause > 0) {
          // Pause at last letter
          speed = letterPause;
        }
      }
    } else {
      // erase speed if available
      if (eraseSpeed > 0) {
        speed = eraseSpeed;
      }
      containerText = currentText.slice(0, currentText.length - index++);
      textContainer.textContent = containerText;
      textContainer.appendChild(blinkCursor);
      if (containerText.length === 1) {
        count++;
        index = 0;
        direction = true;
      }
    }
    setTimeout(typing, speed);
  };

  typing();
};

export { typeWriter };
