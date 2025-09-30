// Stats Cards
type StatCardProps = {
    title: string;
    value: string | number;
    change: string;
    color?: "red" | "green" | "blue" | "gray"; // restrict to Tailwind-supported palette
};

const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    change,
    color = "gray",
}) => {
    const colorClasses: Record<string, string> = {
        red: "text-red-500",
        green: "text-green-500",
        blue: "text-blue-500",
        gray: "text-gray-500",
    };

    return (
        <div className="card bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-[6px] p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {title}
            </h3>
            <p className="mt-2 text-4xl font-bold text-gray-900">{value}</p>
            <p
                className={`mt-1 text-sm font-medium flex items-center ${colorClasses[color]}`}
            >
                <span
                    className={change.startsWith("-") ? "text-red-500" : "text-green-500"}
                >
                    {change}
                </span>
                <span className="ml-1 text-gray-400">from last month</span>
            </p>
        </div>
    );
};


export default StatCard;