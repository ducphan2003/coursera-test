let list_content = [];
let list_result = [];

function onAddClick(){
    var a = 0;
    var newContent = document.getElementById('newContent').value;
    for(i = 0; i < list_content.length; i++){
        if(newContent == list_content[i]){
            a = 1;
        }
    }
    if(a == 0){
        list_content.push(newContent);
        updateContentList();
        a = 0;
    }
    document.getElementById("newContent").value="";
}

function updateContentList(){
    var eleContentList = document.getElementById("list_content");
    eleContentList.innerHTML = " ";
    for(i = 0; i < list_content.length; i++){
        eleContentList.innerHTML += '<li onclick="onclickList(' + i + ')">' + list_content[i] + '</li>';
    }
}

function onclickList(index){
    list_content.splice(index, 1);
    updateContentList();
}

function onRandomClick(){
    list_result.splice(0,list_result.length);
    let copy_content = [];
    i = list_content.length;
    for(a = 0; a < i; a++){
        copy_content[a] = a+1;
    }
    j = 0;
    while (i--) {
        j = Math.floor(Math.random()*(i + 1));
        list_result.push(copy_content[j]);
        copy_content.splice(j,1);
    }
    updateRandomList();
}

function updateRandomList(){
    var eleResultList = document.getElementById("list_result");
    eleResultList.innerHTML = " ";
    for(i = 0; i < list_result.length; i++){
        eleResultList.innerHTML += '<li>' + list_content[list_result[i]-1] + '</li>';
    }
}

function onResetClick(){
    list_content.splice(0,list_content.length);
    updateContentList();
    list_result.splice(0,list_result.length);
    updateRandomList();
}