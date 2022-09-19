
function keyButton(ele)
{
    let xyz = document.getElementById("text");
    if(ele.innerText == "space")
    {xyz.value += " "}
    else
    {xyz.value += ele.innerText}
}