// Handle navigation button clicks
document.addEventListener('DOMContentLoaded', () => {
    const dashboardButton = document.querySelector('#dashboard-button');
    if (dashboardButton) {
        dashboardButton.addEventListener('click', () => {
            // Redirect to the dashboard page
            window.location.href = '/dashboard';
        });
    }
});
