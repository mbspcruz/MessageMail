import { features } from "../constants";
const FeatureCard = ({ index, title, subtitle, icon }) => (
  <div>
    <div className="bg-white rounded-md p-6 w-full h-full flex items-center shadow-lg font-nunito">
      <img src={icon} className="w-16 h-16 object-contain shrink-0" />
      <div className=" pl-6">
        <h3 className="font-bold text-lg text-primary-25">{title}</h3>
        <p className="text-sm text-primary-75">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default function Features() {
  return (
    <div id="about" className="max-w-full bg-primary-95 md:px-32 px-8 py-20">
      <h2 className="font-nunito text-2xl font-bold text-primary-25">
        What we offer
      </h2>
      <div className="grid grid-flow-row lg:grid-cols-3 py-8 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} index={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
