import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  Divider,
} from '@mui/material';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import Navbar from '@/components/Navbar';
import CreatePost from '@/components/CreatePost';
import FeedPost from '@/components/FeedPost';
import TagIcon from '@/components/TagIcon';
import IdentityCard from '@/components/IdentityCard';

// --- Mock Data ---

const currentUser = {
  name: "Alex Developer",
  title: "Frontend Engineer | React & Next.js Enthusiast",
  avatar: "", // Empty for default MUI letter avatar
  views: 124,
  connections: 589
};


const feedPosts = [
  {
    id: 1,
    author: "Sarah Jenkins",
    avatar: "",
    title: "Product Designer at Creative UI",
    time: "2h",
    content: "Just launched our new design system! It's been a long journey but seeing the consistency across our products makes it all worth it. #DesignSystems #UI #UX",
    likes: 423,
    comments: 28
  },
  {
    id: 2,
    author: "David Chen",
    avatar: "",
    title: "Senior Software Engineer",
    time: "5h",
    content: "Unpopular opinion: Simple, readable code is always better than 'clever' one-liners. Maintainability is key when working in large teams.",
    likes: 1205,
    comments: 156
  },
  {
    id: 3,
    author: "TechDaily",
    avatar: "",
    title: "Technology News & Insights",
    time: "8h",
    content: "We just published a comprehensive guide on migrating from Page Router to App Router in Next.js. Check it out to modernize your stack!",
    likes: 89,
    comments: 12
  }
];


export default function App() {
  return (
    <Box sx={{ bgcolor: '#f3f2ef', minHeight: '100vh' }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ pt: { md: 10, xs: 4 }, pb: 4 }}>
        <Box sx={{ mb: 3, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 2fr", md: "1fr 2fr 1.5fr", lg: "1fr 2fr 1fr" }, gap: 2, display: { xs: "block", md: "grid" } }}>

          {/* Left Column - Profile (Hidden on XS) */}
          <Grid item xs={0} md={3} >
            <IdentityCard currentUser={currentUser} />
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>Recent</Typography>
                {['#reactjs', '#webdev', '#materialui', 'Frontend Groups'].map(tag => (
                  <Box key={tag} sx={{ display: 'flex', alignItems: 'center', mb: 1, cursor: 'pointer', color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                    <TagIcon fontSize="small" sx={{ mr: 1, fontSize: 16 }} />
                    <Typography variant="caption" fontWeight={600}>{tag}</Typography>
                  </Box>
                ))}
                <Typography variant="caption" color="primary" fontWeight={600} sx={{ cursor: 'pointer', mt: 1, display: 'block' }}>
                  Discover more
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Center Column - Feed (Full width on Mobile) */}
          <Grid item xs={12} md={6}>
            <CreatePost />
            <Divider sx={{ my: 2, display: { xs: 'block', sm: 'none' } }} />
            {feedPosts.map(post => (
              <FeedPost key={post.id} post={post} />
            ))}
          </Grid>

          {/* Right Column - News (Hidden on XS/SM) */}
          <Grid item xs={0} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
            <NewsCard />
            <Footer />
          </Grid>

        </Box>
      </Container>
    </Box>
  );
}


