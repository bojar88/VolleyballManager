let idMeczu = document.getElementById("id").value;
let downloadButton = document.getElementById("download");

downloadButton.addEventListener("click", () => {
  pobierzDane();
});

function pobierzDane() {
  const formData = new FormData();
  formData.append("login", "bojar88");
  formData.append("pass", "cXf@hRvd7e@psh@");
  fetch(
    "https://vm-manager.org/index.php?view=Login",

    {
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "post",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  ).then((res) => {
    console.log(res);
  });
}
