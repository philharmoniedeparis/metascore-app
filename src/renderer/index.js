window.electronAPI.onAppOpen(() => {
  metaScore.Player.create({
    "el": "#app",
    "url": "app://app.json",
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