export default function Section({ id, title, children }) {
    return (
        <div className="lg:pd-8 m-auto md:w-full lg:w-full xl:w-3/4 w-full xl:p-4 p-4 " id={id}>
            <h1 className="text-left font-black text-white text-5xl mt-16">
                {title}.
            </h1>
            <hr className="border-gray-700 mt-2" />
            {children}
        </div>
    );
}