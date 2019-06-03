import React from 'react';
import Image from '../components/image/Image';

const MainRoute: React.FC = () => (
  <div className="App">
    <header className="App-header">
      Main
      <section>
        <Image
          src="https://res.cloudinary.com/cyber-viking/image/upload/v1559591234/Krajobrazy/winter_scouts_by_dream_monger-d4eb12r_wr83ui.jpg"
          width={1024}
          height={559}
        />
      </section>
    </header>
  </div>
);

export default MainRoute;
