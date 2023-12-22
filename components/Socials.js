// links
import Link from 'next/link';

// icons
import {
  RiInstagramLine,
  RiGithubFill, 
  RiLinkedinBoxFill,
  RiTwitterFill, 
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://github.com/krishna-s11'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>
      <Link href={'https://www.linkedin.com/in/krishna-saxena/'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxFill  />
      </Link>
      <Link href={'https://twitter.com/Krishna_Saxenaa'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiTwitterFill   />
      </Link>
      <Link href={'https://www.instagram.com/krishna_s11/'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
