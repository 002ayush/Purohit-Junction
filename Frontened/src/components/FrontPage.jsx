import Login from "./Login";

function FrontPage() {
	return (
		<>
			<div className="m-10 flex justify-between rounded-md min-h-screen w-screen">
				<div className="h-32 w-[40rem]">
					<img src="assets/images/puja1.jpg" alt="#" />
				</div> 
        <div className="mt-20">
          <Login />
        </div>
				<div className="gap-y-30 mr-20">
					<div className="h-72 w-[25rem]">
						<img src="assets/images/puja2.jpg" alt="#" />
					</div>

					<div className="h-[20rem] w-[25rem] mt-10">
						<img src="assets/images/puja4.jpg" alt="#" />
					</div>
				</div>
			</div>
		</>
	);
}

export default FrontPage;
