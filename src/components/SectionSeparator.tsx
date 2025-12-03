export function SectionSeparator({
  color = "indigo"
}: {
  color?: string;
}) {
  const colorClasses: { [key: string]: string } = {
    indigo: "from-indigo-400 via-indigo-500 to-indigo-600",
    purple: "from-purple-400 via-purple-500 to-purple-600",
    pink: "from-pink-400 via-pink-500 to-pink-600",
    teal: "from-teal-400 via-teal-500 to-teal-600",
    blue: "from-blue-400 via-blue-500 to-blue-600",
    violet: "from-violet-400 via-violet-500 to-violet-600",
    fuchsia: "from-fuchsia-400 via-fuchsia-500 to-fuchsia-600",
    cyan: "from-cyan-400 via-cyan-500 to-cyan-600"
  };

  return (
    <div className="w-full px-4 sm:px-12 lg:px-20 xl:px-32 my-16">
    </div>
  );
}