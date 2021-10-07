var away;
var smallhead;
var silence;
var sleep;

var away1Count = 0;
var small1Count = 0;
var sil1Count = 0;
var sleep1Count = 0;
var away2Count = 0;
var small2Count = 0;
var sil2Count = 0;
var sleep2Count = 0;
var away3Count = 0;
var small3Count = 0;
var sil3Count = 0;
var sleep3Count = 0;
var away4Count = 0;
var small4Count = 0;
var sil4Count = 0;
var sleep4Count = 0;

let temp11 = 0;
let temp12 = 0;
let temp13 = 0;
let temp14 = 0;
let temp21 = 0;
let temp22 = 0;
let temp23 = 0;
let temp24 = 0;
let temp31 = 0;
let temp32 = 0;
let temp33 = 0;
let temp34 = 0;
let temp41 = 0;
let temp42 = 0;
let temp43 = 0;
let temp44 = 0;

var alarmaudio = new Audio(
"https://drive.google.com/uc?id=15wahiayrur6SaxASPRSHLtnYezOmpJKT"
);
var bombaudio = new Audio(
"https://drive.google.com/uc?id=1I7TQstLvbdfaAqp27jB44e1801b1An0g"
);

var bombaudio1 = new Audio(
"https://drive.google.com/uc?id=1I7TQstLvbdfaAqp27jB44e1801b1An0g"
);
var bombaudio2 = new Audio(
"https://drive.google.com/uc?id=1I7TQstLvbdfaAqp27jB44e1801b1An0g"
);
var bombaudio3 = new Audio(
"https://drive.google.com/uc?id=1I7TQstLvbdfaAqp27jB44e1801b1An0g"
);
var bombaudio4 = new Audio(
"https://drive.google.com/uc?id=1I7TQstLvbdfaAqp27jB44e1801b1An0g"
);

let sirenaudio = new Audio(
"https://drive.google.com/uc?id=1j7vKTfqzoBVfvHUqgyHmq-GDniSrdzS4"
);
let sirenaudio1 = new Audio(
"https://drive.google.com/uc?id=1j7vKTfqzoBVfvHUqgyHmq-GDniSrdzS4"
);
let sirenaudio2 = new Audio(
"https://drive.google.com/uc?id=1j7vKTfqzoBVfvHUqgyHmq-GDniSrdzS4"
);
let sirenaudio3 = new Audio(
"https://drive.google.com/uc?id=1j7vKTfqzoBVfvHUqgyHmq-GDniSrdzS4"
);
let sirenaudio4 = new Audio(
"https://drive.google.com/uc?id=1j7vKTfqzoBVfvHUqgyHmq-GDniSrdzS4"
);
let bombtime = 15;
let bombinterval;
const bombtimeHtml = document.getElementById("modal_bomb_time");
const modal_comeback_white = document.getElementById(
"modal_comeback_white"
);
const close_modal_comeback = document.getElementById(
"close_modal_comeback"
);
const modal_speechless =
document.getElementById("modal_speechless");
//학생1의 agent 발생 횟수 파악
var agent_occur_count1 = [0, 0, 0];
//학생1의 agent가 켜졌을때 1로 변경
var agent1_on = [0, 0, 0];
var agent_occur_count2 = [0, 0, 0];
var agent2_on = [0, 0, 0];
var agent_occur_count3 = [0, 0, 0];
var agent3_on = [0, 0, 0];
var agent_occur_count4 = [0, 0, 0];
var agent4_on = [0, 0, 0];
//agent 로그 기록보드
var bar_board = document.getElementById('stu1_bar');   
var bar_board2 = document.getElementById('stu2_bar');   
var bar_board3 = document.getElementById('stu3_bar');   
var bar_board4 = document.getElementById('stu4_bar');               
setInterval(function () {
$.ajax({
    url: "/generalStat_feed",
    type: "POST",
    success: function (response) {
    // away = response['stu1General'][0];
    // smallhead = response['stu1General'][1];
    // silence = response['stu1General'][2];
    stu1Str = response["stu1General"];
    stu2Str = response["stu2General"];
    stu3Str = response["stu3General"];
    stu4Str = response["stu4General"];

    away1 = stu1Str[0];
    smallhead1 = stu1Str[1];
    silence1 = stu1Str[2];
    sleep1 = stu1Str[3];
    away2 = stu2Str[0];
    smallhead2 = stu2Str[1];
    silence2 = stu2Str[2];
    sleep2 = stu2Str[3];
    away3 = stu3Str[0];
    smallhead3 = stu3Str[1];
    silence3 = stu3Str[2];
    sleep3 = stu3Str[3];
    away4 = stu4Str[0];
    smallhead4 = stu4Str[1];
    silence4 = stu4Str[2];
    sleep4 = stu4Str[3];

    if (away1 === "1") {
        away1Count++;
    } else {
        document.getElementById("stu1_img1").style.display =
        "none";
        away1Count = 0;
    }

    if (smallhead1 === "1") {
        small1Count++;
    } else {
        document.getElementById("stu1_img2").style.display =
        "none";
        small1Count = 0;
    }

    if (silence1 === "1") {
        sil1Count++;
    } else {
        document.getElementById("stu1_img3").style.display =
        "none";
        sil1Count = 0;
    }

    if (sleep1 === "1") {
        sleep1Count++;
    } else {
        document.getElementById("stu1_img4").style.display =
        "none";
        sleep1Count = 0;
    }

    if (away2 === "1") {
        away2Count++;
    } else {
        document.getElementById("stu2_img1").style.display =
        "none";
        away2Count = 0;
    }

    if (smallhead2 === "1") {
        small2Count++;
    } else {
        document.getElementById("stu2_img2").style.display =
        "none";
        small2Count = 0;
    }

    if (silence2 === "1") {
        sil2Count++;
    } else {
        document.getElementById("stu2_img3").style.display =
        "none";
        sil2Count = 0;
    }

    if (sleep2 === "1") {
        sleep2Count++;
    } else {
        document.getElementById("stu2_img4").style.display =
        "none";
        sleep2Count = 0;
    }

    if (away3 === "1") {
        away3Count++;
    } else {
        document.getElementById("stu3_img1").style.display =
        "none";
        away3Count = 0;
    }

    if (smallhead3 === "1") {
        small3Count++;
    } else {
        document.getElementById("stu3_img2").style.display =
        "none";
        small3Count = 0;
    }

    if (silence3 === "1") {
        sil3Count++;
    } else {
        document.getElementById("stu3_img3").style.display =
        "none";
        sil3Count = 0;
    }

    if (sleep3 === "1") {
        sleep3Count++;
    } else {
        document.getElementById("stu3_img4").style.display =
        "none";
        sleep3Count = 0;
    }

    if (away4 === "1") {
        away4Count++;
    } else {
        document.getElementById("stu4_img1").style.display =
        "none";
        away4Count = 0;
    }

    if (smallhead4 === "1") {
        small4Count++;
    } else {
        document.getElementById("stu4_img2").style.display =
        "none";
        small4Count = 0;
    }

    if (silence4 === "1") {
        sil4Count++;
    } else {
        document.getElementById("stu4_img3").style.display =
        "none";
        sil4Count = 0;
    }

    if (sleep4 === "1") {
        sleep4Count++;
    } else {
        document.getElementById("stu4_img4").style.display =
        "none";
        sleep4Count = 0;
    }
    if(video_off === 0){
    //자리비움
    if (away1Count > 5) {
        document.getElementById("stu1_img1").style.display =
        "block";
        stu1img1();
        if (agent1_on[0] === 0) {
        agent_occur_count1[0]++;
        agent1_on[0] = 1;
        }
        //agent 발생 그래프 생성                               
        let st1_progress = document.createElement('div');
        st1_progress.className = 'progress-bar';
        st1_progress.style.width = '0.5%';
        st1_progress.style.backgroundColor = '#3772E4';                                             
        bar_board.appendChild(st1_progress);
    } else {
        agent1_on[0] = 0;
        document.getElementById(
        "std1_modal_thief"
        ).style.display = "none";
        if (temp11 === 1) {
        sirenaudio1.pause();
        sirenaudio1.currentTime = 0;                        
        temp11 = 0;                       
        }     
        //흰색 공간 생성                                   
        let st1_progress = document.createElement('div');
        st1_progress.className = 'progress-bar';
        st1_progress.style.width = '0.5%';
        st1_progress.style.backgroundColor = '#fff';
        
        bar_board.appendChild(st1_progress);
    }
    //자세불량

    if (small1Count > 5) {
        document.getElementById("stu1_img2").style.display =
        "block";
        stu1img2();

        if (agent1_on[1] === 0) {
        agent_occur_count1[1]++;
        agent1_on[1] = 1;
        }
        //agent 발생 그래프 생성                      
        let st1_progress = document.createElement('div');
        st1_progress.className = 'progress-bar';
        st1_progress.style.width = '0.5%';
        st1_progress.style.backgroundColor = '#66CCDD';                                             
        bar_board2.appendChild(st1_progress);
    } else {
        agent1_on[1] = 0;
        document.getElementById(
        "std1_modal_posture"
        ).style.display = "none";
        if (temp12 === 1) {
        small1Count = 0;
        temp12 = 0;
        }
        //흰색 공간 생성                     
        let st1_progress = document.createElement('div');
        st1_progress.className = 'progress-bar';
        st1_progress.style.width = '0.5%';
        st1_progress.style.backgroundColor = '#fff';
        bar_board2.appendChild(st1_progress);
    }
    if (sil1Count > 5) {
        document.getElementById("stu1_img3").style.display =
        "block";
        //agent 발생 그래프 생성                     
        let st1_progress = document.createElement('div');
        st1_progress.className = 'progress-bar';
        st1_progress.style.width = '0.5%';
        st1_progress.style.backgroundColor = '#C9559A';                       
        
        bar_board4.appendChild(st1_progress);

    } else {
        document.getElementById(
        "std1_modal_speech"
        ).style.display = "none";
        if (temp13 === 1) {
        sil1Count = 0;
        temp13 = 0;
        }                     
        let st1_progress = document.createElement('div');
        st1_progress.className = 'progress-bar';
        st1_progress.style.width = '0.5%';
        st1_progress.style.backgroundColor = '#fff';
        bar_board4.appendChild(st1_progress);
    }
    //졸음감지
    if (sleep1Count > 5) {
        document.getElementById("stu1_img4").style.display =
        "block";
        stu1img4();
        if (agent1_on[2] === 0) {
        agent_occur_count1[2]++;
        agent1_on[2] = 1;
        }
        //agent 발생 그래프 생성                      
        let st1_progress = document.createElement('div');
        st1_progress.className = 'progress-bar';
        st1_progress.style.width = '0.5%';
        st1_progress.style.backgroundColor = '#FF6A8E';                                              
        bar_board3.appendChild(st1_progress);
    } else {
        agent1_on[2] = 0;
        document.getElementById("std1_modal_bomb").style.display =
        "none";

        if (temp14 === 1) {
        sleep1Count = 0;
        temp14 = 0;
        bombaudio1.pause();
        bombaudio1.currentTime = 0;
        }                                            
        let st1_progress = document.createElement('div');
        st1_progress.className = 'progress-bar';
        st1_progress.style.width = '0.5%';
        st1_progress.style.backgroundColor = '#fff';
        bar_board3.appendChild(st1_progress);
    }

    //자리비움
    if (away2Count > 5) {
        document.getElementById("stu2_img1").style.display =
        "block";
        stu2img1();
        if (agent2_on[0] === 0) {
        agent_occur_count2[0]++;
        agent2_on[0] = 1;
        }
    } else {
        agent2_on[0] = 0;
        document.getElementById(
        "std2_modal_thief"
        ).style.display = "none";
        if (temp21 === 1) {
        away2Count = 0;
        temp21 = 0;
        sirenaudio2.pause();
        sirenaudio2.currentTime = 0;
        }
    }
    }
    //자세불량
    if (small2Count > 5) {
        document.getElementById("stu2_img2").style.display =
        "block";
        stu2img2();
        if (agent2_on[1] === 0) {
        agent_occur_count2[1]++;
        agent2_on[1] = 1;
        }
    } else {
        agent2_on[1] = 0;
        document.getElementById(
        "std2_modal_posture"
        ).style.display = "none";
        if (temp22 === 1) {
        small2Count = 0;
        temp22 = 0;
        }
    }

    if (sil2Count > 5) {
        document.getElementById("stu2_img3").style.display =
        "block";
    } else {
        document.getElementById(
        "std2_modal_speech"
        ).style.display = "none";
        if (temp23 === 1) {
        sil2Count = 0;
        temp23 = 0;
        }
    }
    //졸음감지
    if (sleep2Count > 5) {
        document.getElementById("stu2_img4").style.display =
        "block";
        stu2img4();
        if (agent2_on[2] === 0) {
        agent_occur_count2[2]++;
        agent2_on[2] = 1;
        }
    } else {
        agent2_on[2] = 0;
        document.getElementById("std2_modal_bomb").style.display =
        "none";
        if (temp24 === 1) {
        bombaudio2.pause();
        bombaudio2.currentTime = 0;
        sleep2Count = 0;
        temp24 = 0;
        }
    }
    //자리비움
    if (away3Count > 5) {
        document.getElementById("stu3_img1").style.display =
        "block";
        stu3img1();
        if (agent3_on[0] === 0) {
        agent_occur_count3[0]++;
        agent3_on[0] = 1;
        }
    } else {
        agent3_on[0] = 0;
        document.getElementById(
        "std3_modal_thief"
        ).style.display = "none";
        if (temp31 === 1) {
        sirenaudio3.pause();
        sirenaudio3.currentTime = 0;
        away3Count = 0;
        temp31 = 0;
        }
    }
    //자세불량
    if (small3Count > 5) {
        document.getElementById("stu3_img2").style.display =
        "block";
        stu3img2();
        if (agent3_on[1] === 0) {
        agent_occur_count3[1]++;
        agent3_on[1] = 1;
        }
    } else {
        agent3_on[1] = 0;
        document.getElementById(
        "std3_modal_posture"
        ).style.display = "none";
        if (temp32 === 1) {
        small3Count = 0;
        temp32 = 0;
        }
    }
    if (sil3Count > 5) {
        document.getElementById("stu3_img3").style.display =
        "block";
    } else {
        document.getElementById(
        "std3_modal_speech"
        ).style.display = "none";
        if (temp33 === 1) {
        sil3Count = 0;
        temp33 = 0;
        }
    }
    //졸음감지
    if (sleep3Count > 5) {
        document.getElementById("stu3_img4").style.display =
        "block";
        stu3img4();
        if (agent3_on[2] === 0) {
        agent_occur_count3[2]++;
        agent3_on[2] = 1;
        }
    } else {
        agent3_on[2] = 0;
        document.getElementById("std3_modal_bomb").style.display =
        "none";
        if (temp34 === 1) {
        bombaudio3.pause();
        bombaudio3.currentTime = 0;
        sleep3Count = 0;
        temp34 = 0;
        }
    }
    //자리비움
    if (away4Count > 5) {
        document.getElementById("stu4_img1").style.display =
        "block";
        stu4img1();
        if (agent4_on[0] === 0) {
        agent_occur_count4[0]++;
        agent4_on[0] = 1;
        }
    } else {
        agent4_on[0] = 0;
        document.getElementById(
        "std4_modal_thief"
        ).style.display = "none";
        if (temp41 === 1) {
        sirenaudio4.pause();
        sirenaudio4.currentTime = 0;
        away4Count = 0;
        temp41 = 0;
        }
    }
    //자세불량
    if (small4Count > 5) {
        document.getElementById("stu4_img2").style.display =
        "block";
        stu4img2();
        if (agent4_on[1] === 0) {
        agent_occur_count4[1]++;
        agent4_on[1] = 1;
        }
    } else {
        agent4_on[1] = 0;
        document.getElementById(
        "std4_modal_posture"
        ).style.display = "none";
        if (temp42 === 1) {
        small4Count = 0;
        temp42 = 0;
        }
    }
    if (sil4Count > 5) {
        document.getElementById("stu4_img3").style.display =
        "block";
    } else {
        document.getElementById(
        "std4_modal_speech"
        ).style.display = "none";
        if (temp43 === 1) {
        sil4Count = 0;
        temp43 = 0;
        }
    }
    //졸음감지
    if (sleep4Count > 5) {
        document.getElementById("stu4_img4").style.display =
        "block";
        stu4img4();
        if (agent4_on[2] === 0) {
        agent_occur_count4[2]++;
        agent4_on[2] = 1;
        }
    } else {
        agent4_on[2] = 0;
        document.getElementById("std4_modal_bomb").style.display =
        "none";
        if (temp44 === 1) {
        bombaudio4.pause();
        bombaudio4.currentTime = 0;
        sleep4Count = 0;
        temp44 = 0;
        }
    }
    /*
    $("#stu1_away").text(
        String(agent_occur_count1[0]) + "회");
    $("#stu1_small").text(
        String(agent_occur_count1[1]) + "회");
    $("#stu1_sleep").text(
        String(agent_occur_count1[2]) + "회");
    */
    var agent_occur_sum1 =
        agent_occur_count1[0] +
        agent_occur_count1[1] +
        agent_occur_count1[2];
    //agent가 발생 안했을 때
    if (agent_occur_sum1 === 0) {
        $("#progress-color1_1").attr(
        "style",
        "width : " +
            "2%;" +
            "background-color: " +
            "#ff6a8e;" +
            "border-top-right-radius: " +
            "15px;" +
            "border-bottom-right-radius:" +
            " 15px;"
        );
        $("#progress-text1_1").text("");
    }
    //agent가 10번 아래로 발생 했을 때
    else if (agent_occur_sum1 < 10) {
        $("#progress-color1_1").attr(
        "style",
        "width : " +
            String(agent_occur_count1[0] * 10) +
            "%;" +
            "background-color: " +
            "#fbd9f7;"
        );
        $("#progress-text1_1").text(
        String(agent_occur_count1[0]) + "회"
        );

        $("#progress-color1_2").attr(
        "style",
        "width : " +
            String(agent_occur_count1[1] * 10) +
            "%;" +
            "background-color: " +
            "#ff8ddf;"
        );
        $("#progress-text1_2").text(
        String(agent_occur_count1[1]) + "회"
        );

        $("#progress-color1_3").attr(
        "style",
        "width : " +
            String(agent_occur_count1[2] * 10) +
            "%;" +
            "background-color: " +
            "#ff6a8e;"
        );
        $("#progress-text1_3").text(
        String(agent_occur_count1[2]) + "회"
        );
    }
    //agent가 10번 이상 발생 했을 경우 --> 화면에 full로 적용된 그래프에서 비율 조절
    else {
        var agent_occur_adjusted1 = [0, 0, 0];
        for (var i = 0; i < 3; i++) {
        agent_occur_adjusted1[i] =
            agent_occur_count1[i] * (9 / agent_occur_sum1);
        }
        if (agent_occur_adjusted1[0] > 0.5) {
        $("#progress-color1_1").attr(
            "style",
            "width : " +
            String(agent_occur_adjusted1[0] * 10) +
            "%;" +
            "background-color: " +
            "#fbd9f7;"
        );
        } else if (agent_occur_count1[0] > 0) {
        $("#progress-color1_1").attr(
            "style",
            "width : " + "5%;" + "background-color: " + "#fbd9f7;"
        );
        }
        if (agent_occur_count1[0] > 0) {
        $("#progress-text1_1").text(
            String(agent_occur_count1[0]) + "회"
        );
        }
        if (agent_occur_adjusted1[1] > 0.5) {
        $("#progress-color1_2").attr(
            "style",
            "width : " +
            String(agent_occur_adjusted1[1] * 10) +
            "%;" +
            "background-color: " +
            "#ff8ddf;"
        );
        } else if (agent_occur_count1[1] > 0) {
        $("#progress-color1_2").attr(
            "style",
            "width : " + "5%;" + "background-color: " + "#fbd9f7;"
        );
        }
        if (agent_occur_count1[1] > 0) {
        $("#progress-text1_2").text(
            String(agent_occur_count1[1]) + "회"
        );
        }
        if (agent_occur_adjusted1[2] > 0.5) {
        $("#progress-color1_3").attr(
            "style",
            "width : " +
            String(agent_occur_adjusted1[2] * 10) +
            "%;" +
            "background-color: " +
            "#ff6a8e;"
        );
        } else if (agent_occur_count1[2] > 0) {
        $("#progress-color1_3").attr(
            "style",
            "width : " + "5%;" + "background-color: " + "#fbd9f7;"
        );
        }
        if (agnet_occur_count1[2] > 0) {
        $("#progress-text1_3").text(
            String(agent_occur_count1[2]) + "회"
        );
        }
    }

    //학생2 그래프 생성
    var agent_occur_sum2 =
        agent_occur_count2[0] +
        agent_occur_count2[1] +
        agent_occur_count2[2];
    if (agent_occur_sum2 === 0) {
        $("#progress-color2_1").attr(
        "style",
        "width : " +
            "2%;" +
            "background-color: " +
            "#ff6a8e;" +
            "border-top-right-radius: " +
            "15px;" +
            "border-bottom-right-radius:" +
            " 15px;"
        );
        $("#progress-text2_1").text("");
    } else if (agent_occur_sum2 < 10) {
        $("#progress-color2_1").attr(
        "style",
        "width : " +
            String(agent_occur_count2[0] * 10) +
            "%;" +
            "background-color: " +
            "#fbd9f7;"
        );
        $("#progress-text2_1").text(
        String(agent_occur_count2[0]) + "회"
        );

        $("#progress-color2_2").attr(
        "style",
        "width : " +
            String(agent_occur_count2[1] * 10) +
            "%;" +
            "background-color: " +
            "#ff8ddf;"
        );
        $("#progress-text2_2").text(
        String(agent_occur_count2[1]) + "회"
        );

        $("#progress-color2_3").attr(
        "style",
        "width : " +
            String(agent_occur_count2[2] * 10) +
            "%;" +
            "background-color: " +
            "#ff6a8e;"
        );
        $("#progress-text2_3").text(
        String(agent_occur_count2[2]) + "회"
        );
    } else {
        var agent_occur_adjusted2 = [0, 0, 0];
        for (var i = 0; i < 3; i++) {
        agent_occur_adjusted2[i] =
            agent_occur_count2[i] * (9 / agent_occur_sum2);
        }
        if (agent_occur_adjusted2[0] > 0.5) {
        $("#progress-color2_1").attr(
            "style",
            "width : " +
            String(agent_occur_adjusted2[0] * 10) +
            "%;" +
            "background-color: " +
            "#fbd9f7;"
        );
        } else if (agent_occur_count2[0] > 0) {
        $("#progress-color2_1").attr(
            "style",
            "width : " + "5%;" + "background-color: " + "#fbd9f7;"
        );
        }
        if (agent_occur_count2[0] > 0) {
        $("#progress-text2_1").text(
            String(agent_occur_count2[0]) + "회"
        );
        }

        if (agent_occur_adjusted2[1] > 0.5) {
        $("#progress-color2_2").attr(
            "style",
            "width : " +
            String(agent_occur_adjusted2[1] * 10) +
            "%;" +
            "background-color: " +
            "#ff8ddf;"
        );
        } else if (agent_occur_count2[1] > 0) {
        $("#progress-color2_2").attr(
            "style",
            "width : " + "5%;" + "background-color: " + "#ff8ddf;"
        );
        }
        if (agent_occur_count2[1] > 0) {
        $("#progress-text2_2").text(
            String(agent_occur_count2[1]) + "회"
        );
        }

        if (agent_occur_adjusted2[2] > 0.5) {
        $("#progress-color2_3").attr(
            "style",
            "width : " +
            String(agent_occur_adjusted2[2] * 10) +
            "%;" +
            "background-color: " +
            "#ff6a8e;"
        );
        } else if (agent_occur_count2[2] > 0) {
        $("#progress-color2_3").attr(
            "style",
            "width : " + "5%;" + "background-color: " + "#ff8ddf;"
        );
        }
        if (agent_occur_count2[2] > 0) {
        $("#progress-text2_3").text(
            String(agent_occur_count2[2]) + "회"
        );
        }
    }

    //학생3 그래프 생성
    var agent_occur_sum3 =
        agent_occur_count3[0] +
        agent_occur_count3[1] +
        agent_occur_count3[2];
    if (agent_occur_sum3 === 0) {
        $("#progress-color3_1").attr(
        "style",
        "width : " +
            "2%;" +
            "background-color: " +
            "#ff6a8e;" +
            "border-top-right-radius: " +
            "15px;" +
            "border-bottom-right-radius:" +
            " 15px;"
        );
        $("#progress-text3_1").text("");
    } else if (agent_occur_sum3 < 10) {
        $("#progress-color3_1").attr(
        "style",
        "width : " +
            String(agent_occur_count3[0] * 10) +
            "%;" +
            "background-color: " +
            "#fbd9f7;"
        );
        $("#progress-text3_1").text(
        String(agent_occur_count3[0]) + "회"
        );

        $("#progress-color3_2").attr(
        "style",
        "width : " +
            String(agent_occur_count3[1] * 10) +
            "%;" +
            "background-color: " +
            "#ff8ddf;"
        );
        $("#progress-text3_2").text(
        String(agent_occur_count3[1]) + "회"
        );

        $("#progress-color3_3").attr(
        "style",
        "width : " +
            String(agent_occur_count3[2] * 10) +
            "%;" +
            "background-color: " +
            "#ff6a8e;"
        );
        $("#progress-text3_3").text(
        String(agent_occur_count3[2]) + "회"
        );
    } else {
        var agent_occur_adjusted3 = [0, 0, 0];
        for (var i = 0; i < 3; i++) {
        agent_occur_adjusted3[i] =
            agent_occur_count3[i] * (9 / agent_occur_sum3);
        }
        if (agent_occur_adjusted3[0] > 0.5) {
        $("#progress-color3_1").attr(
            "style",
            "width : " +
            String(agent_occur_adjusted3[0] * 10) +
            "%;" +
            "background-color: " +
            "#fbd9f7;"
        );
        } else if (agent_occur_count3[0] > 0) {
        $("#progress-color3_1").attr(
            "style",
            "width : " + "5%;" + "background-color: " + "#fbd9f7;"
        );
        }
        if (agent_occur_count3[0] > 0) {
        $("#progress-text3_1").text(
            String(agent_occur_count3[0]) + "회"
        );
        }
        if (agent_occur_adjusted3[1] > 0.5) {
        $("#progress-color3_2").attr(
            "style",
            "width : " +
            String(agent_occur_adjusted3[1] * 10) +
            "%;" +
            "background-color: " +
            "#ff8ddf;"
        );
        } else if (agent_occur_count3[1] > 0) {
        $("#progress-color3_2").attr(
            "style",
            "width : " + "5%;" + "background-color: " + "#fbd9f7;"
        );
        }
        if (agent_occur_count3[1] > 0) {
        $("#progress-text3_2").text(
            String(agent_occur_count3[1]) + "회"
        );
        }
        if (agent_occur_adjusted3[2] > 0.5) {
        $("#progress-color3_3").attr(
            "style",
            "width : " +
            String(agent_occur_adjusted3[2] * 10) +
            "%;" +
            "background-color: " +
            "#ff6a8e;"
        );
        } else if (agent_occur_count3[2] > 0) {
        $("#progress-color3_3").attr(
            "style",
            "width : " + "5%;" + "background-color: " + "#fbd9f7;"
        );
        }
        if (agent_occur_count3[2] > 0) {
        $("#progress-text3_3").text(
            String(agent_occur_count3[2]) + "회"
        );
        }
    }

    //학생4 그래프 생성
    var agent_occur_sum4 =
        agent_occur_count4[0] +
        agent_occur_count4[1] +
        agent_occur_count4[2];
    if (agent_occur_sum4 === 0) {
        $("#progress-color4_1").attr(
        "style",
        "width : " +
            "2%;" +
            "background-color: " +
            "#ff6a8e;" +
            "border-top-right-radius: " +
            "15px;" +
            "border-bottom-right-radius:" +
            " 15px;"
        );
        $("#progress-text4_1").text("");
    } else if (agent_occur_sum4 < 10) {
        $("#progress-color4_1").attr(
        "style",
        "width : " +
            String(agent_occur_count4[0] * 10) +
            "%;" +
            "background-color: " +
            "#fbd9f7;"
        );
        $("#progress-text4_1").text(
        String(agent_occur_count4[0]) + "회"
        );

        $("#progress-color4_2").attr(
        "style",
        "width : " +
            String(agent_occur_count4[1] * 10) +
            "%;" +
            "background-color: " +
            "#ff8ddf;"
        );
        $("#progress-text4_2").text(
        String(agent_occur_count4[1]) + "회"
        );

        $("#progress-color4_3").attr(
        "style",
        "width : " +
            String(agent_occur_count4[2] * 10) +
            "%;" +
            "background-color: " +
            "#ff6a8e;"
        );
        $("#progress-text4_3").text(
        String(agent_occur_count4[2]) + "회"
        );
    } else {
        var agent_occur_adjusted4 = [0, 0, 0];
        for (var i = 0; i < 3; i++) {
        agent_occur_adjusted4[i] =
            agent_occur_count4[i] * (9 / agent_occur_sum4);
        }
        if (agent_occur_adjusted4[0] > 0.5) {
        $("#progress-color4_1").attr(
            "style",
            "width : " +
            String(agent_occur_adjusted4[0] * 10) +
            "%;" +
            "background-color: " +
            "#fbd9f7;"
        );
        } else if (agent_occur_count4[0] > 0) {
        $("#progress-color4_1").attr(
            "style",
            "width : " + "5%;" + "background-color: " + "#fbd9f7;"
        );
        }
        if (agent_occur_count4[0] > 0) {
        $("#progress-text4_1").text(
            String(agent_occur_count4[0]) + "회"
        );
        }
        if (agent_occur_adjusted4[1] > 0.5) {
        $("#progress-color4_2").attr(
            "style",
            "width : " +
            String(agent_occur_adjusted4[1] * 10) +
            "%;" +
            "background-color: " +
            "#ff8ddf;"
        );
        } else if (agent_occur_count4[1] > 0) {
        $("#progress-color4_2").attr(
            "style",
            "width : " + "5%;" + "background-color: " + "#ff8ddf;"
        );
        }
        if (agent_occur_count4[1] > 0) {
        $("#progress-text4_2").text(
            String(agent_occur_count4[1]) + "회"
        );
        }
        if (agent_occur_adjusted4[2] > 0.5) {
        $("#progress-color4_3").attr(
            "style",
            "width : " +
            String(agent_occur_adjusted4[2] * 10) +
            "%;" +
            "background-color: " +
            "#ff6a8e;"
        );
        } else if (agent_occur_count4[2] > 0) {
        $("#progress-color4_3").attr(
            "style",
            "width : " + "5%;" + "background-color: " + "#ff8ddf;"
        );
        }
        if (agent_occur_count4[2] > 0) {
        $("#progress-text4_3").text(
            String(agent_occur_count4[2]) + "회"
        );
        }
    }
    //평균 그래프 생성
    var progress_average =
        (agent_occur_sum1 +
        agent_occur_sum2 +
        agent_occur_sum4 +
        agent_occur_sum3) /
        4;
    if (progress_average === 0) {
        $("#progress-average").attr(
        "style",
        "width : " +
            "2%;" +
            "background-color: " +
            "#8aecf2;" +
            "border-top-right-radius: " +
            "15px;" +
            "border-bottom-right-radius:" +
            " 15px;"
        );
        $("#progress-average-text").text("");
    } else if (progress_average > 0) {
        progress_average =
        Math.ceil(progress_average * 100) / 100;
        if (progress_average < 0.5) {
        $("#progress-average").attr(
            "style",
            "width : " + "5%;" + "background-color: " + "#8aecf2;"
        );
        } else {
        $("#progress-average").attr(
            "style",
            "width : " +
            String(progress_average * 10) +
            "%;" +
            "background-color: " +
            "#8aecf2;"
        );
        }
        $("#progress-average-text").text(
        String(progress_average) + "회"
        );
    }                   
    
    },
    error: function (error) {
    console.log("signal_err");
    },
});
}, 1000);

//bomb
const std1_modal_bomb =
document.getElementById("std1_modal_bomb");
const close_bomb_std1 =
document.getElementById("close_bomb_std1");
close_bomb_std1.addEventListener("click", (e) => {
bombaudio1.pause();
bombaudio1.currentTime = 0;
sleep1Count = 0;
temp14 = 0;
std1_modal_bomb.style.display = "none";
});

const close_bomb_modal2 =
document.getElementById("close_bomb_std2");
const std2_bomb_modal =
document.getElementById("std2_modal_bomb");
close_bomb_modal2.addEventListener("click", (e) => {
bombaudio2.pause();
bombaudio2.currentTime = 0;
sleep2Count = 0;
temp24 = 0;
std2_bomb_modal.style.display = "none";
});
const close_bomb_modal3 =
document.getElementById("close_bomb_std3");
const std3_bomb_modal =
document.getElementById("std3_modal_bomb");
close_bomb_modal3.addEventListener("click", (e) => {
bombaudio3.pause();
bombaudio3.currentTime = 0;
sleep3Count = 0;
temp34 = 0;
std3_bomb_modal.style.display = "none";
});
const close_bomb_modal4 =
document.getElementById("close_bomb_std4");
const std4_bomb_modal =
document.getElementById("std4_modal_bomb");
close_bomb_modal4.addEventListener("click", (e) => {
bombaudio4.pause();
bombaudio4.currentTime = 0;
sleep4Count = 0;
temp44 = 0;
std4_bomb_modal.style.display = "none";
});
// theif
const colse_thief_std1 =
document.getElementById("colse_thief_std1");
const std1_modal_thief =
document.getElementById("std1_modal_thief");
colse_thief_std1.addEventListener("click", (e) => {
sirenaudio1.pause();
sirenaudio1.currentTime = 0;
away1Count = 0;
temp11 = 0;
std1_modal_thief.style.display = "none";
});
const colse_thief_std2 =
document.getElementById("colse_thief_std2");
const std2_modal_thief =
document.getElementById("std2_modal_thief");
colse_thief_std2.addEventListener("click", (e) => {
sirenaudio2.pause();
sirenaudio2.currentTime = 0;
away2Count = 0;
temp21 = 0;
std2_modal_thief.style.display = "none";
});
const colse_thief_std3 =
document.getElementById("colse_thief_std3");
const std3_modal_thief =
document.getElementById("std3_modal_thief");
colse_thief_std3.addEventListener("click", (e) => {
sirenaudio3.pause();
sirenaudio3.currentTime = 0;
away3Count = 0;
temp21 = 0;
std3_modal_thief.style.display = "none";
});
const colse_thief_std4 =
document.getElementById("colse_thief_std4");
const std4_modal_thief =
document.getElementById("std4_modal_thief");
colse_thief_std4.addEventListener("click", (e) => {
sirenaudio4.pause();
sirenaudio4.currentTime = 0;
away4Count = 0;
temp21 = 0;
std4_modal_thief.style.display = "none";
});

// posture

const close_posture_std1 =
document.getElementById("close_posture_std1");
const std1_modal_posture =
document.getElementById("std1_modal_posture");
close_posture_std1.addEventListener("click", (e) => {
std1_modal_posture.style.display = "none";
temp12 = 0;
small1Count = 0;
});

const close_posture_std2 =
document.getElementById("close_posture_std2");
const std2_modal_posture =
document.getElementById("std2_modal_posture");
close_posture_std2.addEventListener("click", (e) => {
std2_modal_posture.style.display = "none";
temp22 = 0;

small2Count = 0;
});

const close_posture_std3 =
document.getElementById("close_posture_std3");
const std3_modal_posture =
document.getElementById("std3_modal_posture");
close_posture_std3.addEventListener("click", (e) => {
std3_modal_posture.style.display = "none";
temp32 = 0;

small3Count = 0;
});

const close_posture_std4 =
document.getElementById("close_posture_std4");
const std4_modal_posture =
document.getElementById("std4_modal_posture");
close_posture_std4.addEventListener("click", (e) => {
std4_modal_posture.style.display = "none";
temp42 = 0;

small4Count = 0;
});

const std1_modal_speech =
document.getElementById("std1_modal_speech");
const close_speech_stu1 =
document.getElementById("close_speech_stu1");
close_speech_stu1.addEventListener("click", (e) => {
std1_modal_speech.style.display = "none";
temp13 = 0;
sil1Count = 0;
});
const std2_modal_speech =
document.getElementById("std2_modal_speech");
const close_speech_stu2 =
document.getElementById("close_speech_stu2");
close_speech_stu2.addEventListener("click", (e) => {
std2_modal_speech.style.display = "none";
temp23 = 0;
sil2Count = 0;
});
const std3_modal_speech =
document.getElementById("std3_modal_speech");
const close_speech_stu3 =
document.getElementById("close_speech_stu3");
close_speech_stu3.addEventListener("click", (e) => {
std3_modal_speech.style.display = "none";
temp33 = 0;
sil3Count = 0;
});
const std4_modal_speech =
document.getElementById("std4_modal_speech");
const close_speech_stu4 =
document.getElementById("close_speech_stu4");
close_speech_stu4.addEventListener("click", (e) => {
std4_modal_speech.style.display = "none";
temp43 = 0;
sil4Count = 0;
});

const std1_modal_alarm =
document.getElementById("std1_modal_alarm");
const close_alarm_stu1 =
document.getElementById("close_alarm_stu1");
close_alarm_stu1.addEventListener("click", (e) => {
std1_modal_alarm.style.display = "none";
});
const std2_modal_alarm =
document.getElementById("std2_modal_alarm");
const close_alarm_stu2 =
document.getElementById("close_alarm_stu2");
close_alarm_stu2.addEventListener("click", (e) => {
std2_modal_alarm.style.display = "none";
});
const std3_modal_alarm =
document.getElementById("std3_modal_alarm");
const close_alarm_stu3 =
document.getElementById("close_alarm_stu3");
close_alarm_stu3.addEventListener("click", (e) => {
std3_modal_alarm.style.display = "none";
});
const std4_modal_alarm =
document.getElementById("std4_modal_alarm");
const close_alarm_stu4 =
document.getElementById("close_alarm_stu4");
close_alarm_stu4.addEventListener("click", (e) => {
std4_modal_alarm.style.display = "none";
});

function stu1img1() {
document.getElementById("std1_modal_thief").style.display =
    "block";
sirenaudio1.play();
temp11 = 1;
}

function stu1img2() {
document.getElementById("std1_modal_posture").style.display =
    "block";
temp12 = 1;
}

const modal_bomb = document.getElementById("modal_bomb");
const bomb_picture = document.getElementById("bomb_picture");

function decreaseBombtime() {
if (bombtime != 0) {
    bombtime--;
}
bombtimeHtml.innerText = bombtime + "초";
}

bomb_picture.addEventListener("click", (e) => {
bombaudio.pause();
bombaudio.currentTime = 0;
bombtime = 15;
modal_bomb.style.display = "none";
clearInterval(bombinterval);
bombtimeHtml.innerText = "15초";
});

close_modal_comeback.addEventListener("click", (e) => {
modal_comeback_white.style.display = "none";
sirenaudio.pause();
sirenaudio.currentTime = 0;
});

function stu1img3() {
document.getElementById("std1_modal_speech").style.display =
    "block";
temp13 = 1;
}

function stu1img4() {
document.getElementById("std1_modal_bomb").style.display =
    "block";
bombaudio1.play();
temp14 = 1;
}

const speechless_picture =
document.getElementById("speechless_picture");
speechless_picture.addEventListener("click", (e) => {
modal_speechless.style.display = "none";
});

function turnmodalred() {
modal_comeback_white.style.background = "#FF8C8C";
modal_comeback_white.style.border = "9px solid #FF7676";
close_modal_comeback.style.color = "#FFFFFF";
}

function turnmodalwhite() {
modal_comeback_white.style.background = "#FFFFFF";
modal_comeback_white.style.border = "9px solid #000000";
close_modal_comeback.style.color = "#000000";
}

function cyclebackgroundcolor() {
turnmodalred();
setTimeout("turnmodalwhite()", 1000);
}

let cyclemodalbackground = setInterval(
"cyclebackgroundcolor()",
2000
);

const posture_modal = document.getElementById("posture_modal");
const posture_modal_picture = document.getElementById(
"posture_modal_picture"
);
posture_modal_picture.addEventListener("click", (e) => {
posture_modal.style.display = "none";
});

var stu1stamp = [0, 0, 0];
var stu2stamp = [0, 0, 0];
var stu3stamp = [0, 0, 0];
var stu4stamp = [0, 0, 0];
var totalStamp = 0;

var avgScore = 0;
var stu1Score = 0;
var stu2Score = 0;
var stu3Score = 0;
var stu4Score = 0;

setInterval(function () {
console.log(
    "stu1 1 2 3 : " +
    stu1stamp[2] +
    " " +
    stu1stamp[1] +
    " " +
    stu1stamp[0]
);
console.log(
    "stu2 1 2 3 : " +
    stu2stamp[2] +
    " " +
    stu2stamp[1] +
    " " +
    stu2stamp[0]
);
console.log(
    "stu3 1 2 3 : " +
    stu3stamp[2] +
    " " +
    stu3stamp[1] +
    " " +
    stu3stamp[0]
);
console.log(
    "stu4 1 2 3 : " +
    stu4stamp[2] +
    " " +
    stu4stamp[1] +
    " " +
    stu4stamp[0]
);
console.log("totalstamp: " + totalStamp);
console.log("stu1Score: " + stu1Score);
console.log("stu2Score: " + stu2Score);
console.log("stu3Score: " + stu3Score);
console.log("stu4Score: " + stu4Score);
console.log("avgScore: " + avgScore);

$("#avgScore").text(avgScore + "%");
$("#stu1Score").text(stu1Score + "%");
$("#stu2Score").text(stu2Score + "%");
$("#stu3Score").text(stu3Score + "%");
$("#stu4Score").text(stu4Score + "%");
if (avgScore < 30) {
    $("#avgScoreGraph").attr(
    "class",
    "progress-circle p" + String(avgScore)
    );
    $("#avgf50").css("background-color", "#ff4343");
    $("#avgbar").css("border-color", "#ff4343");
} else if (avgScore < 51) {
    $("#avgScoreGraph").attr(
    "class",
    "progress-circle p" + String(avgScore)
    );
    $("#avgf50").css("background-color", "#ff9d2b");
    $("#avgbar").css("border-color", "#ff9d2b");
} else if (avgScore < 70) {
    $("#avgScoreGraph").attr(
    "class",
    "progress-circle over50 p" + String(avgScore)
    );
    $("#avgf50").css("background-color", "#ff9d2b");
    $("#avgbar").css("border-color", "#ff9d2b");
} else {
    $("#avgScoreGraph").attr(
    "class",
    "progress-circle over50 p" + String(avgScore)
    );
    $("#avgf50").css("background-color", "#18ef14");
    $("#avgbar").css("border-color", "#18ef14");
}
if (stu1Score < 30) {
    $("#stu1ScoreGraph").attr(
    "class",
    "progress-circle p" + String(stu1Score)
    );
    $("#stu1f50").css("background-color", "#ff4343");
    $("#stu1bar").css("border-color", "#ff4343");
} else if (stu1Score < 51) {
    $("#stu1ScoreGraph").attr(
    "class",
    "progress-circle p" + String(stu1Score)
    );
    $("#stu1f50").css("background-color", "#ff9d2b");
    $("#stu1bar").css("border-color", "#ff9d2b");
} else if (stu1Score < 70) {
    $("#stu1ScoreGraph").attr(
    "class",
    "progress-circle over50 p" + String(stu1Score)
    );
    $("#stu1f50").css("background-color", "#ff9d2b");
    $("#stu1bar").css("border-color", "#ff9d2b");
} else {
    $("#stu1ScoreGraph").attr(
    "class",
    "progress-circle over50 p" + String(stu1Score)
    );
    $("#stu1f50").css("background-color", "#18ef14");
    $("#stu1bar").css("border-color", "#18ef14");
}
if (stu2Score < 30) {
    $("#stu2ScoreGraph").attr(
    "class",
    "progress-circle p" + String(stu2Score)
    );
    $("#stu2f50").css("background-color", "#ff4343");
    $("#stu2bar").css("border-color", "#ff4343");
} else if (stu2Score < 51) {
    $("#stu2ScoreGraph").attr(
    "class",
    "progress-circle p" + String(stu2Score)
    );
    $("#stu2f50").css("background-color", "#ff9d2b");
    $("#stu2bar").css("border-color", "#ff9d2b");
} else if (stu2Score < 70) {
    $("#stu2ScoreGraph").attr(
    "class",
    "progress-circle over50 p" + String(stu2Score)
    );
    $("#stu2f50").css("background-color", "#ff9d2b");
    $("#stu2bar").css("border-color", "#ff9d2b");
} else {
    $("#stu2ScoreGraph").attr(
    "class",
    "progress-circle over50 p" + String(stu2Score)
    );
    $("#stu2f50").css("background-color", "#18ef14");
    $("#stu2bar").css("border-color", "#18ef14");
}
if (stu3Score < 30) {
    $("#stu3ScoreGraph").attr(
    "class",
    "progress-circle p" + String(stu3Score)
    );
    $("#stu3f50").css("background-color", "#ff4343");
    $("#stu3bar").css("border-color", "#ff4343");
} else if (stu3Score < 51) {
    $("#stu3ScoreGraph").attr(
    "class",
    "progress-circle p" + String(stu3Score)
    );
    $("#stu3f50").css("background-color", "#ff9d2b");
    $("#stu3bar").css("border-color", "#ff9d2b");
} else if (stu3Score < 70) {
    $("#stu3ScoreGraph").attr(
    "class",
    "progress-circle over50 p" + String(stu3Score)
    );
    $("#stu3f50").css("background-color", "#ff9d2b");
    $("#stu3bar").css("border-color", "#ff9d2b");
} else {
    $("#stu3ScoreGraph").attr(
    "class",
    "progress-circle over50 p" + String(stu3Score)
    );
    $("#stu3f50").css("background-color", "#18ef14");
    $("#stu3bar").css("border-color", "#18ef14");
}
if (stu4Score < 30) {
    $("#stu4ScoreGraph").attr(
    "class",
    "progress-circle p" + String(stu4Score)
    );
    $("#stu4f50").css("background-color", "#ff4343");
    $("#stu4bar").css("border-color", "#ff4343");
} else if (stu4Score < 51) {
    $("#stu4ScoreGraph").attr(
    "class",
    "progress-circle p" + String(stu4Score)
    );
    $("#stu4f50").css("background-color", "#ff9d2b");
    $("#stu4bar").css("border-color", "#ff9d2b");
} else if (stu4Score < 70) {
    $("#stu4ScoreGraph").attr(
    "class",
    "progress-circle over50 p" + String(stu4Score)
    );
    $("#stu4f50").css("background-color", "#ff9d2b");
    $("#stu4bar").css("border-color", "#ff9d2b");
} else {
    $("#stu4ScoreGraph").attr(
    "class",
    "progress-circle over50 p" + String(stu4Score)
    );
    $("#stu4f50").css("background-color", "#18ef14");
    $("#stu4bar").css("border-color", "#18ef14");
}
}, 1000);

camon = 1;
function cam1onoff() {
    if (camon == 1) {
    camon = 0;
    document.getElementById("cam1").src =
        "http://www.palnews.co.kr/news/photo/201801/92969_25283_5321.jpg";
    } else {
    camon = 1;
    document.getElementById("cam1").src = "/video_feed/1";
    }
}

function allAlarm() {
    alarmaudio.currentTime = 0;
    alarmaudio.play();
    document.getElementById("std1_modal_alarm").style.display = "block";
    document.getElementById("std2_modal_alarm").style.display = "block";
    document.getElementById("std3_modal_alarm").style.display = "block";
    document.getElementById("std4_modal_alarm").style.display = "block";

    setTimeout(function () {
    document.getElementById("std1_modal_alarm").style.display = "none";
    document.getElementById("std2_modal_alarm").style.display = "none";
    document.getElementById("std3_modal_alarm").style.display = "none";
    document.getElementById("std4_modal_alarm").style.display = "none";
    }, 5000);
}

function allModalOff() {
    away1Count = 0;
    small1Count = 0;
    sil1Count = 0;
    sleep1Count = 0;
    away2Count = 0;
    small2Count = 0;
    sil2Count = 0;
    sleep2Count = 0;
    away3Count = 0;
    small3Count = 0;
    sil3Count = 0;
    sleep3Count = 0;
    away4Count = 0;
    small4Count = 0;
    sil4Count = 0;
    sleep4Count = 0;
    document.getElementById("std1_modal_thief").style.display = "none";
    document.getElementById("std1_modal_bomb").style.display = "none";
    document.getElementById("std1_modal_posture").style.display = "none";
    document.getElementById("std1_modal_speech").style.display = "none";
    document.getElementById("std2_modal_thief").style.display = "none";
    document.getElementById("std2_modal_bomb").style.display = "none";
    document.getElementById("std2_modal_posture").style.display = "none";
    document.getElementById("std2_modal_speech").style.display = "none";
    document.getElementById("std3_modal_thief").style.display = "none";
    document.getElementById("std3_modal_bomb").style.display = "none";
    document.getElementById("std3_modal_posture").style.display = "none";
    document.getElementById("std3_modal_speech").style.display = "none";
    document.getElementById("std4_modal_thief").style.display = "none";
    document.getElementById("std4_modal_bomb").style.display = "none";
    document.getElementById("std4_modal_posture").style.display = "none";
    document.getElementById("std4_modal_speech").style.display = "none";
    document.getElementById("std1_modal_alarm").style.display = "none";
    document.getElementById("std2_modal_alarm").style.display = "none";
    document.getElementById("std3_modal_alarm").style.display = "none";
    document.getElementById("std4_modal_alarm").style.display = "none";
    document.getElementById("stu1_img1").style.display = "none";
    document.getElementById("stu1_img2").style.display = "none";
    document.getElementById("stu1_img3").style.display = "none";
    document.getElementById("stu1_img4").style.display = "none";
    document.getElementById("stu2_img1").style.display = "none";
    document.getElementById("stu2_img2").style.display = "none";
    document.getElementById("stu2_img3").style.display = "none";
    document.getElementById("stu2_img4").style.display = "none";
    document.getElementById("stu3_img1").style.display = "none";
    document.getElementById("stu3_img2").style.display = "none";
    document.getElementById("stu3_img3").style.display = "none";
    document.getElementById("stu3_img4").style.display = "none";
    document.getElementById("stu4_img1").style.display = "none";
    document.getElementById("stu4_img2").style.display = "none";
    document.getElementById("stu4_img3").style.display = "none";
    document.getElementById("stu4_img4").style.display = "none";
}

const modal = document.getElementById("modal");
function resultOn() {
    modal.style.display = "block";
}
function modalOff() {
    modal.style.display = "none";
}
modal.addEventListener("click", (e) => {
    const evTarget = e.target;
    if (evTarget.classList.contains("result_overlay")) {
    modalOff();
    }
});


        setInterval(function () {
    $.ajax({
    url: "/vad_feed",
    type: "POST",
    success: function (response) {
        console.log("vad feed success!!");

        console.log(response["SpeechCount1"]);
        console.log(response["SpeechCount2"]);
        console.log(response["SpeechCount3"]);
        console.log(response["SpeechCount4"]);

        $("#prenum1").text(response["SpeechCount1"]);
        $("#prenum2").text(response["SpeechCount2"]);
        $("#prenum3").text(response["SpeechCount3"]);
        $("#prenum4").text(response["SpeechCount4"]);
    },
    error: function (error) {
        console.log("vad feed err!!!");
    },
    });
}, 1000);


        var board1 = document.getElementById("block_1");
var board2 = document.getElementById("block_2");
var board3 = document.getElementById("block_3");
var board4 = document.getElementById("block_4");

//학생들의 집중도 평균값을 구하기 위한 변수
var student1_count = [0, 0, 0];
var student2_count = [0, 0, 0];
var student3_count = [0, 0, 0];
var student4_count = [0, 0, 0];
//학생들 마다 발생한 스탬프 갯수 0->빨,1->노,2->초

var scoreTemp1 = 0;
var scoreTemp2 = 0;
var scoreTemp3 = 0;
var scoreTemp4 = 0;
var scoreTemp5 = 0;

//시간 계산
var time_count = 0;
//동영상이 재생중일때 0, 재생이 끝나면 1
var video_off = 0;
//리셋 버튼이 눌리면 1 아니면 0
var reset_on = 0;
//덮어쓸 타임스탬트의 인덱스 결정 카운트
var time_stamp_count = 0;
//타임스탬프가 찍히는 시간 간격(초 단위)
var stamp_create_interval = 2;
//초기화 할때 지워야 할 블록의 갯수
var block_clear = 0;

setInterval(function () {
    $.ajax({
    url: "/colorStat_feed",
    type: "POST",
    success: function (response) {
        //아직 영상이 재생중일경우
        if (video_off === 0) {
        time_count++;
        }
        //학생 1 실시간 집중도 저장
        if (response["stu1Color"] === "0") {
        student1_count[0]++;
        } else if (response["stu1Color"] === "1") {
        student1_count[1]++;
        } else {
        student1_count[2]++;
        }
        //학생 2 실시간 집중도 저장
        if (response["stu2Color"] === "0") {
        student2_count[0]++;
        } else if (response["stu2Color"] === "1") {
        student2_count[1]++;
        } else {
        student2_count[2]++;
        }
        //학생 3 실시간 집중도 저장
        if (response["stu3Color"] === "0") {
        student3_count[0]++;
        } else if (response["stu3Color"] === "1") {
        student3_count[1]++;
        } else {
        student3_count[2]++;
        }
        //학생 4 실시간 집중도 저장
        if (response["stu4Color"] === "0") {
        student4_count[0]++;
        } else if (response["stu4Color"] === "1") {
        student4_count[1]++;
        } else {
        student4_count[2]++;
        }
        //투명한 블록 생성
        if (
        time_count === 1 ||
        (time_count % (16 * stamp_create_interval) === 0 &&
            video_off === 0 &&
            reset_on !== 1)
        ) {
        if (time_count === 1) {
            time_stamp_count = 1;
        } else {
            time_stamp_count = time_count / stamp_create_interval;
        }
        block_clear += 16;
        for (var i = 0; i < 16; i++) {
            var student1 = document.createElement("div");
            var student2 = document.createElement("div");
            var student3 = document.createElement("div");
            var student4 = document.createElement("div");
            student1.setAttribute("class", "block4");
            student2.setAttribute("class", "block4");
            student3.setAttribute("class", "block4");
            student4.setAttribute("class", "block4");
            board1.appendChild(student1);
            board2.appendChild(student2);
            board3.appendChild(student3);
            board4.appendChild(student4);
            board1.scrollLeft = board1.scrollWidth;
            board2.scrollLeft = board2.scrollWidth;
            board3.scrollLeft = board3.scrollWidth;
            board4.scrollLeft = board4.scrollWidth;
        }
        }

        //stamp_create_interval 간격으로 스탬프 생성
        if (time_count % stamp_create_interval === 0) {
        //가장 많이 발생한 집중도 단계 저장
        var student1_max = Math.max(...student1_count);
        var student2_max = Math.max(...student2_count);
        var student3_max = Math.max(...student3_count);
        var student4_max = Math.max(...student4_count);

        //가장 많이 발생한 집중도 배열에서의 위치 파악
        for (var i = 0; i < 3; i++) {
            if (student1_count[i] === student1_max) {
            student1_max = i;
            break;
            }
        }
        for (var i = 0; i < 3; i++) {
            if (student2_count[i] === student2_max) {
            student2_max = i;
            break;
            }
        }
        for (var i = 0; i < 3; i++) {
            if (student3_count[i] === student3_max) {
            student3_max = i;
            break;
            }
        }
        for (var i = 0; i < 3; i++) {
            if (student4_count[i] === student4_max) {
            student4_max = i;
            break;
            }
        }

        if (response["stu2Color"] === "-1" && video_off === 0) {
            setInterval("allModalOff()", 1000);
            document.getElementById("finishAlarm").style.display =
            "block";
            video_off = 1;
        }
        if (response["stu2Color"] !== "-1" && video_off === 1) {
            reset_on = 1;
            video_off = 0;
        }

        if (video_off === 0) {
            student1 = board1.childNodes[time_stamp_count];
            student2 = board2.childNodes[time_stamp_count];
            student3 = board3.childNodes[time_stamp_count];
            student4 = board4.childNodes[time_stamp_count];
            time_stamp_count++;
            //학생 1 타임스탬프 결정
            if (student1_max === 0) {
            student1.setAttribute("class", "block1");
            stu1stamp[0]++;
            } else if (student1_max === 1) {
            student1.setAttribute("class", "block2");
            stu1stamp[1]++;
            } else {
            student1.setAttribute("class", "block3");
            stu1stamp[2]++;
            }

            //학생 2 타임스탬프 결정
            if (student2_max === 0) {
            student2.setAttribute("class", "block1");
            stu2stamp[0]++;
            } else if (student2_max === 1) {
            student2.setAttribute("class", "block2");
            stu2stamp[1]++;
            } else {
            student2.setAttribute("class", "block3");
            stu2stamp[2]++;
            }
            //학생 3 타임스탬프 결정
            if (student3_max === 0) {
            student3.setAttribute("class", "block1");
            stu3stamp[0]++;
            } else if (student3_max === 1) {
            student3.setAttribute("class", "block2");
            stu3stamp[1]++;
            } else {
            student3.setAttribute("class", "block3");
            stu3stamp[2]++;
            }
            //학생 4 타임스탬프 결정
            if (student4_max === 0) {
            student4.setAttribute("class", "block1");
            stu4stamp[0]++;
            } else if (student4_max === 1) {
            student4.setAttribute("class", "block2");
            stu4stamp[1]++;
            } else {
            student4.setAttribute("class", "block3");
            stu4stamp[2]++;
            }
        }

        student1_count.fill(0);
        student2_count.fill(0);
        student3_count.fill(0);
        student4_count.fill(0);

        totalStamp++;

        scoreTemp1 =
            (((stu1stamp[2] / totalStamp) * 5) / 3 +
            ((stu1stamp[1] / totalStamp) * 2) / 3) *
            (1 - stu1stamp[0] / totalStamp / 2) *
            100;
        scoreTemp2 =
            (((stu2stamp[2] / totalStamp) * 5) / 3 +
            ((stu2stamp[1] / totalStamp) * 2) / 3) *
            (1 - stu2stamp[0] / totalStamp / 2) *
            100;
        scoreTemp3 =
            (((stu3stamp[2] / totalStamp) * 5) / 3 +
            ((stu3stamp[1] / totalStamp) * 2) / 3) *
            (1 - stu3stamp[0] / totalStamp / 2) *
            100;
        scoreTemp4 =
            (((stu4stamp[2] / totalStamp) * 5) / 3 +
            ((stu4stamp[1] / totalStamp) * 2) / 3) *
            (1 - stu4stamp[0] / totalStamp / 2) *
            100;
        stu1Score = Math.round(scoreTemp1);
        stu2Score = Math.round(scoreTemp2);
        stu3Score = Math.round(scoreTemp3);
        stu4Score = Math.round(scoreTemp4);
        if (stu1Score > 100) {
            stu1Score = 100;
        }
        if (stu2Score > 100) {
            stu2Score = 100;
        }
        if (stu3Score > 100) {
            stu3Score = 100;
        }
        if (stu4Score > 100) {
            stu4Score = 100;
        }
        scoreTemp5 =
            (stu1Score + stu2Score + stu3Score + stu4Score) / 4;
        avgScore = Math.round(scoreTemp5);

        //리셋 버튼을 눌렀을 때  --> 모든 변수 초기화
        if (reset_on === 1) {
            for (var i = block_clear - 1; i >= 0; i--) {
            board1.removeChild(board1.childNodes[i]);
            board2.removeChild(board2.childNodes[i]);
            board3.removeChild(board3.childNodes[i]);
            board4.removeChild(board4.childNodes[i]);
            }
            reset_on = 0;
            time_count = 0;
            time_stamp_count = 0;
            block_clear = 16;
            progress_average = 0;
            document.getElementById("finishAlarm").style.display = "none";
            avgScore = 0;
            stu1Score = 0;
            stu2Score = 0;
            stu3Score = 0;
            stu4Score = 0;
            totalStamp = 0;

            while(bar_board.firstChild){
            bar_board.removeChild(bar_board.firstChild);
            }
            while(bar_board2.firstChild){
            bar_board2.removeChild(bar_board2.firstChild);
            }
            while(bar_board3.firstChild){
            bar_board3.removeChild(bar_board3.firstChild);
            }
            while(bar_board4.firstChild){
            bar_board4.removeChild(bar_board4.firstChild);
            }
            for (var i = 0; i < 3; i++) {
            stu1stamp[i] = 0;
            stu2stamp[i] = 0;
            stu3stamp[i] = 0;
            stu4stamp[i] = 0;
            agent_occur_count1[i] = 0;
            agent_occur_count2[i] = 0;
            agent_occur_count3[i] = 0;
            agent_occur_count4[i] = 0;
            agent1_on[i] = 0;
            agent2_on[i] = 0;
            agent3_on[i] = 0;
            agent4_on[i] = 0;
            }

            $("#progress-average").attr(
            "style",
            "width : " +
                "2%;" +
                "background-color: " +
                "#8aecf2;" +
                "border-top-right-radius: " +
                "15px;" +
                "border-bottom-right-radius:" +
                " 15px;"
            );
            $("#progress-color1_1").attr(
            "style",
            "width : " +
                "2%;" +
                "background-color: " +
                "#ff6a8e;" +
                "border-top-right-radius: " +
                "15px;" +
                "border-bottom-right-radius:" +
                " 15px;"
            );
            $("#progress-color1_2").attr("style", "width : " + "0%;");
            $("#progress-color1_3").attr("style", "width : " + "0%;");

            $("#progress-color2_1").attr(
            "style",
            "width : " +
                "2%;" +
                "background-color: " +
                "#ff6a8e;" +
                "border-top-right-radius: " +
                "15px;" +
                "border-bottom-right-radius:" +
                " 15px;"
            );
            $("#progress-color2_2").attr("style", "width : " + "0%;");
            $("#progress-color2_3").attr("style", "width : " + "0%;");

            $("#progress-color3_1").attr(
            "style",
            "width : " +
                "2%;" +
                "background-color: " +
                "#ff6a8e;" +
                "border-top-right-radius: " +
                "15px;" +
                "border-bottom-right-radius:" +
                " 15px;"
            );
            $("#progress-color3_2").attr("style", "width : " + "0%;");
            $("#progress-color3_3").attr("style", "width : " + "0%;");

            $("#progress-color4_1").attr(
            "style",
            "width : " +
                "2%;" +
                "background-color: " +
                "#ff6a8e;" +
                "border-top-right-radius: " +
                "15px;" +
                "border-bottom-right-radius:" +
                " 15px;"
            );
            $("#progress-color4_2").attr("style", "width : " + "0%;");
            $("#progress-color4_3").attr("style", "width : " + "0%;");
            //원형 그래프 초기화
            $("#stu1ScoreGraph").attr("class", "progress-circle p0");
            $("#stu1Score").text("0%");
            $("#stu2ScoreGraph").attr("class", "progress-circle p0");
            $("#stu2Score").text("0%");
            $("#stu3ScoreGraph").attr("class", "progress-circle p0");
            $("#stu3Score").text("0%");
            $("#stu4ScoreGraph").attr("class", "progress-circle p0");
            $("#stu4Score").text("0%");
        }
        }
        board1.scrollLeft = board1.scrollWidth;
        board2.scrollLeft = board2.scrollWidth;
        board3.scrollLeft = board3.scrollWidth;
        board4.scrollLeft = board4.scrollWidth;
    },
    error: function (error) {
        console.log("error!");
    },
    });
}, 1000);
