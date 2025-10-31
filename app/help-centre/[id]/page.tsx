'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Play } from 'lucide-react'
import { sampleVideos } from '@/lib/videos'

interface VideoTutorial {
  id: string
  title: string
  description: string
  duration: string
  category: string
  thumbnail: string
  videoUrl: string
  views: number
  transcript?: string
}

export default function VideoPage() {
  const params = useParams()
  const videoId = params.id as string
  const video = sampleVideos.find(v => v.id === videoId)
  const relatedVideos = sampleVideos.filter(v => v.id !== videoId).slice(0, 3)

  if (!video) {
    return (
      <div className="min-h-screen bg-[#D8E2EC] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Video not found</h1>
          <Link href="/help-centre" className="text-[#4A8B8A] hover:underline font-medium">
            Back to Help Centre
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#D8E2EC]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/help-centre" className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-200">
              <img
                src="/images/Habitus Health Logo.jpg"
                alt="Habitus Health Logo"
                className="h-24 w-auto"
              />
            </Link>
            <Link href="/help-centre">
              <h1 className="text-2xl font-semibold text-gray-800 cursor-pointer hover:text-[#4A8B8A] transition-colors duration-200">Help Centre</h1>
            </Link>
            <a
              href="mailto:support@habitushealth.net"
              className="px-6 py-2.5 bg-[#4A8B8A] text-white font-medium rounded-lg hover:bg-[#3d7372] transition-colors duration-200 inline-block"
            >
              Contact us
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/help-centre"
          className="inline-flex items-center space-x-2 text-[#4A8B8A] hover:text-[#3d7372] mb-6 group font-medium"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Help Centre</span>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative aspect-video bg-gray-900">
                <video
                  controls
                  className="w-full h-full"
                  src={video.videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="p-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-3">
                  {video.title}
                </h1>

                <p className="text-gray-600 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Related Videos</h2>
              <div className="space-y-3">
                {relatedVideos.map((relatedVideo) => (
                  <Link
                    key={relatedVideo.id}
                    href={`/help-centre/${relatedVideo.id}`}
                    className="group block"
                  >
                    <div className="flex space-x-3 hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200">
                      <div className="relative flex-shrink-0 w-28 aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <video
                          src={relatedVideo.videoUrl}
                          className="w-full h-full object-cover"
                          preload="metadata"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
                          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                            <Play className="w-3.5 h-3.5 text-[#4A8B8A] ml-0.5" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-800 group-hover:text-[#4A8B8A] line-clamp-2 transition-colors duration-200">
                          {relatedVideo.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-gray-200">
                <Link
                  href="/help-centre"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#4A8B8A] text-white font-medium rounded-lg hover:bg-[#3d7372] transition-colors duration-200"
                >
                  View All Tutorials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
