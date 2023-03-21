import React from 'react'
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

class MyComponent extends React.Component {
  editorRef = React.createRef();

  handleClick = () => {
    this.editorRef.current.getInstance().exec("bold");
  };

  render() {
    return (
      <>
        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          initialValue="hello"
          ref={this.editorRef}
        />
        <button onClick={this.handleClick}>make bold</button>
      </>
    );
  }
}

export default MyComponent;
