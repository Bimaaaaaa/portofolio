<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Under Maintenance</title>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden; /* hilangkan scroll */
        }

        body {
            background-color: #111;
            color: #fff;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-direction: column;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.2rem;
            color: #aaa;
            margin-bottom: 15px;
        }

        a {
            color: #fff;
            text-decoration: none;
        }

        #countdown {
            font-size: 25px;
            color: #ffff;
        }

        @media (max-width: 600px) {
            h1 { font-size: 2rem; }
            p { font-size: 1rem; }
            #countdown { font-size: 1.5rem; }
        }
    </style>
</head>
<body>
    <div>
        <h1>Maaf</h1>
        <p>
            Halaman ini sedang dalam perbaikan. Silakan 
            <a href="index">Klik link ini untuk kembali</a>.
        </p>
        <div id="countdown"></div>
    </div>

    <script>
        const targetDate = new Date("Dec 31, 2025 00:00:00").getTime();
        const countdownElement = document.getElementById("countdown");

        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
                countdownElement.innerHTML = "Website sudah tersedia!";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
        }, 1000);
    </script>
</body>
</html>
