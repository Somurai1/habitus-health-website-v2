# How to Add Your Local Logo

## Quick Setup:

1. **Save your logo file** to this location:
   ```
   /Users/seanmurray/Habitus website v2/public/images/habitus-logo.png
   ```

2. **Update the help centre pages** to use the local logo:

   In both files:
   - `app/help-centre/page.tsx`
   - `app/help-centre/[id]/page.tsx`

   Change this line:
   ```tsx
   src="https://i.imgur.com/8xQYZ9p.png"
   ```

   To this:
   ```tsx
   src="/images/habitus-logo.png"
   ```

## Current Status:
- ✅ Logo directory created: `public/images/`
- ⏳ Logo file needs to be added manually (the Habitus Health logo with network design)
- ✅ Help centre pages are currently using external link as fallback

## Alternative: Use Next.js Image Component

For better optimization, you can also use Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/images/habitus-logo.png"
  alt="Habitus Health Logo"
  width={200}
  height={64}
  priority
/>
```

This will provide automatic image optimization and faster loading.
