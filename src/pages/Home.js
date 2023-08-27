import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import img1 from '../images/01.png'
import img2 from '../images/01(2).png'
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="">
      <div className='header'>
        <Navbar/>
        <div className="size">
          <div className='row mt-5'>
            <div className='col-lg-6 px-4'>
              <h3>OUR TOKEN IS <span className='secondaryColor1'>LIVE</span></h3>
              <h1>APE TOKENS <span className='secondaryColor2'>WITH</span> EASE</h1>
              <p>BOOMM Project is a fully integrated system
              for you to ape with ease forget about Poocoin/Dextool or Uniswap we provide all directly in your telegram group</p>
              <button className='btn px-5 bgSecondary1'>JOIN TELEGRAM</button>
              <button className='btn px-5 bgSecondary2 mx-3'>BUY NOW!</button>
            </div>
            <div className='col-lg-6'>
              <img src={img1} alt="" style={{width: "90%"}}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 text-center bg-dark py-3 px-5 text-light'>
              <h2>182</h2>
              <p>HOLDERS</p>
            </div>
            <div className='col-lg-3 text-center bg-dark py-3 px-5 text-light'>
              <h2>30.41</h2>
              <p>STAKED[%]</p>
            </div>
            <div className='col-lg-3 text-center bg-dark py-3 px-5 text-light'>
              <h2 >34846</h2>
              <p>TOKEN MCAP [USD]</p>
            </div>
            <div className='col-lg-3 text-center bg-dark py-3 px-5 text-light'>
              <h2>1024</h2>
              <p>VOLUME TRADED [BNB]</p>
            </div>
          </div>
        </div>
      </div>
      <div className='' id='about'>
        <div className='size row'>
          <div className='col-lg-6 row'>
            <div className=' w-100'>
              <img src={img2} alt="" className='w-100'/>
            </div>
          </div>
          <div className='col-lg-6'>
            <div>
              <h4>THE STORY</h4>
              <h1>ABOUT US</h1>
              <p>BOOMM is not just a sniper bot or trading bot, we have built a full integrated system including buybot, walletbot, safecheck and trading bot all direct within telegram. Eliminating the need to use exchanges such as, Dextools, Poocoin, Uniswap and Pancakeswap, we provide all this to you directly in your community group.</p>
            </div>
            <div>
              <h4>OUR VISIONS</h4>
              <h1>UTILITY THAT SERVES THE COMMUNITY</h1>
              <p>In 98% of tokens the devs just build utility to pump the chart. BOOMM is different, we aim to solve real problems in crypto space.</p>
              <p>All the BOOMM utilities are interconnected and work together to provide the best user experience possible.</p>
            </div>
            <div className='row'>
              <div className="col-6">

              </div>
              <div className="col-6">

              </div>
            </div>
            <div>
              <button className='btn px-5 bgSecondary1'>JOIN TELEGRAM</button>
              <button className='btn px-5 bgSecondary2 mx-3'>BUY NOW!</button>
            </div>
          </div>
        </div>
      </div>
      <div className='' id='roadmap'>
        <div className='size text-center'>
          <p>ROADMAP</p>
          <h1>HOW IT ALL STARTED</h1>
        </div>
      </div>
      <div className='' id='team'>
        <div className='size text-center'>
          <p>TEAM MEMBER</p>  
          <h1>MEET THE CREW</h1>
          <div className='row'>
            <div className='col-lg-6 row'>
              <div className="col-6">
                <img src="" alt="" />
              </div>
              <div className="col-6">
                <h2>YOP</h2>
                <p>Lead DEV</p>
                <p>With more than 14years experiences as fullstack engineer and entrepreneur in heart, always looking for challenges.
                Love the crypto world, and started BOOMM just for fun but now its become a full time projects with a real market and business model.</p>
              </div>
            </div>
            <div className='col-lg-6 row'>
              <div className="col-6">
                <img src="" alt="" />
              </div>
              <div className="col-6">
                <h2>HECKER</h2>
                <p>Team (Co.)</p>
                <p>CrYpto enthusiasts from og bsc times 2020 , love helping out and finding true gems. Hardworker and always grinding for success. LFG</p>
              </div>
            </div>
            <div className='col-lg-6 row'>
              <div className="col-6">
                <img src="" alt="" />
              </div>
              <div className="col-6">
                <h2>KLEPPELEKKER</h2>
                <p>Team (Community Manager)</p>
                <p>In cryptospace for few years already. Experience as part of teams also couple of years. As part of the BooMM team we can 💣 this one.</p>
              </div>
            </div>
            <div className='col-lg-6 row'>
              <div className="col-6">
                <img src="" alt="" />
              </div>
              <div className="col-6">
                <h2>BUSDED</h2>
                <p>Team (twitter)</p>
                <p>I'm a graphics designer. Being part of BooMM allows me to shape the project's identity due to my passion , translating its potential into compelling graphics, fostering user understanding, and ultimately, contributing to the widespread adoption of this cryptocurrency, especially on BSC.</p>
              </div>
            </div>
            <div className='col-lg-6 row'>
              <div className="col-6">
                <img src="" alt="" />
              </div>
              <div className="col-6">
                <h2>JAMES</h2>
                <p>Social twitter</p>
                <p>An avid crypto enthusiast who has experience and knowlage in marketing products via social media platforms.</p>
              </div>
            </div>
            <div className='col-lg-6 row'>
              <div className="col-6">
                <img src="" alt="" />
              </div>
              <div className="col-6">
                <h2>SHAM</h2>
                <p>Team (Pusher)</p>
                <p>As a crypto lover, I am passionate about the world of cryptocurrencies. I have been actively involved in the crypto community, staying updated with the latest news, trends, and advancements. I enjoy exploring different blockchain projects, understanding their innovations, and evaluating their potential for future growth.</p>
              </div>
            </div>
            <div className='col-lg-6 row'>
              <div className="col-6">
                <img src="" alt="" />
              </div>
              <div className="col-6">
                <h2>EDO</h2>
                <p>Team</p>
                <p>I'm not just your average Joe, I'm the crypto wizard who's been enchanting the trading world for over 3 magical years! I've honed my skills in degens and tamed the wild crypto market with my trading prowess. I can read charts like a fortune teller and predict market trends with uncanny accuracy (well, most of the time). Join me on this exhilarating rollercoaster ride through the realms of cryptocurrencies as we seek fortune and adventure! Trust me, in this magical land of crypto, I'm the trader you want by your side.</p>
              </div>
            </div>
            <div className='col-lg-6 row'>
              <div className="col-6">
                <img src="" alt="" />
              </div>
              <div className="col-6">
                <h2></h2>
                <p></p>
                <p>OG in Crypto Space , been working long time as Mod , Marketer , Shiller. Took a break from crypto & went to Market NFTs , now I’m back to 💣 your Mom . PS : no amazing proposal ser</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='' id='fag'>
        <div className='size text-center'>
          <p>QUESTIONS AND ANSWERS</p>
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
      </div>
      <div className='' id='community'>
        <div className='size'>
          <p className='text-center'>OUR COMMUNNITY</p>
          <h1 className='text-center'>JOIN OUR COMMUNITY AND GET EARLY ACCESS</h1>
          <div className='d-flex justify-content-center'>
              <button className='btn px-5 bgSecondary1'>JOIN TELEGRAM</button>
              <button className='btn px-5 bgSecondary2 mx-3'>BUY NOW!</button>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home