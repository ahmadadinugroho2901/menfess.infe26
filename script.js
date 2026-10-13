const form = document.getElementById("menfessForm");
const formPage = document.getElementById("formPage");
const successPage = document.getElementById("successPage");
const againBtn = document.getElementById("againBtn");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const message = {
    from: form.from.value.trim(),
    to: form.to.value.trim(),
    song: form.song.value.trim(),
    message: form.message.value.trim(),
    date: new Date().toISOString()
  };

  if (!message.from || !message.to || !message.message) {
    alert("Mohon isi From, To, dan Message.");
    return;
  }

  try {
    const oldMessages = JSON.parse(
      localStorage.getItem("menfessDemo") || "[]"
    );

    oldMessages.push(message);

    localStorage.setItem(
      "menfessDemo",
      JSON.stringify(oldMessages)
    );

    formPage.classList.add("hidden");
    successPage.classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    alert("Pesan tidak bisa disimpan di browser ini.");
  }
});

againBtn.addEventListener("click", function () {
  form.reset();

  successPage.classList.add("hidden");
  formPage.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
});
