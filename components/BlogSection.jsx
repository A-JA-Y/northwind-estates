"use client"
import Image from "next/image";
import { blogData } from "@/data/blogData";
import { useRouter } from "next/navigation";

export default function BlogSection() {
  const router = useRouter();

  const latestBlogs = [...blogData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="w-full bg-white py-16 px-6" id="blog">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#C0A15C] mb-3">
            Our Blog
          </h6>
          <h2 className="text-3xl font-bold text-gray-900">
            Insights & Investment Guides
          </h2>
        </div>

        {/* Latest Blogs */}
        <div className="grid md:grid-cols-3 gap-6">
          {latestBlogs.map((item) => (
            <div key={item.id} onClick={()=>router.push(`/blogs/${item.slug}`)} className="bg-[#F6F4EC] rounded shadow overflow-hidden group cursor-pointer hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-[180px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-[#C0A15C] mb-2">{item.category}</p>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Read More Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => router.push("/blogs")}
            className="cta-shine px-6 py-3 text-sm font-medium text-white bg-[#C0A15C] rounded hover:bg-[#A2854A] hover:shadow-lg transition-all cursor-pointer"
          >
            Read More Articles
          </button>
        </div>
      </div>
    </section>
  );
}
