import React from 'react';
import HeaderComponent from '../../common-components/HeaderComponent';
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../../assets/img1.jpg';
import Img2 from '../../assets/img2.jpg';
import Img3 from '../../assets/img3.jpg';
import CardComponent from '../../common-components/CardComponent';
import PlacementImg from '../../assets/placementImg.png';
import CourseImg from '../../assets/courseImg.png';
import StaffImg from '../../assets/staffImg.png';
import UpdateImg from '../../assets/updatesImg.png';
import { useLocation } from 'react-router-dom';
import DataTable from '../../common-components/DataTable';
import constants from '../../constants/constants';

export default function Home() {
  const { state } = useLocation();
  const loginDetails = state && state.name;
  return (
    <div className="home-details">
      <HeaderComponent showUser={state && state.name} />
      <div className="carousel-main">
        <Carousel autoPlay={true} interval={5000} showArrows={false} showStatus={false} showThumbs={false}>
          <div>
            <img src={Img1} alt="Not Available" className="carousel-image" />
          </div>
          <div>
            <img src={Img2} alt="Not Available" className="carousel-image" />
          </div>
          <div>
            <img src={Img3} alt="Not Available" className="carousel-image" />
          </div>
        </Carousel>
      </div>
      {loginDetails === null && (
        <div className="card-component-main">
          <CardComponent imageProp={CourseImg} cardHeader="Online Courses" />
          <CardComponent imageProp={StaffImg} cardHeader="Meet our Staff" />
          <CardComponent imageProp={UpdateImg} cardHeader="Latest Updates" />
          <CardComponent imageProp={PlacementImg} cardHeader="Placements" />
        </div>
      )}
      <DataTable tableCols={constants.columnHeader} />
    </div>
  );
}
