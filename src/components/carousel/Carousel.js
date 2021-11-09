import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

function Carousels(props) {
  var items = [
    {
      name: "Random Name #1",

      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7a%2F7d%2Fcf%2F7a7dcfa6474ec4cbfa81113eebe3c0dc.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F266275396704196379%2F&tbnid=IgSHDOl9_6Sy0M&vet=12ahUKEwj8n8aRt4v0AhXKEYgKHbWSDrUQMygAegUIARCzAQ..i&docid=Dvi81dcnrZrJkM&w=1280&h=720&q=background%20images%20anime&ved=2ahUKEwj8n8aRt4v0AhXKEYgKHbWSDrUQMygAegUIARCzAQ",

      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      duration={500}
      interval={1500}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <img
        src="https://cdn.bookingcare.vn/fr/w200/2021/01/14/160049-bs-hoai-huong.jpg"
        alt="................................"
      />
    </Paper>
  );
}
export default Carousels;
