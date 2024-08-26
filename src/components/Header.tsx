//import { usePath } from "@/app/[locale]/hooks/usePath"
import Link from "next/link"

export const Header = () => {
    const general = 'text-slate-300'
    const current = 'text-RED font-bold'

    //const { isCurrentPage } = usePath()

    return (
        <header className="flex justify-between items-center px-6 py-4 mb-5">
            <h2 className="text-RED font-bold">Josué Lobo</h2>
            <nav className="flex gap-6 items-center">
                <Link href="/" className="text-slate-300">Home</Link>
                <Link href="/">Blog</Link>
                <Link href="/recomendations">Recomendações</Link>
            </nav>
        </header>
    )
}