function numberOf(bigNum) {
    return parseInt(bigNum.toString());
}

function modadd(x, y, mod) {
    return numberOf(new BigNumber(x).add(y).mod(mod));
}

function modsub(x, y, mod) {
    return modadd(x, mod - y, mod);
}

function modmul(x, y, mod) {
    return numberOf(new BigNumber(x).multiply(y).mod(mod));
}

function modpow(x, n, mod) {
    if (n === 0) {
        return 1;
    }
    var ret = modpow(x, n >> 1, mod);
    ret = modmul(ret, ret, mod);
    if (n % 2) {
        ret = modmul(ret, x, mod);
    }
    return ret;
}

function inv(x, mod) {
    return modpow(x, mod - 2, mod);
}

function setResult(message) {
    $("#result-container").text(message);
}

function setResultParam(a, b, c, mod) {
    var message = "a[0] = " + a + ", a[i+1] = (" + b + " * a[i] + " + c + ") % " + mod;
    setResult(message);
}

function calc(event) {
    event.preventDefault();

    var terms = $(".value-input")
        .map(function(i, element) {
            return parseInt($(element).val());
        })
        .toArray();

    var mod = parseInt($("#mod-input").val());

    if (terms[0] === terms[1]) {
        if (terms[1] === terms[2]) {
            setResultParam(terms[0], 1, 0, mod);
        } else {
            setResult("There is no parameter that generates terms you input.");
        }
        return;
    }

    var a = terms[0];
    var invdet = inv(modsub(terms[0], terms[1], mod), mod);
    var b = modmul(modsub(terms[1], terms[2], mod), invdet, mod);
    var c = modmul(modsub(modmul(terms[0], terms[2], mod), modmul(terms[1], terms[1], mod), mod), invdet, mod);

    setResultParam(a, b, c, mod);
}

$(document).ready(function() {
    $("#input-form").submit(calc);
});
