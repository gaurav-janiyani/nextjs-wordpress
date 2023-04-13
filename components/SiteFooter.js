import Link from "next/link";

export default function SiteFooter() {
    return (
        <>
        <footer id="site-footer" className="bg-slate-200">
            <div className="flex justify-between items-center container mx-auto lg:max-w-5xl">
                <div className="py-3">&copy; Gaurav Janiyani</div>
                <ul className="flex [&>li>a]:px-2">                                        
                    <li>
                        <Link href="/sample-page">Sample Page</Link>
                    </li>
                </ul>
            </div>
            
        </footer>
        </>
    )
}