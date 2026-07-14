// ---------- MOBILE NAV TOGGLE ----------
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ---------- SMOOTH SCROLL ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ---------- VIDEO THUMBNAIL -> EMBEDDED PLAYER ----------
// Called from the onclick="playVideo(this, 'URL')" attributes in index.html
function playVideo(thumbnailEl, embedUrl) {
    // Avoid re-triggering if already playing
    if (thumbnailEl.dataset.playing === 'true') return;

    const iframe = document.createElement('iframe');
    iframe.src = embedUrl + (embedUrl.includes('?') ? '&' : '?') + 'autoplay=1';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.border = 'none';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    thumbnailEl.innerHTML = '';
    thumbnailEl.appendChild(iframe);
    thumbnailEl.dataset.playing = 'true';
}
