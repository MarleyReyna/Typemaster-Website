import React from 'react';
import './Main.scss';
import comp from './Images/icon-compatible.svg';
import bluetooth from './Images/icon-bluetooth.svg';
import battery from './Images/icon-battery.svg';
import light from './Images/icon-light.svg';


const Main = () => {
    return (
        <main>
            <section className='first-section'>
                <section className='top-section'>
                    <div className='left-div'>
                        <h1>Typemaster <br />keyboard</h1>
                        <p>
                            Improve your productivity and gaming 
                            without breaking the bank. Upgrade to 
                            a high quality mechanical typing experience.
                        </p>
                        <div>
                            <a href='https://github.com/MarleyReyna'>
                                Pre-order now
                            </a>
                            <p>Release on 5/27</p>
                        </div>
                    </div>
                    <div className='right-div'>
                    </div>
                </section>
                <section className='bottom-section'>
                        <div className='keyboard-phone'>
                            <div className='orange-filter'/>
                        </div>
                        <div className='keyboard-glass' />
                    <div className='text-container'>
                        <h2>mechanical wireless keyboard</h2>
                        <p>
                            The Typemaster keyboard boasts top-notch 
                            build and practical design. It offers a 
                            wide variety of switches and keycaps, 
                            along with reliable wireless connectivity.
                        </p>
                    </div>
                </section>
            </section>
            <section className='second-section'>
                <ul>
                    <li className='comp'>
                        <div>
                            <img src={comp} 
                            alt=''
                            aria-hidden='true' />
                        </div>
                        <h3>Highly <br />Compatible</h3>
                        <p>
                            Easy to use and works well 
                            with all major computer brands, 
                            gaming consoles and mobile devices. 
                            Plug & play, no installation or 
                            driver needed.
                        </p>
                    </li>
                    <li className='bluetooth'>
                        <div>
                            <img src={bluetooth} 
                            alt=''
                            aria-hidden='true'/>
                        </div>
                        <h3>Wireless <br />with Bluetooth</h3>
                        <p>
                            Powerful 2.4G RF technology 
                            allows you to connect the cordless 
                            keyboard from up to 30ft away. 
                            Simply plug the unifying receiver 
                            into your computer.
                        </p>
                    </li>
                    <li className='battery'>
                        <div>
                            <img src={battery} 
                            alt=''
                            aria-hidden='true'/>
                        </div>
                        <h3>High Capacity <br />Battery</h3>
                        <p>
                            Equipped with a long-lasting 
                            built-in battery, you’ll never 
                            have to spend a dime on replaceable 
                            ones. Enjoy 40 hours of usage time 
                            between charges.
                        </p>
                    </li>
                    <li className='light'>
                        <div>
                            <img src={light} 
                            alt=''
                            aria-hidden='true'/>
                        </div>
                        <h3>RGB Backlit <br />Modes</h3>
                        <p>
                            Choose from 4 backlight brightness 
                            levels and adjustable breathing speed. 
                            Each key glows intensely in the dark 
                            and helps you type in low light conditions.
                        </p>
                    </li>
                </ul>
            </section>
        </main>
    );
}
 
export default Main;