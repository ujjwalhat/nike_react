import {services} from "../constants";
import ServiceCard from "../components/ServiceCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Services = () => {
  return (
    <div className="max-container">
      <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__bounceInUp" : "animate__animated animate__bounceOutUp"}>
      <h3 className="font-planquin text-center text-4xl font-bold  mb-6">Services</h3>
     
     <div className=" mt-6 max-container flex justify-center flex-wrap gap-9">
      {services.map((service)=>(
        <ServiceCard key = {service.label}
        {...service}/>

      ))}
      </div>

      </div>}
      </TrackVisibility>
    </div>
  )
}

export default Services