let text = document.getElementById("reverse")

const reverseWord = () => {
    let word = document.getElementById("word");
    text.innerHTML = word.value.split('').reverse().join('');
    word.value = '';
}