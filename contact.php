<?php include('includes/header.php'); ?>

<?php 
// Redirect ke halaman maintenance jika page belum siap

$page_under_construction = false; // ubah jadi false jika halaman sudah siap

if ($page_under_construction) {
    header("Location: maintenance");
    exit();
}
?>

<div class="container">
    <div class="navbar">
        <?php include('includes/navbar.php'); ?>
    </div>

    <div class="main-content">
        <div class="contact-section">

            <h2>Contact Me</h2>
            <h3>Feel free to reach out through any platform below.</h3>

            <div class="contact-info">

                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <div class="contact-text">
                        <strong>Email</strong>
                        <a href="mailto:bmarzky.official@gmail.com">bmarzky.official@gmail.com</a>
                    </div>
                </div>

                <div class="contact-item">
                    <i class="fab fa-github"></i>
                    <div class="contact-text">
                        <strong>GitHub</strong>
                        <a href="https://github.com/bmarzky" target="_blank">github.com/Bimaaaaaa</a>
                    </div>
                </div>

                <div class="contact-item">
                    <i class="fab fa-whatsapp"></i>
                    <div class="contact-text">
                        <strong>WhatsApp</strong>
                        <a href="https://wa.me/0895383172727" target="_blank">0895-3831-72727</a>
                    </div>
                </div>

                <div class="contact-item">
                    <i class="fab fa-linkedin"></i>
                    <div class="contact-text">
                        <strong>LinkedIn</strong>
                        <a href="https://linkedin.com/in/bima-rizki17" target="_blank">linkedin.com/in/bima-rizki17</a>
                    </div>
                </div>

            </div>

        </div>
    </div>
</div>


<?php include('includes/loader.php'); ?>
<script src="js/home.js"></script>
<!-- <script src="https://kit.fontawesome.com/a076d05399.js"></script> FontAwesome for Icons -->