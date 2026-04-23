export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col items-center justify-between w-20 h-screen bg-[#1E2139] py-6">

      {/* Logo */}
      <div className="w-10 h-10 bg-primary rounded-lg"></div>

      {/* Bottom (theme + avatar) */}
      <div className="flex flex-col items-center gap-6">
        <button className="text-white">🌙</button>

        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>

    </aside>
  );
}