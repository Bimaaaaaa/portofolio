<?php
// Ambil page dari URL
$page = $_GET['page'] ?? 'home';

// Pages yang diizinkan
$allowed = ['home', 'about','projects' ,'contact'];

// Tampilkan 404 & STOP jika file kosong
if (!in_array($page, $allowed)) {
    include __DIR__ . '/404.php';
    exit; 
}

include 'includes/header.php';
include 'includes/topbar.php';
include 'includes/sidebar.php';
?>

<main class="content">
    <?php include __DIR__ . "/pages/$page.php"; ?>
</main>

<?php include 'includes/footer.php'; ?>
