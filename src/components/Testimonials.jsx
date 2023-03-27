import { ellipse } from "../assets";
import { testimonials } from "../constants";

const TestimonialCard = ({ index, name, review, icon }) => (
  <div>
    <div
      className={`bg-white rounded-md p-6 font-nunito px-20 h-full ${
        name === "Jane Doe"
          ? "lg:border-l-0 lg:border-b-0"
          : "lg:border-l lg:border-b-0"
      }  ${name === "Violet" ? "border-b-0" : "border-b"}`}
    >
      <div className="flex justify-center">
        <img
          src={icon}
          className="w-16 h-16 rounded-full object-cover shrink-0"
        />
      </div>

      <div className="text-center">
        <h3 className="font-bold text-lg text-primary-25">{name}</h3>
        <p className="text-sm text-primary-75">{review}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <div className="md:px-32 px-8 pt-20 font-nunito">
      <h2 className="text-2xl font-bold text-primary-25">Testimonials</h2>
      <div>
        <img src={ellipse} className="absolute" />
        <div className="relative mt-20 grid lg:grid-cols-3 grid-flow-row">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
