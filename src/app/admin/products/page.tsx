"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface Product {
  id: number; name: string; slug: string; price: number | null; status: string; featured: number; images: string[] | null;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", slug: "", description: "", material: "", price: "", images: "", status: "published", featured: false });
  const [editingId, setEditingId] = useState<number | null>(null);

  async function load() {
    const res = await fetch("/admin/products/api");
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => { load(); }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = { ...form, price: form.price ? Number(form.price) : null, images: form.images.split("\n").filter(Boolean) };
    const res = await fetch("/admin/products/api", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingId ? { id: editingId, ...payload } : payload),
    });
    if (res.ok) {
      toast.success(editingId ? "Produk diperbarui" : "Produk ditambahkan");
      setOpen(false);
      setEditingId(null);
      setForm({ name: "", slug: "", description: "", material: "", price: "", images: "", status: "published", featured: false });
      load();
    } else {
      toast.error("Gagal menyimpan produk");
    }
  }

  async function remove(id: number) {
    if (!confirm("Yakin hapus?")) return;
    await fetch("/admin/products/api", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    toast.success("Produk dihapus");
    load();
  }

  function edit(p: Product) {
    setEditingId(p.id);
    setForm({ name: p.name, slug: p.slug, description: "", material: "", price: p.price?.toString() || "", images: (p.images || []).join("\n"), status: p.status, featured: !!p.featured });
    setOpen(true);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-serif font-bold text-stone-900">Kelola Produk</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditingId(null); setForm({ name: "", slug: "", description: "", material: "", price: "", images: "", status: "published", featured: false }); }} className="bg-rose-700 hover:bg-rose-800"><Plus className="w-4 h-4 mr-1" /> Tambah</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-auto">
            <DialogHeader><DialogTitle>{editingId ? "Edit Produk" : "Tambah Produk"}</DialogTitle></DialogHeader>
            <form onSubmit={onSubmit} className="space-y-4 mt-2">
              <div><Label>Nama</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
              <div><Label>Slug</Label><Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required /></div>
              <div><Label>Deskripsi</Label><Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
              <div><Label>Material</Label><Input value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} /></div>
              <div><Label>Harga (opsional)</Label><Input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} /></div>
              <div><Label>Gambar URLs (satu per baris)</Label><Textarea value={form.images} onChange={(e) => setForm({ ...form, images: e.target.value })} /></div>
              <div className="flex items-center gap-4">
                <Label className="flex items-center gap-2"><input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} /> Featured</Label>
              </div>
              <Button type="submit" className="w-full bg-rose-700 hover:bg-rose-800">{editingId ? "Simpan" : "Tambah"}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-medium">Nama</th><th className="text-left px-4 py-3 font-medium">Harga</th><th className="text-left px-4 py-3 font-medium">Status</th><th className="text-right px-4 py-3 font-medium">Aksi</th></tr></thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-stone-100">
                <td className="px-4 py-3 font-medium text-stone-900">{p.name}</td>
                <td className="px-4 py-3">{p.price ? `Rp ${p.price.toLocaleString("id-ID")}` : "-"}</td>
                <td className="px-4 py-3"><Badge variant={p.status === "published" ? "default" : "secondary"}>{p.status}</Badge></td>
                <td className="px-4 py-3 text-right space-x-2">
                  <Button size="sm" variant="ghost" onClick={() => edit(p)}><Pencil className="w-4 h-4" /></Button>
                  <Button size="sm" variant="ghost" className="text-red-600" onClick={() => remove(p.id)}><Trash2 className="w-4 h-4" /></Button>
                </td>
              </tr>
            ))}
            {products.length === 0 && <tr><td colSpan={4} className="px-4 py-8 text-center text-stone-500">Belum ada produk</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
