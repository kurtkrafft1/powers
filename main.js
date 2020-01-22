// const flightHandlerFunction = () => {
//     const flightArticle = document.getElementById('flight');
//     if (flightArticle.classList=="power disabled"){
//         flightArticle.className = "power enabled";
//     } else {
//         flightArticle.className="power disabled";
//     };
// }

// const mindReaderHandlerFunction = () => {
//     const mindArticle = document.getElementById('mindreading');
//     if (mindArticle.classList=="power disabled"){
//         mindArticle.className = "power enabled";
//     } else {
//         mindArticle.className="power disabled";
//     };
// }


// const xRayReaderHandlerFunction = () => {
//     const xRayArticle = document.getElementById('xray');
//     if (xRayArticle.classList=="power disabled"){
//         xRayArticle.className = "power enabled";
//     } else {
//         xRayArticle.className="power disabled";
//     };
// }
// const activateAllHandlerFunction = () => {
//     const allArticles = document.querySelectorAll('.power');
//     allArticles.forEach(item=> item.classList=="power disabled"? item.className="power enabled": item.className="power disabled")
// }
// const deactivateAllHandlerFunction = () => {
//     const allArticles = document.querySelectorAll('.power');
//     allArticles.forEach(item=> item.classList=="power enabled"? item.className="power disabled": item.className="power disabled")
// }
const activateHandlerFunction = (event) => {
    const showMeTheMoney = event.target.id.split("-");
    if (showMeTheMoney[1]==='all' && showMeTheMoney[0]==='activate'){
        const articles = document.querySelectorAll(".power")
        articles.forEach(item => item.classList=="power disabled"? item.className="power enabled": item.className="power disabled")
    } else if (showMeTheMoney[0] ==='deactivate'){
        const articles = document.querySelectorAll('.power');
    articles.forEach(item=> item.classList=="power enabled"? item.className="power disabled": item.className="power disabled")
    } else{
    const artClass = document.querySelector(`#${showMeTheMoney[1]}`);
    artClass.classList=="power disabled" ? artClass.className ="power enabled": artClass.className ='power disabled';
}
    

}

document.querySelector("#activate-flight").addEventListener('click', activateHandlerFunction);
document.querySelector("#activate-mindreading").addEventListener('click', activateHandlerFunction);
document.querySelector("#activate-xray").addEventListener('click', activateHandlerFunction);
document.getElementById('activate-all').addEventListener('click', activateHandlerFunction);
document.getElementById('deactivate-all').addEventListener('click', activateHandlerFunction);

