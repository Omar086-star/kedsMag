'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import ReactPlayer from 'react-player'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingBox from "@/components/FloatingBox"
import Bubbles from "@/components/Bubbles"
export default function OurVideosPage() {
  const [mainVideo, setMainVideo] = useState<any>(null)
  const [otherVideos, setOtherVideos] = useState<any[]>([])

useEffect(() => {
  const fetchVideos = async () => {
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .eq('status', 'Published')
      .order('id', { ascending: false })

    console.log("DATA:", data)
    console.log("ERROR:", error)

    if (error) {
      console.error('Error fetching videos:', error)
      return
    }

    if (data && data.length > 0) {
      const main = data.find(v => v.is_main)
      const others = data.filter(v => !v.is_main)
      setMainVideo(main || data[0])
      setOtherVideos(others)
    }
  }

  fetchVideos()
}, [])


  return (
    <div className="min-h-screen bg-white px-6 ">
              <Header />
      <Bubbles />

      <h1 className="text-4xl font-bold text-center py-10 text-purple-700 mb-12"> فيديوهاتنا</h1>

      {mainVideo && (
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-center text-orange-600 mb-4">  </h2>
          <div className="max-w-4xl mx-auto">
            <ReactPlayer url={mainVideo.file_url} controls width="100%" />
            <h3 className="text-xl font-bold text-center text-purple-800 mt-4">{mainVideo.title}</h3>
            <p className="text-center text-gray-700 mt-2">{mainVideo.description}</p>
          </div>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-semibold text-center text-orange-600  mb-6"> الفيديوهات الأخرى</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6">
          {otherVideos.map(video => (
            <div key={video.id} className="bg-gray-100 rounded-lg p-3 shadow">
              <ReactPlayer url={video.file_url} controls width="100%" />
              <h4 className="text-lg font-bold mt-2 text-purple-700">{video.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{video.description}</p>
            </div>
          ))}
        </div>
      </section>
            <FloatingBox />
      <Footer />
    </div>
  )
}
