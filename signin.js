const $signinId = document.querySelector(".signin-id");
const $signinName = document.querySelector(".signup-name");

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
// const $signinBtn = document.querySelector(".signin-button");
// const $signupBtn = document.querySelector(".signup-button");
// const $signinForm = document.querySelector(".signin");
// const $signupForm = document.querySelector(".signup");

// $signinBtn.addEventListener("click", () => {
//   $signinForm.style.display = "block";
//   $signupForm.style.display = "none";
//   $signinId.focus();
// });

// $signupBtn.addEventListener("click", () => {
//   $signinForm.style.display = "none";
//   $signupForm.style.display = "block";
//   $signinName.focus();
// });

//signin-id 확인하기
const $signinIdText = document.querySelector(".signin-id-text");

$signinId.addEventListener("focusout", (e) => {
  const idCurrentValue = e.target.value;
  const idRegTest = SigninRegTest(idCurrentValue);
  // console.log(idRegTest)

  if (idRegTest === true) {
    $signinIdText.textContent = "";
  } else {
    if (idCurrentValue.length === 0) {
      $signinIdText.textContent = "입력해라";
    } else {
      $signinIdText.textContent = "문법맞춰라";
    }
  }
});

//signin-pw 확인하기
const $signinPw = document.querySelector(".signin-pw");
const $signinPwText = document.querySelector(".signin-pw-text");

$signinPw.addEventListener("focusout", (e) => {
  const pwCurrentValue = e.target.value;
  const pwRegTest = SigninRegTest(pwCurrentValue);
  // console.log(pwRegTest)

  if (pwRegTest === true) {
    $signinPwText.textContent = "";
  } else {
    if (pwCurrentValue.length === 0) {
      $signinPwText.textContent = "입력해라";
    } else {
      $signinPwText.textContent = "문법맞춰라";
    }
  }
});

//signin-pwcheck
const $signinPwCheck = document.querySelector(".signin-pw-check");
const $signinPwCheckTest = document.querySelector(".signin-pw-check-text");

$signinPwCheck.addEventListener("focusout", (e) => {
  const pwCheckCurrentValue = e.target.value;
  if ($signinPw.value === pwCheckCurrentValue) {
    $signinPwCheckTest.textContent = "";
  } else {
    $signinPwCheckTest.textContent = "비밀번호 다름";
  }
});
