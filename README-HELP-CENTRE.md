# Help Centre Implementation Guide

This help centre allows you to upload and manage video tutorials for your users.

## Pages Created

### 1. Help Centre Main Page
**Location:** `/app/help-centre/page.tsx`

Features:
- Category-based video filtering
- Search functionality
- Responsive grid layout
- Video cards with thumbnails, duration, and view counts
- Call-to-action for support

### 2. Video Player Page
**Location:** `/app/help-centre/[id]/page.tsx`

Features:
- Full video player with embedded YouTube/Vimeo support
- Video details and metadata
- Related videos sidebar
- Expandable transcript section
- Social sharing and feedback buttons

### 3. Admin Upload Page
**Location:** `/app/admin/videos/page.tsx`

Features:
- Video upload form
- File upload for videos and thumbnails
- Category management
- Video metadata editing (title, description, duration, transcript)
- Video list management (view, edit, delete)
- Upload progress tracking

### 4. Data Structure
**Location:** `/lib/videos.ts`

Includes:
- TypeScript interfaces for videos and categories
- Sample video data
- Utility functions for video management
- Search and filtering functions
- Database integration guidelines

## Navigation

The Help Centre has been added to the main navigation under:
**Resources → Help Centre**

## Storage Options

Currently configured with sample data. For production, integrate with:

### Video Hosting Options:
1. **YouTube** (Recommended for public content)
   - Free hosting
   - Reliable CDN
   - Use embed URLs: `https://www.youtube.com/embed/VIDEO_ID`

2. **Vimeo** (Professional option)
   - Better privacy controls
   - Custom player
   - Use embed URLs: `https://player.vimeo.com/video/VIDEO_ID`

3. **AWS S3 + CloudFront**
   - Full control
   - Requires video player implementation
   - Cost-effective for high traffic

4. **Cloudinary**
   - Video optimization
   - Automatic transcoding
   - Built-in player

### File Storage for Uploads:
1. **AWS S3**
2. **Google Cloud Storage**
3. **Cloudinary**
4. **Vercel Blob Storage**

## Database Integration

To connect to a real database:

1. **Choose your database:**
   - PostgreSQL (Supabase, Neon, Railway)
   - MongoDB (MongoDB Atlas)
   - Prisma ORM

2. **Update `/lib/videos.ts`:**
   - Replace sample data with database queries
   - Implement CRUD operations
   - Add authentication checks

3. **Create API routes:**
   - `/app/api/videos/route.ts` - List/create videos
   - `/app/api/videos/[id]/route.ts` - Get/update/delete video
   - `/app/api/videos/upload/route.ts` - Handle file uploads

## Example Database Schema

```sql
CREATE TABLE video_tutorials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  duration VARCHAR(10),
  category VARCHAR(50),
  thumbnail_url TEXT,
  video_url TEXT NOT NULL,
  views INTEGER DEFAULT 0,
  transcript TEXT,
  published BOOLEAN DEFAULT false,
  tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE video_categories (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  color VARCHAR(50)
);
```

## Authentication

The admin page (`/app/admin/videos/page.tsx`) should be protected with authentication:

```typescript
// Add to admin page
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

export default async function VideoAdminPage() {
  const session = await getServerSession()

  if (!session || session.user.role !== 'admin') {
    redirect('/login')
  }

  // ... rest of the page
}
```

## Environment Variables

Add to `.env.local`:

```bash
# Database
DATABASE_URL="your-database-url"

# File Storage (if using AWS S3)
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_ACCESS_KEY="your-secret-key"
AWS_REGION="us-east-1"
AWS_S3_BUCKET="your-bucket-name"

# Or Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

## Styling

The help centre uses your existing design system:
- Glassmorphism effects
- Gradient backgrounds
- Responsive layouts
- Tailwind CSS utilities

## Next Steps

1. **Set up authentication** for the admin page
2. **Connect to a database** (Supabase recommended for quick setup)
3. **Choose video hosting** (YouTube for simplest solution)
4. **Implement file uploads** (if self-hosting videos)
5. **Add analytics** to track video views and engagement
6. **Create more categories** as needed
7. **Add video comments/feedback** system (optional)

## Testing

Access the pages:
- Help Centre: http://localhost:3000/help-centre
- Video Player: http://localhost:3000/help-centre/1
- Admin: http://localhost:3000/admin/videos

## Deployment

When deploying to production:
1. Remove sample data from `/lib/videos.ts`
2. Ensure all API routes are secured
3. Set up proper CORS for video uploads
4. Configure CDN for video delivery
5. Add rate limiting to upload endpoints
6. Set up proper error handling and logging

## Support

For questions about implementation:
- Check Next.js documentation: https://nextjs.org/docs
- Supabase setup: https://supabase.com/docs
- Cloudinary integration: https://cloudinary.com/documentation
