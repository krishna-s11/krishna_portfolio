// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={'/avatar2.png'}
        width={737}
        height={678}
        alt=''
        className='translate-z-0 w-full h-full'
        style={{marginLeft: "50px", transform: "scale(0.8)", opacity: "0.8", zIndex: "0"}}
      />
    </div>
  );
};

export default Avatar;
