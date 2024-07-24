export function Header() {
    return (
        <header className="flex justify-between items-center py-3 px-5 bg-gray-800 text-white">
            <div className="flex items-center">
                <a href="/nextjs/public" className="text-2xl font-bold">
                    Next.js 13
                </a>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/nextjs/public" className="hover:text-gray-300">
                           Home
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
