document.addEventListener("DOMContentLoaded", () => {
    const N_btn = document.querySelector(".btn");
    const f_para = document.querySelector(".fact");
    const url = "https://cat-fact.herokuapp.com/facts/random";

    const getFact = async () => {
        console.log("Getting data...");
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let data = await response.json();
            f_para.innerText = data.text;
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    getFact();

    N_btn.addEventListener("click", getFact);
});