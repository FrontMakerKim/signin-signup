const $signupName = document.querySelector(".signup-name");
const $signupUserName = document.querySelector(".signup-user-name");
const $signupId = document.querySelector(".signup-id");
const $signupPw = document.querySelector(".signup-pw");
const $signupPwCheck = document.querySelector(".signup-pw-check");

const $signupNameText = document.querySelector(".signup-name-text");
const $signupUserNameText = document.querySelector(".signup-user-name-text");
const $signupIdText = document.querySelector(".signup-id-text");
const $signupPwText = document.querySelector(".signup-pw-text");
const $signupPwCheckText = document.querySelector(".signup-pw-check-text");

//signup 클릭시 name에 포커스
window.addEventListener("load", (e) => {
  e.preventDefault();
  $signupName.focus();
});

//정규식 조건 부여
const SignupRegTest = (value) => {
  const regValue = new RegExp("^[a-zA-Z][0-9a-zA-Z]{4,7}$");
  return regValue.test(value);
};

//text출력
const SignupText = () => {};

//name
$signupName.addEventListener("focusout", (e) => {
  const nameCurrentValue = e.target.value;
  const nameRegTest = SigninRegTest(nameCurrentValue);

  SignupText();
  console.log(nameRegTest);
});
