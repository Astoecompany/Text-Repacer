function replaceText() {
    const inputText = document.getElementById("input-text").value;
    const replaceText = document.getElementById("replace-text").value;
    const withText = document.getElementById("with-text").value;
    const outputText = inputText.replaceAll(replaceText, withText);
    document.getElementById("output-text").value = outputText;
  }