uppercase.addEventListener('click', ()=>{
    console.log("transforming to UpperCase");
    inpText.value = inpText.value.toUpperCase();
})
lowercase.addEventListener('click', ()=>{
    console.log("transforming to LowerCase");
    inpText.value = inpText.value.toLowerCase();
})
removeSpaces.addEventListener('click', ()=>{
    inpText.value = inpText.value.replace(/\s+/g, " ").trim();
})

removeLines.addEventListener('click', ()=>{
    inpText.value = inpText.value.replace(/\s+/g, "\n").trim();
})

inpText.addEventListener("input", () => {
    console.log("changed");
    var inputText = inpText.value;
    charCount.innerText = inputText.length;
    wordCount.innerText = inputText.trim().split(/\s+/).length;
    sentenceCount.innerText = inputText.split(/[.?!]\s*/).length-1;
});

