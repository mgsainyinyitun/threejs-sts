import React from 'react'
import { Link } from 'react-router-dom';

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className='max-w-md opacity-80 shadow-xl sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 bg-blue-500 rounded-lg flex flex-col gap-1'>
            <p className='font-medium sm:text-xl text-center unselectable'>{text}</p>
            <br />
            <Link to={link} className='bg-white neo-brutalism-blue neo-btn rounded-lg text-blue-500 p-3 unselectable'>
                {btnText}
            </Link>
        </div>
    )
}


const HomeInfo = ({ currentStage }) => {

    const renderContent = {
        1: (
            <h1 className='lg:max-w-md opacity-80 shadow-lg unselectable sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 bg-blue-500 rounded-lg'>
                Hi, I am <span className='font-semibold'>Sai Nyi</span>
                <br />
                I am a Software Developer
            </h1>),
        2: (<InfoBox
            text={'Work with many projects and learn new technologies and picked up many skills along the way.'}
            link={'https://sainyinyitun.web.app/'}
            btnText={'Learn more'}
        />),
        3: ((<InfoBox
            text={'Lean and practice with a lot of project and create some of my own. Want to look some of them?'}
            link={'https://sainyinyitun.web.app/'}
            btnText={'Visit my portfoloio'}
        />)),
        4: ((<InfoBox
            text={'Need to contact me? Feel free to send me a message and I will get back to you as soon as possible.'}
            link={'/contact'}
            btnText={'Contact me'}
        />))
    }

    return renderContent[currentStage] || null;
}

export default HomeInfo