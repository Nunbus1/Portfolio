gsap.registerPlugin(ScrollTrigger);
    
          let themeButton,
            themeState,
            introItem,
            circleContainer,
            circlePath,
            scrollingSvgs,
            projectBodyClass,
            isLargeScreen;
    
          const themes = [
            {
              "--dark--main": "#dfd3c3",
              "--dark--foreground": "#171717",
              "--dark--interactive": "#7e8b74",
              "--dark--opa": "rgba(28, 33, 30, 0.85)",
            },
            {
              "--dark--main": "#522a00",
              "--dark--foreground": "#f6f2ef",
              "--dark--interactive": "#8D6133",
              "--dark--opa": "rgba(246, 242, 239, 0.85)",
            },
            {
              "--dark--main": "#151515",
              "--dark--foreground": "#E5E5E5",
              "--dark--interactive": "#747474",
              "--dark--opa": "rgba(229, 229, 229, 0.85)",
            },
            {
              "--dark--main": "#FF4005",
              "--dark--foreground": "#F7F6F5",
              "--dark--interactive": "#FF7556",
              "--dark--opa": "rgba(247, 246, 245, 0.85)",
            },
            {
              "--dark--main": "#011a33",
              "--dark--foreground": "#fafcfe",
              "--dark--interactive": "#99a3ad",
              "--dark--opa": "rgba(250, 252, 254, 0.85)",
            },
          ];
          const themeTexts = [
            "TRY ME",
            "TRY AGAIN?",
            "ANOTHER ONE?",
            "HOW ABOUT THIS?",
            "OK, THE LAST ONE",
          ];
    
          const applyTheme = (themeIndex) => {
            const theme = themes[themeIndex];
            gsap.to(":root", {
              duration: 0.35,
              ease: "power2.inOut",
              ...theme,
            });
            changeButtonText(themeIndex);
          };
          const changeButtonText = (index) => {
            const buttonText = themeTexts[index] || "try me";
            gsap.to(themeButton, {
              duration: 0.7,
              text: buttonText,
              ease: "easeOutQuart",
            });
          };
          document.addEventListener("DOMContentLoaded", () => {
            themeButton = document.querySelector(".underline-links.theme");
            projectBodyClass = document.body.classList.contains("projet");
            isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
    
            requestAnimationFrame(() => {
              themeState = localStorage.getItem("themeState")
                ? parseInt(localStorage.getItem("themeState"), 10)
                : 0;
              applyTheme(themeState);
            });
    
            if (themeButton) {
              themeButton.addEventListener("click", () => {
                themeState = (themeState + 1) % themes.length;
                applyTheme(themeState);
                localStorage.setItem("themeState", themeState);
              });
            }
    
            if (projectBodyClass) {
              startIntroAnimations();
            }
          });
    
          function animateSplitText() {
            const elements = document.querySelectorAll(".t-anim, .subtitle-1");
    
            elements.forEach((element) => {
              if (!element.classList.contains("split-type-applied")) {
                new SplitType(element, {
                  types: "lines, words",
                });
                element.classList.add("split-type-applied");
              }
            });
    
            document
              .querySelectorAll(".t-anim .line, .subtitle-1 .line")
              .forEach(animateLine);
          }
    
          function animateLine(line) {
            const mask = line.querySelector(".line-mask") || createLineMask(line);
    
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: line,
                  start: "top 100%",
                  end: "top center",
                  scrub: 1,
                },
              })
              .to(mask, {
                left: "100%",
                ease: Power1.easeOut,
                duration: 1.5,
              })
              .fromTo(
                line,
                {
                  scale: 0.9,
                  rotate: 3,
                  autoAlpha: 0,
                  y: 20,
                },
                {
                  scale: 1,
                  rotate: 0,
                  autoAlpha: 1,
                  y: 0,
                  ease: Power1.easeOut,
                  duration: 1.5,
                },
                "<"
              );
          }
    
          function createLineMask(line) {
            let mask = line.querySelector(".line-mask");
            if (!mask) {
              mask = document.createElement("div");
              mask.className = "line-mask";
              line.appendChild(mask);
            }
            return mask;
          }
    
          window.addEventListener("load", () => {
            introItem = document.querySelector(".intro-item");
            circleContainer = document.querySelector(".circle-intro");
            circlePath = document.querySelector(".circle-project");
            scrollingSvgs = document.querySelectorAll("svg.scrolling-svg");
    
            animateSplitText();
    
            if (projectBodyClass) {
              startIntroAnimations();
            }
    
            setupSvgAnimations();
          });
    
          function startIntroAnimations() {
            startAnimation();
            animateIntroProject();
            animateCircle();
          }
    
          function startAnimation() {
            let radius = isLargeScreen ? 424 : 600;
            let animationDuration = isLargeScreen ? 1.6 : 1.2;
    
            const tlIntro = gsap.timeline({
              defaults: {
                ease: "easeOutQuart",
              },
            });
    
            tlIntro.to(".intro-distort", {
              r: radius,
              duration: animationDuration,
              ease: "easeOutQuart",
              transformOrigin: "50% 0%",
              delay: 0.8,
            });
    
            tlIntro.from(
              ".main-pic",
              {
                scale: 0.85,
                transformOrigin: "center center",
                duration: animationDuration - 0.2,
                ease: "easeOutQuart",
              },
              0
            );
          }
    
          function animateIntroProject() {
            if (introItem) {
              introItem.style.display = "block";
              new SplitType(".intro-item", {
                types: "lines",
              });
              const lines = introItem.querySelectorAll(".line");
    
              lines.forEach((line, index) => {
                gsap.fromTo(
                  line,
                  {
                    y: 25,
                    opacity: 0,
                  },
                  {
                    y: 0,
                    opacity: 1,
                    ease: Power1.easeOut,
                    duration: 0.9,
                    delay: 0.7 + index * 0.1,
                  }
                );
              });
            }
          }
    
          function animateCircle() {
            if (circleContainer && circlePath) {
              circleContainer.style.display = "block";
              const pathLength = circlePath.getTotalLength();
    
              circlePath.style.strokeDasharray = pathLength;
              circlePath.style.strokeDashoffset = pathLength;
    
              gsap.to(circlePath, {
                strokeDashoffset: 0,
                duration: 0.8,
                ease: "outQuart",
                delay: 1.5,
              });
            }
          }
    
          function setupSvgAnimations() {
            const observerOptions = {
              root: null,
              rootMargin: "0px",
              threshold: 0.5,
              once: true,
            };
    
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  animateSvgElement(entry.target);
                  observer.unobserve(entry.target);
                }
              });
            }, observerOptions);
    
            scrollingSvgs.forEach((svg) => {
              observer.observe(svg);
            });
          }
    
          function animateSvgElement(svgElement) {
            const imageElement = svgElement.querySelector(".svg-image");
            const circleElement = svgElement.querySelector(".distortion");
            gsap.from(imageElement, {
              scale: 0.9,
              transformOrigin: "center center",
              ease: "easeOutQuart",
            });
    
            gsap.to(imageElement, {
              scale: 1,
              ease: "easeOutQuart",
              duration: 0.9,
            });
    
            gsap.to(circleElement, {
              r: 424,
              ease: "easeOutQuart",
              duration: 1.1,
            });
          }