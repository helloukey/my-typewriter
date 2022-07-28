function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "typeWriter", () => $8a255a193882a281$export$245947e8fe008c97);
const $8a255a193882a281$var$textContainer = document.querySelector("#my-typewriter");
let $8a255a193882a281$var$count = 0;
let $8a255a193882a281$var$index = 0;
let $8a255a193882a281$var$currentText = "";
let $8a255a193882a281$var$containerText = "";
let $8a255a193882a281$var$direction = true;
const $8a255a193882a281$export$245947e8fe008c97 = ({ texts: texts , letterPause: letterPause = 1200 , typeSpeed: typeSpeed = 0 , eraseSpeed: eraseSpeed = 100 , blinkSpeed: blinkSpeed = 300 , speed: speed = 200 ,  })=>{
    // Blink Cursor
    const blinkCursor = document.createElement("span");
    blinkCursor.textContent = "|";
    setInterval(()=>{
        blinkCursor.style.opacity = blinkCursor.style.opacity == 0 ? 1 : 0;
    }, blinkSpeed);
    const typing = ()=>{
        // Reset count after loop
        if ($8a255a193882a281$var$count === texts.length) $8a255a193882a281$var$count = 0;
        // Grab current text from array
        $8a255a193882a281$var$currentText = texts[$8a255a193882a281$var$count];
        // Start erasing when all letters completed
        if ($8a255a193882a281$var$containerText.length === $8a255a193882a281$var$currentText.length) $8a255a193882a281$var$direction = false;
        // Start typing when letter length equals 1
        if ($8a255a193882a281$var$containerText.length === 1) $8a255a193882a281$var$direction = true;
        if ($8a255a193882a281$var$direction) {
            // typing speed if available
            if (typeSpeed > 0) speed = typeSpeed;
            $8a255a193882a281$var$containerText = $8a255a193882a281$var$currentText.slice(0, $8a255a193882a281$var$index++);
            $8a255a193882a281$var$textContainer.textContent = $8a255a193882a281$var$containerText;
            $8a255a193882a281$var$textContainer.appendChild(blinkCursor);
            if ($8a255a193882a281$var$containerText.length === $8a255a193882a281$var$currentText.length) // If letterPause if defined
            {
                if (letterPause > 0) // Pause at last letter
                speed = letterPause;
            }
        } else {
            // Erase speed if available
            if (eraseSpeed > 0) // change speed to eraseSpeed
            speed = eraseSpeed;
            $8a255a193882a281$var$containerText = $8a255a193882a281$var$currentText.slice(0, $8a255a193882a281$var$currentText.length - $8a255a193882a281$var$index++);
            $8a255a193882a281$var$textContainer.textContent = $8a255a193882a281$var$containerText;
            $8a255a193882a281$var$textContainer.appendChild(blinkCursor);
            // Move to next word when completed
            if ($8a255a193882a281$var$containerText.length === 1) {
                $8a255a193882a281$var$count++;
                $8a255a193882a281$var$index = 0;
                $8a255a193882a281$var$direction = true;
            }
        }
        setTimeout(typing, speed);
    };
    typing();
};


//# sourceMappingURL=myTypewriter.js.map
