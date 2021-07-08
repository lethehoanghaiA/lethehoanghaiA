game function design

6.28 add Responsive web, media@  - min-width container
     Add server to send score - online table competition
    save score at local laptop?
    Multiple player to fight online?

    style the modal
    https://freefrontend.com/css-modal-windows/
    

new game button -- Need new pop up menu to choose
    link: https://www.w3schools.com/howto/howto_js_popup.asp

    https://www.w3schools.com/howto/howto_js_countdown.asp

    clearInterval and Progress bar:
    https://www.w3schools.com/jsref/met_win_clearinterval.asp
    
    autoPlay backGround Video: 
        https://www.labnol.org/internet/youtube-audio-player/26740/

popUp -> player name; dificulty -> nums of card + time  //done

    if playing game -> alert want to restart?   //not yet

theme button -> mode of background - star fall + music      
                                   - racing highway + another music

Score and Time button //done

Next: PRogress Time BAR   +  SOund win? or lose?    //done
        function sound(type) {
           document.getElementById(type).load();
            document.getElementById(type).play();   
            }

        function win() {
            document.getElementById('background').load();
            $('.cover').show();
            $('.message').find('h1').text('Congrat, you win!!!');
            $('.message').find('button').text('Play again');    
            $('.dialog').fadeIn();
            sound('win');
        }


At start there are a banner canvas show inspirational Picture of racing car

#At game play  mode

congrat when win
time out inform losing

# note for myself : 
See Robin huy another way to toggle the card and save the first card
design variable on paper for easier related when design and code the State of function

Issues with reload page on Button submit
https://stackoverflow.com/questions/38165702/question-mark-in-url-after-closing-alert-box
https://our.umbraco.com/forum/developers/api-questions/10716-question-mark-added-on-submit


##Save my HOW-To link - Important note:
#### HTML
<!-- Sticky Box -->
<!-- https://www.w3schools.com/howto/howto_css_sticky_element.asp -->

<!-- how to?:https://www.w3schools.com/howto/howto_css_flip_card.asp -->
<!-- https://www.w3schools.com/howto/howto_css_modals.asp -->
        

#### JS
<!-- https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array -->


#### CSS