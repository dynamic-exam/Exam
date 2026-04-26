//https://script.google.com/macros/s/AKfycbz30x3f_z1oyIFd_MAHmHthLXa_TQd8i0dcFTiy5JF_cNCBjrcg4f4KZfQbbGVfap9j/exec

document.querySelector('.info-page .title').innerText = title;
document.querySelector('.info-page #total').innerText = questions.length;
document.querySelector('.info-page #time').innerText = time;
document.querySelector('.info-page #negMark').innerText = negMark;



function startExam(){
    var name = document.querySelector('.info-page .box .form #name');
    var college = document.querySelector('.info-page .box .form #college');
    if(name.value == ''){
        name.focus();
    }
    else if(college.value == ''){
        college.focus();
    }
    else{
        setExam();
        document.querySelector('.info-page').style.display = 'none';
    }
}

var state = '';
function setExam(){
    document.querySelector('.container .head .title').innerText = title;
    document.querySelector('.container .head .time').innerHTML ='<i class="fa fa-clock-o" aria-hidden="true"></i> ' + time+' Minutes';


    for(var i=0; i<questions.length; i++){
        var card = '';
        var op = '';
        for(var a=0; a<questions[i].options.length; a++){
            op += `<label>
                        <div class="option">
                            <div class="p1">
                                <div class="radio" onclick="clickedAns(${i}, ${a});">${opLabel[a]}</div>
                            </div>
                            <div class="p2">${questions[i].options[a]}</div>
                        </div>
                    </label>`;
        }
        card = `<div class="card" id="card${i}">
                <div class="top">
                    <div class="qLabel">Question ${i+1}</div>
                    <div class="qStatus"></div>
                </div>
                <div class="question">${questions[i].question}</div>
                <div class="options">
                    ${op}
                </div>
                <input type="hidden" id="q${i}" value="123456789">
            </div>`;
        
        document.querySelector('.container .questions').innerHTML+= card;
    }
    startTimer(time * 60);
}

function clickedAns(q,o){
    document.querySelector('.container .questions .card#card'+q).className= 'card answered';
    document.querySelector('.container .questions .card#card'+q+' #q'+q).value = o;
    document.querySelectorAll('.container .questions .card#card'+q+' .options .option')[o].className = 'option answered';
}

function startTimer(duration) {
    let timeLeft = duration;
    const timerSpan = document.querySelector('.fixed-bar .time');

    const interval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        // format like 02:05
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerSpan.innerHTML ='<i class="fa fa-clock-o" aria-hidden="true"></i> <span>'+ minutes + ' : ' + seconds + '</span>';

        if (timeLeft <= 0) {
            clearInterval(interval);
            timerSpan.textContent = "Time's up!";
            submit();
        }
        if(state == 'submitted'){
            clearInterval(interval);
        }

        timeLeft--;
    }, 1000);
}



function submit(){
    document.querySelector('.fixed-bar').style.display = 'none';
    document.querySelector('.container .foot .submit-btn').style.display = 'none';
    showReport();
    state = 'submitted';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showConfirmation(){
    document.querySelector('.filter').style.opacity=1;
    document.querySelector('.filter').style.pointerEvents='all';
    document.querySelector('.filter .confirm-box').style.transform='scale(1)';
}
function hideConfirmation(){
    document.querySelector('.filter').style.opacity=0;
    document.querySelector('.filter').style.pointerEvents='none';
    document.querySelector('.filter .confirm-box').style.transform='scale(0.9)';
}


function showReport(){
    var corr = 0;
    var incr = 0;
    var blank = 0;
    var ansScript = '';
    for(var i=0; i<questions.length; i++){
        if(document.querySelector('.card#card'+i+' #q'+i).value == questions[i].corrAns){
            corr ++;
            ansScript+= ' '+opLabel[document.querySelector('.card#card'+i+' #q'+i).value]+',';
            document.querySelector('.card#card'+i+' .top .qStatus').innerHTML = `<span class="corr">Correct</span>`;
            document.querySelectorAll('.card#card'+i+' .options .option')[questions[i].corrAns].className = 'option correct';
            document.querySelectorAll('.card#card'+i+' .options .option')[questions[i].corrAns].querySelector('.p2').innerHTML += '<i id="tick" class="fa fa-check" aria-hidden="true"></i>';
        }
        else if(document.querySelector('.card#card'+i+' #q'+i).value == '123456789'){
            blank ++;
            ansScript+=' blank,';
            document.querySelector('.card#card'+i+' .top .qStatus').innerHTML = `<span class="blank">Blank</span>`;
            document.querySelector('.card#card'+i).className='card answered';
            document.querySelectorAll('.card#card'+i+' .options .option')[questions[i].corrAns].className = 'option correct-w';
            document.querySelectorAll('.card#card'+i+' .options .option')[questions[i].corrAns].querySelector('.p2').innerHTML += '<i id="tick" class="fa fa-check" aria-hidden="true"></i>';
        }
        else{
            incr ++;
            ansScript+= ' '+opLabel[document.querySelector('.card#card'+i+' #q'+i).value]+',';
            document.querySelector('.card#card'+i+' .top .qStatus').innerHTML = `<span class="incr">Incorrect</span>`;
            document.querySelector('.card#card'+i+' .options .option.answered').className = 'option incorrect';
            document.querySelector('.card#card'+i+' .options .option.incorrect .p2').innerHTML += '<i id="cross" class="fa fa-times" aria-hidden="true"></i>';
            document.querySelectorAll('.card#card'+i+' .options .option')[questions[i].corrAns].className = 'option correct-w';
            document.querySelectorAll('.card#card'+i+' .options .option')[questions[i].corrAns].querySelector('.p2').innerHTML += '<i id="tick" class="fa fa-check" aria-hidden="true"></i>';
        }
    }

    var obtained = corr*mark - incr*negMark;
    var total = questions.length*mark;
    var accuracy = Math.round((corr / (corr+incr))*100);
    accuracy = (corr+incr) == 0? 0: accuracy;

    document.querySelector('.container .report .marks .data').innerText = obtained+'/'+total;
    document.querySelector('.container .report #correct .data').innerText = corr;
    document.querySelector('.container .report #incorrect .data').innerText = incr;
    document.querySelector('.container .report #skipped .data').innerText = blank;
    document.querySelector('.container .report #accuracy .data').innerText = accuracy + '%';
    document.querySelector('.container .report').style.display = 'block';


    const url = sheet; // your web app URL

    const formData = new FormData();
    formData.append("name", document.querySelector('.info-page #name').value);
    formData.append("college", document.querySelector('.info-page #college').value);
    formData.append("obtained", obtained);
    formData.append("correct", corr);
    formData.append("incorrect", incr);
    formData.append("skipped", blank);
    formData.append("accuracy", accuracy+'%');
    formData.append("ansScript", '[' + ansScript + ']');

    // 🔥 FIX: use no-cors
    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    })
    .then(() => {
        console.log("Data sent to Google Sheets");
    })
    .catch(err => console.error("Error:", err));


}