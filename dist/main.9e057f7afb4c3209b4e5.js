(()=>{var e={115:()=>{const e=document.querySelectorAll(".nav-button"),t=document.querySelectorAll(".nav-menu-ref-modal"),r=document.getElementById("nav-menu-modal-toggle"),o=document.getElementsByTagName("html")[0],a=document.getElementById("nav-button_img-default"),s=document.getElementById("nav-button_img-close"),n=()=>{window.scrollTo(0,0),r.classList.toggle("display-none"),a.classList.toggle("display-none"),setTimeout((()=>{a.classList.toggle("opacity-disable")}),0),s.classList.toggle("display-none"),setTimeout((()=>{s.classList.toggle("opacity-disable")}),0),setTimeout((()=>{r.classList.toggle("transform-menu-modal")}),0),o.classList.toggle("disable-scroll")};e.forEach((e=>{e.addEventListener("click",n)})),t.forEach((e=>{e.addEventListener("click",n)}))},843:()=>{const e=document.getElementById("slider_left-button"),t=document.getElementById("slider_right-button"),r=document.getElementById("main-slider");let o=r.scrollWidth-r.clientWidth,a=3;const s=e=>{e.classList.add("slider-button-disabled"),e.setAttribute("disabled","true")},n=e=>{e.classList.remove("slider-button-disabled"),e.removeAttribute("disabled")};e.onclick=()=>{r.scrollLeft-=o/a},t.onclick=()=>{r.scrollLeft+=o/a},window.addEventListener("resize",(()=>{window.innerWidth<769&&(o=r.scrollWidth-r.clientWidth,a=6)})),r.addEventListener("scroll",(()=>{r.scrollLeft>=o?s(t):0!==r.scrollLeft?(n(e),n(t)):s(e)}))},191:()=>{document.addEventListener("DOMContentLoaded",(()=>{const e=new Date("2025-12-31T23:59:59"),t=document.getElementById("timer-days"),r=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds"),s=()=>{const s=new Date,i=Math.max(0,e-s),c=Math.floor(i/864e5),l=Math.floor(i/36e5%24),d=Math.floor(i/6e4%60),p=Math.floor(i/1e3%60);t.textContent=String(c),r.textContent=String(l),o.textContent=String(d),a.textContent=String(p),0===i&&clearInterval(n)};s();const n=setInterval(s,1e3)}))},104:()=>{const e=document.querySelector(".top-scroll-button");window.addEventListener("scroll",(()=>{0!==window.scrollY?e.classList.remove("top-scroll-button-inactive"):e.classList.add("top-scroll-button-inactive")})),e.addEventListener("click",(()=>{window.scroll(0,0)}))}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{"use strict";r(843),r(191),r(115),r(104);const e=JSON.parse('[{"name":"Bug Magnet","description":"Able to find bugs in code like they were placed there on purpose.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+200","dream":"+400"}},{"name":"Console.log Guru","description":"Uses console.log like a crystal ball to find any issue.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+200","dream":"+400"}},{"name":"Shortcut Cheater","description":"Knows every keyboard shortcut like they were born with them.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+400","dream":"+200"}},{"name":"Merge Master","description":"Merges branches in Git without conflicts, like a wizard during an exam.","category":"For Work","superpowers":{"live":"+200","create":"+500","love":"+200","dream":"+300"}},{"name":"Async Tamer","description":"Handles asynchronous code and promises like well-trained pets.","category":"For Work","superpowers":{"live":"+100","create":"+400","love":"+200","dream":"+300"}},{"name":"CSS Tamer","description":"Can make Flexbox and Grid work together like they were always best friends.","category":"For Work","superpowers":{"live":"+200","create":"+500","love":"+200","dream":"+300"}},{"name":"Time Hacker","description":"Writes code at the last moment but always meets the deadline.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+500","dream":"+200"}},{"name":"Layout Master","description":"Creates perfect layouts on the first try, like they can read the designer\'s mind.","category":"For Work","superpowers":{"live":"+500","create":"+300","love":"+200","dream":"+200"}},{"name":"Documentation Whisperer","description":"Understands cryptic documentation as if they wrote it themselves.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+200","dream":"+100"}},{"name":"Feedback Master","description":"Accepts client revisions with the Zen calm of Buddha.","category":"For Work","superpowers":{"live":"+300","create":"+500","love":"+300","dream":"+400"}},{"name":"Code Minimalist","description":"Writes code so concise that one line does more than a whole file.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+500","dream":"+200"}},{"name":"Pixel-Perfect Magician","description":"Aligns elements to the last pixel, even when the design looks abstract.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+400","dream":"+400"}},{"name":"Posture Levitation","description":"Can sit for hours, but maintains perfect posture like a ballerina.","category":"For Health","superpowers":{"live":"+400","create":"+500","love":"+500","dream":"+400"}},{"name":"Step Master","description":"Gets 10,000 steps a day even while sitting at the computer.","category":"For Health","superpowers":{"live":"+400","create":"+300","love":"+500","dream":"+400"}},{"name":"Snack Resister","description":"Ignoring desktop snacks like a strict dietician.","category":"For Health","superpowers":{"live":"+400","create":"+100","love":"+200","dream":"+400"}},{"name":"Hydration Bot","description":"Drinks the recommended 2 liters of water a day like a health-programmed robot.","category":"For Health","superpowers":{"live":"+500","create":"+300","love":"+500","dream":"+500"}},{"name":"Sleep Overlord","description":"Sleeps 6 hours but feels like they had 10.","category":"For Health","superpowers":{"live":"+400","create":"+500","love":"+500","dream":"+500"}},{"name":"Break Guru","description":"Takes a stretch break every hour without forgetting, no matter how focused.","category":"For Health","superpowers":{"live":"+300","create":"+300","love":"+300","dream":"+400"}},{"name":"Eye Protector","description":"Can work all day at the monitor without feeling like their eyes are on fire.","category":"For Health","superpowers":{"live":"+100","create":"+300","love":"+500","dream":"+400"}},{"name":"Stress Dodger","description":"Masters meditation right at the keyboard.","category":"For Health","superpowers":{"live":"+100","create":"+400","love":"+200","dream":"+400"}},{"name":"Yoga Coder","description":"Easily switches from coding to yoga and back.","category":"For Health","superpowers":{"live":"+400","create":"+400","love":"+400","dream":"+400"}},{"name":"Healthy Snacker","description":"Always picks fruit, even when chocolate is within arm’s reach.","category":"For Health","superpowers":{"live":"+400","create":"+300","love":"+200","dream":"+400"}},{"name":"Chair Exerciser","description":"Manages to work out without leaving the chair.","category":"For Health","superpowers":{"live":"+500","create":"+500","love":"+500","dream":"+400"}},{"name":"Caffeine Filter","description":"Drinks coffee at night and still falls asleep with no problem.","category":"For Health","superpowers":{"live":"+400","create":"+300","love":"+500","dream":"+200"}},{"name":"Joy Charger","description":"Finds joy in the little things—even in a build that finishes unexpectedly fast.","category":"For Harmony","superpowers":{"live":"+200","create":"+200","love":"+500","dream":"+500"}},{"name":"Error Laugher","description":"Laughs at code errors like they’re jokes instead of getting angry.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+500","dream":"+500"}},{"name":"Bug Acceptance Guru","description":"Accepts bugs as part of the journey to perfection — it’s just another task.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+500","dream":"+400"}},{"name":"Spontaneous Coding Philosopher","description":"Philosophically accepts any client suggestion after a long refactor.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+500","dream":"+400"}},{"name":"Deadline Sage","description":"Remains zen even when the deadline is close and the project manager is stressed.","category":"For Harmony","superpowers":{"live":"+200","create":"+200","love":"+300","dream":"+500"}},{"name":"Inspiration Maestro","description":"Finds inspiration on an empty screen as if masterpieces are already there.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+400","dream":"+100"}},{"name":"Peace Keeper","description":"Maintains inner calm even in moments of intense crisis.","category":"For Harmony","superpowers":{"live":"+200","create":"+200","love":"+500","dream":"+500"}},{"name":"Empathy Guru","description":"Feels the team’s mood and can lift everyone’s spirits.","category":"For Harmony","superpowers":{"live":"+500","create":"+200","love":"+500","dream":"+500"}},{"name":"Laughter Generator","description":"Can lighten any tense situation with a joke that even bugs laugh at.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+200","dream":"+500"}},{"name":"Pause Master","description":"Knows when to just step back from the keyboard and breathe.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+100","dream":"+100"}},{"name":"Coder Healer","description":"Can support a colleague in their darkest hour, even if it’s a 500 error.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+500","dream":"+500"}},{"name":"Music Code Curator","description":"Creates work playlists so good, even deadlines follow the rhythm.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+300","dream":"+200"}}]'),t=r.p+"assets/gift-for-work.png",o=r.p+"assets/gift-for-health.png",a=r.p+"assets/gift-for-harmony.png",s=r.p+"assets/snow-fill.svg",n=r.p+"assets/snow-unfill.svg",i=r.p+"assets/State=Close.svg",c=document.getElementsByTagName("html")[0],l=document.getElementById("best-gifts-container"),d=document.getElementById("cards-container-modal"),p=document.getElementById("popover"),m=(e,t)=>{t.textContent=e.category,"For Work"===e.category?t.classList.add("categories-for-work"):"For Health"===e.category?t.classList.add("categories-for-health"):t.classList.add("categories-for-harmony")},u=(e,t)=>{const r=["Live","Create","Love","Dream"],o=[e.superpowers.live,e.superpowers.create,e.superpowers.love,e.superpowers.dream];for(let e=0;e<r.length;e++){const a=document.createElement("p"),i=document.createElement("p"),c=document.createElement("div");c.classList.add("superpower-icon-container"),t.appendChild(a),t.appendChild(i),t.appendChild(c),a.textContent=r[e],i.textContent=o[e];for(let t=0;t<o[e]/100;t++)c.appendChild(document.createElement("img")).src=s;for(let t=o[e]/100;t<5;t++)c.appendChild(document.createElement("img")).src=n}},h=e=>{const r=document.createElement("img");return r.classList.add("cards-image"),r.src="For Work"===e.category?t:"For Health"===e.category?o:a,r},g=e=>{const t=document.createElement("div");t.classList.add("cards-container"),l.appendChild(t),t.appendChild(h(e)),t.appendChild((e=>{const t=document.createElement("div");return t.classList.add("cards-container_description-container"),t.innerHTML="For Work"===e.category?`<h4 class="categories-for-work">${e.category}</h4>`:"For Health"===e.category?`<h4 class="categories-for-health">${e.category}</h4>`:`<h4 class="categories-for-harmony">${e.category}</h4>`,t.innerHTML+=`<h3>${e.name}</h3>`,t})(e)),t.addEventListener("click",(()=>(e=>{y();const t=document.createElement("img"),r=document.createElement("img"),o=document.createElement("div");t.src=h(e).src,r.src=i,r.classList.add("close-button-modal"),o.classList.add("cards-container-modal_description-container"),d.appendChild(r),d.appendChild(t),d.appendChild(o),((e,t)=>{const r=document.createElement("h4"),o=document.createElement("h3"),a=document.createElement("p"),s=document.createElement("h4"),n=document.createElement("div");t.appendChild(r),t.appendChild(o),t.appendChild(a),t.appendChild(s),t.appendChild(n),n.classList.add("SUPERPOWERS-container-modal"),m(e,r),o.textContent=e.name,a.textContent=e.description,s.textContent="ADDS SUPERPOWERS TO:",u(e,n)})(e,o),r.addEventListener("click",y)})(e)))},y=()=>{c.classList.toggle("disable-scroll"),d.classList.toggle("display-none"),p.classList.toggle("display-none"),d.replaceChildren()};(()=>{const t=[];for(;t.length<4;){let r=Math.floor(Math.random()*e.length);t.includes(r)||t.push(r)}for(let r=0;r<4;r++)g(e[t[r]])})(),p.addEventListener("click",y)})()})();