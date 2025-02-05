"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XTerm = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const xterm_1 = require("xterm");
const xterm_addon_fit_1 = require("xterm-addon-fit");
const react_core_1 = require("@patternfly/react-core");
const XTerm = ({ cols = 80, rows = 25, fontFamily, fontSize, onTitleChanged, onData, innerRef }) => {
    const terminalRef = react_1.default.useRef();
    const ref = react_1.default.useRef();
    (0, react_1.useImperativeHandle)(innerRef, () => ({
        focusTerminal() {
            if (terminalRef.current) {
                terminalRef.current.focus();
            }
        },
        /**
         * Backend sent data.
         *
         * @param {string} data String content to be writen into the terminal
         */
        onDataReceived: (data) => {
            if (terminalRef.current) {
                terminalRef.current.write(data);
            }
        },
        /**
         * Backend closed connection.
         *
         * @param {string} reason String error to be written into the terminal
         */
        onConnectionClosed: (reason) => {
            if (terminalRef.current) {
                terminalRef.current.write(`\x1b[31m${reason || 'disconnected'}\x1b[m\r\n`);
                terminalRef.current.refresh(terminalRef.current.rows, terminalRef.current.rows); // start to end row
            }
        }
    }));
    const onBeforeUnload = react_1.default.useCallback((event) => {
        // Firefox requires this when the page is in an iframe
        event.preventDefault();
        // see "an almost cross-browser solution" at
        // https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
        event.returnValue = '';
        return '';
    }, []);
    const onFocusIn = () => {
        window.addEventListener('beforeunload', onBeforeUnload);
    };
    const onFocusOut = react_1.default.useCallback(() => {
        window.removeEventListener('beforeunload', onBeforeUnload);
    }, [onBeforeUnload]);
    react_1.default.useEffect(() => {
        const fitAddon = new xterm_addon_fit_1.FitAddon();
        terminalRef.current = new xterm_1.Terminal({
            cols,
            rows,
            cursorBlink: true,
            fontFamily,
            fontSize,
            screenReaderMode: true
        });
        const onWindowResize = () => {
            const geometry = fitAddon.proposeDimensions();
            if (geometry) {
                terminalRef.current.resize(geometry.rows, geometry.cols);
            }
        };
        if (onData) {
            terminalRef.current.onData(onData);
        }
        if (onTitleChanged) {
            terminalRef.current.onTitleChange(onTitleChanged);
        }
        terminalRef.current.loadAddon(fitAddon);
        terminalRef.current.open(ref.current);
        const resizeListener = (0, react_core_1.debounce)(onWindowResize, 100);
        if (!rows) {
            if (react_core_1.canUseDOM) {
                window.addEventListener('resize', resizeListener);
            }
            onWindowResize();
        }
        terminalRef.current.focus();
        return () => {
            terminalRef.current.dispose();
            if (react_core_1.canUseDOM) {
                window.removeEventListener('resize', resizeListener);
            }
            onFocusOut();
        };
    }, [cols, fontFamily, fontSize, onData, onFocusOut, onTitleChanged, rows]);
    // ensure react never reuses this div by keying it with the terminal widget
    // Workaround for xtermjs/xterm.js#3172
    return react_1.default.createElement("div", { ref: ref, className: "pf-v5-c-console__xterm", role: "list", onFocus: onFocusIn, onBlur: onFocusOut });
};
exports.XTerm = XTerm;
exports.XTerm.displayName = 'XTerm';
//# sourceMappingURL=XTerm.js.map