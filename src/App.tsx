import React from 'react';
import './App.css';
import CoverImageView from './CoverImageView'

const error = true

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', backgroundColor: '#fafafa'}}>
    <CoverImageView imgSrc={'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'} />
    {error ? 
      <p style={{ paddingLeft: 16, color: '#d8000c' }}>
        {'Unexpected error'}
      </p> : 
      <div style={{
        marginLeft: 32, 
        marginRight: 32, 
        backgroundColor: '#fafafa', 
        borderRadius: 12,
        border: '1px solid #c8c8c8',
        padding: 16,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h2>{'Card Title'}</h2>
        <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
      </div>
      }
  </div>
  );
}

export default App;
