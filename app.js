var file = "doc.md";
var xhr = new XMLHttpRequest();
xhr.open("GET", file, false);
xhr.onload = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            var converter = new showdown.Converter(),
                text = xhr.responseText,
                html = converter.makeHtml(text);
            document.getElementById("doc").innerHTML = html;
        } else {
            console.error(xhr.statusText);
        }
    }
};
xhr.onerror = function (e) {
    console.error(xhr.statusText);
};
xhr.send(null);