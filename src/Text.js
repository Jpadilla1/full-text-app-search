import React from 'react';
import { observer } from 'mobx-react';
import uuid from 'uuid';

import SearchText from './SearchText';

class Text extends React.Component {
  highlightText = () => {
    let origText = this.props.children;
    let text = [];

    if (SearchText.searchText.length > 0) {
    
      const re = new RegExp(SearchText.searchText, 'gi');
      const styles = {
        backgroundColor: SearchText.backgroundColor,
        color: SearchText.color,
        fontWeight: 'bold'
      };
      const template = (text) => <span key={uuid.v4()} style={styles}>{text}</span>;
      var match, lastIndex = 0;

      while ((match = re.exec(origText)) != null) {
        text.push(origText.substring(lastIndex, match.index));
        text.push(template(match[0]));
        lastIndex = match.index + match[0].length;
      }
      text.push(origText.substring(lastIndex, origText.length));
    } else {
      text.push(<span>{origText}</span>);
    }

    return (
      <span>
        {text}
      </span>
    );
  };
  render() {
    const content = this.highlightText();
    return <span {...this.props}>{content}</span>;
  };
};

Text.propTypes = {
  children: React.PropTypes.string.isRequired
};

export default observer(Text);