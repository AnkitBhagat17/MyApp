import profilePic from './assets/AnkitBhagat.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Unkown Vault</h2>
            <p className="card-text">I make Youtube videos and Play video games</p>
        </div>
    );

}

export default Card