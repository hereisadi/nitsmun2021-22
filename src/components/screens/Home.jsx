// *Components*
import { useEffect, lazy, Suspense } from 'react';
import {Link} from 'react-router-dom';

import Loading from "../Loading";

// *CSS*
import "./Home.css";

const Timer = lazy(() => import("../Timer"));
const Table = lazy(() => import("../Table"));
const Article = lazy(() => import('../Article'));
const Director = lazy(() => import('../Director'));
const Carousel = lazy(() => import('../Carousel'));

const Home = (props) => {
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  
  }, [props.title]);
  
  return (
    <Suspense fallback={<Loading/>}>
    <div className="home">

      {/*Intro Section*/}
      <div className="home-sec" id="intro">
        
        <img className="intro-bg-pic" src="/img/bg.jpg" alt="NITSMUN" />

        <div className="intro-logo">
          <img loading="lazy" src="/img/logoBigWhite.svg" alt="NITSMUN"/>
        </div>

      </div>
      
      {/*Timer Section */}
      <div className="home-sec" id="apply">
        <Timer/>
        <Link to="/apply_ST" className="btn apply-btn">Apply Now</Link>
        <Table/>

      </div>
      
      {/*Director's Message Section*/}
      <div><Director/></div>
      {/* <div className="home-sec" id="director">Director Message</div> */}

      
      {/* Glimpse from past conference */}
      <div><Carousel/></div>
      {/* Article & Social */}
      <div><Article/></div>
      
      {/*Articles Section*/}
      {/* <div className="home-sec" id="articles"><Article/></div> */}
      
      {/*Social Section*/}
      {/* <div className="home-sec" id="social">Social</div> */}

    </div>
    </Suspense>
  );
}

export default Home;