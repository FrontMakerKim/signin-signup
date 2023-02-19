//정규식 조건 부여
const SignupRegTest = (value) => {
  const regValue = new RegExp("^[a-zA-Z][0-9a-zA-Z]{4,7}$");
  return regValue.test(value);
};

//signup text출력
const SignupText = (value, reg, text) => {
  if (reg === true) {
    text.textContent = "";
  } else {
    if (value.length === 0) {
      text.textContent = "입력해라";
    } else {
      text.textContent = "문법맞춰라";
    }
  }
};

//signup-name
const $signupName = document.querySelector(".signup-name");
const $signupNameText = document.querySelector(".signup-name-text");

$signupName.addEventListener("focusout", (e) => {
  const nameCurrentValue = e.target.value;
  const nameRegTest = SigninRegTest(nameCurrentValue);
  SignupText(nameCurrentValue, nameRegTest, $signupNameText);
});

//signup-userName
const $signupUserName = document.querySelector(".signup-user-name");
const $signupUserNameText = document.querySelector(".signup-user-name-text");

$signupUserName.addEventListener("focusout", (e) => {
  const userNameCurrentValue = e.target.value;
  const userNameRegTest = SigninRegTest(userNameCurrentValue);
  SignupText(userNameCurrentValue, userNameRegTest, $signupUserNameText);
});

//signup-id
const $signupId = document.querySelector(".signup-id");
const $signupIdText = document.querySelector(".signup-id-text");

$signupId.addEventListener("focusout", (e) => {
  const idCurrentValue = e.target.value;
  const idRegTest = SigninRegTest(idCurrentValue);
  SignupText(idCurrentValue, idRegTest, $signupIdText);
});

//signup-pw
const $signupPw = document.querySelector(".signup-pw");
const $signupPwText = document.querySelector(".signup-pw-text");

$signupPw.addEventListener("focusout", (e) => {
  const pwCurrentValue = e.target.value;
  const pwRegTest = SigninRegTest(pwCurrentValue);
  SignupText(pwCurrentValue, pwRegTest, $signupPwText);
});

//signup-pwcheck
const $signupPwCheck = document.querySelector(".signup-pw-check");
const $signupPwCheckText = document.querySelector(".signup-pw-check-text");

$signupPwCheck.addEventListener("focusout", (e) => {
  const pwCheckCurrentValue = e.target.value;
  if (pwCheckCurrentValue.length === 0) {
    $signupPwCheckText.textContent = "입력해라";
  } else if ($signinPw.value === pwCheckCurrentValue) {
    $signupPwCheckText.textContent = "";
  } else {
    $signupPwCheckText.textContent = "비밀번호 다름";
  }
});
