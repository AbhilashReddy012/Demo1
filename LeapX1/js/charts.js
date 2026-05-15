let lineChartInstance = null;
let doughnutChartInstance = null;
let barChartInstance = null;

const chartColors = {
    white: '#ffffff',
    beigeAccent: '#f5e6d3',
    greyLight: '#e2e2e2',
    greyMedium: '#757575',
    greyDark: '#424242',
    gridLines: 'rgba(255,255,255,0.05)',
    bgDarkest: 'transparent',
    surface1: 'rgba(17,17,17,0.5)'
};

function initCharts() {
    Chart.defaults.color = chartColors.greyMedium;
    Chart.defaults.font.family = "'Inter', sans-serif";

    const lineCanvas = document.getElementById('lineChart');
    const doughnutCanvas = document.getElementById('doughnutChart');
    const barCanvas = document.getElementById('barChart');

    if (lineCanvas) {
        const lineCtx = lineCanvas.getContext('2d');
        
        let gradientFill = lineCtx.createLinearGradient(0, 0, 0, 400);
        gradientFill.addColorStop(0, 'rgba(245, 230, 211, 0.4)');
        gradientFill.addColorStop(1, 'rgba(245, 230, 211, 0.0)');

        lineChartInstance = new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Attendance',
                    data: [],
                    borderColor: chartColors.beigeAccent,
                    backgroundColor: gradientFill,
                    pointBackgroundColor: '#111',
                    pointBorderColor: chartColors.beigeAccent,
                    pointHoverBackgroundColor: chartColors.beigeAccent,
                    pointHoverBorderColor: chartColors.white,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#111',
                        titleColor: chartColors.white,
                        bodyColor: chartColors.greyLight,
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: false,
                        boxPadding: 4
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: chartColors.gridLines, drawBorder: false },
                        border: { display: false }
                    },
                    x: {
                        grid: { display: false },
                        border: { display: false }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
            }
        });
    }

    if (doughnutCanvas) {
        const doughnutCtx = doughnutCanvas.getContext('2d');
        doughnutChartInstance = new Chart(doughnutCtx, {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [
                        '#ffffff',
                        '#f5e6d3',
                        '#a142f4',
                        '#4285f4',
                        '#0f9d58'
                    ],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            color: chartColors.greyLight,
                            font: { weight: '700' }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#111',
                        titleColor: chartColors.white,
                        bodyColor: chartColors.greyLight,
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderWidth: 1,
                        padding: 12
                    }
                }
            },
            plugins: [{
                id: 'centerText',
                beforeDraw: function(chart) {
                    if (chart.config.type !== 'doughnut') return;
                    var width = chart.width, height = chart.height, ctx = chart.ctx;
                    ctx.restore();
                    var fontSize = (height / 114).toFixed(2);
                    ctx.font = "900 " + fontSize + "em 'Inter', sans-serif";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = chartColors.white;
                    let total = 0;
                    if(chart.data.datasets[0].data.length > 0) {
                        total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                    }
                    if (total === 0) return;
                    var text = total, textX = Math.round((width - ctx.measureText(text).width) / 2), textY = height / 2 - 20;
                    ctx.fillText(text, textX, textY);
                    ctx.font = "700 " + (fontSize * 0.35).toFixed(2) + "em 'Inter', sans-serif";
                    ctx.fillStyle = chartColors.greyMedium;
                    var subText = "TOTAL", subTextX = Math.round((width - ctx.measureText(subText).width) / 2), subTextY = height / 2 + 10;
                    ctx.fillText(subText, subTextX, subTextY);
                    ctx.save();
                }
            }]
        });
    }

    if (barCanvas) {
        const barCtx = barCanvas.getContext('2d');
        barChartInstance = new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: [],
                datasets: [{
                    label: 'Sessions',
                    data: [],
                    backgroundColor: chartColors.beigeAccent,
                    borderRadius: 4,
                    borderWidth: 0,
                    hoverBackgroundColor: chartColors.white
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#111',
                        titleColor: chartColors.white,
                        bodyColor: chartColors.greyLight,
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: chartColors.gridLines, drawBorder: false },
                        border: { display: false }
                    },
                    x: {
                        grid: { display: false },
                        border: { display: false }
                    }
                }
            }
        });
    }

    updateCharts('monthly');
}

function updateCharts(period) {
    if (!window.MOCK_DATA) return;
    const data = window.MOCK_DATA[period] || window.MOCK_DATA.empty;
    if (lineChartInstance && data.line) {
        lineChartInstance.data.labels = data.line.labels;
        lineChartInstance.data.datasets[0].data = data.line.data;
        lineChartInstance.update();
    }
    if (doughnutChartInstance && data.doughnut) {
        doughnutChartInstance.data.labels = data.doughnut.labels;
        doughnutChartInstance.data.datasets[0].data = data.doughnut.data;
        doughnutChartInstance.update();
    }
    if (barChartInstance && data.bar) {
        barChartInstance.data.labels = data.bar.labels;
        barChartInstance.data.datasets[0].data = data.bar.data;
        barChartInstance.update();
    }
    const percEl = document.getElementById('attendance-percentage-value');
    if (percEl && data.percentage) {
        percEl.textContent = data.percentage;
    }

    if (data.stats) {
        const avgTimeEl = document.getElementById('stat-avg-time');
        if (avgTimeEl) avgTimeEl.innerText = data.stats.avgTime;
        
        const caloriesEl = document.getElementById('stat-calories');
        if (caloriesEl) caloriesEl.innerHTML = `${data.stats.calories} <span style="font-size:0.85rem; color:var(--text-muted); font-weight:normal;">kcal</span>`;
        
        const retentionEl = document.getElementById('stat-retention');
        if (retentionEl) retentionEl.innerText = data.stats.retention;
    }

    if (data.goals) {
        document.getElementById('goal-cal-current').innerText = data.goals.calCurrent;
        document.getElementById('goal-cal-target').innerText = data.goals.calTarget;
        document.getElementById('goal-cal-bar').style.width = data.goals.calPercent;
        
        document.getElementById('goal-weight-current').innerText = data.goals.weightCurrent;
        document.getElementById('goal-weight-target').innerText = data.goals.weightTarget;
        document.getElementById('goal-weight-bar').style.width = data.goals.weightPercent;
        
        document.getElementById('goal-time-current').innerText = data.goals.timeCurrent;
        document.getElementById('goal-time-target').innerText = data.goals.timeTarget;
        document.getElementById('goal-time-bar').style.width = data.goals.timePercent;
    }
    if (data.facility) {
        const attVal = document.getElementById('modal-attended-val');
        if (attVal) attVal.innerText = data.facility.attended;
        
        const missedVal = document.getElementById('modal-missed-val');
        if (missedVal) missedVal.innerText = data.facility.missed;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('#global-time-toggle .toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const period = e.target.getAttribute('data-period');
            setTimeout(() => updateCharts(period), 100);
        });
    });

    // Facility Modal Logic
    const facilityCard = document.getElementById('facility-capacity-card');
    const facilityModal = document.getElementById('facility-modal');
    const closeFacilityModalBtn = document.getElementById('close-modal-btn');

    if (facilityCard && facilityModal && closeFacilityModalBtn) {
        facilityCard.addEventListener('click', () => {
            facilityModal.classList.add('active');
        });

        closeFacilityModalBtn.addEventListener('click', () => {
            facilityModal.classList.remove('active');
        });

        facilityModal.addEventListener('click', (e) => {
            if (e.target === facilityModal) {
                facilityModal.classList.remove('active');
            }
        });
    }
});
