window.onload=function(){
    var converter = new showdown.Converter();
    var editArea=this.document.getElementById("inputText");
    var editedArea=this.document.getElementById("resultText");
    var changeEditTextToMarkdownText=function(){
        var markdownText=editArea.value;
        var html = converter.makeHtml(markdownText);
        editedArea.innerHTML=html;
    }

    editArea.addEventListener("input",changeEditTextToMarkdownText);
    changeEditTextToMarkdownText();
}