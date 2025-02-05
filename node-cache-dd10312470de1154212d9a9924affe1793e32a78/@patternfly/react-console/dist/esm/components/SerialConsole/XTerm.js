import React, { useImperativeHandle } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { debounce, canUseDOM } from '@patternfly/react-core';
export const XTerm = ({ cols = 80, rows = 25, fontFamily, fontSize, onTitleChanged, onData, innerRef }) => {
    const terminalRef = React.useRef();
    const ref = React.useRef();
    useImperativeHandle(innerRef, () => ({
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
    const onBeforeUnload = React.useCallback((event) => {
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
    const onFocusOut = React.useCallback(() => {
        window.removeEventListener('beforeunload', onBeforeUnload);
    }, [onBeforeUnload]);
    React.useEffect(() => {
        const fitAddon = new FitAddon();
        terminalRef.current = new Terminal({
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
        const resizeListener = debounce(onWindowResize, 100);
        if (!rows) {
            if (canUseDOM) {
                window.addEventListener('resize', resizeListener);
            }
            onWindowResize();
        }
        terminalRef.current.focus();
        return () => {
            terminalRef.current.dispose();
            if (canUseDOM) {
                window.removeEventListener('resize', resizeListener);
            }
            onFocusOut();
        };
    }, [cols, fontFamily, fontSize, onData, onFocusOut, onTitleChanged, rows]);
    // ensure react never reuses this div by keying it with the terminal widget
    // Workaround for xtermjs/xterm.js#3172
    return React.createElement("div", { ref: ref, className: "pf-v5-c-console__xterm", role: "list", onFocus: onFocusIn, onBlur: onFocusOut });
};
XTerm.displayName = 'XTerm';
//# sourceMappingURL=XTerm.js.map