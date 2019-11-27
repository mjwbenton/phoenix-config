Phoenix.set({
  daemon: false,
  openAtLogin: true
});

const MODIFIERS: Phoenix.ModifierKey[] = ["ctrl", "cmd"];
const SHIFT_MODIFIERS: Phoenix.ModifierKey[] = [...MODIFIERS, "shift"];

const CONFIGURATION = [
  // Single column, double row
  { column: 1, row: 1, mods: MODIFIERS, key: "l", xsize: 1, ysize: 2 },
  { column: 2, row: 1, mods: MODIFIERS, key: ";", xsize: 1, ysize: 2 },
  { column: 3, row: 1, mods: MODIFIERS, key: "'", xsize: 1, ysize: 2 },

  // Double column, double row
  { column: 1, row: 1, mods: SHIFT_MODIFIERS, key: "l", xsize: 2, ysize: 2 },
  { column: 2, row: 1, mods: SHIFT_MODIFIERS, key: ";", xsize: 2, ysize: 2 },

  // Single column, single row (top)
  { column: 1, row: 1, mods: MODIFIERS, key: "o", xsize: 1, ysize: 1 },
  { column: 2, row: 1, mods: MODIFIERS, key: "p", xsize: 1, ysize: 1 },
  { column: 3, row: 1, mods: MODIFIERS, key: "[", xsize: 1, ysize: 1 },

  // Double column, single row (top)
  { column: 1, row: 1, mods: SHIFT_MODIFIERS, key: "o", xsize: 2, ysize: 1 },
  { column: 2, row: 1, mods: SHIFT_MODIFIERS, key: "p", xsize: 2, ysize: 1 },

  // Single column, single row (bottom)
  { column: 1, row: 2, mods: MODIFIERS, key: ",", xsize: 1, ysize: 1 },
  { column: 2, row: 2, mods: MODIFIERS, key: ".", xsize: 1, ysize: 1 },
  { column: 3, row: 2, mods: MODIFIERS, key: "/", xsize: 1, ysize: 1 },

  // Double column, single row (bottom)
  { column: 1, row: 2, mods: SHIFT_MODIFIERS, key: ",", xsize: 2, ysize: 1 },
  { column: 2, row: 2, mods: SHIFT_MODIFIERS, key: ".", xsize: 2, ysize: 1 }
];

CONFIGURATION.forEach(({ column, row, mods, key, xsize, ysize }) => {
  Key.on(key, mods, () => {
    const focused = Window.focused();
    if (!focused) {
      return;
    }
    const screenFrame = Screen.main().flippedVisibleFrame();
    const oneWidth = Math.floor(screenFrame.width / 3);
    const oneHeight = Math.floor(screenFrame.height / 2);
    const x = screenFrame.x + oneWidth * (column - 1);
    const y = screenFrame.y + oneHeight * (row - 1);
    Window.focused().setFrame({
      x,
      y,
      height: oneHeight * ysize,
      width: oneWidth * xsize
    });
  });
});

Key.on("r", MODIFIERS, () => {
  Phoenix.notify("Reloading Config!");
  Phoenix.reload();
});
