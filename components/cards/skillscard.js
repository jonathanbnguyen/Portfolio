export default function SkillCard({ title }) {
    return (
        <span
            className="text-white text-sm mt-2 inline-block mr-2 last:mr-0 bg-blue-700 p-1.5 rounded">
            {title}
        </span>
    );
};