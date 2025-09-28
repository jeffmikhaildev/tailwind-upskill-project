import { testimonials } from "../constants";

const Testimonials = () => {
	return (
		<div
			id="testimonials"
			className="mt-20 tracking-wide min-h-screen">
			<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What people are saying</h2>

			<div className="flex flex-wrap justify-center items-stretch">
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className="w-full sm:w-1/2 lg:w-1/3 p-4 flex">
						<div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin shadow-sm shadow-white flex flex-col justify-between w-full h-[275px]">
							<p className="overflow-hidden">{testimonial.text}</p>
							<div className="flex mt-8 items-start">
								<img
									className="size-12 mr-6 rounded-full border border-neutral-300"
									src={testimonial.image}
									alt={testimonial.user}
								/>
								<div>
									<h6>{testimonial.user}</h6>
									<span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
