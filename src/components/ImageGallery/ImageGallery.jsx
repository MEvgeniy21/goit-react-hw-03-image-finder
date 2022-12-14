import PropTypes from 'prop-types';
import * as SC from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Component } from 'react';
import Modal from 'components/Modal';

const INITIAL_GALLERY = {
  isModalOpen: false,
  urlImg: '',
  altImg: '',
};

export default class ImageGallery extends Component {
  state = {
    ...INITIAL_GALLERY,
  };

  handleClickPhoto = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    this.setState({
      isModalOpen: true,
      urlImg: e.target.dataset.image,
      altImg: e.target.getAttribute('alt'),
    });
  };

  handleClickModal = e => {
    if (e.target.nodeName === 'IMG') {
      return;
    }

    this.resetState();
  };

  handleKeyPressModal = e => {
    if (e.keyCode !== 27) {
      return;
    }

    this.resetState();
  };

  resetState = () => {
    this.setState({
      ...INITIAL_GALLERY,
    });
  };

  render() {
    const { isModalOpen, urlImg, altImg } = this.state;
    const { photos } = this.props;

    return (
      <>
        <SC.Gallery onClick={this.handleClickPhoto} className="gallery">
          {photos.length !== 0 &&
            photos.map(({ id, webformatURL, largeImageURL, tags }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  srcImg={webformatURL}
                  altImg={tags}
                  dataImg={largeImageURL}
                />
              );
            })}
        </SC.Gallery>
        {isModalOpen && (
          <Modal
            onClickModal={this.handleClickModal}
            onKeyPressModal={this.handleKeyPressModal}
            urlImg={urlImg}
            altImg={altImg}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
