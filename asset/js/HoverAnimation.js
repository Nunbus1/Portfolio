// Initialiser l'animation au survol
function initHoverAnimation() {
    const nextContent = document.querySelector(".next-content");
    const nextCta = nextContent.querySelector(".name-pro");
    let radius = isLargeScreen ? 424 : 600;
    let animationDuration = isLargeScreen ? 1 : 1;
    let textChangeDuration = isLargeScreen ? 0.7 : 0.65;

    if (isLargeScreen) {
      nextContent.addEventListener("mouseenter", () => {
        const tlHover = gsap.timeline({
          defaults: {
            ease: "easeOutQuart",
          },
        });

        tlHover.to(".next-distort", {
          r: radius,
          duration: animationDuration,
          transformOrigin: "0% 50%",
          ease: "easeOutQuart",
        });

        gsap.to(nextCta, {
          duration: textChangeDuration,
          text: "Next",
          ease: "easeOutQuart",
        });
      });

      nextContent.addEventListener("mouseleave", () => {
        gsap.to(".next-distort", {
          r: 0,
          duration: animationDuration,
          ease: "easeOutQuart",
        });
        gsap.to(nextCta, {
          duration: textChangeDuration,
          text: "HOVER ME",
          ease: "power2.inOut",
        });
      });
    } else {
      // Logique pour petits écrans
      gsap.set(".next-distort", {
        r: radius,
      });

      // Changez le texte sans animation
      nextCta.textContent = "Next";
    }
  }

  window.addEventListener("load", () => {
    initHoverAnimation();
  });