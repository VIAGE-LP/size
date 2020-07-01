$(document).ready(function () {
    // 圖片lozad
    const observer = lozad('.lozad', {
        rootMargin: "150px 0px"
    });
    observer.observe();
    
    //偵測sns line btn 手機版還是電腦版，連結不同
    var vw = $(window).width();
    if (vw <= 768) {
        $(".line_link").attr("href", "https://bit.ly/2NWqphP");
    } else {
        $(".line_link").attr("href", "https://line.me/R/ti/p/%40fhl1857j");
    }
});

