'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
        
      return e( 
        'div',
        { onClick: () => this.setState({ liked: false }) },
      <button className="btn btn-primary mx-auto d-block w-100 mt-3 ">You liked this</button>
      );
    }
 

    return e(
      'span',
      { onClick: () => this.setState({ liked: true }) },
      <button className="btn btn-outline-primary w-100 mt-3 ">Like!</button>
    );
  }
}

const  domContainer = document.querySelector('#component');

ReactDOM.render(e(LikeButton), domContainer);