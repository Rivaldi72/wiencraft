import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";
import { MotionDiv } from "@/components/motion-wrapper";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import Link from "next/link";
import { ZoomableImage } from "@/components/ui/image-zoom";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await db.query.blogs.findFirst({
    where: eq(blogs.slug, slug),
  });

  if (!post) return { title: "Blog Not Found" };

  return {
    title: post.seoTitle || post.title,
    description: post.seoDesc || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDesc || post.excerpt,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await db.query.blogs.findFirst({
    where: eq(blogs.slug, slug),
  });

  if (!post) notFound();

  // Basic markdown parser for simple elements like ## and **
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return <h2 key={i} className="font-serif text-2xl font-bold text-[oklch(0.18_0.015_60)] mt-10 mb-5">{line.replace("## ", "")}</h2>;
      }
      if (line.startsWith("### ")) {
        return <h3 key={i} className="font-serif text-xl font-bold text-[oklch(0.18_0.015_60)] mt-8 mb-4">{line.replace("### ", "")}</h3>;
      }
      if (line.trim() === "") return <br key={i} />;
      
      // Handle bold
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className="text-[oklch(0.35_0.02_65)] leading-relaxed mb-4">
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={j} className="text-[oklch(0.18_0.015_60)]">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-[oklch(0.975_0.012_80)]">
      
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          
          {/* Back button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm text-[oklch(0.50_0.02_70)] hover:text-[oklch(0.60_0.12_40)] transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Blog
          </Link>

          {/* Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-[oklch(0.60_0.12_40)] text-[oklch(0.975_0.012_80)] text-[10px] tracking-widest uppercase font-bold">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[oklch(0.50_0.02_70)]">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.createdAt || "").toLocaleDateString("id-ID", { 
                  day: "numeric", month: "long", year: "numeric" 
                })}
              </div>
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.015_60)] leading-tight mb-8">
              {post.title}
            </h1>

            {/* Author / Info strip */}
            <div className="flex flex-wrap items-center gap-6 py-6 border-y border-[oklch(0.87_0.022_75)] mb-12">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[oklch(0.60_0.12_40/12%)] flex items-center justify-center border border-[oklch(0.60_0.12_40/20%)]">
                  <User className="w-4 h-4 text-[oklch(0.60_0.12_40)]" />
                </div>
                <span className="text-sm font-medium text-[oklch(0.28_0.01_60)]">WienCraft Editor</span>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-[oklch(0.50_0.02_70)]">
                <Tag className="w-3.5 h-3.5" />
                <div className="flex gap-2">
                  {post.tags?.map((tag) => (
                    <span key={tag} className="hover:text-[oklch(0.60_0.12_40)] transition-colors">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Featured Image */}
          {post.thumbnail && (
            <MotionDiv
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-16 shadow-2xl shadow-[oklch(0.18_0.015_60/10%)]"
            >
              <ZoomableImage src={post.thumbnail || ""} alt={post.title}>
                <Image 
                  src={post.thumbnail || "/placeholder.png"} 
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </ZoomableImage>
            </MotionDiv>
          )}

          {/* Content */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-stone max-w-none"
          >
            {renderContent(post.content)}
          </MotionDiv>

          {/* CTA / Share */}
          <div className="mt-20 p-10 rounded-[2rem] bg-[oklch(0.18_0.015_60)] text-center">
            <h4 className="font-serif text-2xl font-bold text-[oklch(0.975_0.012_80)] mb-4">
              Tertarik dengan hasil karya kami?
            </h4>
            <p className="text-[oklch(0.60_0.02_70)] mb-8 max-w-lg mx-auto">
              Setiap rajutan di WienCraft dibuat dengan standar kualitas tinggi yang sama dengan tutorial di atas.
            </p>
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[oklch(0.60_0.12_40)] text-[oklch(0.975_0.012_80)] font-bold hover:bg-[oklch(0.54_0.13_40)] transition-colors"
            >
              Lihat Katalog Produk
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
