# Social Media Icons Setup

## Current Status
The Footer component is currently using **Lucide React icons** as a temporary solution. The component is fully functional with:
- ✅ All 5 social media links working
- ✅ Proper hover effects (scale + color change)
- ✅ Opens in new tab with security attributes
- ✅ Responsive layout
- ✅ Accessibility attributes

## To Switch to WEBP Icons

### Step 1: Add WEBP Icon Files
Place the following WEBP icon files in `src/assets/icons/`:
- `linkedin.webp`
- `x.webp`
- `facebook.webp`
- `instagram.webp`
- `whatsapp.webp`

**Recommended icon specifications:**
- Size: 24x24px or 28x28px
- Format: WEBP
- Background: Transparent
- Style: Consistent across all icons

### Step 2: Update Footer.tsx

In `src/components/Footer.tsx`, make these changes:

1. **Uncomment the iconPath properties** in the socialLinks array (lines 11, 17, 23, 29, 35)

2. **Update the icon rendering** (around line 175):
   Replace:
   ```tsx
   <IconComponent className="w-4 h-4" />
   ```
   
   With:
   ```tsx
   <img 
     src={social.iconPath} 
     alt={social.name}
     className="w-4 h-4 object-contain"
   />
   ```

3. **Remove the Lucide icon imports** (line 2):
   Delete: `import { Linkedin, Twitter, Facebook, Instagram, MessageCircle } from "lucide-react";`

4. **Remove the icon property** from socialLinks array items (delete the `icon: IconName,` lines)

### Step 3: Verify
1. Check that all icons display correctly
2. Test hover effects
3. Verify links open in new tabs
4. Test on mobile devices

## Icon Sources
You can download social media icons from:
- [Flaticon](https://www.flaticon.com/)
- [Icons8](https://icons8.com/)
- [Font Awesome](https://fontawesome.com/)
- [Simple Icons](https://simpleicons.org/)

Remember to convert to WEBP format for optimal performance.
