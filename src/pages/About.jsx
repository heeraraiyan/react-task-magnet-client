import Navbar from "../components/Navbar";


const About = () => {
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>

            <h1 className="text-6xl font-bold text-gray-950 text-center py-10">ABOUT US</h1>

           <div className="max-w-4xl mx-auto">


           <p className="text-gray-50 my-10 text-2xl"> 
            Automatically bring critical work to the forefront, even on day one. Quickly prioritize work, so new hires can spend less time organizing and more time executing.

            </p>

            <p className="text-gray-50 text-2xl pb-10" >
            Automatically bring critical work to the forefront, even on day one. Quickly prioritize work, so new hires can spend less time organizing and more time executing.
            </p>

            <p className="text-gray-50 pb-20 text-2xl">
            Everything is as transparent as possible in Asana. It’s clear where we want to go, what we have to do, and which milestones are relevant.
            </p>
           </div>
            
        </div>
    );
};

export default About;