import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { showModal } = this.state;

    return (
      <li>
        <Image
          src={webformatURL}
          alt={tags}
          width="300"
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal large={largeImageURL} alt={tags} onClose={this.toggleModal} />
        )}
      </li>
    );
  }
}
