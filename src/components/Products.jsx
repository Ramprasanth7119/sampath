import React from 'react';
import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img1.jpeg';
import img3 from '../assets/images/img3.avif';
import img4 from '../assets/images/img7.jpeg';
import img5 from '../assets/images/img8.webp';
import img6 from '../assets/images/img7.jpeg';
import img7 from '../assets/images/img8.webp';
import img8 from '../assets/images/img7.jpeg';
import img9 from '../assets/images/img8.webp';
import img10 from '../assets/images/img7.jpeg';
import img11 from '../assets/images/img8.webp';
import img12 from '../assets/images/img7.jpeg';
import img13 from '../assets/images/img8.webp';
import img14 from '../assets/images/img7.jpeg';
import img15 from '../assets/images/img8.webp';

import '../css/Product.css';

function Products() {
  return (
    <div className="home-app">
      <header className="home-header">

      <button className="home-header-tag">PRODUCTS</button>

        <div className="line">
            <h1>Products At Our Care</h1>
            <button className="home-cta-button">
            Explore <span className="home-arrow">&rarr;</span>
            </button>
        </div>
        
        
        <p>
          Nothing beats trying your products out to see if they work. So we made doing that as easy as possible. Get comfy fabrics in no time at all.
        </p>
        
      </header>

        <section className="home-row home-row-full">
        {[
            { img: img1, title: "Interior Fabrics", description: "From luxurious fabrics to sustainable materials..." },
            { img: img2, title: "Garments", description: "Transform your living space with our exquisite textile collections..." },
            { img: img3, title: "Textile Accessories", description: "What began with handkerchiefs has now grown to encompass..." }
        ].map((item, index) => (
            <div key={index} className="home-card-full" style={{ backgroundImage: `url(${item.img})` }}>
                <div className="home-card-content">
                    <button className="manufacturing-button">Manufacturing</button>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
                <div className="arrow-circle">
                    <span className="arrow">&rarr;</span>
                </div>
                    </div>
            ))}
        </section>

        <section className="home-row home-row-scroll">
            {[
                { img: img4, title: "Offline? Any time", description: "Disconnect and design without compromises. Work locally, without internet, on your terms." },
                { img: img5, title: "Work effortlessly", description: "Easy multi-layer renaming, a Canvas Trim, and a Command Bar put your workflow on rails." },
                { img: img6, title: "Every point perfect", description: "Create anything from icons to entire apps with a vector editor like no other." },
                { img: img7, title: "Zero to done", description: "Get started fast with 100s of free templates, Artboard presets, and component Libraries." },
                { img: img8, title: "Offline? Any time", description: "Disconnect and design without compromises. Work locally, without internet, on your terms." },
                { img: img9, title: "Work effortlessly", description: "Easy multi-layer renaming, a Canvas Trim, and a Command Bar put your workflow on rails." },
                { img: img10, title: "Every point perfect", description: "Create anything from icons to entire apps with a vector editor like no other." },
                { img: img11, title: "Zero to done", description: "Get started fast with 100s of free templates, Artboard presets, and component Libraries." },
                { img: img12, title: "Offline? Any time", description: "Disconnect and design without compromises. Work locally, without internet, on your terms." },
                { img: img13, title: "Offline? Any time", description: "Disconnect and design without compromises. Work locally, without internet, on your terms." },
                { img: img14, title: "Offline? Any time", description: "Disconnect and design without compromises. Work locally, without internet, on your terms." },
                { img: img15, title: "Offline? Any time", description: "Disconnect and design without compromises. Work locally, without internet, on your terms." },
            ].map((item, index) => (
                <div key={index} className="home-card-scroll" style={{ backgroundImage: `url(${item.img})` }}>
                    <div className="home-card-content2">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </section>
    </div>
  );
}

export default Products;
