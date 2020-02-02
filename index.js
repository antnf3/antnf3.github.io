arrJson.sort(function(a, b) {
	return b.date - a.date;
});

arrJson.map(function(ads, i) {
	fnAddAds(ads, i)
});

function fnAddAds(ads, rowNum) {
	const features = document.querySelectorAll("main > .features")[0];
	const fragEle = document.createDocumentFragment();
	
	const article = document.createElement("article");
	article.classList.add("article-light-mode");
	article.dataset.date = ads.date;
	
	const listNum = document.createElement("div");
	listNum.classList.add("article-num");
	listNum.innerHTML = (rowNum + 1);
	
	const imgTag = document.createElement("img");
	imgTag.src = ads.src;
	imgTag.alt = ads.alt;
	imgTag.width = ads.width || "120";
	imgTag.height = ads.height || "240";
	
	
	const title = document.createElement("div");
	title.classList.add("article-desc");
	title.innerHTML = ads.alt;
		
	article.appendChild(listNum);
	article.appendChild(imgTag);
	article.appendChild(title);

        article.addEventListener("click", function(event) {
		location.href = `./detail.html?SID=${ads.date}`;
	});
	fragEle.appendChild(article);
	
	features.appendChild(fragEle);
	
}
