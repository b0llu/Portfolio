import { Grid } from "@chakra-ui/react";

export const GridLayout = ({ children }) => {
  return (
    <Grid
      templateAreas={`"header header header"
                    "main main main"
                    "footer footer footer"`}
      gridTemplateRows={"1fr 1fr 1fr"}
      gridTemplateColumns={"1fr 1fr 1fr"}
      h="200px"
      color="#272727"
      fontWeight="bold"
      fontFamily={"Montserrat"}
    >
      {children}
    </Grid>
  );
};
