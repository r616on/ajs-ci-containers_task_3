import Settings from '../Settings';

test('test getSettings default', () => {
  const settings = new Settings();
  const settingsObj = {
    theme: 'dark',
    music: 'trance',
    difficulty: 'easy',
  };
  const settingMap = new Map(Object.entries(settingsObj));
  expect(settings.getSettings()).toEqual(settingMap);
});

test('test getSettings User', () => {
  const settings = new Settings();
  const settingsObj = {
    theme: 'dark',
    music: 'pop',
    difficulty: 'hard',
  };
  settings.userSettings.set('music', 'pop');
  settings.userSettings.set('difficulty', 'hard');

  const settingMap = new Map(Object.entries(settingsObj));
  expect(settings.getSettings()).toEqual(settingMap);
});
