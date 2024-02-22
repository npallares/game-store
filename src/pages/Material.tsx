import { Box, Button, Container, Grid, Typography } from "@mui/material";
// import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const Material = () => {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            veritatis dolorem, magni dolores iusto quod molestias ea facilis
            quia reiciendis nobis inventore rerum consequuntur incidunt non
            consectetur. Amet, delectus praesentium.
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            veritatis dolorem, magni dolores iusto quod molestias ea facilis
            quia reiciendis nobis inventore rerum consequuntur incidunt non
            consectetur. Amet, delectus praesentium.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            veritatis dolorem, magni dolores iusto quod molestias ea facilis
            quia reiciendis nobis inventore rerum consequuntur incidunt non
            consectetur. Amet, delectus praesentium.
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Material;

// PRIMER RETURN

/*  return (
    <Container
    maxWidth="md"
     sx={{
       boxShadow: 2,
       p: 2,
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       flexDirection: "column",
     }}
   >
   <Typography variant="h4">Hola Material UI</Typography>
   <Typography variant="body1">Hola soy un Typography</Typography>
   <Button variant="contained">Mi primer boton</Button>
   </Container>
   ); */

//SEGUNDO RETURN

/*  return (
      <Container maxWidth="md">
        <Typography variant="h4">Hola Material UI</Typography>
        <Box
          sx={{ border: 1, p: 3, bgcolor: "#111", color: "white" }}
          component="section"
        >
          Soy una Box
        </Box>
        <Button variant="contained" endIcon={<SportsEsportsIcon />}>
          Mi primer boton
        </Button>
        <Button
          variant="outlined"
          color="success"
          startIcon={<SportsEsportsIcon />}
        >
          Mi primer boton
        </Button>
      </Container>
    ); */
