const Home = () => {
    const clickMe =(e) => {
        console.log('click Me', e)
    }
    const clickMeAgain =(name, e) => {
        console.log("Hello its me again", name, e.target)
    }
    return (  
        <div className="home">
            <h2>Homepage</h2>
           <button onClick={clickMe}>Click Me</button>
           <button onClick={(e) => {clickMeAgain("Ken",e)}}>Click Me again</button>
        </div>
    );
}
 
export default Home;