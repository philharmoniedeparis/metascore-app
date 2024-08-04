document.addEventListener("DOMContentLoaded", () => {
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