$(document).ready(function() {
    let currentRotation = 0;
    $("body").addClass("element");

    // Dice images array (dice1.png to dice6.png)
    const diceImages = ["./images/side_1_pip.png","./images/side_2_pips.png", "./images/side_3_pips.png", "./images/side_4_pips.png", "./images/side_5_pips.png", "./images/side_6_pips.png"];
    // const originalH1Text = $("h1").text();
    $("img ,p").click(function() {
        // currentRotation=0;
        currentRotation += 540; // 90 degrees * 6 rotations
        $("img").css("transform", `rotate(${currentRotation}deg)`);
        $("img").addClass("op");
    });
  
    // When rotation finishes, change dice image with animation
    $("img").on("transitionend", function() {
        const randomDiceIndex = Math.floor(Math.random() * 6);
        // $("img").css("transform", `rotate(${0}deg)`);
        // Add fade-out class to start the fade-out animation
        $("img").addClass("fade-out");
        $("img").removeClass("op");

        // Wait for the fade-out animation to complete before changing the image
        setTimeout(function() {
            // Change the dice image
            $("img").attr("src", diceImages[randomDiceIndex]);
            console.log($("img").attr("src"));
            if ($("img").attr("src").endsWith('side_6_pips.png')) {
                $("h1").text("🤓☝️ You WIN!!!");
            } else {
                // Reset the h1 text to its original value
                $("h1").text("Try Again😭");
            }
            // Reset rotation when new image is set to prevent further rotation affecting it
            // $("img").css("transform", "rotate(0deg)");

            // Remove the fade-out class and fade-in the new image
            $("img").removeClass("fade-out");
        }, 1500); // The fade-out duration is 0.5s, matching the CSS transition
    });
    
  
    
});