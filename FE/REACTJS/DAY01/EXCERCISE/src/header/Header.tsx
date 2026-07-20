import Avatar from "./Avatar";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
    return (
        <div className="bg-yellow-500 flex items-center justify-between px-8 py-2">
            <Logo />
            <Search />
            <Avatar />
        </div>
    );
};

export default Header;
