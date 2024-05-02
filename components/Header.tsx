import Nav from './Nav';

const Header = () => {
  return (
    <header className="fixed left-0 right-0 w-full bg-white">
      <div className="container mx-auto">
        <Nav containerStyles=" py-12 flex gap-4  " />
      </div>
    </header>
  );
};

export default Header;
