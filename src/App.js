import './App.css';
import RoundedImage from './RoundedImage.jsx';

const App = () => {
  const imagePath = require('./foto.JPG');  
  return (
      <div id="container">
          <h1>RoundedImage Component</h1>
          <h3>Accept borderRadius, width, height & Source Imagen Parameters</h3>
          <h3>Grid adaptable</h3>
          <div className="example-container">
              <div className="example-item" style={{ gridRow: '1 / span 1', gridColumn: '1 / span 1' }}>
                  <RoundedImage   
                    borderRadius={0} 
                    width="100%" 
                    height="100%"
                    imagePath={imagePath}  
                  />
              </div>
              <div className="example-item" style={{ gridRow: '1 / span 2', gridColumn: '2 / span 2' }}>
                  <RoundedImage   
                    borderRadius={40} 
                    width="100%" 
                    height="100%"
                    imagePath={imagePath}    
                  />
              </div>
              <div className="example-item" style={{ gridRow: '3 / span 3', gridColumn: '1 / span 3' }}>
                  <RoundedImage   
                    borderRadius={80} 
                    width="100%" 
                    height="100%"
                    imagePath={imagePath}  
                  />
              </div>
          </div>
      </div>
  );
};

export default App;