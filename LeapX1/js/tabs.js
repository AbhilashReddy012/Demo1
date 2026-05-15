document.addEventListener('DOMContentLoaded', () => {
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // Update active nav button
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update active tab pane with smooth transition
            tabPanes.forEach(pane => {
                if (pane.id === targetTab) {
                    pane.style.display = 'block';
                    // Trigger reflow for animation
                    void pane.offsetWidth;
                    pane.classList.add('active');
                } else {
                    pane.style.display = 'none';
                    pane.classList.remove('active');
                }
            });
            // Toggle upgrade button visibility based on active tab
            const upgradeSection = document.getElementById('upgrade-section');
            if (upgradeSection) {
                if (targetTab === 'overview') {
                    upgradeSection.style.display = 'block';
                } else {
                    upgradeSection.style.display = 'none';
                }
            }
            
            // Re-render charts
            if (typeof initCharts === 'function') {
                window.dispatchEvent(new Event('resize'));
            }
        });
    });
});
