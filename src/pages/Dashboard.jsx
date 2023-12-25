import Navbar from "../components/Navbar";
import Draggable from 'react-draggable';


const Dashboard = () => {
    return (
       <div>
        <Navbar></Navbar>

        <h1 className="text-5xl font-bold text-gray-950 italic mt-5  text-center">DASHBOARD</h1>
         <div className="grid grid-cols-1  lg:grid-cols-3 min-h-screen gap-10 max-w-7xl mx-auto mt-20 ">

            <div className="border-2 border-x-gray-50 bg-slate-700">
                <h2 className="text-3xl text-center my-4 font-bold text-gray-200 italic">To Do </h2>

                <Draggable>
                    <div className="mx-4 my-2 bg-white">
                        <div className="border-2 border-gray-300 p-5">
                        <h1 className="text-2xl font-bold text-dark-100">
                            1. Test Task
                        </h1>
                        <p className="text-dark-50">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                        </p>
                        </div>
                    </div>
                </Draggable>

                <Draggable>
                    <div className="mx-4 my-2 bg-white">
                        <div className="border-2 border-gray-300 p-5">
                        <h1 className="text-2xl font-bold text-dark-100">
                            2. Test Task
                        </h1>
                        <p className="text-dark-50">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                        </p>
                        </div>
                    </div>
                </Draggable>

                <Draggable>
                    <div className="mx-4 my-2 bg-white">
                        <div className="border-2 border-gray-300 p-5">
                        <h1 className="text-2xl font-bold text-dark-100">
                            3. Test Task
                        </h1>
                        <p className="text-dark-50">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                        </p>
                        </div>
                    </div>
                </Draggable>
                
            </div>
            <div className="border-2 border-x-gray-50 bg-slate-700">
                <h2 className="text-center text-3xl font-bold text-gray-200 my-4 italic">OnGoing</h2>

                <Draggable>
                    <div className="mx-4 my-2 bg-white">
                        <div className="border-2 border-gray-300 p-5">
                        <h1 className="text-2xl font-bold text-dark-100">
                            1. Ongoing Task
                        </h1>
                        <p className="text-dark-50">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                        </p>
                        </div>
                    </div>
                </Draggable>

                <Draggable>
                    <div className="mx-4 my-2 bg-white">
                        <div className="border-2 border-gray-300 p-5">
                        <h1 className="text-2xl font-bold text-dark-100">
                            2. Ongoing Task
                        </h1>
                        <p className="text-dark-50">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                        </p>
                        </div>
                    </div>
                </Draggable>
                
                

            </div>
            <div className="border-2 border-x-gray-50 bg-slate-700">
                <h2 className="text-center text-3xl font-bold text-gray-200 my-4 italic ">Complete</h2>


                <Draggable>
                    <div className="mx-4 my-2 bg-white">
                        <div className="border-2 border-gray-300 p-5">
                        <h1 className="text-2xl font-bold text-dark-100">
                            1. complete Task
                        </h1>
                        <p className="text-dark-50">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                        </p>
                        </div>
                    </div>
                </Draggable>
                
                

            </div>
            
            </div>
       </div>
    );
};

export default Dashboard;