import women from '../../assets/women.png';
import womenrv from '../../assets/womenrv.png';




function Home() {
  return (
    <>
    <div className="App " class=' font-Display'>
    <div className='navBar ' class="  p-14 flex justify-between  ">
      <a class='font-extrabold text-2xl  '>D&C</a>
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 inline-block  ">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
    </div>
    <div className='desc-section' class='flex flex-row  '>
    <div className='desc-cont'>
        <div className='title'>
          <div className='fst-title  ' class='flex  flex-row '>
            <div className='f-fst-title'><h1  class='font-extrabold text-9xl pl-24 ' >DESIGN</h1></div>
            <div className='s-fst-title' class='font-extrabold text-9xl  ' ><h1>&nbsp;&</h1></div>
            </div>
            <div>
            <div className='th-fst-title'><h1 class='font-extrabold text-9xl pl-24 '>CREATION</h1></div>   
            </div>
            <div class='w-3/4 '>
              <p class='pl-24  text-lg font-light leading-9 text-inherit text-gray-600'>Velit mi auctor eget non maecenas urna orci sed. Mi aliquam a risus, nunc. Morbi urna faucibus aliquet eget facilisi proin scelerisque bibendum iaculis.</p>
              </div>
              <a>
                <div class='bg-black font-extrabold  text-white  text-center py-3 w-32 ml-24 my-10 h-12 '>Discover</div>
              </a>
              <div class='flex flex-row justify-evenly text-gray-600 text-sm font-bold'>
                
                <div >Design</div>
                <div >.</div>
                <div >Photography</div>
                <div >.</div>
                <div >Branding</div>
                <div >.</div>
                <div>UX Design</div>
                
              </div>
              </div>
              </div>
      <div className='desc-pic' class='-mt-40 w-full border-l-sky-700' ><img class='w-full  border-l-sky-700' src={women} ></img></div>
      </div>
              <div className='About ' class=' font-Display'>
                <div className='ttl-abt'>
                  <h1 class='pl-24 font-BOLD text-5xl absolute py-8 px-1'>About</h1>
                  <div class='opacity-5  font-bold text-9xl w-auto ml-12 my-4'>About</div>
                  </div>
                <div class='w-3/4 '>
              <p class='pl-24  text-lg font-light leading-8 text-inherit text-gray-600'>
                 Facilisis hendrerit sit tellus dignissim. Neque, a, pellentesque duis magna nisi etiam volutpat. Cursus volutpat facilisi eu aliquet volutpat sodales id. Leo lorem adipiscing posuere varius. Aliquet ut faucibus id sed nisl. Id id egestas nunc, lorem quam. Tincidunt vel duis at interdum cursus sem. A elit risus aenean lacus pharetra.</p>
              </div>
              <a>
                <div class='bg-black font-extrabold  text-white  text-center py-3 w-44 ml-24 my-10 h-12 '>More about me</div>
              </a>


              </div>



              <div className='Services ' class=' font-Display'>
                <div className='ttl-srv'>
                  <h1 class='pl-24 font-BOLD text-5xl absolute py-8 px-1'>Services</h1>
                  <div class='opacity-5  font-bold text-9xl w-auto ml-12 my-4'>Services</div>
                  </div>
                <div class='w-3/4 '>
              <p class='pl-24  text-lg font-light leading-8 text-inherit text-gray-600'>
                 Facilisis hendrerit sit tellus dignissim. Neque, a, pellentesque duis magna nisi etiam volutpat. Cursus volutpat facilisi eu aliquet volutpat sodales id. Leo lorem adipiscing posuere varius. Aliquet ut faucibus id sed nisl. Id id egestas nunc, lorem quam. Tincidunt vel duis at interdum cursus sem. A elit risus aenean lacus pharetra.</p>
              </div>
              <a>
                <div class='bg-black font-extrabold  text-white  text-center py-3 w-44 ml-24 my-10 h-12 '>Discover</div>
              </a>


              </div>
              
              <footer class='  flex flex-row w-full bg-[#222]'>
                <div class='flex flex-row  relative'>
              <div className='desc-pic' class='' ><img class=' w-[38rem] ' src={womenrv} ></img></div>
              
                  <div class='ml-96 pt-28 absolute'>
                <div ><h1  class='font-bold text-9xl  text-white ' >Let's</h1></div>
                <div  ><h1  class=' font-bold text-9xl pl-32   text-white' >Talk</h1></div>
                </div>
                </div>
                <div>
                  <div class='   px-9 mt-8 text-xl font-Display font-light grid grid-cols-2 gap-x-12 gap-y-2 text-[#ffffff80]'>
                    <div>Home</div>
                    <div>About</div>
                    <div>Srvices</div>
                    <div>Projects</div>
                    <div>Contact</div>
                  </div>
                  <div class= 'px-9 text-xl mt-8 font-Display text-[#ffffff80] grid grid-cols-2 gap-x-12 gap-y-2 '>
                    <div>Style Guide</div>
                    <div>Licenses</div>
                    <div>Instructions</div>
                    <div>Changelog</div>
                    
                  </div>
                  <div className='media'></div>
                  </div>
                
                
              </footer>
           
          
        
      
     
      
      
    
    </div>
    </>
  );
}

export default Home;
