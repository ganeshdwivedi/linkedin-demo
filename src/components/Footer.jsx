import { Box, Stack, Typography } from "@mui/material";

const Footer = () => (
    <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1}>
            {['About', 'Accessibility', 'Help Center', 'Privacy & Terms', 'Ad Choices'].map((text) => (
                <Typography key={text} variant="caption" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                    {text}
                </Typography>
            ))}
        </Stack>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
            LinkedIn Corporation © 2024
        </Typography>
    </Box>
);


export default Footer;