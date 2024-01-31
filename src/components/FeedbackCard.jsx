import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between  flex-col px-10 py-12 rounded-[20px]  max-w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 bg-black-gradient-2">
    <h1 className="text-[40px] text-center font-semibold text-gradient">{name}</h1>
    <div className="border-t border-white  w-44 mx-auto my-2"></div>
    <p className="font-poppins font-normal text-[16px] leading-[32.4px] text-white my-10">
      {content}
    </p>
    <div className="flex flex-row">
    </div>
  </div>
);

export default FeedbackCard;
