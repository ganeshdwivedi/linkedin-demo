import { Box } from "@mui/material";

const TagIcon = (props) => (
    <Box component="span" sx={{ fontSize: 16, mr: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} {...props}>
        #
    </Box>
);

export default TagIcon;