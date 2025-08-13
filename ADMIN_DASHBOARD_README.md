# StudySure Admin Dashboard

## Overview
A content management dashboard for editing study destination information on your StudySure website.

## Access
- **URL**: `http://your-domain.com/admin`
- **Password**: `studysure2024` (change this in `/src/components/admin/AdminAuth.js`)

## Features

### 🏠 Dashboard Overview
- **Country Selection**: Choose from 15 study destinations
- **Progress Tracking**: See completion percentage for each country
- **Section Navigation**: Edit different content areas

### 📝 Editable Content Sections

#### 1. Why Study Reasons
- Add/remove/reorder numbered reasons
- Support for **bold** text formatting
- Real-time preview

#### 2. Top Universities
- Add university names and rankings
- Drag & drop reordering
- Automatic numbering

#### 3. Student Visa Process
- Step-by-step visa process builder
- Title and description for each step
- Support for sub-points (a. b. c.)

#### 4. Study Costs
- Degree level management (Bachelor's, Master's, Doctoral)
- Price range input with currency
- Flexible cost structure

#### 5. Post Study Work
- Editable section title
- Rich description with formatting
- Benefits list management

#### 6. Work Rights
- Term time work hours
- Holiday work permissions
- Simple form inputs

## How to Use

### 1. Access Dashboard
1. Go to `/admin` on your website
2. Enter password: `studysure2024`
3. You'll see the dashboard interface

### 2. Edit Content
1. **Select Country**: Choose from the left sidebar
2. **Choose Section**: Click on content section to edit
3. **Make Changes**: Use the forms to edit content
4. **Save**: Click "Save Changes" button

### 3. Track Progress
- **Green dot**: Country 100% complete
- **Yellow dot**: Country partially complete
- **Red dot**: Country needs content

## Technical Details

### Files Created
- `/src/app/admin/page.js` - Main dashboard
- `/src/app/admin/layout.js` - Admin layout
- `/src/components/admin/` - Editor components
- `/src/app/api/admin/countries/route.js` - Save API

### Data Storage
- Content saved to `/src/data/countryData.js`
- Changes persist when website is deployed
- No database required

### Security
- Password protection for admin access
- API endpoints for secure data updates
- Works on hosted websites

## Deployment
When you deploy your StudySure website, the admin dashboard will be available at:
`https://your-domain.com/admin`

## Customization
- Change password in `AdminAuth.js`
- Modify colors by updating Tailwind classes
- Add new content sections by creating new editor components

## Support
The dashboard is designed to work seamlessly with your existing StudySure project structure and will be available when your website is hosted.
