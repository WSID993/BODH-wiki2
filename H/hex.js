// 문서 열기 기능
const docs = document.querySelectorAll(".doc");
const items = document.querySelectorAll("#docList li");

items.forEach(item => {
    item.addEventListener("click", () => {
        const id = item.dataset.doc;

        docs.forEach(d => d.classList.remove("active"));
        document.getElementById(id).classList.add("active");
    });
});

// 검색 기능 (문서 목록 필터링)
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
    const keyword = searchInput.value.toLowerCase();

    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(keyword) ? "block" : "none";
    });
});
