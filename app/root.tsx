import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ビンゴゲーム</title>
        <Meta />
        <Links />
        <style dangerouslySetInnerHTML={{
          __html: `
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
              margin: 0;
              padding: 20px;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
              background: white;
              border-radius: 8px;
              padding: 30px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            h1 {
              text-align: center;
              color: #333;
              margin-bottom: 30px;
            }
            .input-group {
              margin-bottom: 20px;
            }
            label {
              display: block;
              margin-bottom: 5px;
              font-weight: bold;
              color: #555;
            }
            input {
              width: 100%;
              padding: 10px;
              border: 2px solid #ddd;
              border-radius: 4px;
              font-size: 16px;
              box-sizing: border-box;
            }
            input:focus {
              outline: none;
              border-color: #007bff;
            }
            button {
              background-color: #007bff;
              color: white;
              border: none;
              padding: 12px 24px;
              font-size: 16px;
              border-radius: 4px;
              cursor: pointer;
              margin-right: 10px;
              margin-bottom: 10px;
            }
            button:hover {
              background-color: #0056b3;
            }
            button:disabled {
              background-color: #ccc;
              cursor: not-allowed;
            }
            .current-number {
              text-align: center;
              margin: 30px 0;
            }
            .current-number .number {
              font-size: 72px;
              font-weight: bold;
              color: #007bff;
              border: 4px solid #007bff;
              border-radius: 50%;
              width: 150px;
              height: 150px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto;
              background-color: #f8f9fa;
            }
            .drawn-numbers {
              margin-top: 30px;
            }
            .drawn-numbers h3 {
              color: #333;
              margin-bottom: 15px;
            }
            .numbers-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
              gap: 5px;
            }
            .number-item {
              background-color: #e9ecef;
              padding: 8px;
              text-align: center;
              border-radius: 4px;
              font-weight: bold;
            }
            .number-item.drawn {
              background-color: #28a745;
              color: white;
            }
            .game-info {
              background-color: #f8f9fa;
              padding: 15px;
              border-radius: 4px;
              margin-bottom: 20px;
            }
            .error {
              color: #dc3545;
              margin-top: 10px;
            }
          `
        }} />
      </head>
      <body>
        <div className="container">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}