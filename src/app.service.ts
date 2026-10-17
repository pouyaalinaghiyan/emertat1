import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return { status: 'ok' };
  }

  getInfo() {
    return { name: 'Emertat Flight Booking API', status: 'running' };
  }

  getLandingPage() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Emertat Flight Booking API</title>
  <style>
    :root { color-scheme: light dark; }
    body {
      font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      display: flex; min-height: 100vh; margin: 0;
      align-items: center; justify-content: center;
      background: #0f172a; color: #e2e8f0;
    }
    .card {
      text-align: center; padding: 3rem 2.5rem;
      border: 1px solid #1e293b; border-radius: 16px;
      background: #111827; box-shadow: 0 10px 40px rgba(0,0,0,.35);
    }
    h1 { margin: 0 0 .5rem; font-size: 1.6rem; color: #38bdf8; }
    p { margin: .25rem 0; color: #94a3b8; }
    code {
      display: inline-block; margin-top: 1.25rem; padding: .35rem .7rem;
      background: #1e293b; border-radius: 8px; color: #a5f3fc; font-size: .9rem;
    }
    .badge {
      display: inline-block; margin-top: 1rem; padding: .25rem .8rem;
      background: #064e3b; color: #6ee7b7; border-radius: 999px; font-size: .8rem;
    }
  </style>
</head>
<body>
  <main class="card">
    <h1>Emertat Flight Booking API</h1>
    <p>NestJS + MongoDB service is running.</p>
    <span class="badge">status: running</span>
    <p>JSON endpoints:</p>
    <code>GET /health</code>&nbsp;&nbsp;<code>GET /api</code>
  </main>
</body>
</html>`;
  }
}
