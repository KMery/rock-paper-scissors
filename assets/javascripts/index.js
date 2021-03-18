//Set the posible options
let choices = ["rock", "paper", "scissor"];
let result_label = document.getElementById('result_label');
let options = document.getElementById('options');
let show_selections = document.getElementById('show_selections');

const chooseOption = (selected_option) => {
    let user_choice = selected_option.toLowerCase();
    console.log('user', user_choice);
    let user_choice_index = choices.indexOf(user_choice);
    //Select a random option for the computer
    let computer_choice_index = Math.floor(Math.random() * 3);  
    console.log('computer', choices[computer_choice_index]);
    showSelections(user_choice_index, computer_choice_index);
    //Logic for each option
    if (user_choice_index === computer_choice_index) {
        console.log('Tie');
        result_label.innerText = "It's a tie!"
    } else {
        if (user_choice_index === 0) {          //Rock = 0
            checkWin(computer_choice_index, user_choice_index);
        } else if (user_choice_index === 1) {   //Paper = 1
            checkWin(computer_choice_index, user_choice_index);
        } else {                                //Scissor = 2
            computer_choice_index += 3;
            checkWin(computer_choice_index, user_choice_index);
        };
    };
};

//Check who win the match
const checkWin = (cpu_index, usr_index) => {
    if ((cpu_index - 1) === usr_index) {
        console.log('You Lose');
        result_label.innerText = "You Lose!"
    } else {
        console.log('You win');
        result_label.innerText = "You Win!"
    };
};

const showSelections = (user_option_index, computer_option_index) => {
    //Select buttons from the html
    let user_choice_image = document.getElementById('user_choice_image');
    let computer_choice_image = document.getElementById('computer_choice_image');
    let selections_div = document.createElement('div');
    //Add src and styles
    user_choice_image.src = createButton(user_option_index);
    computer_choice_image.src = createButton(computer_option_index);
    //Add inputs to the show section
    selections_div.appendChild(user_choice_image);
    selections_div.appendChild(computer_choice_image);
    show_selections.appendChild(selections_div);
    //Adding styles
    selections_div.style.display = 'flex';
    selections_div.style.justifyContent = 'space-between';
    selections_div.style.flexDirection = 'row';
    selections_div.style.flexWrap = 'wrap';
    selections_div.style.justifyContent = 'center';
    show_selections.style.display = 'flex';
    show_selections.style.flexDirection = 'column';
    options.style.display = "none";
}

//Returns the source for a input image
const createButton = (index_choice) => {
    let src_image;
    if (index_choice === 0) {
        src_image = "../assets/icons/stone.svg";
    } else if (index_choice === 1) {
        src_image = "../assets/icons/paper.svg";
    } else {
        src_image = "../assets/icons/scissors.svg";
    };
    return src_image;
}

//Fuction for reset button
const resetGame = () => {
    options.style.display = "flex";
    show_selections.style.display = 'none';
}