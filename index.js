
(function() {
        const btnMenu = document.querySelectorAll(".header-menu")[0]; // 메뉴버튼
        const navigation = document.querySelectorAll("nav")[0]; //  사이드 메뉴
        const navScreen = document.querySelectorAll(".nav-screen")[0]; //  화면가림막
        const darkMode = document.querySelectorAll(".header-temp")[0]; // dark,light 모드버튼
        const container = document.querySelectorAll(".container")[0]; //  container
        const header = document.querySelectorAll("header")[0]; //   header
        const tags = document.querySelectorAll(".tag"); // 태그
        const postLine = document.querySelectorAll("main article > .post-line");
        const articles = document.querySelectorAll("main article");
        const pageList = document.querySelectorAll("main .page-list span");
        const btnNavMenu = document.querySelectorAll(
          ".nav-main-tree > div:last-child"
        );

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
			
			arrJson.sort(function(a, b) {
				return b.date - a.date;
			});
			
			arrJson.map(function(ads) {
				fnAddAds(ads);
			});
      })();

function fnAddAds(ads) {
			const features = document.querySelectorAll("main > .features")[0];
			const fragEle = document.createDocumentFragment();
			
			const article = document.createElement("article");
			article.classList.add("article-light-mode");
			
			const title = document.createElement("div");
			title.classList.add("article-title");
			title.innerHTML = ads.alt;
			
			const cont = document.createElement("div");
			article.classList.add("article-cont");
			
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
			caution.innerHTML = "일정액의 커미션을 쿠팡으로 부터 제공받고 있습니다.";
			
			const cText1 = document.createTextNode("해당 상품 포스팅은 ");
			const cText2 = document.createTextNode("에 작성되었으며 쿠팡 파트너스 활동으로,");
			
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
