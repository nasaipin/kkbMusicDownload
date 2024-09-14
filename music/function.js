let listAudio = document.querySelectorAll(".audio-list .aud");
      let mainAudio = document.querySelector(".main-audio audio");
      let title = document.querySelector(".main-audio .title");
      listAudio.forEach((audio) => {
        audio.onclick = () => {
          listAudio.forEach((aud) => aud.classList.remove("active"));
          audio.classList.add("active");
          if (audio.classList.contains("active"));
          {
            let src = audio.children[0].getAttribute("src");
            mainAudio.src = src;
            let text = audio.children[1].innerHTML;
            title.innerHTML = text;
    }
  };
});
