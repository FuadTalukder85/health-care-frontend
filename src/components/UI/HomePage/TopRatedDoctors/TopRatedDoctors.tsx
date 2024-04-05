import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const TopRatedDoctors = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/doctor?page=1&limit=3`);
  const { data: doctors } = await res.json();
  console.log(doctors);
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75% )",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight={600}>
          Explore Treatments Across Specialities
        </Typography>
        <Typography component={"p"} fontWeight={300} fontSize={"18px"}>
          Experienced Doctora Across All Specialities
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={2}>
          {doctors.map((doctors: any) => (
            <Grid item key={doctors._id} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
