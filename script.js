document.getElementById('adviceButton').addEventListener('click', function() {
    var advice = document.getElementById('advice');
    if (advice.style.display === 'none') {
        advice.style.display = 'block';
    } else {
        advice.style.display = 'none';
    }
});
