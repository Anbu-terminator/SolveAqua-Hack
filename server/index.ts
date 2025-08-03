import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve frontend from dist/public
const isProd = process.env.NODE_ENV === "production";
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

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Internal Server Error" });
});

const port = parseInt(process.env.PORT || "5000", 10);
const host = "0.0.0.0";

server.listen({ port, host }, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
