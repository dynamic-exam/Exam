document.title = title+' | Dynamic Exam System';

const examId = get('examId');
if(localStorage.getItem('exam'+examId) == 'submitted'){
    showReport();
}
else{
    showFrontPage();
}


function showFrontPage(){
    document.querySelector('.info-page').style.display = 'flex';
    document.querySelector('.info-page .exam-title').innerText = title;
    document.querySelector('.info-page .exam-info #info-total .data').innerText = questions.length;
    document.querySelector('.info-page .exam-info #info-time .data').innerText = time;
    document.querySelector('.info-page .instructions #info-total').innerText = questions.length;
    document.querySelector('.info-page .instructions #info-time').innerText = time;
    document.querySelector('.info-page .instructions #info-negMark').innerText = negMark;
}


function showReport(){
    let ansScript = JSON.parse(localStorage.getItem("examScript"+examId)) || new Array(questions.length).fill('blank');

    var corr = 0;
    var incr = 0;
    var blank = 0;

    const qContainer = document.querySelector('.container .questions');
    qContainer.innerHTML = '';
    document.querySelector('.container .head .title').innerText = title;
    document.querySelector('.container .head .time').innerHTML ='<i class="fa fa-clock-o" aria-hidden="true"></i> ' + time+' Minutes';

    for(var i=0; i<questions.length; i++){
        var card = '';
        var op = '';
        for(var a=0; a<questions[i].options.length; a++){
            op += `<label>
                        <div class="option">
                            <div class="p1">
                                <div class="radio">${opLabel[a]}</div>
                            </div>
                            <div class="p2">${questions[i].options[a]}</div>
                        </div>
                    </label>`;
        }
        card = `<div class="report-card" id="card${i}">
                <div class="top-part">
                    <div class="qLabel">Question ${i+1}</div>
                    <div class="qStatus"></div>
                </div>
                <div class="question">${questions[i].question}</div>
                <div class="options">
                    ${op}
                </div>
            </div>`;
        
        qContainer.innerHTML += card;

        if(ansScript[i] == questions[i].corrAns){
            corr ++;
            document.querySelector('.report-card#card'+i+' .top-part .qStatus').innerHTML = `<span class="corr">Correct</span>`;
            document.querySelectorAll('.report-card#card'+i+' .options .option')[questions[i].corrAns].className = 'option correct';
            document.querySelectorAll('.report-card#card'+i+' .options .option')[questions[i].corrAns].querySelector('.p2').innerHTML += '<i id="tick" class="fa fa-check" aria-hidden="true"></i>';
        }
        else if(ansScript[i] == 'blank'){
            blank ++;
            document.querySelector('.report-card#card'+i+' .top-part .qStatus').innerHTML = `<span class="blank">Blank</span>`;
            document.querySelectorAll('.report-card#card'+i+' .options .option')[questions[i].corrAns].className = 'option correct-w';
            document.querySelectorAll('.report-card#card'+i+' .options .option')[questions[i].corrAns].querySelector('.p2').innerHTML += '<i id="tick" class="fa fa-check" aria-hidden="true"></i>';
        }
        else{
            incr ++;
            document.querySelector('.report-card#card'+i+' .top-part .qStatus').innerHTML = `<span class="incr">Incorrect</span>`;
            document.querySelectorAll('.report-card#card'+i+' .options .option')[ansScript[i]].className = 'option incorrect';
            document.querySelector('.report-card#card'+i+' .options .option.incorrect .p2').innerHTML += '<i id="cross" class="fa fa-times" aria-hidden="true"></i>';
            document.querySelectorAll('.report-card#card'+i+' .options .option')[questions[i].corrAns].className = 'option correct-w';
            document.querySelectorAll('.report-card#card'+i+' .options .option')[questions[i].corrAns].querySelector('.p2').innerHTML += '<i id="tick" class="fa fa-check" aria-hidden="true"></i>';
        }
    }

    var obtained = corr*mark - incr*negMark;
    var total = questions.length*mark;
    var accuracy = (corr+incr) == 0? 0: Math.round((corr / (corr+incr))*100);

    document.querySelector('.container .report .marks .data').innerText = obtained+'/'+total;
    document.querySelector('.container .report #correct .data').innerText = corr;
    document.querySelector('.container .report #incorrect .data').innerText = incr;
    document.querySelector('.container .report #skipped .data').innerText = blank;
    document.querySelector('.container .report #accuracy .data').innerText = accuracy + '%';
    document.querySelector('.container .report').style.display = 'block';
}


function startExam(){
    var name = document.querySelector('.info-page .info-box .info-form #name');
    var college = document.querySelector('.info-page .info-box .info-form #college');
    if(name.value == ''){
        name.focus();
    }
    else if(college.value == ''){
        college.focus();
    }
    else{
        document.querySelector('.info-page .form-btns #start-exam-btn').innerHTML='Wait...';
        document.querySelector('.info-page .form-btns #start-exam-btn').style.pointerEvents='none';
        showLoader();
        setExam();
        document.querySelector('.info-page').style.display = 'none';
        setTimeout(()=>{
            hideLoader();
        }, 2000);
    }
}


function setExam(){
    document.querySelector('.container .questions').innerHTML = '';
    document.querySelector('.container .head .title').innerText = title;
    document.querySelector('.container .head .time').innerHTML ='<i class="fa fa-clock-o" aria-hidden="true"></i> ' + time+' Minutes';

    for(var i=0; i<questions.length; i++){
        var card = '';
        var op = '';
        for(var a=0; a<questions[i].options.length; a++){
            op += `<label>
                        <div class="option">
                            <div class="p1">
                                <div role="radio" class="radio" onclick="clickedAns(${i}, ${a});">${opLabel[a]}</div>
                            </div>
                            <div class="p2">${questions[i].options[a]}</div>
                        </div>
                    </label>`;
        }
        card = `<div class="exam-card" id="card${i}">
                <div class="top-part">
                    <div class="qLabel">Question ${i+1}</div>
                </div>
                <div class="question">${questions[i].question}</div>
                <div class="options">
                    ${op}
                </div>
            </div>`;
        
        document.querySelector('.container .questions').innerHTML+= card;
    }
    startTimer(time * 60);
    document.querySelector('.fixed-bar').style.display = 'flex';
    document.querySelector('.container .foot #submit-btn').style.display = 'flex';
}
var ansScript1 = new Array(questions.length).fill('blank');



function clickedAns(q,o){
    ansScript1[q] = o;
    document.querySelector('.container .questions .exam-card#card'+q).className= 'exam-card answered';
    document.querySelectorAll('.container .questions .exam-card#card'+q+' .options .option')[o].className = 'option answered';
}

function startTimer(duration) {
    let timeLeft = duration;
    const timerSpan = document.querySelector('.fixed-bar .time');

    const interval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerSpan.innerHTML ='<i class="fa fa-clock-o" aria-hidden="true"></i> <span>'+ minutes + ' : ' + seconds + '</span>';

        if (timeLeft <= 0) {
            clearInterval(interval);
            timerSpan.textContent = "Time's up!";
            submit();
        }
        timeLeft--;
    }, 1000);
}



function submit(){
    showLoader();
    var corr = 0;
    var incr = 0;
    var blank = 0;
    var ansScript2 = '';
    for(var i=0; i<questions.length; i++){
        if(ansScript1[i] == questions[i].corrAns){
            corr ++;
            ansScript2+= ' '+opLabel[ansScript1[i]]+',';
        }
        else if(ansScript1[i] == 'blank'){
            blank ++;
            ansScript2+=' blank,';
        }
        else{
            incr ++;
            ansScript2+= ' '+opLabel[ansScript1[i]]+',';
        }
    }
    var obtained = corr*mark - incr*negMark;
    var total = questions.length*mark;
    var accuracy = (corr+incr) == 0? 0: Math.round((corr / (corr+incr))*100);

    const url = sheet;

    const formData = new FormData();
    formData.append("name", document.querySelector('.info-page #name').value);
    formData.append("college", document.querySelector('.info-page #college').value);
    formData.append("obtained", obtained);
    formData.append("correct", corr);
    formData.append("incorrect", incr);
    formData.append("skipped", blank);
    formData.append("accuracy", accuracy+'%');
    formData.append("ansScript", '[' + ansScript2 + ']');

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    })
    .then(() => {
        localStorage.setItem('examScript'+examId, JSON.stringify(ansScript1));
        localStorage.setItem('exam'+examId, 'submitted');
        window.location.href = window.location.href;
    })
    .catch(err => {
        alert('Could not submit !');
        hideLoader();
    });
}

function showConfirmation(){
    document.querySelector('.confirm-box-filter').style.opacity=1;
    document.querySelector('.confirm-box-filter').style.pointerEvents='all';
    document.querySelector('.confirm-box-filter .confirm-box').style.transform='scale(1)';
}
function hideConfirmation(){
    document.querySelector('.confirm-box-filter').style.opacity=0;
    document.querySelector('.confirm-box-filter').style.pointerEvents='none';
    document.querySelector('.confirm-box-filter .confirm-box').style.transform='scale(0.9)';
}

function showLoader(){
    document.querySelector('.loader-screen').style.opacity=1;
    document.querySelector('.loader-screen').style.pointerEvents='all';
}
function hideLoader(){
    document.querySelector('.loader-screen').style.opacity=0;
    document.querySelector('.loader-screen').style.pointerEvents='none';
}