// 要打出的文字
const textToType = '其实这个信息茧房里只有你自己。';
// 当前已打出的字符索引
let currentCharIndex = 0;
// 打字速度，单位为毫秒
const typingSpeed = 200;
// 延迟显示按钮的时间，单位为毫秒
const buttonDelay = 2000;

function typeText() {
  const typedTextElement = document.getElementById('typed-text');
  if (currentCharIndex < textToType.length) {
    typedTextElement.textContent += textToType[currentCharIndex++];
    setTimeout(typeText, typingSpeed + Math.floor(Math.random() * 50)); // 不规则速度打字
  } else {
    // 打字完成，显示按钮
    setTimeout(showButton, buttonDelay);
  }
}

function showButton() {
  const nextButton = document.getElementById('next-button');
  nextButton.style.display = 'block';
}

function goToNextPage() {
  window.location.href = 'index.html'; // 替换为您的第二个页面的URL
}

// 开始打字效果
typeText();


