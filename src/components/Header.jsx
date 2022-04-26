const Header = () => {
    return ( 
        <div className="headTop container shadow-sm pb-3 mb-3">
            <div className=" px-5 d-flex justify-content-between head">
            <div className="headName">
                <h1>ONE-STOP NEWS</h1>
                <p>All Round News Aggregator</p>
            </div>
            <div className=" rightText">
                <p>Built as a course project by:</p>
                <div className="sideBox2">
                    <p className="byName text-white" >Olufemi Ademiju</p>
                    <div className="circles">
                        <div className="bgCircle "></div>
                        <div className="otherCircle two"></div>
                        <div className="otherCircle three"></div>
                        <div className="otherCircle four"></div>
                        <div className="otherCircle five"></div>
                        <div className="otherCircle six"></div>
                        <div className="otherCircle seven"></div>
                        {/* <div className="otherCircle eigth"></div> */}
                    </div>

                </div>
                

            </div>
            </div>
        </div>
     );
}
 
export default Header;