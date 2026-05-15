document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Simulate skeleton loading
    const skeletonLoader = document.getElementById('skeleton-loader');
    const contentArea = document.getElementById('content-area');

    setTimeout(() => {
        if (skeletonLoader) skeletonLoader.classList.remove('active');
        if (contentArea) contentArea.classList.add('loaded');
        
        // Initialize charts after content is loaded and visible
        if (typeof initCharts === 'function' && !window.chartsInitialized) {
            initCharts();
            window.chartsInitialized = true;
        }
    }, 1500);

    // Reward points animation
    const rewardCounter = document.getElementById('reward-points-counter');
    let points = 3865;
    
    if (rewardCounter) {
        setInterval(() => {
            points += Math.floor(Math.random() * 5);
            // Format number with commas
            rewardCounter.innerHTML = `${points.toLocaleString()} <span style="color:var(--accent-secondary); font-size:0.8rem;">●</span>`;
        }, 3000);
    }

    // Upgrade Modal Logic
    const upgradeBtn = document.getElementById('btn-upgrade');
    const upgradeModal = document.getElementById('upgrade-modal');
    const closeUpgradeBtn = document.getElementById('close-upgrade-btn');

    if (upgradeBtn && upgradeModal && closeUpgradeBtn) {
        upgradeBtn.addEventListener('click', () => {
            upgradeModal.classList.add('active');
        });

        closeUpgradeBtn.addEventListener('click', () => {
            upgradeModal.classList.remove('active');
        });

        upgradeModal.addEventListener('click', (e) => {
            if (e.target === upgradeModal) {
                upgradeModal.classList.remove('active');
            }
        });
    }

    // Trainers Modal Logic
    const trainersCard = document.getElementById('trainers-card');
    const trainersModal = document.getElementById('trainers-modal');
    const closeTrainersBtn = document.getElementById('close-trainers-btn');

    if (trainersCard && trainersModal && closeTrainersBtn) {
        trainersCard.addEventListener('click', () => {
            trainersModal.classList.add('active');
        });

        closeTrainersBtn.addEventListener('click', () => {
            trainersModal.classList.remove('active');
        });

        trainersModal.addEventListener('click', (e) => {
            if (e.target === trainersModal) {
                trainersModal.classList.remove('active');
            }
        });
    }
});
