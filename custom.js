function toggleCustomPos() {
    var customPos = document.getElementById('custom-pos-f-t');
    if (customPos.classList.contains('show')) {
        customPos.style.right = '20px';
    } else {
        customPos.style.right = '0';
    }
    customPos.classList.toggle('show');
}
