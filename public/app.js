document.addEventListener("DOMContentLoaded", async () => {
    // Update the base url.
    try {
        const base_url = await window.electronAPI.getBaseUrl()
        const head = document.querySelector('head');
        let base = head.querySelector('base');
        if (!base) {
            base = document.createElement('base');
            head.appendChild(base);
        }
        base.href = base_url;
    } catch(e) {
        //
    }

    const onKioskContextmenu = (event) => {
        event.stopPropagation();
        event.preventDefault();
    };
    const onKioskModeToggle = (toggle) => {
        document.body.classList.toggle('kiosk-mode', toggle);
        window[toggle ? 'addEventListener' : 'removeEventListener']('contextmenu', onKioskContextmenu, true);
    }
    window.electronAPI.onKioskMode(onKioskModeToggle);
    if (window.electronAPI.getKioskMode()) onKioskModeToggle();

    metaScore.Player.create({
        "el": "#app",
        "url": "app:///data.json",
        "autoload": true,
        "keyboard": false,
        "api": false,
        "locale": "fr",
        "modules": {
        "app_renderer": {
            "adaptSize": true,
            "allowUpscaling": true
        }
        }
    });
});