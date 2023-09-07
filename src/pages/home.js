import React from 'react'
import { Header, Available, Stats, Founder, News, Donation, Footer } from "../components";

const Home = () => {
  return (
    <div className="h-full relative">
      <Header />
        <div className="mx-14">
          <Available />
          <Stats />
          <Founder />
          <News />
          <Donation />
        </div>
      <Footer />
    </div>
  );
}

export default Home