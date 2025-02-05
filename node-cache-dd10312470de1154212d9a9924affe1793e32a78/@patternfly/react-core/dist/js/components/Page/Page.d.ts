import * as React from 'react';
import { PageBreadcrumbProps } from './PageBreadcrumb';
import { PageGroupProps } from './PageGroup';
export declare enum PageLayouts {
    vertical = "vertical",
    horizontal = "horizontal"
}
export interface PageProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the main section of the page layout (e.g. <PageSection />) */
    children?: React.ReactNode;
    /** Additional classes added to the page layout */
    className?: string;
    /** Header component (e.g. <Masthead />) */
    header?: React.ReactNode;
    /** Sidebar component for a side nav (e.g. <PageSidebar />) */
    sidebar?: React.ReactNode;
    /** Notification drawer component for an optional notification drawer (e.g. <NotificationDrawer />) */
    notificationDrawer?: React.ReactNode;
    /** Flag indicating Notification drawer in expanded */
    isNotificationDrawerExpanded?: boolean;
    /** Flag indicating if breadcrumb width should be limited */
    isBreadcrumbWidthLimited?: boolean;
    /** Callback when notification drawer panel is finished expanding. */
    onNotificationDrawerExpand?: (event: KeyboardEvent | React.MouseEvent | React.TransitionEvent) => void;
    /** Skip to content component for the page */
    skipToContent?: React.ReactElement;
    /** Sets the value for role on the <main> element */
    role?: string;
    /** an id to use for the [role="main"] element */
    mainContainerId?: string;
    /** tabIndex to use for the [role="main"] element, null to unset it */
    mainTabIndex?: number | null;
    /**
     * If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
     * the sidebar component or add a callback onSidebarToggle function into the Masthead component
     */
    isManagedSidebar?: boolean;
    /** Flag indicating if tertiary nav width should be limited */
    isTertiaryNavWidthLimited?: boolean;
    /**
     * If true, the managed sidebar is initially open for desktop view
     */
    defaultManagedSidebarIsOpen?: boolean;
    /**
     * Can add callback to be notified when resize occurs, for example to set the sidebar isSidebarOpen prop to false for a width < 768px
     * Returns object { mobileView: boolean, windowSize: number }
     */
    onPageResize?: ((event: MouseEvent | TouchEvent | React.KeyboardEvent, object: any) => void) | null;
    /**
     * The page resize observer uses the breakpoints returned from this function when adding the pf-m-breakpoint-[default|sm|md|lg|xl|2xl] class
     * You can override the default getBreakpoint function to return breakpoints at different sizes than the default
     * You can view the default getBreakpoint function here:
     * https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/helpers/util.ts
     */
    getBreakpoint?: (width: number | null) => 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /**
     * The page resize observer uses the breakpoints returned from this function when adding the pf-m-breakpoint-[default|sm|md|lg|xl|2xl] class
     * You can override the default getVerticalBreakpoint function to return breakpoints at different sizes than the default
     * You can view the default getVerticalBreakpoint function here:
     * https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/helpers/util.ts
     */
    getVerticalBreakpoint?: (height: number | null) => 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** Breadcrumb component for the page */
    breadcrumb?: React.ReactNode;
    /** Tertiary nav component for the page */
    tertiaryNav?: React.ReactNode;
    /** Accessible label, can be used to name main section */
    mainAriaLabel?: string;
    /** Flag indicating if the tertiaryNav should be in a group */
    isTertiaryNavGrouped?: boolean;
    /** Flag indicating if the breadcrumb should be in a group */
    isBreadcrumbGrouped?: boolean;
    /** Additional content of the group */
    additionalGroupedContent?: React.ReactNode;
    /** HTML component used as main component of the page. Defaults to 'main', only pass in 'div' if another 'main' element already exists. */
    mainComponent?: 'main' | 'div';
    /** Additional props of the group */
    groupProps?: PageGroupProps;
    /** Additional props of the breadcrumb */
    breadcrumbProps?: PageBreadcrumbProps;
}
export interface PageState {
    desktopIsSidebarOpen: boolean;
    mobileIsSidebarOpen: boolean;
    mobileView: boolean;
    width: number;
    height: number;
}
declare class Page extends React.Component<PageProps, PageState> {
    static displayName: string;
    static defaultProps: PageProps;
    mainRef: React.RefObject<HTMLDivElement>;
    pageRef: React.RefObject<HTMLDivElement>;
    observer: any;
    constructor(props: PageProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getWindowWidth: () => number;
    isMobile: () => boolean;
    resize: (_event?: MouseEvent | TouchEvent | React.KeyboardEvent<Element>) => void;
    handleResize: (...args: any[]) => void;
    handleMainClick: () => void;
    onSidebarToggleMobile: () => void;
    onSidebarToggleDesktop: () => void;
    render(): React.JSX.Element;
}
export { Page };
//# sourceMappingURL=Page.d.ts.map