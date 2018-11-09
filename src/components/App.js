import React, { Component } from 'react';
import image from '../img/vumbulaitem.png';
import { ItemCard } from "./ItemCard";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Jumbtron } from "./Jumbtron";
import { AddItem } from "./AddItem";

class App extends Component {
  state = {
    name: '',
    price: '',
    items: [
      {
        id: 1,
        name: "Noodles",
        price: "15"
      },
      {
        id: 2,
        name: "Mangoes",
        price: "10"
      },
      {
        id: 3,
        name: "Oranges",
        price: "20"
      },
      {
        id: 4,
        name: "Passion Fruits",
        price: "14"
      }
    ]
  };

  handleInputChange = ({ target }) => {
    this.setState(() => ({
      [target.name]: target.value
    }));
  }

  addItem = (event) => {
    event.preventDefault();
    const { name, price, items } = this.state;
    const newStateItems = items.concat([{
      id: items.length + 1,
      name,
      price,
    }])
    this.setState(() => ({ items: newStateItems }));
    console.log(newStateItems)
  }

  render() {
    const {
      state: { name, price },
      handleInputChange,
      addItem
    } = this;
    return <div>
      <Nav />

      <Jumbtron />

      <div className="container pt-4">

        <AddItem
          onChange={handleInputChange}
          onSubmit={addItem}
          name={name}
          price={price}
        />

        <h1 className="display-4 my-4 text-center text-muted">Items</h1>

        <div className="row">
          {
            this.state.items.map((item, index) =>
              <ItemCard
                key={item.id}
                index={index}
                image={image}
                item={item}
              />
            )
          }
        </div>

        <hr />
        <Footer />
      </div>
    </div>;
  }
}

export default App;
