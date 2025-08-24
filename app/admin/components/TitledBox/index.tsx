import { Box, Typography, BoxProps } from '@mui/material';

interface CustomBoxProps extends BoxProps {
  title?: string;
}

export default function TitledBox({ title, children, ...boxProps }: CustomBoxProps) {
  return (
    <Box {...boxProps} sx={{ position: 'relative', border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 3, mt: 4 }}>
      <Typography
        variant="subtitle1"
        sx={{
          position: 'absolute',
          top: 0,
          left: 16,
          transform: 'translateY(-50%)',
          backgroundColor: 'background.paper',
          px: 1,
          fontWeight: 'bold'
        }}
      >
        {title}{' '}
      </Typography>
      {children}
    </Box>
  );
}
