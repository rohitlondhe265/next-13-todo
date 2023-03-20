import Link from 'next/link'

const Navbar = () => {

    return (
        <header className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" href="/" >My Todos</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <Link href={"/search"}>
                            <img src="https://play-lh.googleusercontent.com/mLvvgUXJVZeu-GbqWZfr8ug74V7d8Od9yU2AOvUUptiki9wIH-BJHataFTJI_J0TlQ" />
                        </Link>
                    </div>
                </div>
                <Link className="text-sky-600 hover:text-sky-700" href={"/todos"}>
                    My Todos
                </Link>
                <Link className="text-sky-600 hover:text-sky-700" href={"/admin"}>
                    Admin Panel
                </Link>
                <label className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" />
                    </div>
                </label>
                {/* <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="text-sky-600 hover:text-sky-700" href={"/admin/panel"}>
                                Admin Panel
                            </Link>
                            <Link className="text-sky-600 hover:text-sky-700" href={"/user"}>
                                User Panel
                            </Link>
                        </li>
                    </ul> */}
            </div>
        </header>
    )
}

export default Navbar