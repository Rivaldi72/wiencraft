"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface Blog {
  id: number; title: string; slug: string; status: string; category: string | null;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", slug: "", excerpt: "", content: "", thumbnail: "", category: "", tags: "", status: "draft" });
  const [editingId, setEditingId] = useState<number | null>(null);

  async function load() {
    const res = await fetch("/admin/blogs/api");
    setBlogs(await res.json());
  }

  useEffect(() => {
    let active = true;

    async function loadInitialBlogs() {
      const res = await fetch("/admin/blogs/api");
      const data: Blog[] = await res.json();

      if (active) {
        setBlogs(data);
      }
    }

    void loadInitialBlogs();

    return () => {
      active = false;
    };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = { ...form, tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean) };
    const res = await fetch("/admin/blogs/api", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingId ? { id: editingId, ...payload } : payload),
    });
    if (res.ok) {
      toast.success(editingId ? "Blog diperbarui" : "Blog ditambahkan");
      setOpen(false);
      setEditingId(null);
      setForm({ title: "", slug: "", excerpt: "", content: "", thumbnail: "", category: "", tags: "", status: "draft" });
      load();
    } else {
      toast.error("Gagal menyimpan");
    }
  }

  async function remove(id: number) {
    if (!confirm("Yakin hapus?")) return;
    await fetch("/admin/blogs/api", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    toast.success("Blog dihapus");
    load();
  }

  function edit(b: Blog) {
    setEditingId(b.id);
    setForm({ title: b.title, slug: b.slug, excerpt: "", content: "", thumbnail: "", category: b.category || "", tags: "", status: b.status });
    setOpen(true);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-serif font-bold text-stone-900">Kelola Blog</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditingId(null); setForm({ title: "", slug: "", excerpt: "", content: "", thumbnail: "", category: "", tags: "", status: "draft" }); }} className="bg-rose-700 hover:bg-rose-800"><Plus className="w-4 h-4 mr-1" /> Tambah</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-auto">
            <DialogHeader><DialogTitle>{editingId ? "Edit Blog" : "Tambah Blog"}</DialogTitle></DialogHeader>
            <form onSubmit={onSubmit} className="space-y-4 mt-2">
              <div><Label>Judul</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></div>
              <div><Label>Slug</Label><Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required /></div>
              <div><Label>Excerpt</Label><Textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} /></div>
              <div><Label>Konten</Label><Textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={6} /></div>
              <div><Label>Thumbnail URL</Label><Input value={form.thumbnail} onChange={(e) => setForm({ ...form, thumbnail: e.target.value })} /></div>
              <div><Label>Kategori</Label><Input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} /></div>
              <div><Label>Tags (pisah koma)</Label><Input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} /></div>
              <Button type="submit" className="w-full bg-rose-700 hover:bg-rose-800">{editingId ? "Simpan" : "Tambah"}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-medium">Judul</th><th className="text-left px-4 py-3 font-medium">Kategori</th><th className="text-left px-4 py-3 font-medium">Status</th><th className="text-right px-4 py-3 font-medium">Aksi</th></tr></thead>
          <tbody>
            {blogs.map((b) => (
              <tr key={b.id} className="border-t border-stone-100">
                <td className="px-4 py-3 font-medium text-stone-900">{b.title}</td>
                <td className="px-4 py-3">{b.category || "-"}</td>
                <td className="px-4 py-3"><Badge variant={b.status === "published" ? "default" : "secondary"}>{b.status}</Badge></td>
                <td className="px-4 py-3 text-right space-x-2">
                  <Button size="sm" variant="ghost" onClick={() => edit(b)}><Pencil className="w-4 h-4" /></Button>
                  <Button size="sm" variant="ghost" className="text-red-600" onClick={() => remove(b.id)}><Trash2 className="w-4 h-4" /></Button>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && <tr><td colSpan={4} className="px-4 py-8 text-center text-stone-500">Belum ada artikel</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
