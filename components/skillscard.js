export default function SkillCard({ title }) {
    return (
        <span
            className="text-slate-200 text-sm mt-2 inline-block mr-2 last:mr-0 bg-blue-700 p-1.5 rounded"
        >
            {title}
        </span>
    );
};