
// ====== feather icons
feather.replace({ width: '1em', height: '1em' })
// end

// ====== SweetScroll
document.addEventListener(
    'DOMContentLoaded',
    () => {
        const scroller = new SweetScroll({
            trigger: '[data-scroll]',       // Selector for trigger (must be a valid css selector)
            header: '[data-scroll-header]', // Selector or Element for fixed header (Selector of must be a valid css selector)
            duration: 2000,                 // Specifies animation duration in integer
            easing: 'easeOutQuint',         // Specifies the pattern of easing
            offset: 0,                      // Specifies the value to offset the scroll position in pixels
            vertical: true,                 // Enable the vertical scroll
            horizontal: true,              // Enable the horizontal scroll
            cancellable: true,              // When fired wheel or touchstart events to stop scrolling
            updateURL: false,               // Update the URL hash on after scroll (true | false | 'push' | 'replace')
            preventDefault: true,           // Cancels the container element click event
            stopPropagation: true,          // Prevents further propagation of the container element click event in the bubbling phase

            // Callbacks
            before: null,
            after: null,
            cancel: null,
            complete: null,
            step: null,
        }, '#main-wrapper');

        scroller.to('#home');
    },

    false,
);
// end

// ====== cursor 樣式
var cursor = document.getElementById('cursor');
var cursor2 = document.getElementById('cursor-2');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    cursor2.style.left = x + "px";
    cursor2.style.top = y + "px";
});
// end

// ====== 當滑鼠碰到"a"or"input"
$(document).ready(function () {
    $("a, input, button").hover(
        function () {
            $('#cursor-2').addClass("hover");
        },
        function () {
            $('#cursor-2').removeClass("hover");
        }
    );
});

$(document).ready(function () {
    $("a,input, button").hover(
        function () {
            $('#cursor').addClass("hover");
        },
        function () {
            $('#cursor').removeClass("hover");
        }
    );
});
// end

// ====== 當滑鼠碰到".case-single-img"
$(document).ready(function () {
    $(".case-single-img").hover(
        function () {
            $('#cursor-2').addClass("scroll");
        },
        function () {
            $('#cursor-2').removeClass("scroll");
        }
    );
});

$(document).ready(function () {
    $(".case-single-img").hover(
        function () {
            $('#cursor').addClass("scroll");
        },
        function () {
            $('#cursor').removeClass("scroll");
        }
    );
});
// end

// ====== loading
$(document).ready(function () {
    window.onload = function () {
        $('.loader-box').addClass('slideUp');
        $('#main-wrapper').addClass('slideUp');
    }
});
// end

// ====== drawsvg
var $svg = $('.svg-line svg').drawsvg({
    duration: 15000,
    easing: 'swing'
});

$svg.drawsvg('animate');
// end


// ====== controller 點選 active
$(function () {
    $(".controller li").click(function () {
        // 設定被點選元素為active
        $(this).addClass('active');
        // 去除所有同胞元素的active樣式
        $(this).siblings('.controller li').removeClass('active');
    })
});
// end

// ====== 當你輸入文字到input，會產生在畫面，且儲存在localstorage

var tagInput = document.getElementById("tagInput");
var input = tagInput.querySelector(".input");
var hidden = tagInput.querySelector(".hidden");
var responselist = document.querySelector('.response-list ul');
var tmp = [];
var data = JSON.parse(localStorage.getItem('responseData')) || [];

// 一個把input裡面的value清空的function
function load() {
    hidden.value = tmp.join();
}

function addList(item) {
    var dataLen = item.length;
    var str = '';
    for (var i = 0; i < dataLen; i++) {
        str += '<li class="text text-right">' + item[i].content + "</li>";
    }
    str = str + `
        <li class="text">
			你好，我是 Abby
		</li>
        <li class="text">
			踏入設計和前端這幾年，很充實，也有很多想法想落實。
		</li>
		<li class="text">
            著重加強 Vue.js 和學習 TypeScript 來增進前端技術。
		</li>
		<li class="text">
			希望你還喜歡我的 UI 作品集！
		</li>
        `
    responselist.innerHTML = str;
}

function addToLocal(e) {
    var keycode = e.keyCode;
    if (keycode == 13) {
        var ob = {
            content: input.value
        }
        data.unshift(ob);
        load();
        input.value = "";
        localStorage.setItem('responseData', JSON.stringify(data));
        addList(data);
    }
}

input.addEventListener('keydown', addToLocal);
addList(data);
// end

// ====== 新增星期幾
function showWeek() {
    var day_list = ['日', '一', '二', '三', '四', '五', '六'];
    var week = new Date();
    var day = week.getDay(); // or "new Date().getDay()";

    var time = "星期" + day_list[day];
    document.getElementById("MyWeekDisplay").innerText = time;
    document.getElementById("MyWeekDisplay").textContent = time;

}
showWeek();
// end

// ====== 新增時間
function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}
showTime();
// end


// ====== 點擊播放音樂
$(function () {
    $(".btn-playmusic.on").click(function () {

        $('.btn-playmusic.off').addClass('active');
        $('.btn-playmusic.on').removeClass('active');

        var audio = document.getElementById("audio");
        audio.play();
    })
});
// end

// ====== 點擊暫停音樂
$(function () {
    $(".btn-playmusic.off").click(function () {

        $('.btn-playmusic.on').addClass('active');
        $('.btn-playmusic.off').removeClass('active');

        var audio = document.getElementById("audio");
        audio.pause();
    })
});
// end


// ====== Parallax js - 滑鼠移動，圖片會跟著晃動
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    relativeInput: true
});
// end
