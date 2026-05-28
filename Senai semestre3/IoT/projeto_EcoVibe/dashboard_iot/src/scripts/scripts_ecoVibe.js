function toggleSidebar() {

    const sidebar = document.getElementById('sensor-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    const isHidden = sidebar.classList.contains('translate-x-full');

    if (isHidden) {

        sidebar.classList.remove('translate-x-full');

        overlay.classList.remove('hidden');

        setTimeout(() => {
            overlay.classList.add('opacity-100');
        }, 10);

        document.body.style.overflow = 'hidden';

    } else {

        sidebar.classList.add('translate-x-full');

        overlay.classList.remove('opacity-100');

        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 300);

        document.body.style.overflow = '';

    }
}