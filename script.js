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
let ties = 0;
const next_round = document.getElementById("next-round");
let score_ties = document.getElementById("ties");
const quit = document.getElementById("quit");
let selection = "";
let free_positions = [0,1,2,3,4,5,6,7,8];
const restart = document.getElementById("restart");
let is_x_winner = false;
let is_o_winner = false;
let is_vs_cpu = false;
let is_pl_vs_pl = false;

div_x.addEventListener("click", () => {
    selection = "x";
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
        vs_cpu_me_x();
        is_vs_cpu = true;
    })
    new_pl2.addEventListener("click", () => {
        second_page.style.display = "block";
        first_page.style.display = "none";
        p_you.innerText = "X (P1)";
        p_opp.innerText = "O (P2)";
        game_time();
        is_pl_vs_pl = true;
    })
    
})

div_o.addEventListener("click", () => {
    selection = "o";
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
        vs_cpu_me_o();
        is_vs_cpu = true;
    })    
    new_pl2.addEventListener("click", () => {
        second_page.style.display = "block";
        first_page.style.display = "none";
        p_you.innerText = "X (P2)";
        p_opp.innerText = "O (P1)";
        game_time();
        is_pl_vs_pl = true;
                
    })
})


function game_time(){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
                if (count % 2 == 0 && game_state[i] === undefined) {
                    icon_game_x[i].style.display = "block";
                    game_state[i] = "x";
                    count += 1;
                    check_win_x();
                    x_turn.style.display = "none";
                    o_turn.style.display = "block";          
                } else if (count % 2 == 1 && game_state[i] === undefined) {
                    icon_game_o[i].style.display = "block";
                    game_state[i] = "o"; 
                    count += 1;
                    check_win_o(); 
                    x_turn.style.display = "block";
                    o_turn.style.display = "none";              
                }
                tie_check();
        })
    
    
    }
}



function set_win_x(first, second, third) {
    buttons[first].style.background = "#31c3bd";
    buttons[second].style.background = "#31c3bd";
    buttons[third].style.background = "#31c3bd";
    icon_game_x_black[first].style.display = "block";
    icon_game_x_black[second].style.display = "block";
    icon_game_x_black[third].style.display = "block";
    front_div.style.display = "block";
    second_page.style.background = "black";
    second_page.style.opacity = "0.3"; 
    img_icon_x.style.display = "block";
    img_icon_o.style.display = "none";
    p_take.style.color = "#31C3BD";
    wins += 1;
    is_x_winner = true;
    score_x.innerText = wins;
    player_1.style.display = "block";
    div_round.style.display = "block";
    p_tie.style.display = "none";
    front_div.style.paddingTop = "40px";
    game_state.length = 0;
    free_positions = [0,1,2,3,4,5,6,7,8];
    if (selection == "x") {
        player_1.innerText = "PLAYER 1 WINS!";
    }else {
        player_1.innerText = "PLAYER 2 WINS!";
    }
}

function set_win_o(first,second,third) {
    buttons[first].style.background = "#F2B137";
    buttons[second].style.background = "#F2B137";
    buttons[third].style.background = "#F2B137";
    icon_game_o_black[first].style.display = "block";
    icon_game_o_black[second].style.display = "block";
    icon_game_o_black[third].style.display = "block";
    front_div.style.display = "block";
    second_page.style.background = "black";
    second_page.style.opacity = "0.3";
    img_icon_x.style.display = "none";
    img_icon_o.style.display = "block";
    p_take.style.color = "#F2B137";
    is_o_winner = true;
    wins_o += 1;
    score_o.innerText = wins_o;
    player_1.style.display = "block";
    div_round.style.display = "block";
    p_tie.style.display = "none";
    front_div.style.paddingTop = "40px";
    game_state.length = 0;
    free_positions = [0,1,2,3,4,5,6,7,8];
    if (selection == "o") {
        player_1.innerText = "PLAYER 1 WINS!";
    }else {
        player_1.innerText = "PLAYER 2 WINS!";
    }
}


function check_win_x() {
    if ((game_state[0] == "x" && game_state[1] == "x" && game_state[2] == "x")) {
        set_win_x(0,1,2);
    }else if ((game_state[3] == "x" && game_state[4] == "x" && game_state[5] == "x")) {
        set_win_x(3,4,5);
    }else if ((game_state[6] == "x" && game_state[7] == "x" && game_state[8] == "x")) {
        set_win_x(6,7,8);
    }else if ((game_state[0] == "x" && game_state[3] == "x" && game_state[6] == "x")) {
        set_win_x(0,3,6);
    }else if ((game_state[1] == "x" && game_state[4] == "x" && game_state[7] == "x")) {
        set_win_x(1,4,7);
    }else if ((game_state[2] == "x" && game_state[5] == "x" && game_state[8] == "x")) {
        set_win_x(2,5,8);
    }else if ((game_state[0] == "x" && game_state[4] == "x" && game_state[8] == "x")) {
        set_win_x(0,4,8);
    }else if ((game_state[2] == "x" && game_state[4] == "x" && game_state[6] == "x")) {
        set_win_x(2,4,6);
    }

}

function check_win_o() {
    if ((game_state[0] == "o" && game_state[1] == "o" && game_state[2] == "o")) {
        set_win_o(0,1,2);
    }else if ((game_state[3] == "o" && game_state[4] == "o" && game_state[5] == "o")) {
        set_win_o(3,4,5);
    }else if ((game_state[6] == "o" && game_state[7] == "o" && game_state[8] == "o")) {
        set_win_o(6,7,8);
    }else if ((game_state[0] == "o" && game_state[3] == "o" && game_state[6] == "o")) {
        set_win_o(0,3,6);
    }else if ((game_state[1] == "o" && game_state[4] == "o" && game_state[7] == "o")) {
        set_win_o(1,4,7);
    }else if ((game_state[2] == "o" && game_state[5] == "o" && game_state[8] == "o")) {
        set_win_o(2,5,8)
    }else if ((game_state[0] == "o" && game_state[4] == "o" && game_state[8] == "o")) {
        set_win_o(0,4,8)
    }else if ((game_state[2] == "o" && game_state[4] == "o" && game_state[6] == "o")) {
        set_win_o(2,4,6);
    }
}


function tie_check() {
    if(count >= 9 && !is_x_winner && !is_o_winner) {
        second_page.style.background = "black";
        second_page.style.opacity = "0.3";
        front_div.style.display = "block";
        front_div.style.paddingTop = "67px";
        player_1.style.display = "none";
        div_round.style.display = "none";
        p_tie.style.display = "block";
        ties += 1;
        score_ties.innerText = ties;
        game_state.length = 0;
        free_positions = [0,1,2,3,4,5,6,7,8];  
    }
}

next_round.addEventListener("click", () => {
    front_div.style.display = "none";
    free_positions = [0,1,2,3,4,5,6,7,8];
    for(let i = 0; i < buttons.length; i++) {
        icon_game_x[i].style.display = "none";
        icon_game_o[i].style.display = "none";
        icon_game_x_black[i].style.display = "none";
        icon_game_o_black[i].style.display = "none";
        buttons[i].style.background = "#1F3641";
        second_page.style.background = "";
        second_page.style.opacity = "1";
        game_state.length = 0;
        count = 0;
        is_o_winner = false;
        is_x_winner = false;
    }
    
})

quit.addEventListener("click", () => {
    front_div.style.display = "none";
    second_page.style.display = "none";
    first_page.style.display = "block";
    free_positions = [0,1,2,3,4,5,6,7,8];
    for(let i = 0; i < buttons.length; i++) {
        icon_game_x[i].style.display = "none";
        icon_game_o[i].style.display = "none";
        icon_game_x_black[i].style.display = "none";
        icon_game_o_black[i].style.display = "none";
        buttons[i].style.background = "#1F3641";
        second_page.style.background = "";
        second_page.style.opacity = "1";
        game_state.length = 0;
        count = 0;
        is_o_winner = false;
        is_x_winner = false;
        score_x.innerText = 0;
        wins = 0;
        score_o.innerText = 0;
        wins_o = 0;
        score_ties.innerText = 0;
        ties = 0;
        is_pl_vs_pl = false;
        is_vs_cpu = false;
    }
})

restart.addEventListener("click", () => {
    game_state.length = 0;
    count = 0;
    is_o_winner = false;
    is_x_winner = false;
    free_positions = [0,1,2,3,4,5,6,7,8];
    for(let i = 0; i < buttons.length; i++) {
        icon_game_x[i].style.display = "none";
        icon_game_o[i].style.display = "none";
        icon_game_x_black[i].style.display = "none";
        icon_game_o_black[i].style.display = "none";
        buttons[i].style.background = "#1F3641";
    }

})

function vs_cpu_me_x() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            if(game_state[i] !== undefined) return;
            icon_game_x[i].style.display = "block";
            count += 1;
            game_state[i] = "x";
            x_turn.style.display = "block";
            o_turn.style.display = "none";
            let index_x = free_positions.indexOf(i);
            console.log(index_x);
            free_positions.splice(index_x, 1);
            let random_position = free_positions[Math.floor(Math.random() * free_positions.length)];
            let random = icon_game_o[random_position];
            check_win_x();
            tie_check(); 
            if(game_state[random_position] === undefined) {
                game_state[random_position] = "o";
                count += 1;
                check_win_o();
                random.style.display = "block";
                let index_o = free_positions.indexOf(random_position);
                free_positions.splice(index_o, 1);
            }
            console.log(game_state);
            console.log(free_positions);                          
    })
        }  
        // setTimeout(function() {vs_cpu_me_x()}, 2000);
    }

function vs_cpu_me_o() {
    let random_position = free_positions[Math.floor(Math.random() * free_positions.length)];
    let random = icon_game_x[random_position];
    let index_x = free_positions.indexOf(random_position);
    free_positions.splice(index_x, 1);
    random.style.display = "block";
    game_state[random_position] = "x";
    count += 1;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            if(game_state[i] !== undefined) return;
            icon_game_o[i].style.display = "block";
            count += 1;
            game_state[i] = "o";
            x_turn.style.display = "none";
            o_turn.style.display = "block";
            let index_o = free_positions.indexOf(i);
            console.log(index_o);
            free_positions.splice(index_o, 1);
            let random_position = free_positions[Math.floor(Math.random() * free_positions.length)];
            let random = icon_game_x[random_position];
            check_win_o();
            tie_check(); 
            if(game_state[random_position] === undefined) {
                game_state[random_position] = "x";
                count += 1;
                check_win_x();
                random.style.display = "block";
                let index_x = free_positions.indexOf(random_position);
                free_positions.splice(index_x, 1);
            }
            console.log(game_state);
            console.log(free_positions);                          
        })
    }
}

