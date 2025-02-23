(function() { 
  try {
    const localStorageTheme = window.localStorage.getItem('darkThemeEnabled');
    const browserPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const darkThemeEnabled = localStorageTheme ? localStorageTheme === 'true' : browserPreference;
    document.body.classList.remove(darkThemeEnabled ? 'light' : 'dark');
    document.body.classList.add(darkThemeEnabled ? 'dark' : 'light');
  } catch(e) {}
})();