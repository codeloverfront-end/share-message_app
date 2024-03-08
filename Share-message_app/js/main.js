// // Target the input and form
const secretMessage = document.querySelector("#message");
const linkToSecret = document.querySelector("#link");
const displaySecretMessage = document.querySelector(".secret");
const targetSecretForm = document.querySelector("#SM");
const targetSecretLink = document.querySelector("#LS");
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
      linkToSecret.value = url.href;
      console.log(url.href);
    } catch (error) {
      console.error("Error creating URL: ", error.message);
    }
  }
});
