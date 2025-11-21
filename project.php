<?php include('includes/header.php'); ?>

<div class="container">
    <div class="navbar">
        <?php include('includes/navbar.php'); ?>
    </div>

    <div class="main-content">
        <h1>My Projects</h1>
        <p>Tackling cybersecurity challenges with effective solutions and the latest tools.<p>

            <div class="projects-grid">
                <!-- Project 1 -->
                <!-- Project 2 -->
                <div class="project-folder" onclick="toggleFolder(this)">
                    <div class="folder-icon">
                        <i class="fas fa-folder"></i>
                    </div>
                    <div class="folder-header">
                        Behavioral Keystroke Login
                    </div>
                    <div class="folder-content">
                        <p>A secure login system that authenticates users based on their typing patterns using behavioral biometrics and keystroke dynamics.</p>
                        
                        <!-- Screenshot Section -->
                        <h4 class="tools-h4">Project Screenshot:</h4>
                        <img src="assets/images/project-photo/2.jpeg" alt="Behavioral Keystroke Login System" class="folder-screenshot">
                        
                        <!-- Tools Used Section -->
                        <h4 class="tools-h4">Tools Used:</h4>
                        <div class="tools">
                            <div class="tool-icon">
                                <i class="fas fa-python"></i> Python
                            </div>
                            <div class="tool-icon">
                                <i class="fas fa-flask"></i> Flask
                            </div>
                            <div class="tool-icon">
                                <i class="fas fa-database"></i> MySQL
                            </div>
                        </div>
                        
                        <!-- Links to Resources Section -->
                        <h4 class="tools-h4">Related Resources:</h4>
                        <ul>
                            <li><a href="https://github.com/Bimaaaaaa/keystroke.git" target="_blank">GitHub Repository</a></li>
                            <li><span class="project-dates">August 2025 - January 2026</span></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</div>

<?php include('includes/loader.php'); ?>

<!-- Link ke file JavaScript -->
<script src="js/home.js"></script>