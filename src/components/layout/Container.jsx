import Sidebar from "./Sidebar";

// export default function Container({ children }) {
//   return (
//     <div className="flex min-h-screen bg-gray-100 dark:bg-[#141625]">
//       <Sidebar />

//       <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto">
//         {children}
//       </main>
//     </div>
//   );
// }

export default function Container({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {children}
    </div>
  );
}