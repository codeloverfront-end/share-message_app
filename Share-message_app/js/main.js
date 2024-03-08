// // Target the input and form
const secretMessage = document.querySelector("#message");
const linkToSecret = document.querySelector("#link");
const displaySecretMessage = document.querySelector(".secret");
const targetSecretForm = document.querySelector("#SM");
const targetSecretLink = document.querySelector("#LS");
const targetFontLink = document.querySelector(".fa-link");

// // Making sure that only the first form is displayed

targetSecretLink.style.display = "none";
displaySecretMessage.style.display = "none";

// // If submitting the form where the secret message is contained, display only the form of the link
targetSecretForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let messageValue = secretMessage.value;
  console.log(messageValue);
  // // Making sure that the input isn't empty
  if (messageValue !== "") {
    // Encode it on base64
    const encoding64 = btoa(messageValue);
    if (encoding64 && messageValue !== "") {
      console.log("Your message has been encoded on base 64");
    } else {
      if (!encoding64) {
        console.log("Your message hasn't been encoded on base 64");
      } else if (messageValue === "");
      {
        console.log("You didn't write any message");
      }
    }
    // Get the user input
    console.log("The secret form has been sent");
    targetSecretForm.style.display = "none";
    displaySecretMessage.style.display = "none";
    targetSecretLink.style.display = "block";
    // Hash my URL
    try {
      const url = new URL("https://mondomaine.com");
      url.hash = encoding64;
      secretMessage.value = url.href;
      console.log(url.href);
      linkToSecret.value = url;
      // if clicking on the link
      targetFontLink.addEventListener("click", () => {
        navigator.clipboard.writeText(linkToSecret);
        try {
          console.log("The link has been registered properly to the clipboard");
          alert("Your link has been well copied to the clipboard");
        } catch (error) {
          console.error("Error copying link to clipboard:", error);
          alert(
            "There has been a mistake on copying the link to clipboard, please try again"
          );
        }
      });
    } catch (error) {
      console.error("Error creating URL: ", error.message);
    }
  }
});
// Next step : managing the click on the symbol "link" to avoid copy and paste : done
// Next step : figuring out to access at the secret message
