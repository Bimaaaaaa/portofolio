/******************************
 * 1. DYNAMIC TYPING TEXT
******************************/
document.addEventListener("DOMContentLoaded", () => {
    const dynamicTextElement = document.getElementById("dynamic-text");
    if (!dynamicTextElement) return;

    const words = [
        "Bima Rizki",
        "Passionate about learning network security",
        "Interested in exploring ethical hacking",
        "Curious about penetration testing",
        "Learning Python for cybersecurity purposes",
        "Familiar with network security basics",
        "Practicing with Wireshark",
        "Exploring firewalls and VPNs"
    ];

    let wordIndex = 0;
    const prefix = "Hi, I'm ";

    function blinkEffect(callback) {
        const wordElement = dynamicTextElement.querySelector(".dynamic-word");
        let blinkCount = 0;
        const totalBlinks = 4;

        const interval = setInterval(() => {
            const isVisible = wordElement.style.opacity === "1";
            wordElement.style.opacity = isVisible ? "0" : "1";
            blinkCount++;
            if (blinkCount >= totalBlinks * 2) {
                clearInterval(interval);
                wordElement.style.opacity = "1";
                callback();
            }
        }, 100);
    }

    function typeWord(word, callback) {
        dynamicTextElement.innerHTML = prefix + `<span class="dynamic-word"></span>`;
        const wordElement = dynamicTextElement.querySelector(".dynamic-word");
        let charIndex = 0;

        function typeChar() {
            wordElement.textContent = word.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex < word.length) {
                setTimeout(typeChar, 100);
            } else {
                blinkEffect(callback);
            }
        }

        typeChar();
    }

    function startTyping() {
        typeWord(words[wordIndex], () => {
            wordIndex = (wordIndex + 1) % words.length;
            startTyping();
        });
    }

    startTyping();
});


/******************************
 * 2. FOLDER DROPDOWN
******************************/
function toggleFolder(folder) {
    const content = folder.querySelector('.folder-content');
    if (!content) return;

    folder.classList.toggle('open');
    content.style.maxHeight = folder.classList.contains('open')
        ? content.scrollHeight + "px"
        : null;
}


/******************************
 * 3. TOOLS SLIDER
******************************/
(function () {
    window.addEventListener('load', initAllSliders);

    function initAllSliders() {
        document.querySelectorAll('.tools-slider').forEach(setupSlider);
    }

    function setupSlider(slider) {
        const container = slider.querySelector('.tools-container');
        if (!container) return;

        const track = document.createElement('div');
        track.className = 'slider-track';
        slider.insertBefore(track, container);
        track.appendChild(container);

        let clones = [];
        let baseWidth;

        function rebuildClones() {
            clones.forEach(c => c.remove());
            clones = [];
            track.innerHTML = '';
            track.appendChild(container);

            baseWidth = container.getBoundingClientRect().width;
            const viewportWidth = slider.offsetWidth;

            let safety = 0;
            while (track.scrollWidth < viewportWidth * 5 && safety < 50) {
                const clone = container.cloneNode(true);
                track.appendChild(clone);
                clones.push(clone);
                safety++;
            }
        }

        rebuildClones();

        const speedPxPerSec = Number(slider.dataset.speed) || 120;
        const direction = slider.dataset.direction === 'right' ? 'right' : 'left';
        let pos = direction === 'left' ? 0 : -baseWidth;
        let lastTime = null;
        let running = true;

        slider.addEventListener('mouseenter', () => running = false);
        slider.addEventListener('mouseleave', () => running = true);

        function step(timestamp) {
            if (!lastTime) lastTime = timestamp;
            const dt = (timestamp - lastTime) / 1000;
            lastTime = timestamp;

            if (running) {
                const delta = speedPxPerSec * dt * (direction === 'left' ? -1 : 1);
                pos += delta;

                if (direction === 'left' && pos <= -baseWidth) pos += baseWidth;
                if (direction === 'right' && pos >= 0) pos -= baseWidth;

                track.style.transform = `translateX(${pos}px)`;
            }
            requestAnimationFrame(step);
        }

        requestAnimationFrame(step);

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                rebuildClones();
                pos = direction === 'left' ? 0 : -baseWidth;
                track.style.transform = `translateX(${pos}px)`;
            }, 200);
        });
    }
})();


/******************************
 * 4. SCRAMBLE NUMBER STATS
******************************/
document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".stat-number");
    if (!stats.length) return;

    const chars = "#@!$%^&*()_+-=<>?|0123456789";

    function chaoticScramble(element, finalValue) {
        let frame = 0;
        const digitLimit = finalValue.toString().length;
        const maxFrames = 30 + Math.random() * 20;
        const randomDelay = Math.random() * 800;

        setTimeout(() => {
            const interval = setInterval(() => {
                frame++;
                let scramble = "";
                let scrambleLength = Math.floor(Math.random() * digitLimit) + 1;

                for (let i = 0; i < scrambleLength; i++) {
                    scramble += chars[Math.floor(Math.random() * chars.length)];
                }

                element.style.visibility = Math.random() < 0.5 ? "hidden" : "visible";
                element.textContent = scramble;

                if (frame >= maxFrames) {
                    clearInterval(interval);
                    element.style.visibility = "visible";
                    element.textContent = finalValue;
                }
            }, 60 + Math.random() * 40);
        }, randomDelay);
    }

    stats.forEach(stat => chaoticScramble(stat, stat.dataset.target || "0"));
});


/******************************
 * 5. ABOUT PAGE — TAB SYSTEM
******************************/
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabSlider = document.querySelector('.tab-slider');

    function moveSlider(active) {
        if (!active || !tabSlider) return;
        const rect = active.getBoundingClientRect();
        const parent = active.parentElement.getBoundingClientRect();
        tabSlider.style.width = rect.width + "px";
        tabSlider.style.left = (rect.left - parent.left) + "px";
    }

    moveSlider(document.querySelector('.tab-btn.active'));

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(btn.dataset.target)?.classList.add('active');

            moveSlider(btn);
        });
    });
});


/******************************
 * 6. PDF LOADER
******************************/
document.addEventListener("DOMContentLoaded", () => {
    const pdfWrapper = document.querySelector('.pdf-wrapper');
    const pdfUrl = "assets/files/bima_cv.pdf";

    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.12.313/pdf.worker.min.js";

    pdfjsLib.getDocument(pdfUrl).promise
    .then(pdf => {
        for (let i = 1; i <= pdf.numPages; i++) {
            pdf.getPage(i).then(page => {
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = document.createElement("canvas");
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                canvas.style.borderRadius = "15px"; 
                canvas.style.marginBottom = "15px"; // beri jarak antar halaman
                pdfWrapper.appendChild(canvas);

                const ctx = canvas.getContext("2d");
                page.render({ canvasContext: ctx, viewport });
            });
        }
    })
    .catch(err => console.error("PDF error:", err));
});











