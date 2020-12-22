
var playerOne= localStorage.getItem("p1");
console.log(playerOne);

var playerTwo= localStorage.getItem("p2");
console.log(playerTwo);

var turn = "";
var Index = 35;
var IndexTwo = 36;
var IndexThree = 37;
var IndexFour =38;
var IndexFive =39;
var IndexSix=40;
var IndexSeven =41;
var list = document.getElementsByTagName("td");
$('p').text(`Its ${playerOne}'s Turn! Place your Blue chip in one of the columns!`);

$("#one.dot").click(function(){
    new Audio('click.mp3').play()
    if (turn == 'Red' && $("td").eq(0).text()==""){

        if ($("td").eq(Index).text()!=""){
            $("td").eq(Index-7).css("background-color","red");
            $("td").eq(Index).text("Red");
            checkWinner()
            Index -=14;
        }
        else if ($("td").eq(Index).text()==""&& $("td").eq(0).text()==""){
            $("td").eq(Index).css("background-color","red");
            $("td").eq(Index).text("Red");
            checkWinner()
            Index-=7;
            
            console.log("Red");
            $('p').text(`Its ${playerOne}'s Turn! Place your Blue chip in one of the columns!`);

            turn = 'Blue';
        }
    }
    else{
        if ($("td").eq(Index).text()!="" && $("td").eq(0).text()==""){
            $("td").eq(Index-7).css("background-color","#3f5c94");
            $("td").eq(Index).text("Blue");
            checkWinner() 
            Index -=14;
        }
        else if ($("td").eq(Index).text()==""&& $("td").eq(0).text()==""){
            $("td").eq(Index).css("background-color","#3f5c94");
            $("td").eq(Index).text("Blue");
            checkWinner()
            Index-=7;
            console.log("Blue");
            $('p').text(`Its ${playerTwo}'s Turn! Place your Red chip in one of the columns!`);
            turn = "Red"
        }
    }
})

$("#two.dot").click(function(){
    new Audio('click.mp3').play()
    if (turn == 'Red' && $("td").eq(1).text()==""){

        if ($("td").eq(IndexTwo).text()!=""){
            $("td").eq(IndexTwo-7).css("background-color","red");
            $("td").eq(IndexTwo).text("Red");
            checkWinner()
            IndexTwo -=14;
        }
        else if ($("td").eq(IndexTwo).text()==""&& $("td").eq(1).text()==""){
        $("td").eq(IndexTwo).css("background-color","red");
        $("td").eq(IndexTwo).text("Red");
        checkWinner()
        IndexTwo-=7;
        
        console.log("Red");
        $('p').text(`Its ${playerOne}'s Turn! Place your Blue chip in one of the columns!`);

        turn = 'Blue';
        }
    }
    else{
        if ($("td").eq(IndexTwo).text()!="" && $("td").eq(1).text()==""){
            $("td").eq(IndexTwo-7).css("background-color","#3f5c94");
            $("td").eq(IndexTwo).text("Blue");
            checkWinner()
            IndexTwo -=14;
        }
        else if ($("td").eq(IndexTwo).text()==""&& $("td").eq(1).text()==""){
            $("td").eq(IndexTwo).css("background-color","#3f5c94");
            $("td").eq(IndexTwo).text("Blue");
            checkWinner()
            IndexTwo-=7;
            console.log("Blue");
            $('p').text(`Its ${playerTwo}'s Turn! Place your Red chip in one of the columns!`);
            turn = "Red"
        }
    }
})

$("#three.dot").click(function(){
    new Audio('click.mp3').play()
    if (turn == 'Red' && $("td").eq(2).text()==""){

        if ($("td").eq(IndexThree).text()!=""){
            $("td").eq(IndexThree-7).css("background-color","red");
            $("td").eq(IndexThree).text("Red");
            checkWinner()
            IndexThree -=14;
        }
        else if ($("td").eq(IndexThree).text()==""&& $("td").eq(2).text()==""){
        $("td").eq(IndexThree).css("background-color","red");
        $("td").eq(IndexThree).text("Red");
        checkWinner()
        
        IndexThree-=7;
        
        console.log("Red");
        $('p').text(`Its ${playerOne}'s Turn! Place your Blue chip in one of the columns!`);

        turn = 'Blue';
        }
    }
    else{
        if ($("td").eq(IndexThree).text()!="" && $("td").eq(2).text()==""){
            $("td").eq(IndexThree-7).css("background-color","#3f5c94");
            $("td").eq(IndexThree).text("Blue");
            checkWinner()
            IndexThree-=14;
        }
        else if ($("td").eq(IndexThree).text()==""&& $("td").eq(2).text()==""){
            $("td").eq(IndexThree).css("background-color","#3f5c94");
            $("td").eq(IndexThree).text("Blue");
            checkWinner()
            IndexThree-=7;
            console.log("Blue");
            $('p').text(`Its ${playerTwo}'s Turn! Place your Red chip in one of the columns!`);
            turn = "Red"
        }
    }
})
$("#four.dot").click(function(){
    new Audio('click.mp3').play()
    if (turn == 'Red' && $("td").eq(3).text()==""){

        if ($("td").eq(IndexFour).text()==""&& $("td").eq(3).text()==""){
            $("td").eq(IndexFour).css("background-color","red");
            $("td").eq(IndexFour).text("Red");
            checkWinner()
            IndexFour-=7;
            
            console.log("Red");
            $('p').text(`Its ${playerOne}'s Turn! Place your Blue chip in one of the columns!`);

            turn = 'Blue';
        }
    }
    else{
        if ($("td").eq(IndexFour).text()!="" && $("td").eq(3).text()==""){
            $("td").eq(IndexFour-7).css("background-color","#3f5c94");
            $("td").eq(IndexFour).text("Blue");
            checkWinner()
            IndexFour -=14;
        }
        else if ($("td").eq(IndexFour).text()==""&& $("td").eq(3).text()==""){
            $("td").eq(IndexFour).css("background-color","#3f5c94");
            $("td").eq(IndexFour).text("Blue");
            checkWinner()
            IndexFour-=7;
            console.log("Blue");
            $('p').text(`Its ${playerTwo}'s Turn! Place your Red chip in one of the columns!`);
            turn = "Red"
        }
    }
})
$("#five.dot").click(function(){
    new Audio('click.mp3').play()
    if (turn == 'Red' && $("td").eq(4).text()==""){

        if ($("td").eq(IndexFive).text()==""&& $("td").eq(4).text()==""){
            $("td").eq(IndexFive).css("background-color","red");
            $("td").eq(IndexFive).text("Red");
            checkWinner()
            IndexFive-=7;
            
            console.log("Red");
            $('p').text(`Its ${playerOne}'s Turn! Place your Blue chip in one of the columns!`);

            turn = 'Blue';
        }
    }
    else{
        if ($("td").eq(IndexFive).text()!="" && $("td").eq(4).text()==""){
            $("td").eq(IndexFive-7).css("background-color","#3f5c94");
            $("td").eq(IndexFive).text("Blue");
            checkWinner()
            IndexFive -=14;
        }
        else if ($("td").eq(IndexFive).text()==""&& $("td").eq(4).text()==""){
            $("td").eq(IndexFive).css("background-color","#3f5c94");
            $("td").eq(IndexFive).text("Blue");
            checkWinner()
            IndexFive-=7;
            console.log("Blue");
            $('p').text(`Its ${playerTwo}'s Turn! Place your Red chip in one of the columns!`);
            turn = "Red"
        }
    }
})
$("#six.dot").click(function(){
    new Audio('click.mp3').play()
    if (turn == 'Red' && $("td").eq(5).text()==""){

        if ($("td").eq(IndexSix).text()==""&& $("td").eq(5).text()==""){
            $("td").eq(IndexSix).css("background-color","red");
            $("td").eq(IndexSix).text("Red");
            checkWinner()
            IndexSix-=7;
            
            console.log("Red");
            $('p').text(`Its ${playerOne}'s Turn! Place your Blue chip in one of the columns!`);

            turn = 'Blue';
        }
    }
    else{
        if ($("td").eq(IndexSix).text()!="" && $("td").eq(5).text()==""){
            $("td").eq(IndexSix-7).css("background-color","#3f5c94");
            $("td").eq(IndexSix).text("Blue");
            checkWinner()
            IndexFive -=14;
        }
        else if ($("td").eq(IndexSix).text()==""&& $("td").eq(5).text()==""){
            $("td").eq(IndexSix).css("background-color","#3f5c94");
            $("td").eq(IndexSix).text("Blue");
            checkWinner()
            IndexSix-=7;
            console.log("Blue");
            $('p').text(`Its ${playerTwo}'s Turn! Place your Red chip in one of the columns!`);
            turn = "Red"
        }
    }
})
$("#seven.dot").click(function(){
    new Audio('click.mp3').play()
    if (turn == 'Red' && $("td").eq(6).text()==""){

        if ($("td").eq(IndexSeven).text()!=""){
            $("td").eq(IndexSeven-7).css("background-color","red");
            $("td").eq(IndexSeven).text("Red");
            checkWinner()
            IndexSeven -=14;
        }
        else if ($("td").eq(IndexSeven).text()==""&& $("td").eq(6).text()==""){
            $("td").eq(IndexSeven).css("background-color","red");
            $("td").eq(IndexSeven).text("Red");
            checkWinner()
            IndexSeven-=7;
            
            console.log("Red");
            $('p').text(`Its ${playerOne}'s Turn! Place your Blue chip in one of the columns!`);

            turn = 'Blue';
        }
    }
    else{
        if ($("td").eq(IndexSeven).text()!="" && $("td").eq(6).text()==""){
            $("td").eq(IndexSeven-7).css("background-color","#3f5c94");
            $("td").eq(IndexSeven).text("Blue");
            checkWinner()
            IndexSeven -=14;
        }
        else if ($("td").eq(IndexSeven).text()==""&& $("td").eq(6).text()==""){
            $("td").eq(IndexSeven).css("background-color","#3f5c94");
            $("td").eq(IndexSeven).text("Blue");
            checkWinner()
            IndexSeven-=7;
            console.log("Blue");
            $('p').text(`Its ${playerTwo}'s Turn! Place your Red chip in one of the columns!`);
            turn = "Red"
        }
    }
})
function checkWinner() {
    for (let i = 0; i < list.length; i++) {
        //Horizontal Check for Blue
        if ($("td").eq(i).text()=="Blue" && $("td").eq(i+1).text()=='Blue' && $("td").eq(i+2).text()=='Blue' &&$("td").eq(i+3).text()=='Blue'){
            $('h2').text(`GAME OVER! ${playerOne} Wins!`);
            $('p').css('display','none');
            $('h6').css('display','none');
            $('#new').css('display','inline')
        }
        //Vertical Check for Blue
        else if(($("td").eq(i).text()=="Blue" && $("td").eq(i+7).text()=='Blue' && $("td").eq(i+14).text()=='Blue' &&$("td").eq(i+21).text()=='Blue')){
            $('h2').text(`GAME OVER! ${playerOne} Wins!`);
            $('p').css('display','none');
            $('h6').css('display','none');
            $('#new').css('display','inline')
        }
        //Diagonal Check for Blue 1
        else if(($("td").eq(i).text()=="Blue" && ($("td").eq(i).attr('id')=='one'||$("td").eq(i).attr('id')=='two'||$("td").eq(i).attr('id')=='three'||$("td").eq(i).attr('id')=='four') && $("td").eq(i+8).text()=='Blue' && $("td").eq(i+16).text()=='Blue' &&$("td").eq(i+24).text()=='Blue')){
            $('h2').text(`GAME OVER! ${playerOne} Wins!`);
            $('p').css('display','none');
            $('h6').css('display','none');
            $('#new').css('display','inline')
        }
        //Diagonal Check for Blue 2
        else if(($("td").eq(i).text()=="Blue" && ($("td").eq(i).attr('id')=='four'||$("td").eq(i).attr('id')=='five'||$("td").eq(i).attr('id')=='six'||$("td").eq(i).attr('id')=='seven') && $("td").eq(i+6).text()=='Blue' && $("td").eq(i+12).text()=='Blue' &&$("td").eq(i+18).text()=='Blue')){
            $('h2').text(`GAME OVER! ${playerOne} Wins!`);
            $('p').css('display','none');
            $('h6').css('display','none');
            $('#new').css('display','inline')
        }
        //Horizontal Check for Red 
        else if(($("td").eq(i).text()=="Red" && $("td").eq(i+1).text()=='Red' && $("td").eq(i+2).text()=='Red' &&$("td").eq(i+3).text()=='Red')){
            $('h2').text(`GAME OVER! ${playerTwo} Wins!`);
            $('p').css('display','none');
            $('h6').css('display','none');
            $('#new').css('display','inline')
        }
        //Vertical Check for Red
        else if(($("td").eq(i).text()=="Red" && $("td").eq(i+7).text()=='Red' && $("td").eq(i+14).text()=='Red' &&$("td").eq(i+21).text()=='Red')){
            $('h2').text(`GAME OVER! ${playerTwo} Wins!`);
            $('p').css('display','none');
            $('h6').css('display','none');
            $('#new').css('display','inline')
        }
        //Diagonal Check for Blue 1
        else if(($("td").eq(i).text()=="Red" && ($("td").eq(i).attr('id')=='one'||$("td").eq(i).attr('id')=='two'||$("td").eq(i).attr('id')=='three'||$("td").eq(i).attr('id')=='four') && $("td").eq(i+8).text()=='Red' && $("td").eq(i+16).text()=='Red' &&$("td").eq(i+24).text()=='Red')){
            $('h2').text(`GAME OVER! ${playerTwo} Wins!`);
            $('p').css('display','none');
            $('h6').css('display','none');
            $('#new').css('display','inline')
        }
        //Diagonal Check for Blue 2
        else if(($("td").eq(i).text()=="Red" && ($("td").eq(i).attr('id')=='four'||$("td").eq(i).attr('id')=='five'||$("td").eq(i).attr('id')=='six'||$("td").eq(i).attr('id')=='seven') && $("td").eq(i+6).text()=='Red' && $("td").eq(i+12).text()=='Red' &&$("td").eq(i+18).text()=='Red')){
            $('h2').text(`GAME OVER! ${playerTwo} Wins!`);
            $('p').css('display','none');
            $('h6').css('display','none');
            $('#new').css('display','inline')
        }
}
}
