document.addEventListener("DOMContentLoaded", () => {
    // Update the base url.
    if (window.electronAPI.baseUrl) {
        const head = document.querySelector('head');
        let base = head.querySelector('base');
        if (!base) {
            base = document.createElement('base');
            head.appendChild(base);
        }
        base.href = window.electronAPI.baseUrl;
    }

    metaScore.Player.create({
        "el": "#app",
        "url": "zip:///data.json",
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