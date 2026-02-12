import { Avatar, Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import { Event as EventIcon, Article as ArticleIcon, PhotoCamera as PhotoCameraIcon } from '@mui/icons-material';


const CreatePost = () => (
    <Card sx={{ mb: 2 }}>
        <CardContent>
            <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                <Avatar sx={{ bgcolor: 'primary.light' }}>AD</Avatar>
                <Box
                    sx={{
                        flexGrow: 1,
                        border: 1,
                        borderColor: 'text.disabled',
                        borderRadius: 8,
                        p: 1.5,
                        pl: 2,
                        cursor: 'pointer',
                        '&:hover': { bgcolor: 'action.hover' }
                    }}
                >
                    <Typography variant="body2" color="text.secondary" fontWeight={600}>
                        Start a post
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Button startIcon={<PhotoCameraIcon color="primary" />} size="small">Media</Button>
                <Button startIcon={<EventIcon color="warning" />} size="small">Event</Button>
                {/* <Button startIcon={<ArticleIcon color="error" />} size="small">Write article</Button> */}
            </Box>
        </CardContent>
    </Card>
);

export default CreatePost;