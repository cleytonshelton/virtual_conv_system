const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxVideo = document.getElementById("lightboxVideo");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxMediaWrap = document.querySelector(".lightbox-media-wrap");
const galleryImages = document.querySelectorAll(".gallery-image");
const galleryVideos = document.querySelectorAll(".gallery-video");

function openLightbox(image) {
  lightboxVideo.pause();
  lightboxVideo.classList.remove("show");
  lightboxVideo.removeAttribute("src");
  lightboxImage.classList.remove("hide");
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = image.alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  lightboxClose.focus();
}

function openVideoLightbox(video) {
  const label = video.getAttribute("aria-label") || "Project recording";
  lightboxImage.classList.add("hide");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  lightboxVideo.classList.add("show");
  lightboxVideo.muted = true;
  lightboxVideo.src = video.currentSrc || video.src;
  lightboxVideo.currentTime = 0;
  lightboxVideo.play().catch(() => {});
  lightboxCaption.textContent = label;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxVideo.pause();
  lightboxVideo.classList.remove("show");
  lightboxVideo.removeAttribute("src");
  lightboxImage.classList.remove("hide");
  lightboxImage.src = "";
  lightboxCaption.textContent = "";
}

galleryImages.forEach((image) => {
  image.addEventListener("click", () => openLightbox(image));
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(image);
    }
  });
});

galleryVideos.forEach((video) => {
  video.muted = true;
  video.addEventListener("click", () => openVideoLightbox(video));
  video.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openVideoLightbox(video);
    }
  });
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (!lightboxMediaWrap.contains(event.target)) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});