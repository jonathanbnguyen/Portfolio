import Image from "next/image";

export function NavBar() {

    const routes = [
        'About',
        'Skills',
        'Work',
        'Projects',
        'Contact',
    ]

    return (
        <div className='flex flex-row w-full justify-between rounded-br-lg shadow-lg bg-opacity-20 backdrop-blur-md rounded-bl-lg bg-red-900'>
            <a href='#home'>
                <Image src='/j.png' alt='logo' width={75} height={24} className='my-auto h-16 ml-16' />
            </a>
            <div className="flex-1 flex flex-row-reverse h-16 pr-16">
                {routes.reverse().map(route => (
                    <div className="mx-8 my-auto" key={route}>
                        <a href={`#${route.toLowerCase()}`} className='group transition duration-300 text-black hover:text-slate-100'>
                            {route}
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-300'>
                            </span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}