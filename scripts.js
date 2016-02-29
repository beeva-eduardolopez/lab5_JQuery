var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];

$("#block").append(sentences[0]);

$(document).bind('keydown', function (event) {
   
    //If you want to check the code from the key
    console.log(event.keyCode);
    var keydown = event.keyCode;
    if(keydown== 20){
        console.log("CHANGE KEYBOARD");
        if ($("#keyboard-upper-container").attr("class") == 'text-center keyboard-container active') {
            $("#keyboard-upper-container").removeClass("active"); 
            $("#keyboard-upper-container").addClass("disable");
            $('#keyboard-lower-container').removeClass("disable");
            $('#keyboard-lower-container').addClass("active");
        } else {
            $("#keyboard-upper-container").removeClass("disable");
            $("#keyboard-upper-container").addClass("active");
            $('#keyboard-lower-container').removeClass("active");
            $('#keyboard-lower-container').addClass("disable");
        }
  
    }
    switch (event.keyCode) {
        case 48:
            $('span#0').addClass('active-style');
            break;
        case 49:
            $('span#1').addClass('active-style');
            break;
        case 50:
            $('span#2').addClass('active-style');
            break;
        case 51:
            $('span#3').addClass('active-style');
            break;
        case 52:
            $('span#4').addClass('active-style');
            break;
        case 53:
            $('span#5').addClass('active-style');
            break;
        case 54:
            $('span#6').addClass('active-style');
            break;
        case 55:
            $('span#7').addClass('active-style');
            break;
        case 56:
            $('span#8').addClass('active-style');
            break;
        case 57:
            $('span#9').addClass('active-style');
            break;
        case 81:
            $('span#q').addClass('active-style');
            $('span#Q').addClass('active-style');
            break;
        case 87:
            $('span#w').addClass('active-style');
            $('span#W').addClass('active-style');
            break;
        case 69:
            $('span#e').addClass('active-style');
            $('span#E').addClass('active-style');
            break;
        case 82:
            $('span#r').addClass('active-style');
            $('span#R').addClass('active-style');
            break;
        case 84:
            $('span#t').addClass('active-style');
            $('span#T').addClass('active-style');
            break;
        case 89:
            $('span#y').addClass('active-style');
            $('span#Y').addClass('active-style');
            break;
        case 85:
            $('span#u').addClass('active-style');
            $('span#U').addClass('active-style');
            break;
        case 73:
            $('span#i').addClass('active-style');
            $('span#I').addClass('active-style');
            break;
        case 79:
            $('span#o').addClass('active-style');
            $('span#O').addClass('active-style');
            break;
        case 80:
            $('span#p').addClass('active-style');
            $('span#P').addClass('active-style');
            break;
        case 65:
            $('span#a').addClass('active-style');
            $('span#A').addClass('active-style');
            break;
        case 83:
            $('span#s').addClass('active-style');
            $('span#S').addClass('active-style');
            break;
        case 68:
            $('span#d').addClass('active-style');
            $('span#D').addClass('active-style');
            break;
        case 70:
            $('span#f').addClass('active-style');
            $('span#F').addClass('active-style');
            break;
        case 71:
            $('span#g').addClass('active-style');
            $('span#G').addClass('active-style');
            break;
        case 72:
            $('span#h').addClass('active-style');
            $('span#H').addClass('active-style');
            break;
        case 74:
            $('span#j').addClass('active-style');
            $('span#J').addClass('active-style');
            break;
        case 75:
            $('span#k').addClass('active-style');
            $('span#K').addClass('active-style');
            break;
        case 76:
            $('span#l').addClass('active-style');
            $('span#L').addClass('active-style');
            break;
        case 90:
            $('span#z').addClass('active-style');
            $('span#Z').addClass('active-style');
            break;
        case 88:
            $('span#x').addClass('active-style');
            $('span#X').addClass('active-style');
            break;
        case 67:
            $('span#c').addClass('active-style');
            $('span#C').addClass('active-style');
            break;
        case 86:
            $('span#v').addClass('active-style');
            $('span#V').addClass('active-style');
            break;
        case 66:
            $('span#b').addClass('active-style');
            $('span#B').addClass('active-style');
            break;
        case 78:
            $('span#n').addClass('active-style');
            $('span#N').addClass('active-style');
            break;
        case 77:
            $('span#m').addClass('active-style');
            $('span#M').addClass('active-style');
            break;
        case 32:
            $('div#32').addClass('active-style');
            break;
 
   }
   
});

$(document).bind('keyup', function (event) {

    //If you want to check the code from the key
    console.log(event.keyCode);
    var keyup = event.keyCode;
    switch (event.keyCode) {
        case 48:
            $('span#0').removeClass('active-style');
            break;
        case 49:
            $('span#1').removeClass('active-style');
            break;
        case 50:
            $('span#2').removeClass('active-style');
            break;
        case 51:
            $('span#3').removeClass('active-style');
            break;
        case 52:
            $('span#4').removeClass('active-style');
            break;
        case 53:
            $('span#5').removeClass('active-style');
            break;
        case 54:
            $('span#6').removeClass('active-style');
            break;
        case 55:
            $('span#7').removeClass('active-style');
            break;
        case 56:
            $('span#8').removeClass('active-style');
            break;
        case 57:
            $('span#9').removeClass('active-style');
            break;
        case 81:
            $('span#q').removeClass('active-style');
            $('span#Q').removeClass('active-style');
            break;
        case 87:
            $('span#w').removeClass('active-style');
            $('span#W').removeClass('active-style');
            break;
        case 69:
            $('span#e').removeClass('active-style');
            $('span#E').removeClass('active-style');
            break;
        case 82:
            $('span#r').removeClass('active-style');
            $('span#R').removeClass('active-style');
            break;
        case 84:
            $('span#t').removeClass('active-style');
            $('span#T').removeClass('active-style');
            break;
        case 89:
            $('span#y').removeClass('active-style');
            $('span#Y').removeClass('active-style');
            break;
        case 85:
            $('span#u').removeClass('active-style');
            $('span#U').removeClass('active-style');
            break;
        case 73:
            $('span#i').removeClass('active-style');
            $('span#I').removeClass('active-style');
            break;
        case 79:
            $('span#o').removeClass('active-style');
            $('span#O').removeClass('active-style');
            break;
        case 80:
            $('span#p').removeClass('active-style');
            $('span#P').removeClass('active-style');
            break;
        case 65:
            $('span#a').removeClass('active-style');
            $('span#A').removeClass('active-style');
            break;
        case 83:
            $('span#s').removeClass('active-style');
            $('span#S').removeClass('active-style');
            break;
        case 68:
            $('span#d').removeClass('active-style');
            $('span#D').removeClass('active-style');
            break;
        case 70:
            $('span#f').removeClass('active-style');
            $('span#F').removeClass('active-style');
            break;
        case 71:
            $('span#g').removeClass('active-style');
            $('span#G').removeClass('active-style');
            break;
        case 72:
            $('span#h').removeClass('active-style');
            $('span#H').removeClass('active-style');
            break;
        case 74:
            $('span#j').removeClass('active-style');
            $('span#J').removeClass('active-style');
            break;
        case 75:
            $('span#k').removeClass('active-style');
            $('span#K').removeClass('active-style');
            break;
        case 76:
            $('span#l').removeClass('active-style');
            $('span#L').removeClass('active-style');
            break;
        case 90:
            $('span#z').removeClass('active-style');
            $('span#Z').removeClass('active-style');
            break;
        case 88:
            $('span#x').removeClass('active-style');
            $('span#X').removeClass('active-style');
            break;
        case 67:
            $('span#c').removeClass('active-style');
            $('span#C').removeClass('active-style');
            break;
        case 86:
            $('span#v').removeClass('active-style');
            $('span#V').removeClass('active-style');
            break;
        case 66:
            $('span#b').removeClass('active-style');
            $('span#B').removeClass('active-style');
            break;
        case 78:
            $('span#n').removeClass('active-style');
            $('span#N').removeClass('active-style');
            break;
        case 77:
            $('span#m').removeClass('active-style');
            $('span#M').removeClass('active-style');
            break;
        case 32:
            $('div#32').removeClass('active-style');
            break;
    }

});

/*$("#target").keypress(function () {
    var keyPress = event.keyCode;
    console.log("keypress() called." + keyPress);
    switch (event.keyCode) {
        case 65:
            $("a").style.css( "border", "3px solid red" );
            break;
    }
});*/


$("#hide").click(function () {
    $("p").hide();
});
$("#show").click(function () {
    $("p").show();
});