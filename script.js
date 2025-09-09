  let lastScroll = 0;
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
      // scrolling down → hide header
      header.style.top = "-80px";
    } else {
      // scrolling up → show header
      header.style.top = "0";
    }

    lastScroll = currentScroll;
  });
