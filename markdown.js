window.onload=function(){
    var converter = new showdown.Converter();
    var editArea=this.document.getElementById("inputText");
    var editedArea=this.document.getElementById("resultText");
    var changeEditTextToMarkdownText=function(){
        var markdownText=editArea.value;
        var html = converter.makeHtml(markdownText);
        editedArea.innerHTML=html;
        // console.log(group);
        
    }
    
    editArea.addEventListener("input",changeEditTextToMarkdownText);
    changeEditTextToMarkdownText();
}

const bodyFont = getComputedStyle(document.body).getPropertyValue('--font');
const bgColor = getComputedStyle(document.body).getPropertyValue('--bg-color');
const textColor=getComputedStyle(document.body).getPropertyValue('--text-color');
const fontSelect = document.getElementById('fontPicker');
const bgColorSelect=document.getElementById('bgColorPicker');
const textColorSelect = document.getElementById('textColorPicker');
// const fontSelect = document.querySelector('.fontPicker');
// const bgColorSelect=document.querySelector('.bgColorPicker');
// const textColorSelect = document.querySelector('.textColorPicker');

const group=[fontSelect,bgColorSelect,textColorSelect];
group.forEach(function(option){
    option.addEventListener('change',(event)=>{
        document.body.style.setProperty(option.dataset.themeValue,event.target.value);
    })
})