// Sidebar functionality
(function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const sidebarTrigger = document.getElementById('sidebarTrigger');
    
    let isOpen = false;
    let hoverTimeout = null;

    // Function to open sidebar
    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
        overlay.classList.remove('hidden');
        isOpen = true;
    }

    // Function to close sidebar
    function closeSidebar() {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        isOpen = false;
    }

    // Hover on left edge to trigger sidebar
    sidebarTrigger.addEventListener('mouseenter', function() {
        hoverTimeout = setTimeout(function() {
            if (!isOpen) {
                openSidebar();
            }
        }, 200); // Small delay before opening
    });

    sidebarTrigger.addEventListener('mouseleave', function() {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
    });

    // Close sidebar when clicking overlay
    overlay.addEventListener('click', function() {
        closeSidebar();
    });

    // Close sidebar when mouse leaves sidebar area (unless hovering over sidebar)
    sidebar.addEventListener('mouseleave', function(e) {
        // Check if mouse is moving away from sidebar
        const rect = sidebar.getBoundingClientRect();
        if (e.clientX > rect.right) {
            setTimeout(function() {
                if (isOpen) {
                    closeSidebar();
                }
            }, 300);
        }
    });

    // Prevent closing when hovering over sidebar
    sidebar.addEventListener('mouseenter', function() {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
    });
})();