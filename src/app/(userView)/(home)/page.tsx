import About from '@//components/home/About';
import Banner from '@//components/home/Banner';
// import Contact from '@//components/home/Contact';
import Service from '@//components/home/Service';
import '../../../components/home/style.css'
import WhyChoose from '@//components/home/WhyChoose';
import Client from '@//components/home/Client';

const page = () => {
    return (
        <div>
            <Banner/>
            <div className='max-w-7xl mx-auto'>
            <About/>
            </div>
            <div className='bg-[#141414]'>
            <Service/>
            </div>
            <WhyChoose/>
            <div className='bg-[#141414]'>
            <Client/>
            </div>
            {/* <Contact/> */}
        </div>
    );
};

export default page;