// write your CatList component here
import React, { Component } from "react";

class CatList extends Component {
  makeCats = () => {
    return this.props.catPics.map(catPic => (
      <img src={catPic.source_url} alt="picture"></img>
    ));
  };
  render() {
    return <ul>{this.makeCats()}</ul>;
  }
}

export default CatList;
