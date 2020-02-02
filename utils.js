(function() {

const btnTransAds = document.getElementById("btnTransAds");
const btnClear = document.getElementById("btnClear");
const btnClearPre = document.getElementById("btnClearPre");

btnTransAds.addEventListener("click", fnGetProps);
btnClear.addEventListener("click", fnClearProps);
btnClearPre.addEventListener("click", fnClearPreProps);

	const btnMenu = document.querySelectorAll(".header-menu")[0];	// 메뉴버튼
	const navigation = document.querySelectorAll("nav")[0];	//  사이드 메뉴
	const navScreen = document.querySelectorAll(".nav-screen")[0];	//  화면가림막
	const darkMode = document.querySelectorAll(".header-temp")[0];	// dark,light 모드버튼  
	const container = document.querySelectorAll(".container")[0];	//  container
	const header  = document.querySelectorAll("header")[0];	//   header
	const tags = document.querySelectorAll(".tag");	// 태그
	const postLine = document.querySelectorAll("main article > .post-line");
	const articles = document.querySelectorAll("main article");
	const pageList = document.querySelectorAll("main .page-list span");
	
	const btnNavMenu = document.querySelectorAll(".nav-main-tree > div:last-child");
	
	Array.prototype.forEach.call(btnNavMenu, function(menu) {
		menu.addEventListener("click", function() {
			const menuIcon = menu.previousElementSibling;
			menuIcon.classList.toggle("nav-main-tree-plus");
			menuIcon.classList.toggle("nav-main-tree-minus");
			
			const subTreeMenu = menu.parentElement.nextElementSibling;
			subTreeMenu.classList.toggle("nav-sub-tree-hidden");
		});
	});
	
	// 메뉴 toggle 함수
	function menuToggle() {
		navigation.classList.toggle("nav-visible");
		navScreen.classList.toggle("nav-screen-visible");
		
	}
	
	// 메뉴버튼 클릭 이벤트
	btnMenu.addEventListener("click", menuToggle);
	// 사이드메뉴visible 될때 화면 막는 div클릭 이벤트
	navScreen.addEventListener("click", menuToggle);
	// dark,light 모드 전환 함수
	function fnTransMode() {
		btnMenu.classList.toggle("header-menu-dark");
		btnMenu.classList.toggle("header-menu-light");
		darkMode.classList.toggle("header-temp-dark");
		darkMode.classList.toggle("header-temp-light");
		container.classList.toggle("dark-mode");
		container.classList.toggle("light-mode");
		navigation.classList.toggle("nav-dark");
		navigation.classList.toggle("nav-light");
		header.classList.toggle("header-dark");
		header.classList.toggle("header-light");
	
		Array.prototype.forEach.call(tags, function(tag) {
			tag.classList.toggle("tag-dark-mode");
			tag.classList.toggle("tag-light-mode");
		});
		
		Array.prototype.forEach.call(postLine, function(line) {
			line.classList.toggle("post-line-dark-mode");
			line.classList.toggle("post-line-light-mode");
		});
	
		Array.prototype.forEach.call(articles, function(article) {
			article.classList.toggle("article-dark-mode");
			article.classList.toggle("article-light-mode");
		});
		Array.prototype.forEach.call(pageList, function(page) {
			page.classList.toggle("page-dark-mode");
			page.classList.toggle("page-light-mode");
		});
	}
	darkMode.addEventListener("click", fnTransMode);
	fnTransMode();
	
})();



function getDateFormat(sDate) {
	if (sDate) {
		const year = sDate.substring(0, 4);
		const month = sDate.substring(4, 6);
		const day = sDate.substring(6, 8);
		const hh = sDate.substring(8, 10);
		const mm = sDate.substring(10, 12);
		return `${year}년${month}월${day}일 ${hh}시${mm}분`;
	} else {
		return sDate;
	}
}


function fnGetProps() {
	const txtPreAds = document.getElementById("txtPreAds");
	const txtAfterAds = document.getElementById("txtAfterAds");
	
	if (!txtPreAds.value) {
		return;
	}
	
	const vDom = document.createElement("div");
	vDom.innerHTML = txtPreAds.value;
	
	const {href, target, firstElementChild} = vDom.firstElementChild;
	const {src, alt, width, height} = firstElementChild;
	
	const today = new Date();
	const tYyyy = today.getFullYear();
	const tMonth = fnGetLpad(today.getMonth() + 1, 2);
	const tDay = fnGetLpad(today.getDate(), 2);
	const tHour = fnGetLpad(today.getHours(), 2);
	const tMinute = fnGetLpad(today.getMinutes(), 2);
	const tDate = `${tYyyy}${tMonth}${tDay}${tHour}${tMinute}`
	
	const resultVal = `{href: "${href}", src: "${src}", alt: "${alt}", width: "${width}", height: "${height}", date: "${tDate}"}`;
	txtAfterAds.value = txtAfterAds.value ? `${txtAfterAds.value},\n${resultVal}` : resultVal;
}

function fnClearProps() {
	const txtAfterAds = document.getElementById("txtAfterAds");
	txtAfterAds.value = "";
}
function fnClearPreProps() {
	const txtPreAds = document.getElementById("txtPreAds");
	txtPreAds.value = "";
}
function fnGetLpad(str, num) {
	if (typeof str === "number") {
		str = str.toString();
	}
	if (str.length < num) {
		return fnGetLpad(`0${str}`, num);
	} else {
		return str;
	}
}

function getParam(sName) {
	let params = location.search.substr(location.search.indexOf("?") + 1);
	let sval = "";
	params = params.split("&");
	for (var i = 0; i < params.length; i++) {
		let temp = params[i].split("=");
		if (temp[0] == sName) {
			sval = temp[1];
			break;
		}
	}
	return sval;
}
