

const User = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold italic text-gray-950 my-10 text-center">
                people are using this website
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 pb-20">

                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Developers</h2>
                        <p>developers require a knowledge of coding to write and debug source code for applications and software effectively.</p>
                    </div>
                    <figure><img src="https://i.ibb.co/VYpcTsS/the-programming-skills-developers-think-they-need-1000x667-1.jpg" alt="Shoes" /></figure>
                </div>


                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">corporate professionals</h2>
                        <p>corporate professionals require a knowledge of coding to write and debug source code for applications and software effectively.</p>
                    </div>
                    <figure><img src="https://i.ibb.co/BZ3LVRx/download-1.jpg" alt="Shoes" /></figure>
                </div>

                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Bankers</h2>
                        <p>Bankers require a knowledge of coding to write and debug source code for applications and software effectively.</p>
                    </div>
                    <figure className="bg-black"><img className="" src="https://i.ibb.co/xzq1Rpc/download-2.jpg" alt="Shoes" /></figure>
                </div>





            </div>

        </div>
    );
};

export default User;