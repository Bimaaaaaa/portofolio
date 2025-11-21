<?php

$page = $_GET['page'] ?? 'home';

switch ($page) {
    case 'home':
        include 'pages/home.php';
        break;
    case 'about':
        include 'pages/about.php';
        break;
    case 'projects':
        include 'pages/projects.php';
        break;
    case 'contact':
        include 'pages/contact.php';
        break;
    default:
        echo "<h2>404 - Page not found</h2>";
        break;
}
