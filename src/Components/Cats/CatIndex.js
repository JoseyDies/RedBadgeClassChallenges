import React from 'react';
import CatList from './CatList';

class CatIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
    }
  }
  render() {
    return (
      <div>
        <CatList catBreeds={this.state.breeds} />
      </div>
    );
  }
}

export default CatIndex;

// const breeds = [
//   "persian",
//   "siamese",
//   "maine coon",
//   "ragdoll",
//   "scottish fold",
//   "sphynx",
//   "british shorthair",
//   "bengal",
//   "american shorthair",
// ];

// class CatIndex extends React.Component {
//   // constructor() {
//   //   super(props);
//   // }

//   render() {
//     return (
//       <div>
//         <CatList breeds={breeds} />
//       </div>
//     );
//   }
// }

// export default CatIndex;
