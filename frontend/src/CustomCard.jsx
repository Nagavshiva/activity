import {
    Card,
    CardContent,
    Typography,
    Divider,
    Button,
    IconButton,
    Box,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import EventIcon from "@mui/icons-material/Event";
  
  const CustomCard = () => {
    return (
      <Card
        sx={{
          width: 400,
          height: 154,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 1,
        }}
      >
        {/* Left Image Section */}
        <Box
          sx={{
            width: 130,
            height: 130,
            margin: 0.5,
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {/* Placeholder for Image */}
          <img
            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            alt="Placeholder"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
  
        {/* Right Content Section */}
        <CardContent
          sx={{
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1px",
            marginTop: '1rem',
          }}
        >
          {/* First Row: Category, Property Name, Rent Button, Close Icon */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
              <Typography
                sx={{ fontWeight: 400, fontSize: "14px", lineHeight: "12px" }}
              >
                Category:
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "12px",
                  marginLeft: 1,
                }}
              >
                Property
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ height: 15, mx: 1 }}
              />
            </Box>
            <Button
              variant="outlined"
              size="small"
              sx={{
                marginRight: 1,
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "12px",
              }}
            >
              blood donation
            </Button>
            <IconButton size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
  
          {/* Second Row: Name */}
          <Typography variant="body2" fontWeight="400" fontSize="14px">
            Property Name
          </Typography>
  
          {/* Third Row: Three Sections with Vertical Dividers */}
          <Box display="flex" alignItems="center" mt={1}>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "12px",
                mr: 0.5,
              }}
            >
              Feature 1
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "12px",
                mr: 0.5,
              }}
            >
              Feature 2
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
            <Typography
              sx={{ fontWeight: 400, fontSize: "12px", lineHeight: "12px" }}
            >
              Feature 3
            </Typography>
          </Box>
  
          {/* Fourth Row: Price and Post ID */}
          <Box display="flex" justifyContent="space-between" mt={1.5}>
            <Typography
              sx={{ fontWeight: 400, fontSize: "14px", lineHeight: "12px" }}
            >
              $1,200
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "12px",
                color: "text.secondary",
              }}
            >
              PO1234
            </Typography>
          </Box>
  
          {/* Horizontal Divider */}
          <Divider sx={{ my: 1.5 }} />
  
          {/* Fifth Row: Location and End Date with Icons */}
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <LocationOnIcon sx={{ width: 16, height: 16, mr: 0.5 }} />
              <Typography
                sx={{ fontWeight: 400, fontSize: "12px", lineHeight: "10px" }}
              >
                New York, NY
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <EventIcon sx={{ width: 16, height: 16, mr: 0.5 }} />
              <Typography
                sx={{ fontWeight: 400, fontSize: "12px", lineHeight: "10px" }}
              >
                12/31/2024
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  };
  
  export default CustomCard;
  