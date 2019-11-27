Phoenix.set({
  daemon: false,
  openAtLogin: true
});

const MODIFIERS: Phoenix.ModifierKey[] = ["ctrl", "alt", "cmd"];

[
  { column: 1, key: "l" },
  { column: 2, key: ";" },
  { column: 3, key: "'" }
].forEach(({ column, key }) => {
  Key.on(key, MODIFIERS, () => {
    const focused = Window.focused();
    if (!focused) {
      return;
    }
    const screenFrame = Screen.main().visibleFrame();
    const y = screenFrame.y;
    const width = Math.floor(screenFrame.width / 3);
    const x = screenFrame.x + width * (column - 1);
    Window.focused().setFrame({
      x,
      y: screenFrame.y,
      height: screenFrame.height,
      width
    });
  });
});

Key.on("r", MODIFIERS, () => {
  Phoenix.notify("Reloading Config!");
  Phoenix.reload();
});
