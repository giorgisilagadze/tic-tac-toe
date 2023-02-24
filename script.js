const div_x = document.getElementById("div-x");
const div_o = document.getElementById("div-o");
const icon_x = document.getElementById("icon-x");
const icon_x_black = document.getElementById("icon-x-black");
const icon_o = document.getElementById("icon-o");
const icon_o_grey = document.getElementById("icon-o-grey");
let p_you = document.getElementById("p-you");
let p_opp = document.getElementById("p-opp");
const new_cpu = document.getElementById("new-cpu");
const new_pl2 = document.getElementById("new-pl2");
const second_page = document.getElementById("second-page");
const first_page = document.getElementById("first_page");
const buttons = document.getElementsByClassName("butt-game");
let count = 0;
const icon_game_x = document.getElementsByClassName("icon-game-x");
const icon_game_o = document.getElementsByClassName("icon-game-o");
const icon_game_x_black = document.getElementsByClassName("icon-game-x-black");
const icon_game_o_black = document.getElementsByClassName("icon-game-o-black");
let game_state = new Array(9);
let score_x = document.getElementById("score_x");
let score_o = document.getElementById("score_o");
const x_turn = document.getElementById("x-turn");
const o_turn = document.getElementById("o-turn");
let player_1 = document.getElementById("player-1");
const front_div = document.getElementById("front-div");
let p_take = document.getElementById("p-take");
const img_icon_x = document.getElementById("img-icon-x");
const img_icon_o = document.getElementById("img-icon-o");
const p_tie = document.getElementById("p-tie");
const div_round = document.getElementById("div-round");
let wins = 0;
let wins_o = 0;
let check_tie = false;
let check_tie_o = false;
const next_round = document.getElementById("next-round");

div_x.addEventListener("click", () => {
    div_x.style.background = "#A8BFC9";
    icon_x.style.display = "none";
    icon_x_black.style.display = "block";
    div_o.style.background = "#1A2A33";
    icon_o.style.display = "none";
    icon_o_grey.style.display = "block";
    new_cpu.addEventListener("click", () => {
        second_page.style.display = "block";
        first_page.style.display = "none";
        p_you.innerText = "X (YOU)";
        p_opp.innerText = "O (CPU)";
    })
    new_pl2.addEventListener("click", () => {
        second_page.style.display = "block";
        first_page.style.display = "none";
        p_you.innerText = "X (P1)";
        p_opp.innerText = "O (P2)"
    })
    
})

div_o.addEventListener("click", () => {
    div_x.style.background = "#1A2A33";
    icon_x.style.display = "block";
    icon_x_black.style.display = "none";
    div_o.style.background = "#A8BFC9";
    icon_o.style.display = "block";
    icon_o_grey.style.display = "none";
    new_cpu.addEventListener("click", () => {
        second_page.style.display = "block";
        first_page.style.display = "none";
        p_you.innerText = "O (YOU)";
        p_opp.innerText = "X (CPU)";
    })    
    new_pl2.addEventListener("click", () => {
        second_page.style.display = "block";
        first_page.style.display = "none";
        p_you.innerText = "O (P1)";
        p_opp.innerText = "X (P2)"
    })
})


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
            if (count % 2 == 0 && game_state[i] === undefined) {
                icon_game_x[i].style.display = "block";
                game_state[i] = "x";
                count += 1;
                check_win_x();
                x_turn.style.display = "block";
                o_turn.style.display = "none";          
            } else if (count % 2 == 1 && game_state[i] === undefined) {
                icon_game_o[i].style.display = "block";
                game_state[i] = "o"; 
                count += 1;
                check_win_o(); 
                x_turn.style.display = "none";
                o_turn.style.display = "block";              
            }
            tie_check();
    })


}


function check_win_x() {
    if ((game_state[0] == "x" && game_state[1] == "x" && game_state[2] == "x")) {
        buttons[0].style.background = "#31c3bd";
        buttons[1].style.background = "#31c3bd";
        buttons[2].style.background = "#31c3bd";
        icon_game_x_black[0].style.display = "block";
        icon_game_x_black[1].style.display = "block";
        icon_game_x_black[2].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 1 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3"; 
        wins += 1;
        score_x.innerText = wins;
        check_tie = true;
    }else if ((game_state[3] == "x" && game_state[4] == "x" && game_state[5] == "x")) {
        buttons[3].style.background = "#31c3bd";
        buttons[4].style.background = "#31c3bd";
        buttons[5].style.background = "#31c3bd";
        icon_game_x_black[3].style.display = "block";
        icon_game_x_black[4].style.display = "block";
        icon_game_x_black[5].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 1 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        wins += 1;
        score_x.innerText = wins;
        check_tie = true;
    }else if ((game_state[6] == "x" && game_state[7] == "x" && game_state[8] == "x")) {
        buttons[6].style.background = "#31c3bd";
        buttons[7].style.background = "#31c3bd";
        buttons[8].style.background = "#31c3bd";
        icon_game_x_black[6].style.display = "block";
        icon_game_x_black[7].style.display = "block";
        icon_game_x_black[8].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 1 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        wins += 1;
        score_x.innerText = wins;
        check_tie = true;
    }else if ((game_state[0] == "x" && game_state[3] == "x" && game_state[6] == "x")) {
        buttons[0].style.background = "#31c3bd";
        buttons[3].style.background = "#31c3bd";
        buttons[6].style.background = "#31c3bd";
        icon_game_x_black[0].style.display = "block";
        icon_game_x_black[3].style.display = "block";
        icon_game_x_black[6].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 1 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        wins += 1;
        score_x.innerText = wins;
        check_tie = true;
    }else if ((game_state[1] == "x" && game_state[4] == "x" && game_state[7] == "x")) {
        buttons[1].style.background = "#31c3bd";
        buttons[4].style.background = "#31c3bd";
        buttons[7].style.background = "#31c3bd";
        icon_game_x_black[1].style.display = "block";
        icon_game_x_black[4].style.display = "block";
        icon_game_x_black[7].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 1 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        wins += 1;
        score_x.innerText = wins;
        check_tie = true;
    }else if ((game_state[2] == "x" && game_state[5] == "x" && game_state[8] == "x")) {
        buttons[2].style.background = "#31c3bd";
        buttons[5].style.background = "#31c3bd";
        buttons[8].style.background = "#31c3bd";
        icon_game_x_black[2].style.display = "block";
        icon_game_x_black[5].style.display = "block";
        icon_game_x_black[8].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 1 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        wins += 1;
        score_x.innerText = wins;
        check_tie = true;
    }else if ((game_state[0] == "x" && game_state[4] == "x" && game_state[8] == "x")) {
        buttons[0].style.background = "#31c3bd";
        buttons[4].style.background = "#31c3bd";
        buttons[8].style.background = "#31c3bd";
        icon_game_x_black[0].style.display = "block";
        icon_game_x_black[4].style.display = "block";
        icon_game_x_black[8].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 1 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        wins += 1;
        score_x.innerText = wins;
        check_tie = true;
    }else if ((game_state[2] == "x" && game_state[4] == "x" && game_state[6] == "x")) {
        buttons[2].style.background = "#31c3bd";
        buttons[4].style.background = "#31c3bd";
        buttons[6].style.background = "#31c3bd";
        icon_game_x_black[2].style.display = "block";
        icon_game_x_black[4].style.display = "block";
        icon_game_x_black[6].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 1 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        wins += 1;
        score_x.innerText = wins;
        check_tie = true;
    }

}

function check_win_o() {
    if ((game_state[0] == "o" && game_state[1] == "o" && game_state[2] == "o")) {
        buttons[0].style.background = "#F2B137";
        buttons[1].style.background = "#F2B137";
        buttons[2].style.background = "#F2B137";
        icon_game_o_black[0].style.display = "block";
        icon_game_o_black[1].style.display = "block";
        icon_game_o_black[2].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 2 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        img_icon_x.style.display = "none";
        img_icon_o.style.display = "block";
        p_take.style.color = "#F2B137";
        check_tie_o = true;
        wins_o += 1;
        score_o.innerText = wins_o;
    }else if ((game_state[3] == "o" && game_state[4] == "o" && game_state[5] == "o")) {
        buttons[3].style.background = "#F2B137";
        buttons[4].style.background = "#F2B137";
        buttons[5].style.background = "#F2B137";
        icon_game_o_black[3].style.display = "block";
        icon_game_o_black[4].style.display = "block";
        icon_game_o_black[5].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 2 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        img_icon_x.style.display = "none";
        img_icon_o.style.display = "block";
        p_take.style.color = "#F2B137";
        check_tie_o = true;
        wins_o += 1;
        score_o.innerText = wins_o;
    }else if ((game_state[6] == "o" && game_state[7] == "o" && game_state[8] == "o")) {
        buttons[6].style.background = "#F2B137";
        buttons[7].style.background = "#F2B137";
        buttons[8].style.background = "#F2B137";
        icon_game_o_black[6].style.display = "block";
        icon_game_o_black[7].style.display = "block";
        icon_game_o_black[8].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 2 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        img_icon_x.style.display = "none";
        img_icon_o.style.display = "block";
        p_take.style.color = "#F2B137";
        check_tie_o = true;
        wins_o += 1;
        score_o.innerText = wins_o;
    }else if ((game_state[0] == "o" && game_state[3] == "o" && game_state[6] == "o")) {
        buttons[0].style.background = "#F2B137";
        buttons[3].style.background = "#F2B137";
        buttons[6].style.background = "#F2B137";
        icon_game_o_black[0].style.display = "block";
        icon_game_o_black[3].style.display = "block";
        icon_game_o_black[6].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 2 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        img_icon_x.style.display = "none";
        img_icon_o.style.display = "block";
        p_take.style.color = "#F2B137";
        check_tie_o = true;
        wins_o += 1;
        score_o.innerText = wins_o;
    }else if ((game_state[1] == "o" && game_state[4] == "o" && game_state[7] == "o")) {
        buttons[1].style.background = "#F2B137";
        buttons[4].style.background = "#F2B137";
        buttons[7].style.background = "#F2B137";
        icon_game_o_black[1].style.display = "block";
        icon_game_o_black[4].style.display = "block";
        icon_game_o_black[7].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 2 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        img_icon_x.style.display = "none";
        img_icon_o.style.display = "block";
        p_take.style.color = "#F2B137";
        check_tie_o = true;
        wins_o += 1;
        score_o.innerText = wins_o;
    }else if ((game_state[2] == "o" && game_state[5] == "o" && game_state[8] == "o")) {
        buttons[2].style.background = "#F2B137";
        buttons[5].style.background = "#F2B137";
        buttons[8].style.background = "#F2B137";
        icon_game_o_black[2].style.display = "block";
        icon_game_o_black[5].style.display = "block";
        icon_game_o_black[8].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 2 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        img_icon_x.style.display = "none";
        img_icon_o.style.display = "block";
        p_take.style.color = "#F2B137";
        check_tie_o = true;
        wins_o += 1;
        score_o.innerText = wins_o;
    }else if ((game_state[0] == "o" && game_state[4] == "o" && game_state[8] == "o")) {
        buttons[0].style.background = "#F2B137";
        buttons[4].style.background = "#F2B137";
        buttons[8].style.background = "#F2B137";
        icon_game_o_black[0].style.display = "block";
        icon_game_o_black[4].style.display = "block";
        icon_game_o_black[8].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 2 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        img_icon_x.style.display = "none";
        img_icon_o.style.display = "block";
        p_take.style.color = "#F2B137";
        check_tie_o = true;
        wins_o += 1;
        score_o.innerText = wins_o;
    }else if ((game_state[2] == "o" && game_state[4] == "o" && game_state[6] == "o")) {
        buttons[2].style.background = "#F2B137";
        buttons[4].style.background = "#F2B137";
        buttons[6].style.background = "#F2B137";
        icon_game_o_black[2].style.display = "block";
        icon_game_o_black[4].style.display = "block";
        icon_game_o_black[6].style.display = "block";
        front_div.style.display = "block";
        player_1.innerText = "PLAYER 2 WINS!";
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        img_icon_x.style.display = "none";
        img_icon_o.style.display = "block";
        p_take.style.color = "#F2B137";
        check_tie_o = true;
        wins_o += 1;
        score_o.innerText = wins_o;
    }

}


function tie_check() {
    if(count == 9 && check_tie == false && check_tie_o == false) {
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        front_div.style.display = "block";
        front_div.style.paddingTop = "67px"
        player_1.style.display = "none";
        div_round.style.display = "none";
        p_tie.style.display = "block";
    }
}

next_round.addEventListener("click", () => {
    front_div.style.display = "none";
    for(let i = 0; i < buttons.length; i++) {
        icon_game_x[i].style.display = "none";
        icon_game_o[i].style.display = "none";
        icon_game_x_black[i].style.display = "none";
        icon_game_o_black[i].style.display = "none";
        buttons[i].style.background = "#1F3641";
        second_page.style.background = "";
        second_page.style.opacity = "1";
        game_state[i] = undefined;
        count = 0;
        check_tie = false;
        check_tie_o = false;
    }
})

// #1F3641
// #31c3bd
    // if ((game_state[0] === game_state[1]) && (game_state[0] === game_state[2])) {
    //     buttons[0].style.background = "#31c3bd";
    //     buttons[1].style.background = "#31c3bd";
    //     buttons[2].style.background = "#31c3bd";
    //     icon_game_x_black[0].style.display = "block";
    //     icon_game_x_black[1].style.display = "block";
    //     icon_game_x_black[2].style.display = "block";
    // }


// tie change 
// second_page.style.background = "black";
// second_page.style.opacity = "0.3";
// front_div.style.display = "block";
// front_div.style.paddingTop = "67px"
// player_1.style.display = "none";
// div_round.style.display = "none";
// p_tie.style.display = "block"