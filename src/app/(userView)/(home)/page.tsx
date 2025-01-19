import About from '@//components/home/About';
import Banner from '@//components/home/Banner';
// import Contact from '@//components/home/Contact';
import Service from '@//components/home/Service';
import '../../../components/home/style.css'

const page = () => {
    return (
        <div>
            <Banner/>
            <div className='max-w-6xl mx-auto'>
            <About/>
            </div>
            <div className='bg-[#141414]'>
            <Service/>
            </div>
            {/* <Contact/> */}
        </div>
    );
};

export default page;