const addTodoEl = document.querySelector('.title .inner .material-icons');
const input = document.getElementById('myInput');
var index = 0;
var date_list = new Array();
var time_list = new Array();
var term_list = new Array();
var alert_list = new Array();
var todo_ = new Array();
var check_list = new Array();
var now = new Date();

function getInput(){
    var li = document.createElement('li');
    var inputData = document.getElementById('myInput').value;
    var temp = document.createTextNode(inputData);
    var p_todo = document.createElement('p');
    var div = document.createElement('div');
    var div_date = document.createElement('div');
    var div_time= document.createElement('div');
    var div_alert = document.createElement('div');
    var div_alert_term = document.createElement('div');
    var div_confirm = document.createElement('div');
    var date = document.createElement('input');
    var time = document.createElement('input');
    var alert_1 = document.createElement('input');
    var alert_2 = document.createElement('input');
    var confirm = document.createElement('input');
    var check = document.createElement('input');
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
    alert_1.name = "alert_" + String(index);
    alert_2.name = "alert_" + String(index);
    alert_1.value = "alert_on";
    alert_2.value = "alert_off";
    alert_2.checked = "True";
    confirm.type = "button";
    confirm.value = "확인";
    check.type = "checkbox";
    div.className = "more";
    div_date.className = "date";
    div_time.className = "time";
    div_alert.className = "alert";
    div_alert_term.className = "alert_term";
    div_confirm.className = "confirm";
    alert_term.type = "text";
    alert_term.placeholder = "minute"
    p_todo.className = "todo_name";
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
    div_confirm.appendChild(confirm);
    div.appendChild(div_date);
    div.appendChild(div_time);
    div.appendChild(div_alert);
    div.appendChild(div_alert_term);
    div.appendChild(div_confirm);
    li.appendChild(check);
    p_todo.appendChild(temp);
    li.appendChild(p_todo);
    date_list.push(date);
    time_list.push(time);
    term_list.push(alert_term);
    alert_list.push(alert_1);
    todo_.push(inputData);
    check_list.push(check);
    if(inputData == ''){
        alert("you must write something!");
    }else{
        document.getElementById('myInput').value = "";
        var span = document.createElement("span");
        var simbol = document.createTextNode("clear");
        span.className = "material-icons";
        span.appendChild(simbol);
        span.addEventListener('click', function(){
            li.remove();
            div.remove();
        });
        li.appendChild(span);
        check.addEventListener('click', function(){
            if(check.checked){
                li.classList.add('done');
            }else{
                li.classList.remove('done');
            }
        });
        p_todo.addEventListener('click', function(){
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
        confirm.addEventListener('click', function(){
            if(check.checked){
                alert(inputData + " 일정은 완료되었습니다.");
                return;
            }
            if(date.value == "" && time.value == ""){
                alert(inputData + " 일정이 예정되어있습니다.");
                return;
            }
            var alert_main = inputData + " 일정이\n" + date.value + " " + time.value +" 에 예정되어있습니다.\n";
            if(alert_1.checked){
                var term_minute = parseInt(alert_term.value, 10);
                if(isNaN(term_minute)){
                    var alert_sub = "알람은 정각에 울립니다.";
                }else{
                    var alert_sub = "알람은 " + term_minute + "분 전에 울립니다.";
                }
                alert(alert_main + alert_sub);
            }else{
                alert(alert_main);
            }
        })
        document.querySelector('.Todo .inner ul').appendChild(li);
        document.querySelector('.Todo .inner ul').appendChild(div);
        index++;
    }
}

setInterval(function(){
    now = new Date();
    var date_str = String(now.getFullYear()) + "-" + ('0' + (now.getMonth() + 1)).slice(-2) + "-" + ('0' + now.getDate()).slice(-2);
    for(var i = 0; i < date_list.length; i++){
        if(isNaN(parseInt(term_list[i].value, 10))){
            var time_str = ('0' + now.getHours()).slice(-2) + ":" + ('0' + now.getMinutes()).slice(-2);
        }else{
            var hours = parseInt(parseInt(term_list[i].value, 10) / 60);
            var minute = parseInt(term_list[i].value, 10) % 60;
            if(now.getMinutes() + minute >= 60){
                var time_str = ('0' + (now.getHours() + hours + 1)).slice(-2) + ":" + ('0' + (60 - (now.getMinutes() + minute))).slice(-2);
            }else{
                var time_str = ('0' + (now.getHours() + hours)).slice(-2) + ":" + ('0' + (now.getMinutes() + minute)).slice(-2);
            }
        }
        if(date_str == date_list[i].value && time_str == time_list[i].value){
            if(alert_list[i].checked && !check_list[i].checked){
                alert(todo_[i]);
                alert_list[i].checked = false;
            }
        }
    }
}, 5000);

input.addEventListener('keypress', function(key){
    if(key.key == 'Enter'){
        getInput();
    }
});

addTodoEl.addEventListener('click', function(){
    getInput();
});
