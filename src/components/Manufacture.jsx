import React from 'react';
import '../css/manufacture.css';

function Manufacture() {
  return (
    <div className="app">
      <header className="header">
        <button className='head'>Manufacturing</button>
        <h1>Made for fabrics</h1>
        <p>
          With decades of experience, our team of skilled artisans, designers, and engineers work together to create fabrics that are both innovative and timeless. Whether you're looking for classic textiles or the latest trends, we offer a wide variety of fabrics to suit any project. We also provide custom solutions tailored to the unique needs of our clients.
        </p>
        <button className="cta-button">
          Find Out More <span className="arrow">&rarr;</span>
        </button>
         
      </header>

      <section className="card-grid">
        <div className="card large" style={{ backgroundImage: 'url(../src/assets/images/img1.jpeg)' }}>
          <div className="card-content">
            <h3>Work with focus (or friends)</h3>
            <p>Design in private and by yourself. Or co-edit in real-time. The choice is always yours.</p>
          </div>
        </div>
        <div className="card large" style={{ backgroundImage: ' url(../src/assets/images/img2.jpeg)' }}>
          <div className="card-content">
            <h3>Every point perfect</h3>
            <p>Create anything from icons to entire apps with a vector editor like no other.</p>
          </div>
        </div>
        <div className="card small" style={{ backgroundImage: 'url(../src/assets/images/img3.avif)' }}>
          <div className="card-content">
            <h3>Work effortlessly</h3>
            <p>Easy multi-layer renaming, a Canvas Minimap, and Command Bar put your workflow on rails.</p>
          </div>
        </div>
        <div className="card small" style={{ backgroundImage: 'url(../src/assets/images/img5.jpeg)' }}>
          <div className="card-content">
            <h3>Offline? Any time</h3>
            <p>Disconnect and design without compromises. Work locally, without internet, on your terms.</p>
          </div>
        </div>
        <div className="card small" style={{ backgroundImage: 'url(../src/assets/images/img3.avif)' }}>
          <div className="card-content">
            <h3>Offline? Any time</h3>
            <p>Disconnect and design without compromises. Work locally, without internet, on your terms.</p>
          </div>
        </div>
        <div className="card small" style={{ backgroundImage: 'url(../src/assets/images/img5.jpeg)' }}>
          <div className="card-content">
            <h3>Work effortlessly</h3>
            <p>Easy multi-layer renaming, a Canvas Minimap, and Command Bar put your workflow on rails.</p>
          </div>
        </div>
        <div className="card large" style={{ backgroundImage: 'url(../src/assets/images/img7.jpeg)' }}>
          <div className="card-content">
            <h3>Ready to scale</h3>
            <p>Reuse elements across your designs. Update once and watch your changes roll out everywhere.</p>
          </div>
        </div>
        <div className="card large" style={{ backgroundImage: 'url(../src/assets/images/img8.webp)' }}>
          <div className="card-content">
            <h3>Zero to done</h3>
            <p>Get started fast with 100s of free templates, Artboard presets, and component libraries.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Manufacture;
