import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, ChevronRight, Mail, Phone } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">网站建设</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">首页</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">网站建设</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">SEO优化</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">案例展示</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">关于我们</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:block">
              在线咨询
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              免费咨询
            </Button>
          </div>
        </div>
      </header>

      {/* Rest of the existing content remains the same */}
      <section className="relative h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
        {/* ... existing hero section content ... */}
      </section>

      {/* ... rest of the existing sections ... */}
    </div>
  );
};

export default Index;