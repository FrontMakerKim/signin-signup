//페이지 바뀔떄 포커스 되기 위한 dom
const $signinId = document.querySelector(".signin-id");
const $signup = document.querySelector(".signup-name");

//load시 id에 포커스
window.addEventListener("load", (e) => {
  e.preventDefault();
  $signinId.focus();
});

//정규식 조건 부여
const SigninRegTest = (value) => {
  const regValue = new RegExp("^[a-zA-Z][0-9a-zA-Z]{4,7}$");
  return regValue.test(value);
};

//버튼 관리
const $signinBtn = document.querySelector(".signin-button");
const $signupBtn = document.querySelector(".signup-button");
const $signinForm = document.querySelector(".signin");
const $signupForm = document.querySelector(".signup");

$signinBtn.addEventListener("mousedown", () => {
  $signinForm.style.display = "block";
  $signupForm.style.display = "none";

  setTimeout(() => {
    $signinId.focus();
    $signupNameText.textContent = "";
  }, 50);
});

$signupBtn.addEventListener("mousedown", () => {
  $signinForm.style.display = "none";
  $signupForm.style.display = "block";
  setTimeout(() => {
    $signup.focus();
    $signinIdText.textContent = "";
  }, 50);
});

//signin text출력

const SigninText = (value, reg, text) => {
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

//signin-id 확인하기
const $signinIdText = document.querySelector(".signin-id-text");

$signinId.addEventListener("focusout", (e) => {
  const idCurrentValue = e.target.value;
  const idRegTest = SigninRegTest(idCurrentValue);
  SigninText(idCurrentValue, idRegTest, $signinIdText);
});

//signin-pw 확인하기
const $signinPw = document.querySelector(".signin-pw");
const $signinPwText = document.querySelector(".signin-pw-text");

$signinPw.addEventListener("focusout", (e) => {
  const pwCurrentValue = e.target.value;
  const pwRegTest = SigninRegTest(pwCurrentValue);
  SigninText(pwCurrentValue, pwRegTest, $signinPwText);
});

//signin-pwcheck
const $signinPwCheck = document.querySelector(".signin-pw-check");
const $signinPwCheckText = document.querySelector(".signin-pw-check-text");

$signinPwCheck.addEventListener("focusout", (e) => {
  const pwCheckCurrentValue = e.target.value;
  if (pwCheckCurrentValue.length === 0) {
    $signinPwCheckText.textContent = "입력해라";
  } else if ($signinPw.value === pwCheckCurrentValue) {
    $signinPwCheckText.textContent = "";
  } else {
    $signinPwCheckText.textContent = "비밀번호 다름";
  }
});
