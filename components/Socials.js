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
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxFill  />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiTwitterFill   />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
