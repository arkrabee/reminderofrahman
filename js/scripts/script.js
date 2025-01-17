function applyAll(sctr, after) {
    let sct = document.querySelectorAll(sctr)
    for (let i = 0; i < sct.length; i++) {
        after(sct[i])
    }

}


