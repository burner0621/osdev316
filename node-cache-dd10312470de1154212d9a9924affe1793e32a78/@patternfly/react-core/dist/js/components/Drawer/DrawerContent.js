"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerContent = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const drawer_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Drawer/drawer"));
const react_styles_1 = require("@patternfly/react-styles");
const DrawerMain_1 = require("./DrawerMain");
const Drawer_1 = require("./Drawer");
const DrawerContent = (_a) => {
    var { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className = '', children, panelContent, colorVariant = Drawer_1.DrawerColorVariant.default } = _a, props = tslib_1.__rest(_a, ["className", "children", "panelContent", "colorVariant"]);
    const { drawerContentRef } = React.useContext(Drawer_1.DrawerContext);
    return (React.createElement(DrawerMain_1.DrawerMain, null,
        React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(drawer_1.default.drawerContent, colorVariant === Drawer_1.DrawerColorVariant.light200 && drawer_1.default.modifiers.light_200, colorVariant === Drawer_1.DrawerColorVariant.noBackground && drawer_1.default.modifiers.noBackground, className), ref: drawerContentRef }, props), children),
        panelContent));
};
exports.DrawerContent = DrawerContent;
exports.DrawerContent.displayName = 'DrawerContent';
//# sourceMappingURL=DrawerContent.js.map