const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

gsap.to(".hero", {
  paddingBottom: "150px",
  backgroundImage: "linear-gradient(to bottom, #121212, #121212)",
  scrollTrigger: {
    trigger: ".secao4",
    start: "top 70%",
    end: "top 30%",
    scrub: 1.3,
    markers: false,
  },
});

gsap.to(".titulo, desc, .sub", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".secao4",
    start: "top 90%",
    end: "top 30%",
    scrub: 1.3,
    markers: false,
  },
});

gsap.from(".card", {
  y: 80,
  opacity: 0,
  duration: 2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".secao2",
    start: "top 50%",
    end: "top 0%",
    scrub: 1.3,
    markers: false,
  },
});

gsap.to(".secao3", {
  backgroundImage: "linear-gradient(135deg, black 50%, #5d1515)",
  scrollTrigger: {
    trigger: ".secao3",
    start: "top 50%",
    end: "top 10%",
    scrub: 1.3,
    markers: false,
  },
});

gsap.from(".container", {
  y: 80,
  opacity: 0,
  scrollTrigger: {
    trigger: ".secao3",
    start: "top 50%",
    end: "top 0%",
    scrub: 1.3,
    markers: false,
  },
});

gsap.from(".titulo3, .desc3, .cima", {
  y: 30,
  duration: 3,
  opacity: 0,
  stagger: 1,

  scrollTrigger: {
    trigger: ".secao3",
    start: "top 40%",
    end: "top 15%",
    scrub: 1.5,
    markers: false,
  },
});

gsap.to(".imagem", {
  backgroundPosition: "0",
  backgroundSize: "150%",
  scrollTrigger: {
    trigger: ".secao3",
    start: "top 30%",
    end: "top 10%",
    scrub: true,
    markers: false,
  },
});

gsap.to(".bio, .social-icon", {
  zIndex: 99,
  opacity: 1,
  scrollTrigger: {
    trigger: ".secao3",
    start: "top 10%",
    end: "top 10%",
    scrub: true,
    markers: false,
  },
});
gsap.to(".opacidade", {
  backgroundColor: "rgba(0, 0, 0, 0.497)",
  scrollTrigger: {
    trigger: ".secao3",
    start: "top 10%",
    end: "top 10%",
    scrub: true,
    markers: false,
  },
});

gsap.from(".banner", {
  y: 80,
  opacity: 0,
  scrollTrigger: {
    trigger: ".secao4",
    start: isMobile ? "top 40%" : "top 40%",
    end: isMobile ? "top 20%" : "top 10%",
    scrub: 1.2,
    markers: false,
  },
});

gsap.from(".titulo4, .desc4, .botoes", {
  y: 30,
  opacity: 0,
  duration: 2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".secao4",
    start: isMobile ? "top 40%" : "top 20%",
    end: "top 20%",
    scrub: 1.2,
    markers: false,
  },
});

gsap.from(".titulo5, .desc5", {
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".titulo5",
    start: "top 60%",
    end: "top 20%",
    scrub: 1,
    markers: false,
  },
});

if (isMobile) {
  // Mobile: cada um com seu próprio ScrollTrigger
  document.querySelectorAll(".features").forEach((el) => {
    gsap.from(el, {
      y: 10,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%", // começa quando entra na tela
        end: "top 50%",
        scrub: 1,
        markers: false,
      },
    });
  });
} else {
  // Desktop: anima todos juntos com stagger
  gsap.from(".features", {
    y: 10,
    opacity: 0,
    duration: .9,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".features",
      start: "top 72%",
      end: "top 45%",
      markers: false,
    },
  });
}


gsap.from(".titulo6, .desc6, .graphic", {
  opacity: 0,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".benefit1",
    start: isMobile ? "top 40%" : "top 65%",
    end: isMobile ? "top 10%" : "top 25%",
    scrub: 1,
    markers: false,
  },
});

gsap.from(".titulo7, .desc7, .comm", {
  opacity: 0,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".benefit2",
    start: isMobile ? "top 40%" : "top 65%",
    end: "top 25%",
    scrub: 1,
    markers: false,
  },
});

gsap.from(".titulos5, .p5", {
  opacity: 0,
  y: 30,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".secao5 h2",
    start: isMobile ? "top 55%" : "top 50%",
    end: isMobile ? "top 35%" : "top 35%",
    scrub: 1,
    markers: false,
  },
});

gsap.from(".switch", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".switchPai",
    start: isMobile ? "top 65%" : "top 55%",
    end: isMobile ? "top 50%" : "top 40%",
    markers: false,
  },
});

if (isMobile) {
  // Mobile: cada um com seu próprio ScrollTrigger
  document.querySelectorAll(".cartao").forEach((el) => {
    gsap.from(el, {
      y: 10,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%", // começa quando entra na tela
        end: "top 50%",
        scrub: 1,
        markers: false,
      },
    });
  });
} else {
  // Desktop: anima todos juntos com stagger
  gsap.from(".cartao", {
    y: 10,
    opacity: 0,
    duration: .9,
    stagger: .3,
    scrollTrigger: {
      trigger: ".priceCards",
      start: "top 72%",
      end: "top 30%",
      markers: false,
    },
  });
}

if (isMobile) {
  // Mobile: cada um com seu próprio ScrollTrigger
  document.querySelectorAll(".infoCard").forEach((el) => {
    gsap.from(el, {
      y: 10,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%", // começa quando entra na tela
        end: "top 50%",
        scrub: 1,
        markers: false,
      },
    });
  });
} else {
  // Desktop: anima todos juntos com stagger
  gsap.from(".infoCard", {
    y: 10,
    opacity: 0,
    duration: 0.9,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".infoCardsPai",
      start: "top 72%",
      end: "top 30%",
      markers: false,
    },
  });
}

gsap.from(".banner2", {
  y: 80,
  opacity: 0,
  scrollTrigger: {
    trigger: ".banner2",
    start: isMobile ? "top 55%" : "top 60%",
    end: isMobile ? "top 40%" : "top 35%",
    markers: false,
  },
});