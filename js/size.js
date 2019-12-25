$(document).ready(function () {
    //若選擇罩杯、上圍則不能再輸入
    $('#cup').on('change', function () {
        $('#Upperchest').attr("disabled", "true");
    });
    //若選擇上圍、罩杯則不能再輸入
    $('#Upperchest').on('change', function () {
        $('#cup').attr("disabled", "true");
    });

    //點擊"看結果"按鈕
    $('#sizeResult').on('click', function (e) {
        e.preventDefault();
        var Lowerchest = parseInt(document.getElementById('Lowerchest').value);
        var Upperchest = parseInt(document.getElementById('Upperchest').value);
        var style = document.getElementById('style').value;
        var cup = document.getElementById('cup').value;
        var cupMath = Upperchest - Lowerchest;
        var suggestion = '';
        var size = '';

        //罩杯計算
        if (cupMath < 10) {
            cup = "A"
        } else if (10 <= cupMath && cupMath <= 12.5) {
            cup = "B"
        } else if (12.5 <= cupMath && cupMath <= 15) {
            cup = "C"
        } else if (15 <= cupMath && cupMath <= 17.5) {
            cup = "D"
        } else if (17.5 <= cupMath && cupMath <= 20) {
            cup = "E"
        } else if (20 <= cupMath && cupMath <= 22.5) {
            cup = "F"
        } else if (22.5 <= cupMath && cupMath <= 25) {
            cup = "G"
        } else if (25 <= cupMath) {
            cup = "H"
        } else if (cupMath = NaN) {
            cup = "X"
        }

        //尺寸計算
        if (Lowerchest < 55) {
            suggestion = "很抱歉！目前我們還沒有提供適合您的尺寸，歡迎您留下聯絡資訊，我們將在推出新尺寸時立即聯繫您~";
            size = "X";
        } else if (
            (55 <= Lowerchest && Lowerchest < 60) ||
            ((60 <= Lowerchest && Lowerchest <= 65) && (Upperchest >= 66 && Upperchest <= 72) || ((60 <= Lowerchest && Lowerchest <= 65) && (cup == "A"))) ||
            ((60 <= Lowerchest && Lowerchest <= 65) && (Upperchest >= 73 && Upperchest <= 75) || ((60 <= Lowerchest && Lowerchest <= 65) && (cup == "B"))) ||
            ((60 <= Lowerchest && Lowerchest <= 65) && (Upperchest >= 76 && Upperchest <= 78) || ((60 <= Lowerchest && Lowerchest <= 65) && (cup == "C"))) ||
            ((66 <= Lowerchest && Lowerchest <= 70) && (Upperchest >= 71 && Upperchest <= 76) || ((66 <= Lowerchest && Lowerchest <= 70) && (cup == "A")))
        ) {
            suggestion = '我們建議您可以選擇S尺寸，VIAGE晚安內衣幫助您將睡覺時走山的肉肉全部"收攏"，越睡越有料！';
            size = " S";
        } else if (
            ((60 <= Lowerchest && Lowerchest <= 65) && (Upperchest >= 79 && Upperchest <= 82) || ((60 <= Lowerchest && Lowerchest <= 65) && (cup == "D"))) ||
            ((60 <= Lowerchest && Lowerchest <= 65) && (Upperchest >= 83 && Upperchest <= 85) || ((60 <= Lowerchest && Lowerchest <= 65) && (cup == "E"))) ||
            ((66 <= Lowerchest && Lowerchest <= 70) && (Upperchest >= 77 && Upperchest <= 80) || ((66 <= Lowerchest && Lowerchest <= 70) && (cup == "B"))) ||
            ((66 <= Lowerchest && Lowerchest <= 70) && (Upperchest >= 81 && Upperchest <= 84) || ((66 <= Lowerchest && Lowerchest <= 70) && (cup == "C")))
        ) {
            suggestion = '有兩種尺寸都很推薦您嘗試喔！S號對您來說略緊，不過更貼合的包覆也較能達到塑形的效果～不習慣穿著內衣睡覺嗎？S/M 號非常適合您夜晚穿著，舒適的剪裁就像沒穿～讓睡眠時的美胸保養更輕鬆！';
            size = " S 或 S/M";
        }else if (
            ((60 <= Lowerchest && Lowerchest <= 65) && (Upperchest >= 86 && Upperchest <= 88) || ((60 <= Lowerchest && Lowerchest <= 65) && (cup == "F"))) ||
            ((66 <= Lowerchest && Lowerchest <= 70) && (Upperchest >= 85 && Upperchest <= 88) || ((66 <= Lowerchest && Lowerchest <= 70) && (cup == "D"))) ||
            ((66 <= Lowerchest && Lowerchest <= 70) && (Upperchest >= 89 && Upperchest <= 91) || ((66 <= Lowerchest && Lowerchest <= 70) && (cup == "E"))) ||
            ((71 <= Lowerchest && Lowerchest <= 75) && (Upperchest >= 76 && Upperchest <= 80) || ((71 <= Lowerchest && Lowerchest <= 75) && (cup == "A")))
        ) {
            suggestion = '我們建議您可以選擇S/M尺寸，VIAGE晚安內衣幫助您將睡覺時走山的肉肉全部"收攏"，越睡越有料！';
            size = " S/M";
        }else if (
            ((66 <= Lowerchest && Lowerchest <= 70) && (Upperchest >= 92 && Upperchest <= 94) || ((66 <= Lowerchest && Lowerchest <= 70) && (cup == "F"))) ||
            ((71 <= Lowerchest && Lowerchest <= 75) && (Upperchest >= 81 && Upperchest <= 84) || ((71 <= Lowerchest && Lowerchest <= 75) && (cup == "B"))) ||
            ((71 <= Lowerchest && Lowerchest <= 75) && (Upperchest >= 85 && Upperchest <= 88) || ((71 <= Lowerchest && Lowerchest <= 75) && (cup == "C"))) ||
            ((71 <= Lowerchest && Lowerchest <= 75) && (Upperchest >= 89 && Upperchest <= 91) || ((71 <= Lowerchest && Lowerchest <= 75) && (cup == "D"))) 
        ) {
            suggestion = '有兩種尺寸都很推薦您嘗試喔！S/M 號對您來說略緊，不過更貼合的包覆也較能達到塑形的效果～不習慣穿著內衣睡覺嗎？M 號非常適合您夜晚穿著，舒適的剪裁就像沒穿～全面提拉托，讓胸型更加渾圓立挺！';
            size = " S/M 或 M";
        }else if (
            ((71 <= Lowerchest && Lowerchest <= 75) && (Upperchest >= 92 && Upperchest <= 94) || ((71 <= Lowerchest && Lowerchest <= 75) && (cup == "E"))) ||
            ((71 <= Lowerchest && Lowerchest <= 75) && (Upperchest >= 95 && Upperchest <= 98) || ((71 <= Lowerchest && Lowerchest <= 75) && (cup == "F"))) ||
            ((76 <= Lowerchest && Lowerchest <= 80) && (Upperchest >= 81 && Upperchest <= 86) || ((76 <= Lowerchest && Lowerchest <= 80) && (cup == "A"))) ||
            ((76 <= Lowerchest && Lowerchest <= 80) && (Upperchest >= 87 && Upperchest <= 90) || ((76 <= Lowerchest && Lowerchest <= 80) && (cup == "B"))) ||
            ((76 <= Lowerchest && Lowerchest <= 80) && (Upperchest >= 91 && Upperchest <= 94) || ((76 <= Lowerchest && Lowerchest <= 80) && (cup == "C"))) 
        ) {
            suggestion = '我們建議您可以選擇M尺寸，VIAGE晚安內衣強化包覆，全面提拉托，讓胸型更加渾圓立挺！';
            size = " M";
        }else if (
            ((76 <= Lowerchest && Lowerchest <= 80) && (Upperchest >= 95 && Upperchest <= 98) || ((76 <= Lowerchest && Lowerchest <= 80) && (cup == "D"))) ||
            ((76 <= Lowerchest && Lowerchest <= 80) && (Upperchest >= 99 && Upperchest <= 101) || ((76 <= Lowerchest && Lowerchest <= 80) && (cup == "E"))) ||
            ((81 <= Lowerchest && Lowerchest <= 85) && (Upperchest >= 91 && Upperchest <= 94) || ((81 <= Lowerchest && Lowerchest <= 85) && (cup == "B"))) ||
            ((81 <= Lowerchest && Lowerchest <= 85) && (Upperchest >= 95 && Upperchest <= 98) || ((81 <= Lowerchest && Lowerchest <= 85) && (cup == "C"))) ||
            ((81 <= Lowerchest && Lowerchest <= 85) && (Upperchest >= 99 && Upperchest <= 101) || ((81 <= Lowerchest && Lowerchest <= 85) && (cup == "D"))) ||
            ((81 <= Lowerchest && Lowerchest <= 85) && (Upperchest >= 102 && Upperchest <= 104) || ((81 <= Lowerchest && Lowerchest <= 85) && (cup == "E")))
        ) {
            suggestion = '有兩種尺寸都很推薦您嘗試喔！M號對您來說略緊，不過更貼合的包覆也較能達到塑形的效果～不習慣穿著內衣睡覺嗎？M/L 號非常適合您夜晚穿著，舒適的剪裁就像沒穿～全面提拉托，讓胸型更加渾圓立挺！';
            size = " M 或 M/L";
        }else if (
            ((76 <= Lowerchest && Lowerchest <= 80) && (Upperchest >= 102 && Upperchest <= 104) || ((76 <= Lowerchest && Lowerchest <= 80) && (cup == "F"))) ||
            ((81 <= Lowerchest && Lowerchest <= 85) && (Upperchest >= 86 && Upperchest <= 90) || ((81 <= Lowerchest && Lowerchest <= 85) && (cup == "A")))
        ) {
            suggestion = '我們建議您可以選擇M/L尺寸，VIAGE晚安內衣強化包覆，全面提拉托，讓胸型更加渾圓立挺！';
            size = " M/L";
        }else if (
            ((76 <= Lowerchest && Lowerchest <= 80) && (Upperchest >= 102 && Upperchest <= 104) || ((76 <= Lowerchest && Lowerchest <= 80) && (cup == "F"))) ||
            ((81 <= Lowerchest && Lowerchest <= 85) && (Upperchest >= 86 && Upperchest <= 90) || ((81 <= Lowerchest && Lowerchest <= 85) && (cup == "A")))
        ) {
            suggestion = '我們建議您可以選擇M/L尺寸，VIAGE晚安內衣強化包覆，全面提拉托，讓胸型更加渾圓立挺！';
            size = " M/L";
        }

        $('.card').html(`
            <img class="card-img-top" src="images/${style}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">您的罩杯為${cup}，適合的尺寸為${size}</h5>
                        <p> ${suggestion}</p>
                    <button class="btn btn-primary mt-3 result" type="button" id="again" onclick="javascript:window.location.reload()">再算一次</button>
                </div>`);
    });
});

