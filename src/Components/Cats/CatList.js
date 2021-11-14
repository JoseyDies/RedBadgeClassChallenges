import React from 'react';

const CatList = (props) => {
  console.log(props.catBreeds);
  return (
    <div>
      {props.catBreeds.map(cats => {
        return (<li key={cats}>{cats}</li>)
      }
      )}
    </div>
  )
}

export default CatList;

// import React from "react";

// class CatList extends React.Component {
//   render() {
//     const cats = () => this.props.breeds.map((breed) => <li>{breed}</li>);
//     return (
//       <div>
//         <ul>{cats()}</ul>
//       </div>
//     );
//   }
// }

// export default CatList;