import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from "react-markdown";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '## This is a sample h2 element\n\n*italicized subtitle*\n\n\nThis is an unordered list:\n- first item\n - second item'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (event) => {
    this.setState({input: event.target.value})
  }
  render() {
    return (
      <div>
          <h1>Markdown Previewer App</h1>
          <p>Use the text area to edit your markdown and you can see the result below.</p>
        <div class="justified">
          <textarea id="editor" onChange={this.handleChange}>{this.state.input}</textarea>
        </div>
        <div id="preview">
            <ReactMarkdown source={this.state.input} className="line-break" />
        </div>
      </div>
    );
  };
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
