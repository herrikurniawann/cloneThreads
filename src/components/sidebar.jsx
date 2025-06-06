import { House, Search, Plus, Heart, Pin } from 'lucide-react';

const SideNav = () => {
  return (
    <>
      <div className="Side">
        <div className="Side-content">
          <a href="">
            <House className='IconBar' />
          </a>
          <a href="">
            <Search className='IconBar' />
          </a>
          <a href="">
            <Plus className='IconBar' />
          </a>
          <a href="">
            <Heart className='IconBar' />
          </a>
          <a href="">
            <Pin className='IconBar' />
          </a>
        </div>
      </div>
    </>
  );
};

export default SideNav;
