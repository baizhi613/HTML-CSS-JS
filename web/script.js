let slideIndex = 1;// 定义一个变量 slideIndex，初始值为 1，用于跟踪当前显示的幻灯片
showSlides(slideIndex);// 显示初始的幻灯片

function plusSlides(n) {// 定义函数 plusSlides，用于移动幻灯片
    showSlides(slideIndex += n); // 修改 slideIndex 的值，以便向前或向后移动幻灯片
}

function showSlides(n) {// 定义函数 showSlides，显示特定索引的幻灯片
    let i;
    const slides = document.getElementsByClassName("slides"); // 获取所有类名为 "slides" 的元素，并存储在 slides 变量中
    if (n > slides.length) { slideIndex = 1 }// 如果索引超出幻灯片的数量，将 slideIndex 设置为 1，显示第一张幻灯片
    if (n < 1) { slideIndex = slides.length }// 如果索引小于 1，将 slideIndex 设置为幻灯片的最后一张，显示最后一张幻灯片
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";// 隐藏所有幻灯片
    }
    slides[slideIndex - 1].style.display = "block";// 显示当前 slideIndex 所指的幻灯片
}

setInterval(function () {
    plusSlides(1);// 每隔 5000 毫秒（即 5 秒），调用一次 plusSlides 函数，以便自动切换幻灯片
}, 5000);