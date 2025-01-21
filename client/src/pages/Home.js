import Sidenav from '../components/Sidenav';

// root component for Home
function Home() {
    return (
        <div className = "d-flex flex-row">
            <Sidenav title = {"Home"}/>
            
            <div className = "container-fluid">
                <h1>Home</h1>
            </div>
        </div>
    );
}

export default Home;