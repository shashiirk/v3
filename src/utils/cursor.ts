import type { CursorContextProps } from '@/types';

export const CURSOR_ATTRIBUTES = {
	dataAttr: 'data-ccursor',
	noPadding: 'noPadding',
	noParallax: 'noParallax',
	lift: 'lift'
};

export const addCursor = (props: CursorContextProps) => {
	if (props) {
		const contextCursor = document.createElement('div');
		contextCursor.setAttribute(
			'style',
			`transform: translate(-200px, -200px); height: ${props.radius}px; width: ${props.radius}px;`
		);
		contextCursor.setAttribute('class', 'c-cursor');
		document.body.prepend(contextCursor);
		return contextCursor;
	}
};

export const elementHasProperty = (el: HTMLElement, property: string) => {
	const attribute = el.getAttribute(CURSOR_ATTRIBUTES.dataAttr);
	if (attribute && attribute.includes(property)) {
		return true;
	} else {
		return false;
	}
};

export const getMoveIndex = (
	mouseEventDirection: number,
	elPosition: number,
	elDimension: number,
	movementSpeed: number
) => {
	const relativePos = mouseEventDirection - elPosition;
	return (relativePos - elDimension / 2) / movementSpeed;
};

export const getStyleProp = (value: string) => {
	return getComputedStyle(document.documentElement).getPropertyValue(value);
};

export const setStyles = () => {
	const styles = `
    :root {
      --main-cursor-clr: rgb(255, 255, 255, 0.2);
      --main-cursor-hover-clr: rgb(255, 255, 255, 0.07);
      --ghost-shadow: 0 7px 15px rgba(255, 255, 255, 0.14);
    }

    body {
      margin: 0;
      padding: 0; }

    .c-cursor {
      position: fixed;
      z-index: 9999;
      pointer-events: none;
      border-radius: 200px;
      background-color: var(--main-cursor-clr);
      transition: background-color 0.2s ease-in-out;
    }

    .c-cursor_active {
      background-color: var(--main-cursor-hover-clr);
    }

    .c-cursor-lift_active {
      background-color: rgba(0,0,0,0);
    }
  `;

	const styleSheet = document.createElement('style');
	styleSheet.innerText = styles;
	document.head.appendChild(styleSheet);
};
