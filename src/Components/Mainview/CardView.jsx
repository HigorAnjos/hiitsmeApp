import React from 'react';

class CardView extends React.Component {
  render() {
    const { done="done", reaction="raction", choice="choice", } = this.props;
    return (
      <>
        <div>
          <textarea value={done} />
          <textarea value={reaction} />
          <textarea value={choice} />
        </div>
      </>
    );
  }
}

export default CardView;
