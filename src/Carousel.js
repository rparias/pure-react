import { Component } from "react";

class Carousel extends Component {
  state = {
    indexActiveImage: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      indexActiveImage: +event.target.dataset.index, //0 + index
    });
  };

  render() {
    const { indexActiveImage } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[indexActiveImage]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              alt="animal"
              className={index === indexActiveImage ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
