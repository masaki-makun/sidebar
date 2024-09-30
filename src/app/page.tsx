import Sidebar from "@/components/Sidebar/Sidebar"
export default function Home() {
  return (
    <div className="bg-backgroundColor grid min-h-screen items-center justify-items-center gap-16 overflow-y-hidden p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Sidebar />
    </div>
  )
}
