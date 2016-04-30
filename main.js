function reply_click(a)
{
    var inpt = document.getElementById("inpt").value;
    if(a == 'normal')
    {
      window.open("https://www.google.com.br/?ion=1#q=" + "gugu " + inpt, "_self");
    }

    if(a == 'sorte')
    {
      window.open("https://twitter.com/search?f=tweets&q=GUGU" + "%20from%3Asateliteweb&src=typd", "_self");

    }
}
