const MOCK_DATA = {
    weekly: {
        line: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: [2, 1, 3, 0, 4, 2, 1]
        },
        doughnut: {
            labels: ['Weights', 'Cardio', 'Yoga', 'Pool', 'Classes'],
            data: [40, 20, 15, 10, 15]
        },
        bar: {
            labels: ['0-30m', '30-60m', '1-1.5h', '1.5-2h', '2-2.5h', '2.5h+'],
            data: [10, 35, 60, 45, 15, 5]
        },
        percentage: "82%",
        stats: { avgTime: "1h 15m", calories: "8,500", retention: "94%" },
        goals: {
            calCurrent: "8,500", calTarget: "10,000", calPercent: "85%",
            weightCurrent: "0.5", weightTarget: "1.0", weightPercent: "50%",
            timeCurrent: "45", timeTarget: "60", timePercent: "75%"
        },
        facility: { attended: "5", missed: "2" }
    },
    monthly: {
        line: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            data: [8, 12, 10, 15]
        },
        doughnut: {
            labels: ['Weights', 'Cardio', 'Yoga', 'Pool', 'Classes'],
            data: [35, 25, 15, 15, 10]
        },
        bar: {
            labels: ['0-30m', '30-60m', '1-1.5h', '1.5-2h', '2-2.5h', '2.5h+'],
            data: [40, 120, 250, 180, 50, 20]
        },
        percentage: "78%",
        stats: { avgTime: "1h 10m", calories: "36,200", retention: "92%" },
        goals: {
            calCurrent: "36,200", calTarget: "40,000", calPercent: "90%",
            weightCurrent: "2.1", weightTarget: "3.0", weightPercent: "70%",
            timeCurrent: "55", timeTarget: "60", timePercent: "91%"
        },
        facility: { attended: "22", missed: "8" }
    },
    yearly: {
        line: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [20, 18, 25, 30, 28, 35, 32, 40, 38, 45, 42, 50]
        },
        doughnut: {
            labels: ['Weights', 'Cardio', 'Yoga', 'Pool', 'Classes'],
            data: [45, 20, 15, 10, 10]
        },
        bar: {
            labels: ['0-30m', '30-60m', '1-1.5h', '1.5-2h', '2-2.5h', '2.5h+'],
            data: [500, 1500, 3200, 2100, 600, 150]
        },
        percentage: "65%",
        stats: { avgTime: "1h 20m", calories: "420,000", retention: "89%" },
        goals: {
            calCurrent: "420k", calTarget: "500k", calPercent: "84%",
            weightCurrent: "15.0", weightTarget: "20.0", weightPercent: "75%",
            timeCurrent: "50", timeTarget: "60", timePercent: "83%"
        },
        facility: { attended: "235", missed: "130" }
    },
    empty: {
        line: { labels: [], data: [] },
        doughnut: { labels: [], data: [] },
        bar: { labels: [], data: [] },
        percentage: "0%",
        stats: { avgTime: "0h 0m", calories: "0", retention: "0%" },
        goals: {
            calCurrent: "0", calTarget: "100", calPercent: "0%",
            weightCurrent: "0", weightTarget: "100", weightPercent: "0%",
            timeCurrent: "0", timeTarget: "100", timePercent: "0%"
        },
        facility: { attended: "0", missed: "0" }
    }
};

window.MOCK_DATA = MOCK_DATA;
