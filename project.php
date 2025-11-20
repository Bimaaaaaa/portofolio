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
                <div class="project-folder" onclick="toggleFolder(this)">
                    <div class="folder-icon">
                        <i class="fas fa-folder"></i>
                    </div>
                    <div class="folder-header">
                        Network Security Analysis
                    </div>
                    <div class="folder-content">
                        <p>A detailed analysis of network traffic to identify potential vulnerabilities and possible attack vectors in cybersecurity.</p>
                        
                        <!-- Screenshot Section -->
                        <h4 class="tools-h4-h">Project Screenshot:</h4>
                        <img src="assets/images/project-photo/1.jpeg" alt="Network Traffic Screenshot" class="folder-screenshot">
                        
                        <!-- Tools Used Section -->
                        <h4 class="tools-h4-n">Tools Used:</h4>
                        <div class="tools">
                            <div class="tool-icon">
                                <i class="fas fa-wifi"></i> Wireshark
                            </div>
                            <div class="tool-icon">
                                <i class="fas fa-network-wired"></i> Nmap
                            </div>
                            <div class="tool-icon">
                                <i class="fas fa-laptop-code"></i> Metasploit
                            </div>
                        </div>
                        
                        <!-- Links to Resources Section -->
                        <h4 class="tools-h4">Related Resources:</h4>
                        <ul>
                            <li><a href="https://github.com/your-repo" target="_blank">GitHub Repository</a></li>
                            <li><span class="project-dates">January 2023 - March 2023</span></li>
                        </ul>
                    </div>
                </div>

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
                        <h4 class="tools-h4-h">Project Screenshot:</h4>
                        <img src="assets/images/project-photo/2.jpeg" alt="Behavioral Keystroke Login System" class="folder-screenshot">
                        
                        <!-- Tools Used Section -->
                        <h4 class="tools-h4-n">Tools Used:</h4>
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
                            <li><a href="https://github.com/your-repo" target="_blank">GitHub Repository</a></li>
                            <li><span class="project-dates">August 2025 - January 2026</span></li>
                        </ul>
                    </div>
                </div>


                <!-- Project 3 -->
                <div class="project-folder" onclick="toggleFolder(this)">
                    <div class="folder-icon">
                        <i class="fas fa-folder"></i>
                    </div>
                    <div class="folder-header">
                        Ethical Hacking for Penetration Testing
                    </div>
                    <div class="folder-content">
                        <p>Conducting penetration testing on networks and systems to assess security flaws and risks.</p>
                        
                        <!-- Screenshot Section -->
                        <h4 class="tools-h4-h">Project Screenshot:</h4>
                        <img src="assets/images/project-photo/3.jpeg" alt="Penetration Testing" class="folder-screenshot">
                        
                        <!-- Tools Used Section -->
                        <h4 class="tools-h4-n">Tools Used:</h4>
                        <div class="tools">
                            <div class="tool-icon">
                                <i class="fas fa-lock"></i> Kali Linux
                            </div>
                            <div class="tool-icon">
                                <i class="fas fa-terminal"></i> Metasploit
                            </div>
                            <div class="tool-icon">
                                <i class="fas fa-shield-alt"></i> Aircrack-ng
                            </div>
                        </div>
                        
                        <!-- Links to Resources Section -->
                        <h4 class="tools-h4">Related Resources:</h4>
                        <ul>
                            <li><a href="https://github.com/your-repo" target="_blank">GitHub Repository</a></li>
                            <li><span class="project-dates">July 2023 - September 2023</span></li>
                        </ul>
                    </div>
                </div>

                <!-- Project 4 -->
                <div class="project-folder" onclick="toggleFolder(this)">
                    <div class="folder-icon">
                        <i class="fas fa-folder"></i>
                    </div>
                    <div class="folder-header">
                        Malware Analysis
                    </div>
                    <div class="folder-content">
                        <p>Reverse-engineering malware to understand its behavior and identify possible countermeasures.</p>
                        
                        <!-- Screenshot Section -->
                        <h4 class="tools-h4-h">Project Screenshot:</h4>
                        <img src="assets/images/project-photo/4.jpeg" alt="Malware Analysis" class="folder-screenshot">
                        
                        <!-- Tools Used Section -->
                        <h4 class="tools-h4-n">Tools Used:</h4>
                        <div class="tools">
                            <div class="tool-icon">
                                <i class="fas fa-cogs"></i> IDA Pro
                            </div>
                            <div class="tool-icon">
                                <i class="fas fa-code-branch"></i> OllyDbg
                            </div>
                            <div class="tool-icon">
                                <i class="fas fa-hands-helping"></i> PEiD
                            </div>
                        </div>
                        
                        <!-- Links to Resources Section -->
                        <h4 class="tools-h4">Related Resources:</h4>
                        <ul>
                            <li><a href="https://github.com/your-repo" target="_blank">GitHub Repository</a></li>
                            <li><span class="project-dates">October 2023 - December 2023</span></li>
                        </ul>
                    </div>
                </div>

                <!-- Project 5 -->
                <div class="project-folder" onclick="toggleFolder(this)">
                    <div class="folder-icon">
                        <i class="fas fa-folder"></i>
                    </div>
                    <div class="folder-header">
                        Web Application Security Testing
                    </div>
                    <div class="folder-content">
                        <p>Performing security tests on web applications to identify SQL injection, XSS, and other vulnerabilities.</p>
                        
                        <!-- Screenshot Section -->
                        <h4 class="tools-h4-h">Project Screenshot:</h4>
                        <img src="assets/images/project-photo/.jpeg" alt="Web Application Security" class="folder-screenshot">
                        
                        <!-- Tools Used Section -->
                        <h4 class="tools-h4-n">Tools Used:</h4>
                        <div class="tools">
                            <div class="tool-icon">
                                <i class="fas fa-pencil-alt"></i> Burp Suite
                            </div>
                            <div class="tool-icon">
                                <i class="fas fa-code"></i> OWASP ZAP
                            </div>
                            <div class="tool-icon">
                                <i class="fas fa-search"></i> Nikto
                            </div>
                        </div>
                        
                        <!-- Links to Resources Section -->
                        <h4 class="tools-h4">Related Resources:</h4>
                        <ul>
                            <li><a href="https://github.com/your-repo" target="_blank">GitHub Repository</a></li>
                            <li><span class="project-dates">April 2023 - June 2023</span></li>
                        </ul>
                    </div>
                </div>


            </div>
    </div>
</div>

<?php include('includes/footer.php'); ?>

<!-- Link ke file JavaScript -->
<script src="js/home.js"></script>
<script>
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
</script>