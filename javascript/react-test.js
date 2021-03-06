/* from: https://github.com/ahfarmer/emoji-search/blob/master/src/App.js */

import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";

/*
The code is creating a new class called App. The constructor function takes the props passed to it and uses them to create an instance of the class. 
The handleSearchChange event handler sets this.state with all the necessary changes that need to be made when a search input field is changed, 
then renders out the component's template again using ReactDOMServer rendering functions.
- generated by stenography 🤖
*/
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  /*
  This is a function that will be called when the user changes their search term.
  - generated by stenography 🤖
  */
  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      /*
      The code is creating a div with the class of "Header" and then adding an input element that will be used to search for emoji.
      - generated by stenography 🤖
      */
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}