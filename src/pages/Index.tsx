import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, ChevronRight, Mail, Phone } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              专业网站建设与营销解决方案
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              我们提供全方位的网站建设、SEO优化和数字营销服务，助力您的业务增长
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                立即咨询 <ChevronRight className="ml-2" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">我们的服务</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "网站建设",
                description: "专业响应式网站设计，适配所有设备"
              },
              {
                title: "SEO优化",
                description: "提升搜索引擎排名，获取更多流量"
              },
              {
                title: "数字营销",
                description: "全面的线上营销策略，扩大品牌影响力"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">联系我们</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="姓名" />
                <Input placeholder="公司名称" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="电话" className="pl-10" />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="邮箱" className="pl-10" />
                </div>
              </div>
              <Input placeholder="您的需求" />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                提交需求
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-xl font-bold">专业网站建设</p>
              <p className="text-gray-400 mt-2">© 2023 版权所有</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400">服务条款</a>
              <a href="#" className="hover:text-blue-400">隐私政策</a>
              <a href="#" className="hover:text-blue-400">联系我们</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;