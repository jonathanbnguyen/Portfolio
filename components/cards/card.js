export default function Card({ children, title, repoIcon }) {
    return (
        <div className="bg-slate-800 p-4 rounded-md shadow-md hover:-translate-y-2 transition duration-200 ease-in-out border border-slate-700">
            <div className="flex flex-row justify-between">
                <h1 className="text-white text-xl font-semibold">{title}</h1>
                <div className="flex flex-row gap-4">
                    {repoIcon}
                </div>
            </div>
            {children}
        </div>
    );
};