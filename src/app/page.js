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





const IdentityCard = () => (
  <Card sx={{ mb: 2, overflow: 'visible' }}>
    {/* Banner */}
    <Box sx={{ height: 60, bgcolor: 'grey.300', borderRadius: '4px 4px 0 0' }} />

    <CardContent sx={{ position: 'relative', pt: 0, pb: 1 }}>
      <Avatar
        sx={{
          width: 72,
          height: 72,
          border: '2px solid white',
          position: 'absolute',
          top: -80,
          bgcolor: 'primary.light'
        }}
      >
        AD
      </Avatar>

      <Box sx={{ mt: 5, mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
          {currentUser.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {currentUser.title}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
        <Typography variant="caption" color="text.secondary" fontWeight={600}>
          Profile viewers
        </Typography>
        <Typography variant="caption" color="primary" fontWeight={600}>
          {currentUser.views}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
        <Typography variant="caption" color="text.secondary" fontWeight={600}>
          Connections
        </Typography>
        <Typography variant="caption" color="primary" fontWeight={600}>
          {currentUser.connections}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <Box sx={{ p: 1.5, cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
      <Typography variant="caption" color="text.primary" fontWeight={600}>
        My Items
      </Typography>
    </Box>
  </Card>
);







export default function App() {
  return (
    <Box sx={{ bgcolor: '#f3f2ef', minHeight: '100vh' }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 3, pb: 4 }}>
        <Box sx={{ mb: 3, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 2fr", md: "1fr 2fr 1.5fr", lg: "1fr 2fr 1fr" }, gap: 2, display: { xs: "block", md: "grid" } }}>

          {/* Left Column - Profile (Hidden on XS) */}
          <Grid item xs={0} md={3} >
            <IdentityCard />
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


