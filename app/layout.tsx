import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agentic App',
  description: 'Minimal Next.js app deployed to Vercel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container">
            <a className="brand" href="/">agentic-79c60dbc</a>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="container">Deployed on Vercel</div>
        </footer>
      </body>
    </html>
  );
}
