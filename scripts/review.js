document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? Number(reviewCount) : 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    const displayReviewCount = document.getElementById("review-count");
    if (displayReviewCount) {
        displayReviewCount.textContent = reviewCount;
    }
});