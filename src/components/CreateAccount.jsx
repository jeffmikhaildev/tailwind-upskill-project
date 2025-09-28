const CreateAccount = () => {
	return (
		<div className="flex justify-center items-center min-h-screen bg-neutral-900">
			<div className="bg-neutral-800 p-8 rounded-lg shadow-lg w-full max-w-md border border-neutral-700">
				<h2 className="text-3xl font-semibold text-center mb-6">Create Account</h2>

				<form className="space-y-4">
					<input
						type="text"
						placeholder="Full Name"
						className="w-full px-4 py-2 border border-neutral-600 rounded-md bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
					/>
					<input
						type="email"
						placeholder="Email"
						className="w-full px-4 py-2 border border-neutral-600 rounded-md bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
					/>
					<input
						type="password"
						placeholder="Password"
						className="w-full px-4 py-2 border border-neutral-600 rounded-md bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
					/>

					<button className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md text-white font-semibold transition-all duration-300 hover:scale-105">Create Account</button>
				</form>

				<p className="mt-6 text-center text-sm text-neutral-400">
					Already have an account?{" "}
					<a
						href="/signin"
						className="text-orange-500 hover:underline">
						Sign in
					</a>
				</p>
			</div>
		</div>
	);
};

export default CreateAccount;
