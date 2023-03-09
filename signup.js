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
      text.textContent = "입력하세요";
    } else {
      text.textContent = "영어, 숫자 조합으로 4-7자리를 입력해주세요";
    }
  }
};

//signup-userName
const $signupUserName = document.querySelector(".signup-user-name");
const $signupUserNameText = document.querySelector(".signup-user-name-text");

$signupUserName.addEventListener("focusout", (e) => {
  const userNameCurrentValue = e.target.value;
  const userNameRegTest = SignupRegTest(userNameCurrentValue);
  SignupText(userNameCurrentValue, userNameRegTest, $signupUserNameText);
});

//signup-id
const $signupId = document.querySelector(".signup-id");
const $signupIdText = document.querySelector(".signup-id-text");

$signupId.addEventListener("focusout", (e) => {
  const idCurrentValue = e.target.value;
  const idRegTest = SignupRegTest(idCurrentValue);
  SignupText(idCurrentValue, idRegTest, $signupIdText);
});

//signup-pw
const $signupPw = document.querySelector(".signup-pw");
const $signupPwText = document.querySelector(".signup-pw-text");

$signupPw.addEventListener("focusout", (e) => {
  const pwCurrentValue = e.target.value;
  const pwRegTest = SignupRegTest(pwCurrentValue);
  SignupText(pwCurrentValue, pwRegTest, $signupPwText);
});

//signup-pwcheck
const $signupPwCheck = document.querySelector(".signup-pw-check");
const $signupPwCheckText = document.querySelector(".signup-pw-check-text");

$signupPwCheck.addEventListener("focusout", (e) => {
  const pwCheckCurrentValue = e.target.value;
  if (pwCheckCurrentValue.length === 0) {
    $signupPwCheckText.textContent = "입력하세요";
  } else if ($signinPw.value === pwCheckCurrentValue) {
    $signupPwCheckText.textContent = "";
  } else {
    $signupPwCheckText.textContent = "비밀번호가 다릅니다";
  }
});

//signup-pw-see
const $signupPwSee = document.querySelector(".signup-pw-see");

$signupPwSee.addEventListener("mouseover", () => {
  $signupPw.type = "text";
});

$signupPwSee.addEventListener("mouseout", () => {
  $signupPw.type = "password";
});

//signin-pw-check-see
const $signupPwCheckSee = document.querySelector(".signup-pw-check-see");

$signupPwCheckSee.addEventListener("mouseover", () => {
  $signupPwCheck.type = "text";
});

$signupPwCheckSee.addEventListener("mouseout", () => {
  $signupPwCheck.type = "password";
});
