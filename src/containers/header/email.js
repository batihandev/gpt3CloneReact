document.addEventListener("DOMContentLoaded", () => {
  let email;
  const emailButton = document.getElementById("email-send-button");
  const sendEmail = (req, res) => {
    email = document.getElementById("emailget").value;
    console.log(email);
    req = email;
    fetch(`/mail/{$email}`, {
      method: "post",
      body: email,
    });
  };
  emailButton.addEventListener("click", sendEmail);
});
