import "./topbar.css";
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import LanguageIcon from '@mui/icons-material/Language';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">
                        Super Admin
                    </span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
