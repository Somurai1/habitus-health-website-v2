'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play, Search } from 'lucide-react'
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
}

export default function HelpCentre() {
  const [searchQuery, setSearchQuery] = useState('')
  const [videos] = useState<VideoTutorial[]>(sampleVideos)

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4A8B8A] border border-gray-200 shadow-sm"
            />
          </div>
        </div>

        {/* Videos Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Tutorial Videos
          </h2>

          {filteredVideos.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No videos found</h3>
              <p className="text-gray-600">Try adjusting your search</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <Link
                  key={video.id}
                  href={`/help-centre/${video.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 border border-gray-100">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video bg-gray-100 overflow-hidden">
                      <video
                        src={video.videoUrl}
                        className="w-full h-full object-cover"
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                          <Play className="w-6 h-6 text-[#4A8B8A] ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                      {video.duration && video.duration !== 'TBD' && (
                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded text-white text-xs font-medium">
                          {video.duration}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-gray-800 mb-2 group-hover:text-[#4A8B8A] transition-colors duration-200">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
