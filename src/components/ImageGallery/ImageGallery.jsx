import React, { Component } from 'react';
import css from './ImageGallery.module.css';

// // import fetchPictures from 'services/pictures-api';
// import Loader from 'components/Loader/Loader';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import Button from 'components/Button/Button';
// import Modal from 'components/Modal/Modal';

// export class ImageGallery extends Component {
//   state = {
//     pictures: [],
//     searchQuery: '',
//     status: 'idle',
//     error: '',
//     showModal: false,
//     page: 1,

//   };

//   // handleClick = (e) => {

//   // }

//   // toggleModal = () => {
//   //   this.setState(({ showModal }) => ({
//   //     showModal: !showModal,
//   //   }))
//   // } 

//   // componentDidUpdate(prevProps, prevState) {
//   //   const { searchQuery } = this.props;
//   //   const { page } = this.state;

//   //   if (prevProps.searchQuery !== searchQuery) {
//   //     this.setState({ status: 'pending' });
//   //     this.resetPage();

//   //     fetchPictures
//   //       .fetchPictures(searchQuery)
//   //       .then(pictures =>
//   //         this.setState({ pictures: pictures.hits, status: 'resolved' })
//   //       )
//   //       .catch(error => this.setState({ error, status: 'rejected' }));
//   //   }

//   //   if (prevState.page !== page) {
//   //     this.updatePage({ searchQuery, page });
//   //   }
//   }

//   resetPage = () => {
//     this.setState({ page: 1 });
//   }
  
//   updatePage = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }))
//   }

//   // updateData = async ({ searchQuery, page }) => {
//   //   try {
//   //     const pictures = await 
//   //   }
//   // }
 


//   render() {
//     const { status, pictures, error, showModal } = this.state;

//     if (status === 'idle') {
//       return;
//     }
//     if (status === 'pending') {
//       return <Loader />;
//     }
//     if (status === 'rejected') {
//       return <h2>error.message</h2>;
//     }

//     if (status === 'resolved') {
//       return (
//         <>
//           <ul className={css.gallery}>
//             <ImageGalleryItem pictures={pictures} />
//           </ul>
//           {/* {showModal && <Modal pictures={pictures}/>} */}
//           <Button />
//         </>
//       );
//     }
//   }
// }

class ImageGallery extends Component {
  render() {
    return <ul className={css.gallery}>{this.props.children}</ul>;
  }
}

export default ImageGallery;

