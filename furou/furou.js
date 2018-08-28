function calc(x0, r, c) {
    var result;

    if (c <= 0.) {
        result = "年間生活費は正の値を指定してください";
    } else if (r <= 0.) {
        result = "貯金が尽きるまでに " + x0 / c + " 年生活できます。";
        if (r < 0) {
            result += "（貯金は現金で持つものとして運用利率を0%とみなして計算しました。）"
        }
    } else {
        var k1 = x0 - c / r;

        if (k1 >= 0) {
            result = "貯金が尽きることはありません。"
        } else {
            var t = Math.log(-c / (r * k1)) / r;
            result = "貯金が尽きるまでに " + t + " 年生活できます。"
        }
    }

    return result;
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function parseInput() {
    var parseAll = true;

    var x0 = parseFloat(getUrlParameter("x0"));
    if (x0 !== undefined && !isNaN(x0)) {
        $("#input-x0").val(x0);
    } else {
        parseAll = false;
    }

    var r = parseFloat(getUrlParameter("r"));
    if (r !== undefined && !isNaN(r)) {
        $("#input-r").val(r);
    } else {
        parseAll = false;
    }

    var c = parseFloat(getUrlParameter("c"));
    if (c !== undefined && !isNaN(c)) {
        $("#input-c").val(c);
    } else {
        parseAll = false;
    }

    if (parseAll) {
        var message = calc(x0, r / 100., c);

        $("#result-container").text(message);

        var condition = "初期資産額" + x0 + "万円を年間" + r + "%で運用しながら生活費を毎年" + c + "万円使っていくと、";
        $("#tweet-button").attr("data-text", condition + message)
    }
}

$(document).ready(function() {
    parseInput();
    $("#input-form").submit(function (event) {
        event.preventDefault();
        var x0 = parseFloat($("#input-x0").val());
        var r = parseFloat($("#input-r").val());
        var c = parseFloat($("#input-c").val());
        window.location.search = $.param({x0: x0, r: r, c: c});
    });
});
