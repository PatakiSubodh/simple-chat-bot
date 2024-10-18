// Collapsible (to expand/collapse when clicked)
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i< coll.length; i++) 
{
    coll[i].addEventListener
    ("click", function()
        {
            this.classList.toggle("active");

            var content = this.nextElementSibling;

            if (content.style.maxHeight)
            {
                content.style.maxHeight = null;
            }
            else 
            {
                content.style.maxHeight = content.scrollHeight + "px";
            }

        }
    )
}


function getTime()
{
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    //hours to look good
    if (hours < 10)
    {
        hours = "0" + hours;  
    }

    //minutes to look good
    if (minutes < 10)
    {
        minutes = "0" + minutes;   
    }

    let time = hours + ":" + minutes;

    return time;
} 

//msg tht pop-up when user opens chatbot
function firstBotMessage()
{
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>'

    let time = getTime();

    //J-qurey to simplify element selection
    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}


//to make sure to call this function as soon as we start the pgm
firstBotMessage();


// Retrives the response
 function getHardResponse(userText)
 {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class = "botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
 }
 

 //get response
 function getResponse()
  {
    let userText = $("#textInput").val();

    if (userText == "")
    {
        userText = "Text Empty!";
    }

    let userHtml = '<p class = "userText"><span>' + userText + '</span></p>';

    //to make the text disappear when enter is clicked to add more text
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    // To simulate a small delay as if chatbot was thinking
    setTimeout(() => {
            getHardResponse(userText);
    }, 1000 /*delay time*/ )
  }

    //function that handles send button
    function buttonSendText(sampleText)  //for heart button
  {
    let userHtml = '<p class = "userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    // Time delay
    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
  }


  function sendButton()
  {
    getResponse();
  }


  function heartButton()
  {
    buttonSendText("Heart clicked!😃")
  }

  // Press enter to send a msg
  $("#textInput").keypress(function(e) {
    if (e.which == 13)  //keycode for enter
    {
        getResponse();
    }
  });