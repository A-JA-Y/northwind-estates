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
            <div key={item.id} onClick={()=>router.push(`/blogs/${item.slug}`)} className="bg-[#F6F4EC] rounded shadow hover:shadow-lg transition">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-[180px] object-cover"
              />
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
            className="px-6 py-3 text-sm font-medium text-white bg-[#C0A15C] rounded hover:bg-[#C0A15C] transition-colors"
          >
            Read More Articles
          </button>
        </div>
      </div>
    </section>
  );
}
