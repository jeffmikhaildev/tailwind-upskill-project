import { CheckCircle2, SpaceIcon } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
	return (
		<div
			id="pricing"
			className="mt-20 m">
			<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>

			<div className="flex flex-wrap">
				{pricingOptions.map((option, index) => (
					<div
						key={index}
						className="w-full sm:w-1/2 lg:w-1/3 p-3">
						<div className="p-10 border border-neutral-700 rounded-xl shadow-sm shadow-red-500 transition-all duration-300 ease-in-out hover:scale-105">
							<p className="text-4xl mb-8">
								{option.title}
								{option.title === "Pro" && <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>}
							</p>
							<p className="mb-8">
								<span className="text-4xl mt-6 mr-2">{option.price}</span>
								<span className="text-neutral-400 tracking-tight">/month</span>
							</p>

							<ul>
								{option.features.map((feature, index) => (
									<li
										key={index}
										className="mt-8 flex text-center">
										<CheckCircle2 />
										<span className="ml-2">{feature}</span>
									</li>
								))}
							</ul>

							<a
								href="#"
								className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl border border-orange-900 rounded-lg transition-all duration-300 hover:bg-orange-900 hover:text-white active:scale-95">
								Subscribe
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Pricing;
