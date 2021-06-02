import {useEffect, useState} from 'react';
import Item from "./COMPONENTS/Item";

export default function ItemList () {
const [arts, setArts] = useState (null)
useEffect ( () => {
  fetch ("https://api.artic.edu/api/v1/artworks")
  .then ( (response) => response.json () )
  .then ((data) => {
    setArts (data.data);
  });
}, []);

console.log(arts);

return (
  <CardContainer> {
    arts ?arts.map ((art) => {
      return (
        <Item key = {art.id} title = {art.title} image = {art.thumbnail.lqip}>
        {art.artist_title}
        </Item>
      );
    })
  : null    }
  </CardContainer>
);
};

export default ItemList;
