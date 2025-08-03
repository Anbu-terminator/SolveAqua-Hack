// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
var server = createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var isProd = process.env.NODE_ENV === "production";
if (isProd) {
  const staticPath = path.resolve(__dirname, "../dist/public");
  app.use(express.static(staticPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
} else {
  app.get("*", (_req, res) => {
    res.send("Running in development mode. Please build frontend and set NODE_ENV=production.");
  });
}
app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Internal Server Error" });
});
var port = parseInt(process.env.PORT || "5000", 10);
var host = "0.0.0.0";
server.listen({ port, host }, () => {
  console.log(`\u{1F680} Server running at http://localhost:${port}`);
});
