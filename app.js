
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";

function App() {
  const [data, setData] = useState('');

  function extract([beg, end]) {
      const matcher = new RegExp(`${beg}(.*?)${end}`,'gm');
      const normalise = (str) => str.slice(beg.length,end.length*-1);
      return function(str) {
          return str.match(matcher).map(normalise);
      }
  }
  function getStrings(){
    const stringExtractor = extract(['{{','}}']);
    const strings = stringExtractor(data);
    console.log(strings)
    createFile()
  }
  function createFile() {
    console.log('data == ', data)
    var baseURL = 'http://localhost:4400/data';
    axios
      .post(baseURL, {
        data: data
      })
      .then((response) => {
        console.log('done----------');
      });
  }
  return (
      <>
        <div className="App">
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    setData(editor.getData());
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
            <button onClick={getStrings}>Save</button>
        </div>
    </>
  );
}

export default App;
