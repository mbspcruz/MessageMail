import { ellipse } from "../assets";
import { testimonials } from "../constants";

const TestimonialCard = ({ index, name, review, icon }) => (
  <div>
    <div
      className={`bg-white p-6 font-nunito px-20 h-full ${
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

      <div className="text-center mt-4">
        <h3 className="font-bold text-lg text-primary-25 mb-4">{name}</h3>
        <p className="text-sm text-primary-75">{review}</p>
      </div>
      <div class="flex justify-center mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#f0b55b"
            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#f0b55b"
            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#f0b55b"
            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#f0b55b"
            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#f0b55b"
            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z"
          />
        </svg>
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
