// Video Tutorial Data Structure and Management
// This file defines the data structure for videos and provides utility functions
// In production, connect this to your database (PostgreSQL, MongoDB, etc.)

export interface VideoTutorial {
  id: string
  title: string
  description: string
  duration: string
  category: string
  thumbnail: string
  videoUrl: string
  views: number
  transcript?: string
  createdAt: Date
  updatedAt: Date
  published: boolean
  tags?: string[]
}

export interface VideoCategory {
  id: string
  name: string
  description: string
  icon: string
  color: string
}

// Sample categories - can be stored in database
export const videoCategories: VideoCategory[] = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    description: 'Essential tutorials for new users',
    icon: 'Play',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'assessments',
    name: 'Assessments',
    description: 'Learn about creating and managing assessments',
    icon: 'FileText',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    description: 'Navigate and understand your dashboard',
    icon: 'Monitor',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'team-management',
    name: 'Team Management',
    description: 'Managing users and teams',
    icon: 'Users',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'settings',
    name: 'Settings',
    description: 'Configure your account and preferences',
    icon: 'Settings',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    description: 'Common issues and solutions',
    icon: 'HelpCircle',
    color: 'from-yellow-500 to-orange-500'
  }
]

// Sample videos - in production, fetch from database
export const sampleVideos: VideoTutorial[] = [
  {
    id: '1',
    title: 'Health Centre Tutorial',
    description: 'Complete walkthrough of the Habitus Health Centre dashboard. Learn how to navigate the platform, access key features, and manage your workplace health and safety data effectively.',
    duration: 'TBD',
    category: 'dashboard',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    videoUrl: 'https://27083507.fs1.hubspotusercontent-eu1.net/hubfs/27083507/Dashboard%20Tutorial%20videos/Health%20centre%20complete%20v2.mp4',
    views: 0,
    transcript: 'Welcome to the Habitus Health Centre tutorial. In this comprehensive guide, we\'ll walk you through all the features of the health centre dashboard...',
    createdAt: new Date('2024-10-29'),
    updatedAt: new Date('2024-10-29'),
    published: true,
    tags: ['dashboard', 'health-centre', 'tutorial', 'complete-guide']
  },
  {
    id: '2',
    title: 'VERA List Tutorial',
    description: 'Comprehensive tutorial on using the VERA (Video Ergonomic Risk Assessment) list feature. Learn how to conduct ergonomic assessments, manage risk factors, and improve workplace safety.',
    duration: 'TBD',
    category: 'assessments',
    thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop',
    videoUrl: 'https://27083507.fs1.hubspotusercontent-eu1.net/hubfs/27083507/Dashboard%20Tutorial%20videos/VERA%20list%20complete%20v2.mp4',
    views: 0,
    transcript: 'In this tutorial, we\'ll cover everything you need to know about the VERA list. The VERA assessment tool helps you identify and manage ergonomic risks in your workplace...',
    createdAt: new Date('2024-10-29'),
    updatedAt: new Date('2024-10-29'),
    published: true,
    tags: ['vera', 'ergonomics', 'assessment', 'risk-management']
  },
  {
    id: '3',
    title: 'Virtual Ergonomic Risk Assessment Tutorial',
    description: 'Master the virtual ergonomic risk assessment process. This complete guide covers how to perform remote assessments, evaluate workplace ergonomics, and generate comprehensive risk reports.',
    duration: 'TBD',
    category: 'assessments',
    thumbnail: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop',
    videoUrl: 'https://27083507.fs1.hubspotusercontent-eu1.net/hubfs/27083507/Dashboard%20Tutorial%20videos/Virtual%20ergo%20risk%20assessment%20complete%20v2.mp4',
    views: 0,
    transcript: 'Welcome to the Virtual Ergonomic Risk Assessment tutorial. In this video, you\'ll learn how to conduct comprehensive ergonomic assessments remotely using our advanced tools...',
    createdAt: new Date('2024-10-29'),
    updatedAt: new Date('2024-10-29'),
    published: true,
    tags: ['virtual-assessment', 'ergonomics', 'remote', 'risk-assessment']
  },
  {
    id: '4',
    title: 'Action Board Tutorial',
    description: 'Learn how to effectively use the Action Board to track, manage, and resolve workplace health and safety actions. This tutorial covers task assignment, progress monitoring, and completion workflows.',
    duration: 'TBD',
    category: 'dashboard',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
    videoUrl: 'https://27083507.fs1.hubspotusercontent-eu1.net/hubfs/27083507/Dashboard%20Tutorial%20videos/Action%20centre%20complete%20v2.mp4',
    views: 0,
    transcript: 'The Action Board is your central hub for managing workplace safety tasks. In this tutorial, you\'ll learn how to create actions, assign them to team members, and track progress to completion...',
    createdAt: new Date('2024-10-29'),
    updatedAt: new Date('2024-10-29'),
    published: true,
    tags: ['action-board', 'task-management', 'dashboard', 'workflow']
  },
  {
    id: '5',
    title: 'Risk Overview Tutorial',
    description: 'Comprehensive overview of the Risk Management system. Learn how to identify, assess, categorize, and monitor workplace risks to create a safer working environment for your team.',
    duration: 'TBD',
    category: 'dashboard',
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop',
    videoUrl: 'https://27083507.fs1.hubspotusercontent-eu1.net/hubfs/27083507/Dashboard%20Tutorial%20videos/Risk%20overview%20complete%20v2.mp4',
    views: 0,
    transcript: 'Understanding your risk landscape is crucial for workplace safety. In this tutorial, we\'ll explore the Risk Overview dashboard, showing you how to identify high-priority risks and take preventive action...',
    createdAt: new Date('2024-10-29'),
    updatedAt: new Date('2024-10-29'),
    published: true,
    tags: ['risk-management', 'overview', 'dashboard', 'safety']
  }
]

// Utility Functions

/**
 * Get all published videos
 */
export function getPublishedVideos(): VideoTutorial[] {
  return sampleVideos.filter(video => video.published)
}

/**
 * Get videos by category
 */
export function getVideosByCategory(categoryId: string): VideoTutorial[] {
  return sampleVideos.filter(video => video.category === categoryId && video.published)
}

/**
 * Get video by ID
 */
export function getVideoById(id: string): VideoTutorial | undefined {
  return sampleVideos.find(video => video.id === id)
}

/**
 * Search videos by query
 */
export function searchVideos(query: string): VideoTutorial[] {
  const lowercaseQuery = query.toLowerCase()
  return sampleVideos.filter(video =>
    video.published &&
    (video.title.toLowerCase().includes(lowercaseQuery) ||
     video.description.toLowerCase().includes(lowercaseQuery) ||
     video.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
  )
}

/**
 * Get related videos (same category, excluding current video)
 */
export function getRelatedVideos(videoId: string, limit: number = 4): VideoTutorial[] {
  const currentVideo = getVideoById(videoId)
  if (!currentVideo) return []

  return sampleVideos
    .filter(video =>
      video.id !== videoId &&
      video.category === currentVideo.category &&
      video.published
    )
    .slice(0, limit)
}

/**
 * Get most viewed videos
 */
export function getMostViewedVideos(limit: number = 5): VideoTutorial[] {
  return [...sampleVideos]
    .filter(video => video.published)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit)
}

/**
 * Get recent videos
 */
export function getRecentVideos(limit: number = 5): VideoTutorial[] {
  return [...sampleVideos]
    .filter(video => video.published)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, limit)
}

/**
 * Increment video views
 * In production, this would update the database
 */
export function incrementVideoViews(videoId: string): void {
  const video = sampleVideos.find(v => v.id === videoId)
  if (video) {
    video.views++
  }
}

// Types for API/Database Integration

export interface CreateVideoInput {
  title: string
  description: string
  duration: string
  category: string
  thumbnail: string
  videoUrl: string
  transcript?: string
  tags?: string[]
  published?: boolean
}

export interface UpdateVideoInput extends Partial<CreateVideoInput> {
  id: string
}

// In production, implement these functions to interact with your database:
// - createVideo(data: CreateVideoInput): Promise<VideoTutorial>
// - updateVideo(data: UpdateVideoInput): Promise<VideoTutorial>
// - deleteVideo(id: string): Promise<void>
// - uploadVideoFile(file: File): Promise<string> // Returns URL
// - uploadThumbnail(file: File): Promise<string> // Returns URL
