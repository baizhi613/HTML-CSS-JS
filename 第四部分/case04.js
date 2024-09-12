$(document).ready(function() {
    var $banner = $('.banner'),
        $hotList = $banner.find('.hot'),
        $dots = $banner.find('.dot li'),
        slideWidth = $hotList.width(),
        currentIndex = 0,
        intervalTime = 3000, // 自动切换的时间间隔
        timer = null;

    function init() {
        // 设置轮播图宽度
        $hotList.width(slideWidth * $hotList.children().length);
        // 初始化小圆点
        $dots.eq(currentIndex).addClass('on');
        // 启动自动轮播
        startAutoPlay();
    }

    function startAutoPlay() {
        clearInterval(timer);
        timer = setInterval(function() {
            nextSlide();
        }, intervalTime);
    }

    function stopAutoPlay() {
        clearInterval(timer);
    }

    function nextSlide() {
        stopAutoPlay(); // 停止自动播放
        currentIndex = (currentIndex + 1) % $hotList.children().length;
        $hotList.animate({
            'left': -currentIndex * slideWidth + 'px'
        }, 500, function() {
            // 检查是否需要无缝循环
            if (currentIndex === 0) {
                $hotList.css('left', 0).animate({
                    'left': -currentIndex * slideWidth + 'px'
                }, 0);
            }
            startAutoPlay(); // 重新启动自动播放
        });

        // 更新小圆点状态
        $dots.removeClass('on');
        $dots.eq(currentIndex).addClass('on');
    }

    function prevSlide() {
        stopAutoPlay(); // 停止自动播放
        currentIndex = (currentIndex - 1 + $hotList.children().length) % $hotList.children().length;
        $hotList.animate({
            'left': -currentIndex * slideWidth + 'px'
        }, 500, function() {
            // 检查是否需要无缝循环
            if (currentIndex === $hotList.children().length - 1) {
                $hotList.css('left', -($hotList.children().length - 1) * slideWidth + 'px').animate({
                    'left': -currentIndex * slideWidth + 'px'
                }, 0);
            }
            startAutoPlay(); // 重新启动自动播放
        });

        // 更新小圆点状态
        $dots.removeClass('on');
        $dots.eq(currentIndex).addClass('on');
    }

    // 点击小圆点切换
    $dots.on('click', function() {
        stopAutoPlay();
        currentIndex = $(this).index();
        $hotList.stop(true, true).animate({
            'left': -currentIndex * slideWidth + 'px'
        }, 500);

        // 更新小圆点状态
        $dots.removeClass('on');
        $(this).addClass('on');

        startAutoPlay();
    });

    // 点击左右箭头切换
    $banner.find('.prev').on('click', function() {
        prevSlide();
    });

    $banner.find('.next').on('click', function() {
        nextSlide();
    });

    // 初始化
    init();

    // 鼠标悬停停止自动播放，移开恢复播放
    $banner.hover(function() {
        stopAutoPlay();
    }, function() {
        startAutoPlay();
    });
});