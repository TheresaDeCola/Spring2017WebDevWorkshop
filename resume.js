//First step is to add a link to resume.json in resume.html

//Function to add a new meme to the feed
var newMeme = function ()
{
    //Get the text box that has the url of the meme
    //We can do this because we specified the id of the text box in html
    var memeUrlBox = document.getElementById("new_meme_url");

    //Get the actual url from the text box
    var memeUrl = memeUrlBox.value;

    //Get the text box that has the url of the meme
    var memeCaptionBox = document.getElementById("new_meme_caption");

    //Get the actual url from the text box
    var memeCaption = memeCaptionBox.value;

    //Generate the html text for the new meme
    var memeHtml = generateMemeHtml (memeUrl, memeCaption);

    //Get the meme feed
    var memeFeed = document.getElementById("meme_feed");

    //Store the original memes
    var currentMemes = memeFeed.innerHTML;

    //Add the new meme to the BEGINNING
    memeFeed.innerHTML = memeHtml + currentMemes;

}

var generateMemeHtml = function (url, caption)
{
    return '<li> <div class="meme"> <img width="300" height="200" src="' + url + '"/> <div class="caption">' + caption +'</div></div></li>'
}