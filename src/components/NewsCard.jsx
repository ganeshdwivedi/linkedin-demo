import { newsItems } from "@/variables/Constant";
import { FiberManualRecord } from "@mui/icons-material";
import { Card, Box, CardHeader, List, ListItem, ListItemText, Typography, Button } from "@mui/material";


const NewsCard = () => (
    <Card>
        <CardHeader
            title="LinkedIn News"
            titleTypographyProps={{ variant: 'subtitle1', fontWeight: 600 }}
            action={<Box component="span" sx={{ fontSize: 12, color: 'text.secondary', p: 1 }}>i</Box>}
            sx={{ pb: 0 }}
        />
        <List dense>
            {newsItems.map((item, index) => (
                <ListItem key={index} alignItems="flex-start" sx={{ px: 2, py: 0.5, cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                    <FiberManualRecord sx={{ fontSize: 8, mt: 1, mr: 1, color: 'text.secondary' }} />
                    <ListItemText
                        primary={
                            <Typography variant="body2" fontWeight={600} noWrap>
                                {item.title}
                            </Typography>
                        }
                        secondary={
                            <Typography variant="caption" color="text.secondary">
                                {item.time} • {item.readers} readers
                            </Typography>
                        }
                    />
                </ListItem>
            ))}
        </List>
        <Button size="small" sx={{ ml: 1, mb: 1, color: 'text.secondary' }}>Show more</Button>
    </Card>
);

export default NewsCard;