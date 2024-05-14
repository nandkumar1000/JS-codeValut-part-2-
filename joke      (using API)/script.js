document.addEventListener("DOMContentLoaded", () => {
    const f_para = document.querySelector(".para");
    const f_btn = document.querySelector(".btn");
    const url = " https://official-joke-api.appspot.com/jokes/random";
    const fetchData = async () => {
        console.log("getting data...");
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`error ${response}`);
        }
        const data = await response.json();
        f_para.innerText = data.setup + " " + data.punchline;
    };
    fetchData();
    f_btn.addEventListener("click", fetchData);
});