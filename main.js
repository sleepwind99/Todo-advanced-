const addTodoEl = document.querySelector('.title .inner .material-icons');
const input = document.getElementById('myInput');

function getInput(){
    var li = document.createElement('li');
    var inputData = document.getElementById('myInput').value;
    var temp = document.createTextNode(inputData);
    var div = document.createElement('div');
    var div_date = document.createElement('div');
    var div_time= document.createElement('div');
    var div_alert = document.createElement('div');
    var div_alert_term = document.createElement('div');
    var date = document.createElement('input');
    var time = document.createElement('input');
    var alert_1 = document.createElement('input');
    var alert_2 = document.createElement('input');
    var p_date = document.createElement("p");
    var p_time = document.createElement("p");
    var p_alert = document.createElement("p");
    var p_alert_term = document.createElement("p");
    var alert_span = document.createElement("span");
    var alert_term = document.createElement("input");
    date.type = "date";
    time.type = "time";
    alert_1.type = "radio";
    alert_2.type = "radio";
    alert_1.name = "alert_";
    alert_2.name = "alert_";
    alert_1.value = "alert_on";
    alert_2.value = "alert_off";
    alert_2.checked = "true";
    div.className = "more";
    div_date.className = "date";
    div_time.className = "time";
    div_alert.className = "alert";
    div_alert_term.className = "alert_term";
    alert_term.type = "text";
    alert_term.placeholder = "minute"
    p_date.appendChild(document.createTextNode("날짜"));
    p_time.appendChild(document.createTextNode("시간"));
    p_alert.appendChild(document.createTextNode("알람 여부"));
    p_alert_term.appendChild(document.createTextNode("알림 시간"));
    alert_span.appendChild(document.createTextNode("분 전에 알림"));
    div_date.appendChild(p_date);
    div_date.appendChild(date);
    div_alert_term.appendChild(p_alert_term);
    div_alert_term.appendChild(alert_term);
    div_alert_term.appendChild(alert_span);
    div_time.appendChild(p_time);
    div_time.appendChild(time);
    div_alert.appendChild(p_alert);
    div_alert.appendChild(alert_1);
    div_alert.appendChild(document.createTextNode("on"));
    div_alert.appendChild(alert_2);
    div_alert.appendChild(document.createTextNode("off"));
    div.appendChild(div_date);
    div.appendChild(div_time);
    div.appendChild(div_alert);
    div.appendChild(div_alert_term);
    li.appendChild(temp);
    if(inputData == ''){
        alert("you must write something!");
    }else{
        document.getElementById('myInput').value = "";
        var span = document.createElement("span");
        var simbol = document.createTextNode("clear");
        span.className = "material-icons";
        span.appendChild(simbol);
        span.addEventListener('click', function(){
            span.parentElement.remove();
        })
        li.appendChild(span);
        li.addEventListener('click', function(){
            if(li.classList.contains('checked')){
                li.classList.remove('checked');
            }else{
                li.classList.add('checked');
            }
            if(div.classList.contains('checked')){
                div.classList.remove('checked');
            }else{
                div.classList.add('checked');
            }
        });
        document.querySelector('.Todo .inner ul').appendChild(li);
        document.querySelector('.Todo .inner ul').appendChild(div);
    }
}

input.addEventListener('keypress', function(key){
    if(key.key == 'Enter'){
        getInput();
    }
})

addTodoEl.addEventListener('click', function(){
    getInput();
});
