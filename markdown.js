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

const bodyFont = getComputedStyle(document.body).getPropertyValue('--font');
const bgColor = getComputedStyle(document.body).getPropertyValue('--bg-color');
const textColor=getComputedStyle(document.body).getPropertyValue('--text-color');
const fontSelect = document.getElementById('fontPicker');
const bgColorSelect=document.getElementById('bgColorPicker');
const textColorSelect = document.getElementById('textColorPicker');

const group=[fontSelect,bgColorSelect,textColorSelect];
group.forEach(function(option){
    option.addEventListener('change',(event)=>{
        document.body.style.setProperty(option.dataset.themeValue,event.target.value);
    })
})

function clearTextArea(){
    var textArea = document.getElementById('inputText');
    var editedArea=this.document.getElementById("resultText");
    editedArea.innerHTML=""
    textArea.value="";
}

function printToPDF(){
    var pdf=new jsPDF();
    pdf.fromHTML($('#resultText')[0],20,20);
    pdf.save("markdown.pdf");
}

//ignore some tag:

// var specialElementHandlers={
//     '#editor':function (element,render){
//         return true;
//     }
// };
// function printToPDF(){
//     var pdf=new jsPDF();
//     pdf.fromHTML($('#resultText')[0],20,20,{
//         elementHandlers:specialElementHandlers
//     });
//     pdf.save("markdown.pdf");
// }