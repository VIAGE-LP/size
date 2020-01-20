$(document).ready(function () {
    $('.secondBox').hide();

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
        var Lowerchest = document.getElementById('Lowerchest').value;
        var Upperchest = document.getElementById('Upperchest').value;
        var cup = document.getElementById('cup').value;
        var cupMath = parseInt(Upperchest - Lowerchest);
        var size = '';

        //清空 表單驗證反饋訊息
        $('#myform label span').empty();

        //罩杯計算
        if (0 <= cupMath && cupMath <= 10) {
            cup = "A";
        } else if (11 <= cupMath && cupMath <= 12.5) {
            cup = "B";
        } else if (13 <= cupMath && cupMath <= 15) {
            cup = "C";
        } else if (16 <= cupMath && cupMath <= 17.5) {
            cup = "D";
        } else if (18 <= cupMath && cupMath <= 20) {
            cup = "E";
        } else if (21 <= cupMath && cupMath <= 22.5) {
            cup = "F";
        } else if (23 <= cupMath && cupMath <= 25) {
            cup = "G";
        } else if (26 <= cupMath && cupMath <= 27.5) {
            cup = "H";
        } else if (cupMath > 27.5) {
            cup = " ?"
        };


        //尺寸計算
        if (((55 <= Lowerchest && Lowerchest < 60) && (cup !== "F") && (cup !== "G") && (cup !== "H")) ||
            (((60 <= Lowerchest && Lowerchest < 65) && (Upperchest >= 66 && Upperchest <= 72)) || ((60 <= Lowerchest && Lowerchest < 65) && (cup == "A"))) ||
            (((60 <= Lowerchest && Lowerchest < 65) && (Upperchest >= 73 && Upperchest <= 75)) || ((60 <= Lowerchest && Lowerchest < 65) && (cup == "B"))) ||
            (((60 <= Lowerchest && Lowerchest < 65) && (Upperchest >= 76 && Upperchest <= 78)) || ((60 <= Lowerchest && Lowerchest < 65) && (cup == "C")))
        ) {
            size = " S";
            $('.suggestionText').html(`我們建議您可以選擇S尺寸，VIAGE晚安內衣幫助您將睡覺時走山的肉肉全部"收攏"，越睡越有料！`);
        } else if (
            (((60 <= Lowerchest && Lowerchest < 65) && (Upperchest >= 79 && Upperchest <= 82)) || ((60 <= Lowerchest && Lowerchest < 65) && (cup == "D"))) ||
            (((60 <= Lowerchest && Lowerchest < 65) && (Upperchest >= 83 && Upperchest <= 85)) || ((60 <= Lowerchest && Lowerchest < 65) && (cup == "E"))) ||
            (((65 <= Lowerchest && Lowerchest < 70) && (Upperchest >= 77 && Upperchest <= 80)) || ((65 <= Lowerchest && Lowerchest < 70) && (cup == "B"))) ||
            (((65 <= Lowerchest && Lowerchest < 70) && (Upperchest >= 81 && Upperchest <= 84)) || ((65 <= Lowerchest && Lowerchest < 70) && (cup == "C"))) ||
            (((65 <= Lowerchest && Lowerchest < 70) && (Upperchest >= 71 && Upperchest <= 76)) || ((65 <= Lowerchest && Lowerchest < 70) && (cup == "A")))
        ) {
            size = " S 或 S/M";
            $('.suggestionText').html(`推薦您嘗試兩種尺寸！ S號微緊，不過更貼合的包覆也較能達到塑形效果～<br>不習慣穿內衣睡覺？ S/M號非常適合您，舒適剪裁就像沒穿～讓睡眠時的美胸保養更輕鬆！`);
        } else if (
            (((60 <= Lowerchest && Lowerchest < 65) && (Upperchest >= 86 && Upperchest <= 88)) || ((60 <= Lowerchest && Lowerchest < 65) && (cup == "F"))) ||
            (((65 <= Lowerchest && Lowerchest < 70) && (Upperchest >= 85 && Upperchest <= 88)) || ((65 <= Lowerchest && Lowerchest < 70) && (cup == "D"))) ||
            (((65 <= Lowerchest && Lowerchest < 70) && (Upperchest >= 89 && Upperchest <= 91)) || ((65 <= Lowerchest && Lowerchest < 70) && (cup == "E"))) ||
            (((70 <= Lowerchest && Lowerchest < 75) && (Upperchest >= 76 && Upperchest <= 80)) || ((70 <= Lowerchest && Lowerchest < 75) && (cup == "A"))) ||
            ((55 <= Lowerchest && Lowerchest < 60) && (cup == "F")) ||
            ((55 <= Lowerchest && Lowerchest < 60) && (cup == "G"))
        ) {
            size = " S/M";
            $('.suggestionText').html(`我們建議您可以選擇S/M尺寸，VIAGE晚安內衣幫助您將睡覺時走山的肉肉全部"收攏"，越睡越有料！`);
        } else if (
            (((65 <= Lowerchest && Lowerchest < 70) && (Upperchest >= 92 && Upperchest <= 94)) || ((65 <= Lowerchest && Lowerchest < 70) && (cup == "F"))) ||
            (((70 <= Lowerchest && Lowerchest < 75) && (Upperchest >= 81 && Upperchest <= 84)) || ((70 <= Lowerchest && Lowerchest < 75) && (cup == "B"))) ||
            (((70 <= Lowerchest && Lowerchest < 75) && (Upperchest >= 85 && Upperchest <= 88)) || ((70 <= Lowerchest && Lowerchest < 75) && (cup == "C"))) ||
            (((70 <= Lowerchest && Lowerchest < 75) && (Upperchest >= 89 && Upperchest <= 91)) || ((70 <= Lowerchest && Lowerchest < 75) && (cup == "D"))) ||
            (((60 <= Lowerchest && Lowerchest < 65) && (Upperchest >= 89 && Upperchest <= 91)) || ((60 <= Lowerchest && Lowerchest < 65) && (cup == "G"))) ||
            (((60 <= Lowerchest && Lowerchest < 65) && (Upperchest >= 92 && Upperchest <= 93)) || ((60 <= Lowerchest && Lowerchest < 65) && (cup == "H")))
        ) {
            size = " S/M 或 M";
            $('.suggestionText').html(`推薦您嘗試兩種尺寸！ S/M號微緊，不過更貼合的包覆也較能達到塑形效果～<br>不習慣穿內衣睡覺？ M號非常適合您，舒適剪裁就像沒穿～全面提拉托，讓胸型渾圓立挺！`);
        } else if (
            (((70 <= Lowerchest && Lowerchest < 75) && (Upperchest >= 92 && Upperchest <= 94)) || ((70 <= Lowerchest && Lowerchest < 75) && (cup == "E"))) ||
            (((70 <= Lowerchest && Lowerchest < 75) && (Upperchest >= 95 && Upperchest <= 98)) || ((70 <= Lowerchest && Lowerchest < 75) && (cup == "F"))) ||
            (((75 <= Lowerchest && Lowerchest < 80) && (Upperchest >= 81 && Upperchest <= 86)) || ((75 <= Lowerchest && Lowerchest < 80) && (cup == "A"))) ||
            (((75 <= Lowerchest && Lowerchest < 80) && (Upperchest >= 87 && Upperchest <= 90)) || ((75 <= Lowerchest && Lowerchest < 80) && (cup == "B"))) ||
            (((75 <= Lowerchest && Lowerchest < 80) && (Upperchest >= 91 && Upperchest <= 94)) || ((75 <= Lowerchest && Lowerchest < 80) && (cup == "C"))) ||
            (((65 <= Lowerchest && Lowerchest < 70) && (Upperchest >= 95 && Upperchest <= 96)) || ((65 <= Lowerchest && Lowerchest < 70) && (cup == "G"))) ||
            (((65 <= Lowerchest && Lowerchest < 70) && (Upperchest >= 97 && Upperchest <= 98)) || ((65 <= Lowerchest && Lowerchest < 70) && (cup == "H"))) ||
            ((55 <= Lowerchest && Lowerchest < 60) && (cup == "H"))
        ) {
            suggestion = '';
            size = " M";
            $('.suggestionText').html(`我們建議您可以選擇M尺寸，VIAGE晚安內衣強化包覆，全面提拉托，讓胸型更加渾圓立挺！`);
        } else if (
            (((75 <= Lowerchest && Lowerchest < 80) && (Upperchest >= 95 && Upperchest <= 98)) || ((75 <= Lowerchest && Lowerchest < 80) && (cup == "D"))) ||
            (((75 <= Lowerchest && Lowerchest < 80) && (Upperchest >= 99 && Upperchest <= 101)) || ((75 <= Lowerchest && Lowerchest < 80) && (cup == "E"))) ||
            (((70 <= Lowerchest && Lowerchest < 75) && (Upperchest >= 99 && Upperchest <= 100)) || ((70 <= Lowerchest && Lowerchest < 75) && (cup == "G"))) ||
            (((70 <= Lowerchest && Lowerchest < 75) && (Upperchest >= 101 && Upperchest <= 103)) || ((70 <= Lowerchest && Lowerchest < 75) && (cup == "H"))) ||
            (((80 <= Lowerchest && Lowerchest < 85) && (Upperchest >= 86 && Upperchest <= 90)) || ((80 <= Lowerchest && Lowerchest < 85) && (cup == "A"))) ||
            (((80 <= Lowerchest && Lowerchest < 85) && (Upperchest >= 91 && Upperchest <= 94)) || ((80 <= Lowerchest && Lowerchest < 85) && (cup == "B")))
        ) {
            size = " M 或 M/L";
            $('.suggestionText').html(`推薦您嘗試兩種尺寸！ M號微緊，不過更貼合的包覆也較能達到塑形效果～<br>不習慣穿內衣睡覺？ M/L號非常適合您，舒適剪裁就像沒穿～全面提拉托，讓胸型渾圓立挺！`);
        } else if (
            (((80 <= Lowerchest && Lowerchest < 85) && (Upperchest >= 95 && Upperchest <= 98)) || ((80 <= Lowerchest && Lowerchest < 85) && (cup == "C"))) ||
            (((75 <= Lowerchest && Lowerchest < 80) && (Upperchest >= 102 && Upperchest <= 104)) || ((75 <= Lowerchest && Lowerchest < 80) && (cup == "F"))) ||
            (((80 <= Lowerchest && Lowerchest < 85) && (Upperchest >= 99 && Upperchest <= 101)) || ((80 <= Lowerchest && Lowerchest < 85) && (cup == "D")))
        ) {
            size = " M/L";
            $('.suggestionText').html(`我們建議您可以選擇M/L尺寸，VIAGE晚安內衣強化包覆，全面提拉托，讓胸型更加渾圓立挺！`);
        } else if (
            (((80 <= Lowerchest && Lowerchest < 85) && (Upperchest >= 102 && Upperchest <= 104)) || ((80 <= Lowerchest && Lowerchest < 85) && (cup == "E"))) ||
            (((75 <= Lowerchest && Lowerchest < 80) && (Upperchest >= 105 && Upperchest <= 106)) || ((75 <= Lowerchest && Lowerchest < 80) && (cup == "G"))) ||
            (((75 <= Lowerchest && Lowerchest < 80) && (Upperchest >= 107 && Upperchest <= 108)) || ((75 <= Lowerchest && Lowerchest < 80) && (cup == "H")))
        ) {
            size = " M/L 或 L";
            $('.suggestionText').html(`推薦您嘗試兩種尺寸！ M/L號微緊，不過更貼合的包覆也較能達到塑形效果～<br>不習慣穿內衣睡覺？ L號非常適合您，特殊編織法及超強伸縮性，舒適不壓胸，塑造好胸型！`);
        } else if (
            (((80 <= Lowerchest && Lowerchest < 85) && (Upperchest >= 105 && Upperchest <= 108)) || ((80 <= Lowerchest && Lowerchest < 85) && (cup == "F"))) ||
            (((85 <= Lowerchest && Lowerchest < 90) && (Upperchest >= 91 && Upperchest <= 96)) || ((85 <= Lowerchest && Lowerchest < 90) && (cup == "A")))
        ) {
            size = " L";
            $('.suggestionText').html(`我們建議您可以選擇L尺寸，VIAGE晚安內衣特殊編織法造就超強伸縮性，舒適不壓胸，塑造好胸型！`);
        } else if (
            (((85 <= Lowerchest && Lowerchest < 90) && (Upperchest >= 97 && Upperchest <= 100)) || ((85 <= Lowerchest && Lowerchest < 90) && (cup == "B"))) ||
            (((85 <= Lowerchest && Lowerchest < 90) && (Upperchest >= 101 && Upperchest <= 104)) || ((85 <= Lowerchest && Lowerchest < 90) && (cup == "C"))) ||
            (((80 <= Lowerchest && Lowerchest < 85) && (Upperchest >= 109 && Upperchest <= 110)) || ((80 <= Lowerchest && Lowerchest < 85) && (cup == "G"))) ||
            (((85 <= Lowerchest && Lowerchest < 90) && (Upperchest >= 105 && Upperchest <= 108)) || ((85 <= Lowerchest && Lowerchest < 90) && (cup == "D"))) ||
            (((80 <= Lowerchest && Lowerchest < 85) && (Upperchest >= 111 && Upperchest <= 113)) || ((80 <= Lowerchest && Lowerchest < 85) && (cup == "H")))
        ) {
            size = " L 或 LL";
            $('.suggestionText').html(`推薦您嘗試兩種尺寸！ L號微緊，不過更貼合的包覆也較能達到塑形效果～<br>不習慣穿內衣睡覺？ LL號非常適合您，特殊編織法及超強伸縮性，舒適不壓胸，塑造好胸型！`);
        } else if (
            (((85 <= Lowerchest && Lowerchest < 90) && (Upperchest >= 109 && Upperchest <= 111)) || ((85 <= Lowerchest && Lowerchest < 90) && (cup == "E"))) ||
            (((85 <= Lowerchest && Lowerchest < 90) && (Upperchest >= 112 && Upperchest <= 114)) || ((85 <= Lowerchest && Lowerchest < 90) && (cup == "F"))) ||
            (((85 <= Lowerchest && Lowerchest < 90) && (Upperchest >= 115 && Upperchest <= 116)) || ((85 <= Lowerchest && Lowerchest < 90) && (cup == "G"))) ||
            (((85 <= Lowerchest && Lowerchest < 90) && (Upperchest >= 117 && Upperchest <= 118)) || ((85 <= Lowerchest && Lowerchest < 90) && (cup == "H"))) ||
            (90 <= Lowerchest)
        ) {
            size = " LL";
            $('.suggestionText').html(`我們建議您可以選擇LL尺寸，VIAGE晚安內衣特殊編織法造就超強伸縮性，舒適不壓胸，塑造好胸型！`);
        };

        //表單驗證＆反饋訊息
        if ((Lowerchest == "NaN") || (cupMath < 0)) {
            $('.firstBox').hide();
            $('.secondBox h4').text("X");
            $('.suggestionText').html(`很抱歉！目前還沒有提供適合您的尺寸，想了解新尺寸推出相關訊息歡迎您持續關注我們喔！
            <br>
                <section class="sns_btn mt-2">
                    <ul>
                        <li><a href="https://www.facebook.com/viage.tw/" target="blank" class="sns_link">追蹤FB粉專</a></li>
                        <li>/</li>
                        <li><a href=" https://line.me/R/ti/p/%40fhl1857j" target="blank" class="sns_link">加入line@好友</a></li>
                    </ul>
                </section>
            `);
            $('.secondBox').show();
        } else if ((cup == "請選擇") && (Lowerchest == "請選擇") && (Upperchest == "請選擇")) {
            $('.cup,.Upperchest').append(`<span style="color:red"><small>  擇一選填</small></span>`);
            $('.Lowerchest').append(`<span style="color:red"><small>  必填</small></span>`);
            return;
        } else if ((Upperchest == "請選擇") && (Lowerchest == "請選擇")) {
            $('.Lowerchest').append(`<span style="color:red"><small>  必填</small></span>`);
            return;
        } else if ((Upperchest == "請選擇") && (cup == "請選擇")) {
            $('.cup,.Upperchest').append(`<span style="color:red"><small>  請擇一選填</small></span>`);
            return;
        } else if ((cup == "請選擇") && (Lowerchest == "請選擇")) {
            $('.Lowerchest').append(`<span style="color:red"><small>  必填</small></span>`);
            return;
        } else if (cup == " ?") {
            $('.firstBox').hide();
            $('.secondBox h4').html(``);
            $('.suggestionText').html(`您的上下圍差距>27.5cm，罩杯>H，請再次確認填寫的數值是否正確，或洽詢 FB / LINE@ 客服由專人為您服務喔~
            <br>
                <section class="sns_btn mt-2">
                    <ul>
                        <li><a href="https://www.facebook.com/viage.tw/" target="blank" class="sns_link">追蹤FB粉專</a></li>
                        <li>/</li>
                        <li><a href=" https://line.me/R/ti/p/%40fhl1857j" target="blank" class="sns_link">加入line@好友</a></li>
                    </ul>
                </section>
            `);
            $('.secondBox').show();
        } else {
            $('.firstBox').hide();
            $('.secondBox h4').html(`
                <h4 class="card-title">您的罩杯為<span class="cupText"> ${cup}</span>
                    <br>適合的尺寸為<span class="sizeText">${size}</span>
                </h4>
            `)
            $('.secondBox').show();
        }
    });

    //點擊"清除重填"按鈕
    $('#reset').on('click', function (e) {
        var UpperDisable = document.getElementById('Upperchest').disabled;
        var CupDisable = document.getElementById('cup').disabled;

        if ((UpperDisable == true) || (CupDisable == true)) {
            $('#cup,#Upperchest').removeAttr("disabled");
        }
        //清空 表單驗證反饋訊息
        $('#myform label span').empty();
    });

    //點擊"在算一次"按鈕
    $('#again').on('click', function (e) {
        $('.secondBox').hide();
        $('#cup,#Upperchest').removeAttr("disabled");
        //清空 表單驗證反饋訊息
        $("#reset").trigger('click');
        $('.firstBox').show();
    });
});
