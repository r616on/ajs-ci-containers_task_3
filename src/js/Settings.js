export default class Settings {
  constructor() {
    const defaultSettingsObj = {
      theme: 'dark',
      music: 'trance',
      difficulty: 'easy',
    };
    this.defaultSettings = new Map(Object.entries(defaultSettingsObj));
    this.userSettings = new Map();
  }

  getSettings() {
    const settings = new Map();
    this.defaultSettings.forEach((value, key) => {
      settings.set(key, value);
    });
    this.userSettings.forEach((value, key) => {
      settings.set(key, value);
    });
    return settings;
  }
}
