
import Sidebar from './Sidebar.jsx';

function WithSidebar({ children }) {
    return (
        <div className="with-sidebar">
            <div className="left-Div">{children}</div>
            <Sidebar />
        </div>
    );
}
export default WithSidebar;