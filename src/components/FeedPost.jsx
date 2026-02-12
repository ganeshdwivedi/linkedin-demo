import { Card, CardHeader, Avatar, IconButton, CardContent, Box, Typography, CardActions, Button, Divider } from "@mui/material";
import { MoreHoriz as MoreHorizIcon, ThumbUp as ThumbUpIcon, Comment as CommentIcon, Share as ShareIcon, Send as SendIcon, FiberManualRecord as FiberManualRecordIcon, Autorenew } from "@mui/icons-material";


const FeedPost = ({ post }) => (
    <Card sx={{ mb: 2 }}>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    {post.author[0]}
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreHorizIcon />
                </IconButton>
            }
            title={
                <Box>
                    <Typography variant="subtitle2" component="span" fontWeight={600}>
                        {post.author}
                    </Typography>
                    <Typography variant="caption" component="span" color="text.secondary" sx={{ ml: 1 }}>
                        • 1st
                    </Typography>
                </Box>
            }
            subheader={
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="caption" color="text.secondary">{post.title}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="caption" color="text.secondary">{post.time} • </Typography>
                        <FiberManualRecordIcon sx={{ fontSize: 10, ml: 0.5, color: 'text.secondary' }} />
                    </Box>
                </Box>
            }
        />
        <CardContent sx={{ py: 0 }}>
            <Typography variant="body2" color="text.primary">
                {post.content}
            </Typography>
        </CardContent>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1, mt: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ThumbUpIcon sx={{ fontSize: 14, color: 'primary.main', mr: 0.5 }} />
                <Typography variant="caption" color="text.secondary">{post.likes}</Typography>
            </Box>
            <Typography variant="caption" color="text.secondary">{post.comments} comments</Typography>
        </Box>

        <Divider />

        <CardActions sx={{ justifyContent: 'space-around' }}>
            <Button startIcon={<ThumbUpIcon />} color="inherit" size="small">Like</Button>
            <Button startIcon={<CommentIcon />} color="inherit" size="small">Comment</Button>
            <Button startIcon={<Autorenew />} color="inherit" size="small">Repost</Button>
            <Button startIcon={<SendIcon />} color="inherit" size="small">Send</Button>
        </CardActions>
    </Card>
);

export default FeedPost;

