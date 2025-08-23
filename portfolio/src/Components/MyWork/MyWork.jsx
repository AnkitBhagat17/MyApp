import React from 'react'
import './MyWork.css';
import mywork_data from '../../assets/my_work';

const MyWork = () => {
  return (
    <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My Work</h1>
            </div>
            <div className="work-container">
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt={work.w_name} className="work-image" />;
                })}

            </div>

        </div>
  )
}

export default MyWork