document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".album-slider");
    const intervalTime = 3000; 

    function autoScroll() {
        if (!slider) return;

        const firstCard = slider.querySelector(".album");//判断有多少个.album    
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth + 25; // 25为间距

        
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;//到最后没

        if (slider.scrollLeft >= maxScrollLeft - 10) {

            slider.scrollTo({ left:0, behavior:"smooth" });//回初始
        } else {
            // 往右一格的进行速度
            slider.scrollBy({ left:cardWidth, behavior:"smooth" });
        }
    }

    // 开始倒计时
    let slideInterval = setInterval(autoScroll, intervalTime);

    //当鼠标悬浮时将停止移动(可衔接::hover 然后放大效果)
    slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
    slider.addEventListener("mouseleave", () => {
        slideInterval = setInterval(autoScroll, intervalTime);
    });
});

