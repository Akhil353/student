---
layout: default
title: Akhil's Blog
---

<style>
#loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
}
#loader-wrapper .loader-section {
  position: fixed;
  top: 0;
  width: 51%;
  height: 100%;
  background: #000;
  z-index: 1000;
}
#loader-wrapper .loader-section.section-left {
  left: 0;
}
#loader-wrapper .loader-section.section-right {
  right: 0;
}
#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #1f1137;
  -webkit-animation: spin 2s linear infinite;
          animation: spin 2s linear infinite;
  z-index: 99999;
}
#loader:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #9370DB;
  -webkit-animation: spin 3s linear infinite;
          animation: spin 3s linear infinite;
}
#loader:after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #CBC3E3;
  -webkit-animation: spin 1.5s linear infinite;
          animation: spin 1.5s linear infinite;
}
/*
.loaded #loader-wrapper {
  visibility: hidden;
  -webkit-transform: translateY(-100%);
          transform: translateY(-100%);
  -webkit-transition: all 0.3s 1s ease-out;
  transition: all 0.3s 1s ease-out;
}
.loaded #loader-wrapper .loader-section.section-left {
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
  -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.loaded #loader-wrapper .loader-section.section-right {
  -webkit-transform: translateX(100%);
          transform: translateX(100%);
  -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
} 
*/
@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.loaded #loader-wrapper {
  visibility: hidden;
  -webkit-transition: fadeOut 2.0s ease;
  animation: fadeOut 2.0s ease forwards;
}

.loaded #loader-wrapper .loader-section-left {  
  -webkit-transition: fadeOut 2.0s ease;
  animation: fadeOut 2.0s ease forwards;
}

.loaded #loader-wrapper .loader-section-right {  
  -webkit-transition: fadeOut 2.0s ease;
  animation: fadeOut 2.0s ease forwards;
}


/* .loaded #loader-wrapper {
  visbility: none;
} */

/* Apply the animation when the loader is being faded out */

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.typewriter h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  font-family: Monospace;
  border-right: .015em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.015em; /* Adjust as needed */
  animation: 
    typing 15.0s steps(30, end) infinite,
    blink-caret 1s step-end infinite;
  animation-delay: 2000ms;
  animation-fill-mode: both;
  color: #FFFFFF
}

/* The typing effect */
@keyframes typing {
  0%, 50%, 100% {
    width: 0;
  }
  25%, 75% {
    width: 100%;
  }
}
/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white; }
}

h2 {
    color: #FFFFEE;
}

h1 {
  color: #FFFFFF
}

h1:hover {
  font-size: 32px;
}
</style>

<script>
  document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.querySelector("body").classList.add("loaded");
  }, 2000)
});
</script>

<!-- <script>
document.addEventListener("DOMContentLoaded", function() {
  const words = ["Welcome", "to", "Srijan's", "Blog"];
  let wordIndex = 0;
  
  function updateWord() {
    const titleElement = document.querySelector(".typewriter h1");
    titleElement.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
  }

  setInterval(updateWord, 1); // Change word every 3.5 seconds
});
</script> -->

<div class="typewriter">
    <h1><span style="color: #e100ff;">Akhil's Blog</span></h1>
</div>

<div id="loader-wrapper">
  <div id="loader"></div>
  <div class="loader-section section-left"></div>
  <div class="loader-section section-right"></div>
</div>

<br>


## About Me
- <p>CSP is lit</p>
- <p>Valorant Enthusiast (Diamond 2)</p>
     - ![Valorant Logo Image](images/valorant-logo-FAB2CA0E55-seeklogo.com.png)
- <p>Sophomore :)</p>
- <p>Cool video I found interesting</p>
- <iframe width="660" height="360"
src="https://www.youtube.com/embed/cFslUSyfZPc">


## Plans for CSP

- [x] Create a GitHub Repository
- [x] Figure out how to debug code with errors
- [x] Learn JavaScript and Python
- [x] Create my first project
- [x] Collaborate with others on projects
- [ ] More on the way!

- My Life:
  - <img src="images/IMG_6005.jpeg">

<center>
<button class="button button2" onclick=" window.open('https://app.slack.com/client/TUDAF53UJ/CUS8E3M6Z', '_blank'); return false;">AP CSP Slack</button>
<button class="button button3" onclick=" window.open('https://poway.instructure.com/courses/141645', '_blank'); return false;">Canvas Page</button>
</center>