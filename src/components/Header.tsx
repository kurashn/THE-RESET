import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-retreat-dark/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="font-serif text-2xl tracking-widest text-retreat-white font-bold">
                    THE RESET
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-sm tracking-wider text-retreat-white/80">
                    <Link href="#concept" className="hover:text-retreat-gold transition-colors">CONCEPT</Link>
                    <Link href="#program" className="hover:text-retreat-gold transition-colors">PROGRAM</Link>
                    <Link href="#schedule" className="hover:text-retreat-gold transition-colors">SCHEDULE</Link>
                    <Link href="#access" className="hover:text-retreat-gold transition-colors">ACCESS</Link>
                </nav>
                <a
                    href="https://tzvbxig2.autosns.app/line"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-retreat-gold hover:bg-retreat-gold-light text-retreat-dark px-6 py-2.5 rounded-sm font-medium transition-colors tracking-wide text-sm"
                >
                    Official LINE
                </a>
            </div>
        </header>
    );
}
