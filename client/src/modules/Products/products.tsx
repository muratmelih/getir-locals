import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import GridItem from "../../components/GridItem/gridItem";
import { useStyles } from "./style";
import ProductFilter from "../../components/ProductFilter/productFilter";
import Product from "../../components/Product/product";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Products() {
  const classes = useStyles();
  const [page, setPage] = useState<number>(1);
  const handleChange = (event: any, value: any) => {
    setPage(value);
  };
  const items = [
    {
      tags: ["Trees"],
      price: 10.99,
      name: "Handcrafted Trees Mug",
      description:
        "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
      slug: "Handcrafted-Trees-Mug",
      added: 1485723766805,
      manufacturer: "OHara-Group",
      itemType: "mug",
    },
    {
      tags: ["Beach", "Ocean", "Water"],
      price: 19.99,
      name: "Rustic Beach Mug",
      description:
        "totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus",
      slug: "Rustic-Beach-Mug",
      added: 1481573896833,
      manufacturer: "Sipes-Inc",
      itemType: "mug",
    },
    {
      tags: ["Animal", "Bear"],
      price: 17.99,
      name: "Handcrafted Bear Mug",
      description:
        "vitae mollitia et in accusantium est voluptas officiis est non",
      slug: "Handcrafted-Bear-Mug",
      added: 1485991071829,
      manufacturer: "Weissnat-Schowalter-and-Koelpin",
      itemType: "mug",
    },
    {
      tags: ["Mountain", "Trees", "Mist", "Fog"],
      price: 20.99,
      name: "Generic Fog Shirt",
      description:
        "non ducimus explicabo fuga qui nobis libero fugiat distinctio placeat ipsam suscipit sapiente provident reprehenderit laboriosam molestiae et quae",
      slug: "Generic-Fog-Shirt",
      added: 1482047274070,
      manufacturer: "Oberbrunner-Block-and-Mills",
      itemType: "shirt",
    },
    {
      tags: ["Dog", "Animal"],
      price: 18.99,
      name: "Awesome Animal Shirt",
      description:
        "voluptatem voluptate ut expedita vel qui ullam magni iste soluta similique optio",
      slug: "Awesome-Animal-Shirt",
      added: 1483595544136,
      manufacturer: "Oberbrunner-Block-and-Mills",
      itemType: "shirt",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.textCenter}>
          <h1>Ürünler</h1>
        </Grid>
        <Grid item xs={12} className={classes.textCenter}>
          <ProductFilter></ProductFilter>
        </Grid>
        <Grid item xs={12}>
          <GridItem>sırala</GridItem>
        </Grid>
        <Grid item xs={12}>
          <Stack
            spacing={2}
            className={`${classes.margin10}`}
          >
            <Pagination count={50} page={page} onChange={handleChange} />
          </Stack>
        </Grid>
        {items.map((item,i) => {
          return (
            <Grid key={i} item xs={12} sm={4} md={3}>
              <Product item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Products;
