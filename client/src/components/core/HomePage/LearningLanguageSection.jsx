import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from "../../../components/core/HomePage/Button";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";

const LearningLanguageSection = () => {
  return (
    <div>
        <div className="text-4xl font-semibold text-center my-10">
            Your swiss knife for
            <HighlightText text={"learning any language"} />
            <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-8 gap-y-4 relative">
              <div className="flex flex-col items-center lg:items-start">
                <img
                  src={Know_your_progress}
                  alt="Know your progress"
                  className="object-contain w-full max-w-[400px]"
                />
              </div>
              
              <div className="flex flex-col items-center lg:items-center lg:mx-6">
                <img
                  src={Compare_with_others}
                  alt="Compare with others"
                  className="object-contain w-full max-w-[400px] lg:translate-y-0"
                />
              </div>
              
              <div className="flex flex-col items-center lg:items-end">
                <img
                  src={Plan_your_lessons}
                  alt="Plan your lessons"
                  className="object-contain w-full max-w-[400px] lg:translate-y-0"
                />
              </div>
            </div>
          </div>

          <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="">Learn More</div>
            </CTAButton>
          </div>
    </div>
  )
}

export default LearningLanguageSection