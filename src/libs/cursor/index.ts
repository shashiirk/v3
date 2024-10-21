import type { CursorContextProps } from '@/types';
import { setStyles, addCursor, CURSOR_ATTRIBUTES } from '@/utils/cursor';
import contextMode from '@/libs/modes/context-mode';

const initCursorContext = (props: CursorContextProps) => {
	// Set base
	setStyles();
	const cCursor = addCursor(props) as HTMLElement;

	// Load mode when page is loaded
	window.onload = () => {
		let interactElements = document.querySelectorAll(`[${CURSOR_ATTRIBUTES.dataAttr}]`) as NodeListOf<Element>;
		contextMode(cCursor, props, interactElements);
	};
};

export default initCursorContext;
