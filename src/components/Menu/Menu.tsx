import React from 'react';
import i18n from 'i18next';

import {Link} from 'react-router-dom';

const Menu: React.FC = () => {
    return (
        <div>
            <Link to="/home">{i18n.t("left_side_menu_home")}</Link>
            <Link to="/explore">{i18n.t("left_side_menu_explore")}</Link>
            <Link to="/notifications">{i18n.t("left_side_menu_notifications")}</Link>
            <Link to="/messages">{i18n.t("left_side_menu_messages")}</Link>
            <Link to="/bookmarks">{i18n.t("left_side_menu_bookmarks")}</Link>
            <Link to="/lists">{i18n.t("left_side_menu_lists")}</Link>
            <Link to="/profile">{i18n.t("left_side_menu_profile")}</Link>
            <Link to="/more">{i18n.t("left_side_menu_more")}</Link>
        </div>)
}

export default Menu;