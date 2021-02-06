document.getElementById("content").style.opacity=0;
show("content",100);
function show(id, speed) { let vars;
    let ID = setInterval(function() {
        (vars=Number(document.getElementById(id).style.opacity));
        if (vars>1) {
            clearInterval(ID);
        }
        vars += 0.1; document.getElementById(id).style.opacity=vars;
    }, speed);
}
