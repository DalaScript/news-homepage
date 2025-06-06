import React from 'react';
import './Main.css'
import IntroImageMobile from '../../assets/images/image-web-3-mobile.jpg';
import IntroImageDesktop from '../../assets/images/image-web-3-desktop.jpg';
import RetroPcs from '../../assets/images/image-retro-pcs.jpg';
import TopLaptops from '../../assets/images/image-top-laptops.jpg';
import GamingImg from '../../assets/images/image-gaming-growth.jpg';
import Card from '../Card/Card';


const Main = () => {

    const newsOptions = [
        {
            title: 'Hydrogen VS Electric Cars',
            description: 'Will hydrogen-fueled cars ever catch up to EVs?',
        },
        {
            title: 'The Downsides of AI Artistry',
            description: 'What are the possible adverse effects of on-demand AI image generation?',
        },
        {
            title: 'Is VC Funding Drying Up?',
            description: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
        },
    ];

    const cardsData = [
        {
            image: RetroPcs,
            heading: 'Reviving Retro PCs',
            subheading: 'What happens when old PCs are given modern upgrades?'
        },
        {
            image: TopLaptops,
            heading: 'Top 10 Laptops of 2022',
            subheading: 'Our best picks for various needs and budgets.',
        },
        {
            image: GamingImg,
            heading: 'The Growth of Gaming',
            subheading: 'How the pandemic has sparked fresh opportunities.',
        }
    ]

    return (
        <main>
            <section className='intro'>
                <picture>
                    <source media="(min-width: 764px)" srcSet={IntroImageDesktop} />
                    <img className='intro__img' src={IntroImageMobile} alt="" />
                </picture>
                <div className='intro__text-content'>
                    <h2 className='intro__heading'>
                        The Bright Future of Web 3.0?
                    </h2>
                    <div className="intro__text-inner">
                        <p className='intro__subheading'>
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                            But is it really fulfilling its promise?
                        </p>
                        <button className='intro__btn'>
                            Read more
                        </button>
                    </div>
                </div>
            </section>
            <section className='new'>
                <h2 className='new__title'>
                    New
                </h2>
                <ul className="new__text-content">
                    {newsOptions.map((data, index) => (
                        <li className='new__group' key={index}>
                            <h3 className='new__group-heading'>{data.title}</h3>
                            <p className='new__group-subheading'>{data.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section className='cards'>
                {cardsData.map((data, index) => (<Card key={index} img={data.image} index={`0${index + 1}`} heading={data.heading} subheading={data.subheading} />))}
            </section>
        </main>
  )
}

export default Main