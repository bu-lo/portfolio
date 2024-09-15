window.addEventListener("scroll", function () {
    const header = document.getElementById("header_header");
    const fixedHeader = document.getElementById("fixed-header");
    
    const headerBottom = header.getBoundingClientRect().bottom;

    if (headerBottom < 0) {
        fixedHeader.classList.remove("hidden");
    } else {
        fixedHeader.classList.add("hidden");
    }
});