import { Card, CardContent, Avatar, Box, Typography, Divider } from "@mui/material";


const IdentityCard = ({ currentUser }) => (
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

export default IdentityCard;