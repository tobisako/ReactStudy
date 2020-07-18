import { app, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import path from "path";

const isProd: boolean = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1400,
    height: 700,
    backgroundColor: "80FFFFFF",
  });

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.handle("ondragstart", (event: any, param: any) => {
  console.log("ondragstart - " + param);
  var imgPath = path.join(__dirname, "/images/fileicon.png");
  event.sender.startDrag({
    file: param,
    icon: imgPath,
  });
  return imgPath;
});
