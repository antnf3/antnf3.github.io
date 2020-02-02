const gSid = getParam("SID");
const filterAds = arrJson.filter(function(a) {
  return a.date == gSid;
});

filterAds.map(function(ads) {
  fnAddAds(ads);
});

function fnAddAds(ads) {
  const features = document.querySelectorAll("main > .features")[0];
  const fragEle = document.createDocumentFragment();

  const article = document.createElement("article");
  article.classList.add("article-light-mode");

  const title = document.createElement("div");
  title.classList.add("article-title");
  title.innerHTML = ads.alt;

  const cont = document.createElement("div");
  cont.classList.add("article-cont");

  const aTag = document.createElement("a");
  aTag.href = ads.href;
  aTag.target = "_blank";

  const imgTag = document.createElement("img");
  imgTag.src = ads.src;
  imgTag.alt = ads.alt;
  imgTag.width = ads.width || "120";
  imgTag.height = ads.height || "240";

  aTag.appendChild(imgTag);
  cont.appendChild(aTag);

  const desc = document.createElement("div");
  desc.classList.add("article-desc");

  const date = document.createElement("span");
  date.classList.add("article-bold");
  date.innerHTML = getDateFormat(ads.date);

  const caution = document.createElement("span");
  caution.classList.add("article-red");
  caution.innerHTML = "일정액의 커미션을 쿠팡으로 부터 제공받을 수 있음.";

  const cText1 = document.createTextNode("해당 상품 포스팅은 ");
  const cText2 = document.createTextNode(
    "에 작성되었으며 쿠팡 파트너스 활동으로,"
  );

  desc.appendChild(cText1);
  desc.appendChild(date);
  desc.appendChild(cText2);
  desc.appendChild(caution);

  article.appendChild(title);
  article.appendChild(cont);
  article.appendChild(desc);
  fragEle.appendChild(article);

  features.appendChild(fragEle);
}
