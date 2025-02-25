import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

const SuccesStory = () => {
    return (
        <div className='mb-20'>
            <div>
                <SectionTitle title={'Success Story'}></SectionTitle>
            </div>
            <div className="success_video grid grid-cols-2 gap-6">

                    <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/l4xtqOoz3QA?si=7ZUYo-RZt__vlqmv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SH8VxZcY04g?si=yaHugx_KYXt-xE3r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UpY3cqpYTJQ?si=ftDz4e_4LhNiLIWn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>


                    <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ag3zMEJtHAA?si=Tfe37nuAtSMGrBf_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
            </div>
        </div>
    );
};

export default SuccesStory;