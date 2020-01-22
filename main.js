const flightHandlerFunction = () => {
    const flightArticle = document.getElementById('flight');
    if (flightArticle.classList=="power disabled"){
        flightArticle.className = "power enabled";
    } else {
        flightArticle.className="power disabled";
    };
}

const mindReaderHandlerFunction = () => {
    const mindArticle = document.getElementById('mindreading');
    if (mindArticle.classList=="power disabled"){
        mindArticle.className = "power enabled";
    } else {
        mindArticle.className="power disabled";
    };
}


const xRayReaderHandlerFunction = () => {
    const xRayArticle = document.getElementById('xray');
    if (xRayArticle.classList=="power disabled"){
        xRayArticle.className = "power enabled";
    } else {
        xRayArticle.className="power disabled";
    };
}

document.querySelector("#activate-flight").addEventListener('click', flightHandlerFunction);
document.querySelector("#activate-mindreading").addEventListener('click', mindReaderHandlerFunction);
document.querySelector("#activate-xray").addEventListener('click', xRayReaderHandlerFunction);

const activateAllHandlerFunction = () => {
    const allArticles = document.querySelectorAll('.power');
    allArticles.forEach(item=> item.classList=="power disabled"? item.className="power enabled": item.className="power disabled")
}
document.getElementById('activate-all').addEventListener('click', activateAllHandlerFunction);

const deactivateAllHandlerFunction = () => {
    const allArticles = document.querySelectorAll('.power');
    allArticles.forEach(item=> item.classList=="power enabled"? item.className="power disabled": item.className="power disabled")
}
document.getElementById('deactivate-all').addEventListener('click', deactivateAllHandlerFunction);
