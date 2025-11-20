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




// JavaScript to toggle folder content visibility
function toggleFolder(folder) {
    const content = folder.querySelector('.folder-content');
    // Toggle the max-height to allow smooth opening and closing
    if (content.style.maxHeight) {
        content.style.maxHeight = null; // Close it
    } else {
        content.style.maxHeight = content.scrollHeight + "px"; // Open it
    }
}