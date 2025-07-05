"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import FloatingBox from '@/components/FloatingBox';
import Footer from "@/components/Footer"
import Header from "@/components/Header"


export default function DistributionActivitiesPage() {
const [images, setImages] = useState<any[]>([]);
const [videos, setVideos] = useState<any[]>([]);
const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
    const { data: imgData, error: imgError } = await supabase
    .from("distribution")
    .select("*")
    .eq("type", "image")
    .eq("status", "Published")
    .order("id", { ascending: false });

      const { data: vidData, error: vidError } = await supabase
        .from("distribution")
        .select("*")
        .eq("type", "video")
        .eq("status", "Published")
        .order("id", { ascending: false });

      if (imgError || vidError) {
        console.error("Error fetching data:", imgError || vidError);
        return;
      }

      setImages(imgData || []);
      setVideos(vidData || []);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 px-6 ">
        <Header />

      <h1 className="text-4xl font-bold text-center text-purple-800 mb-10 py-10">
        📦 نشاطات التوزيع
      </h1>

      {/* قسم الصور */}
      <section className="mb-16">
        <h2 className="textPa py-10 font-semibold text-orange-600 mb-6 text-center">
          📸 صور التوزيع
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="bg-white rounded-xl shadow p-2 cursor-pointer hover:shadow-md transition"
              onClick={() => setSelectedImage(img.cover_url || img.file_url)}
            >
              <Image
                src={img.cover_url || img.file_url}
                alt={img.title || "صورة توزيع"}
                width={300}
                height={200}
                className="rounded-md object-cover w-full h-48"
              />
              <div className="mt-2 px-1">
                <p className="font-semibold text-sm text-purple-800 truncate">{img.title}</p>
                <p className="text-s text-gray-600">{img.description}</p>
                                <p className="text-s text-gray-600">{img.category}</p>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* عرض الصورة المختارة */}
      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed z-50  inset-0">
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-80 py-10">
          <div className="relative max-w-4xl w-full">
            <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 text-white">
              <X className="w-6 h-6" />
            </button>
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="عرض موسع"
                width={800}
                height={600}
                className="rounded-lg mx-auto"
              />
            )}
          </div>
        </div>
      </Dialog>

      {/* قسم الفيديوهات */}
      <section>
        <h2 className=" textPa  font-semibold text-orange-600 mb-6 text-center">
          🎥 فيديوهات التوزيع
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 py-10 gap-6">
          {videos.map((vid) => (
            <div
              key={vid.id}
              className="bg-white rounded-xl shadow p-2 hover:shadow-md transition"
            >
              <ReactPlayer url={vid.file_url} controls width="100%" height="200px" />
              <div className="mt-2 px-1">
                <p className="font-semibold text-sm text-purple-800 truncate">{vid.title}</p>
                <p className="text-s text-gray-600">{vid.description}</p>
                <p className="text-s text-gray-600">{vid.category}</p>

              </div>
            </div>
          ))}
        </div>
    </section>

<FloatingBox />
<Footer />

    </div>
  );
}
