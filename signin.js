//페이지 바뀔떄 포커스 되기 위한 dom
const $signinId = document.querySelector(".signin-id");
const $signup = document.querySelector(".signup-user-name");
const $title = document.querySelector(".title");
//load시 id에 포커스
window.addEventListener("load", (e) => {
  e.preventDefault();
  $signinId.focus();
});

//정규식 조건 부여
const SigninRegTest = (value) => {
  const regValue = new RegExp("^[a-zA-Z][0-9a-zA-Z]$");
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
  $title.textContent = "SIGN IN";

  setTimeout(() => {
    $signinId.focus();
    $signupUserNameText.textContent = "";
    $signupIdText.textContent = "";
    $signupPwText.textContent = "";
    $signupPwCheckText.textContent = "";
    $signupUserName.value = "";
    $signupId.value = "";
    $signupPw.value = "";
    $signupPwCheck.value = "";
  }, 50);
});

$signupBtn.addEventListener("mousedown", () => {
  $signinForm.style.display = "none";
  $signupForm.style.display = "block";
  $title.textContent = "SIGN UP";

  setTimeout(() => {
    $signup.focus();
    $signinIdText.textContent = "";
    $signinPwText.textContent = "";
    $signinId.value = "";
    $signinPw.value = "";
  }, 50);
});

//signin text출력
const SigninText = (value, reg, text) => {
  if (reg === true) {
    text.textContent = "";
  } else {
    if (value.length === 0) {
      text.textContent = "입력하세요";
    } else {
      text.textContent = "";
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

//signin-pw-see
const $signinPwSee = document.querySelector(".signin-pw-see");

$signinPwSee.addEventListener("mouseover", () => {
  $signinPw.type = "text";
});

$signinPwSee.addEventListener("mouseout", () => {
  $signinPw.type = "password";
});
