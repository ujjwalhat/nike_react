import Button from "../components/Button"
import {shoe8} from "../assets/images"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const SuperQuality = () => {
  return (
    <div>
     <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__backInRight" : "animate__animated animate__backOutLeft"}>
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
    <div className="flex flex-1  flex-col">

        <h2 className="font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
           We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red "> Quality 
          </span> Shoes
          <br/>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, out meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className=",t-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
        <Button label="Shop now"/>
        </div>
    </div>
    <div className="flex-1 flex justify-center items-center">
      <img src={shoe8} alt="shoe8" width={570} height={522} 
      className="object-contain"/>
    </div>
    </section>
    </div>}
      </TrackVisibility>
      </div>
  )
}


export default SuperQuality