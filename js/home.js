// Daftar kata yang ingin ditampilkan
const words = [
    "Bima Rizki",
    "Passionate about learning network security",
    "Interested in exploring ethical hacking",
    "Curious about penetration testing",
    "Learning Python for cybersecurity purposes",
    "Familiar with network security basics",
    "Practicing with Wireshark",
    "Learning about firewalls and VPNs",
    "Continuous learner in cybersecurity",
];

let wordIndex = 0;
const dynamicTextElement = document.getElementById("dynamic-text");

// Fungsi untuk mengganti teks dengan animasi
function changeText() {
    // Set teks statis "Hi, I'm " sekali saja
    let currentText = "Hi,I'm ";  // Teks tetap

    // Ambil kata berikutnya dari array words
    let currentWord = words[wordIndex];
    let charIndex = 0;

    // Buat elemen kursor
    const cursor = document.createElement('span');
    cursor.classList.add('cursor'); // Menambahkan kelas cursor

    // Tambahkan kursor ke elemen dynamicTextElement
    dynamicTextElement.appendChild(cursor);

    // Fungsi untuk menambahkan karakter satu per satu
    function typeChar() {
        // Gabungkan "Hi, I'm " dengan kata yang sedang diketik
        dynamicTextElement.textContent = currentText + currentWord.substring(0, charIndex + 1);

        charIndex++;

        // Jika ada karakter yang tersisa, teruskan mengetik
        if (charIndex < currentWord.length) {
            setTimeout(typeChar, 100); // Tunggu 100ms untuk karakter berikutnya
        } else {
            // Jika teks selesai, menghapus kursor setelah 500ms
            setTimeout(() => {
                cursor.style.display = 'none';
            }, 500);
        }
    }

    // Mulai mengetik kata pertama
    typeChar();

    // Update wordIndex untuk kata berikutnya
    wordIndex = (wordIndex + 1) % words.length; // Setelah kata terakhir, mulai dari awal lagi

    // Mengubah teks setiap 4 detik (waktu ini bisa diubah sesuai kebutuhan)
    setTimeout(changeText, 4000);
}

// Panggil fungsi pertama kali untuk memulai
changeText();




    function toggleFolder(folder) {
        const content = folder.querySelector('.folder-content');

        // Toggle the "open" class to open or close the folder
        folder.classList.toggle('open');

        // Cek apakah folder sudah terbuka, jika iya, tutup, jika tidak buka
        if (folder.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + "px"; // Membuka folder
        } else {
            content.style.maxHeight = null; // Menutup folder
        }
    }


// SLIDER TOOLS
(function(){
  window.addEventListener('load', () => {
    initAllSliders();
  });

  function initAllSliders(){
    document.querySelectorAll('.tools-slider').forEach(setupSlider);
  }

  function setupSlider(slider){
    const container = slider.querySelector('.tools-container');
    if(!container) return;

    const track = document.createElement('div');
    track.className = 'slider-track';
    slider.insertBefore(track, container);
    track.appendChild(container);

    let clones = [];
    let baseWidth;

    function rebuildClones() {
      // Hapus semua clone dulu
      clones.forEach(c => c.remove());
      clones = [];
      track.innerHTML = '';
      track.appendChild(container);

      baseWidth = container.getBoundingClientRect().width;
      const viewportWidth = slider.offsetWidth;

      // Tambahkan clone sampai track cukup panjang (lebih aman: total >= 5x viewport)
      let safety = 0;
      while(track.scrollWidth < viewportWidth * 5 && safety < 50){
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

    slider.addEventListener('mouseenter', ()=> running=false);
    slider.addEventListener('mouseleave', ()=> running=true);

    function step(timestamp){
      if(!lastTime) lastTime = timestamp;
      const dt = (timestamp - lastTime)/1000;
      lastTime = timestamp;

      if(running){
        const delta = speedPxPerSec * dt * (direction==='left' ? -1 : 1);
        pos += delta;

        // wrap
        if(direction==='left' && pos <= -baseWidth) pos += baseWidth;
        if(direction==='right' && pos >= 0) pos -= baseWidth;

        track.style.transform = `translateX(${pos}px)`;
      }

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

    // rebuild clones saat resize/zoom
    let resizeTimeout;
    window.addEventListener('resize', ()=>{
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(()=>{
        rebuildClones();
        pos = direction === 'left' ? 0 : -baseWidth;
        track.style.transform = `translateX(${pos}px)`;
      }, 200);
    });
  }
})();




document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".stat-number");
    const chars = "#@!$%^&*()_+-=<>?|0123456789";

    function chaoticScramble(element, finalValue) {
        let current = "";
        let frame = 0;

        const digitLimit = finalValue.toString().length; // jumlah digit final
        const maxFrames = 30 + Math.floor(Math.random() * 20);
        const randomDelay = Math.random() * 800;

        setTimeout(() => {
            const interval = setInterval(() => {
                frame++;

                // scramble dibatasi sesuai jumlah digit angka final
                let scrambleLength = Math.floor(Math.random() * digitLimit) + 1;

                current = "";
                for (let i = 0; i < scrambleLength; i++) {
                    current += chars[Math.floor(Math.random() * chars.length)];
                }

                // Blink lebih sering
                if (Math.random() < 0.55) {
                    element.style.visibility = "hidden";
                } else {
                    element.style.visibility = "visible";
                }

                // Glitch mendekati akhir
                if (frame > maxFrames - 8 && Math.random() < 0.6) {
                    element.textContent = chars[Math.floor(Math.random() * chars.length)];
                } else {
                    element.textContent = current;
                }

                // selesai
                if (frame >= maxFrames) {
                    clearInterval(interval);
                    element.style.visibility = "visible";
                    element.textContent = finalValue;
                }

            }, 70 + Math.random() * 50);
        }, randomDelay);
    }

    stats.forEach(stat => {
        const target = stat.dataset.target || "0";
        chaoticScramble(stat, target);
    });
});


