
import NavBar from '../components/NavBar';
import './tes1.css';

export const metadata = {
    title: {
        default: 'Indie Gamer #1',
        template: '%s | Indie Gamer #1'
    }
  };

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className='p-8 flex flex-col min-h-screen'>
                <header>
                    <NavBar />
                </header>
                <main className="grow">
                    {children}
                </main>
                <footer className="text-center">
                    [footer]
                </footer>
            </body>
        </html>
    );
}