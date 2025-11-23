// 문서 전환 기능
const docItems = document.querySelectorAll("#docList li");
const docs = document.querySelectorAll(".doc");

docItems.forEach(item => {
    item.addEventListener("click", () => {
        const target = item.dataset.doc;

        docs.forEach(doc => doc.classList.remove("active"));
        document.getElementById(target).classList.add("active");
    });
});

// 검색 기능
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();

    docItems.forEach(li => {
        if (li.innerText.includes(query)) {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    });
});
