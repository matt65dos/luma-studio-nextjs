import { auth } from "@clerk/nextjs/server";

const StudioPage = async () => {
	await auth.protect();

	return (
		<div>
			Studio Page
		</div>
	);
};

export default StudioPage;