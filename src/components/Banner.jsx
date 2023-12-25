import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero h-[750px]" style={{ backgroundImage: 'url(https://i.ibb.co/9TVW9c8/1684412077329.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Task management is the process of creating, prioritizing, delegating, and monitoring tasks to ensure they are completed within given deadlines. It also involves organizing the workflow and resolving bottlenecks to ensure efficient task completion.</p>
                      <Link to='/dashboard'>  <button className="btn btn-primary">Lets Explore</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;