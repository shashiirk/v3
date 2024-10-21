import { gsap } from 'gsap';
import { getMoveIndex, elementHasProperty, getStyleProp, CURSOR_ATTRIBUTES } from '@/utils/cursor';
import type { CursorContextProps } from '@/types';

const contextMode = (cursor: HTMLElement, props: CursorContextProps, interactElements: NodeListOf<Element>) => {
	const { transitionSpeed, radius, parallaxIndex, hoverPadding } = props;
	const parallaxSpeed = {
		cursor: parallaxIndex,
		target: parallaxIndex * 1.5
	};
	let isHovered: boolean = false;
	let cursorTarget: HTMLElement | null = null;

	const moveCursor = (e: MouseEvent) => {
		// If element is not hovered
		if (!isHovered) {
			gsap.to(cursor, {
				duration: transitionSpeed,
				x: e.clientX - radius / 2,
				y: e.clientY - radius / 2
			});
		} else {
			// If element is hovered

			if (!cursorTarget) return;

			const borderRadius = Number(window.getComputedStyle(cursorTarget).borderRadius.slice(0, -2));

			// For "LIFT" mode
			if (elementHasProperty(cursorTarget, CURSOR_ATTRIBUTES.lift)) {
				gsap.to(cursorTarget, {
					duration: transitionSpeed,
					x: getMoveIndex(
						e.clientX,
						cursorTarget.getBoundingClientRect().left,
						cursorTarget.clientWidth,
						parallaxSpeed.target
					),
					y: getMoveIndex(
						e.clientY,
						cursorTarget.getBoundingClientRect().top,
						cursorTarget.clientHeight,
						parallaxSpeed.target
					),
					scale: 1.1,
					boxShadow: getStyleProp('--ghost-shadow')
				});

				gsap.to(cursor, {
					duration: transitionSpeed,
					filter: 'blur(8px)',
					x:
						cursorTarget.getBoundingClientRect().left +
						(e.clientX - cursorTarget.getBoundingClientRect().left - cursorTarget.clientWidth / 2) /
							parallaxSpeed.cursor,
					y:
						cursorTarget.getBoundingClientRect().top +
						(e.clientY - cursorTarget.getBoundingClientRect().top - cursorTarget.clientHeight / 2) /
							parallaxSpeed.cursor,
					backgroundImage: `radial-gradient(circle at ${e.clientX - cursorTarget.getBoundingClientRect().left}px ${
						e.clientY - cursorTarget.getBoundingClientRect().top
					}px, rgba(255,255,255,0.4), rgba(255,255,255,0))`
				});
			} else {
				// For default "PARALLAX" mode
				gsap.to(cursor, {
					duration: transitionSpeed,
					x:
						cursorTarget.getBoundingClientRect().left -
						(elementHasProperty(cursorTarget, CURSOR_ATTRIBUTES.noPadding) ? 0 : hoverPadding) +
						(elementHasProperty(cursorTarget, CURSOR_ATTRIBUTES.noParallax)
							? 0
							: (e.clientX - cursorTarget.getBoundingClientRect().left - cursorTarget.clientWidth / 2) /
								parallaxSpeed.cursor),
					y:
						cursorTarget.getBoundingClientRect().top -
						(elementHasProperty(cursorTarget, CURSOR_ATTRIBUTES.noPadding) ? 0 : hoverPadding) +
						(elementHasProperty(cursorTarget, CURSOR_ATTRIBUTES.noParallax)
							? 0
							: (e.clientY - cursorTarget.getBoundingClientRect().top - cursorTarget.clientHeight / 2) /
								parallaxSpeed.cursor),
					borderRadius: borderRadius * (elementHasProperty(cursorTarget, CURSOR_ATTRIBUTES.noPadding) ? 1 : 1.5),
					width:
						cursorTarget.clientWidth +
						(elementHasProperty(cursorTarget, CURSOR_ATTRIBUTES.noPadding) ? 0 : hoverPadding * 2),
					height:
						cursorTarget.clientHeight +
						(elementHasProperty(cursorTarget, CURSOR_ATTRIBUTES.noPadding) ? 0 : hoverPadding * 2)
				});

				// For "NO PARALLAX" property
				if (!elementHasProperty(cursorTarget, CURSOR_ATTRIBUTES.noParallax)) {
					gsap.to(cursorTarget, {
						duration: transitionSpeed,
						x: -getMoveIndex(
							e.clientX,
							cursorTarget.getBoundingClientRect().left,
							cursorTarget.clientWidth,
							parallaxSpeed.target
						),
						y: -getMoveIndex(
							e.clientY,
							cursorTarget.getBoundingClientRect().top,
							cursorTarget.clientHeight,
							parallaxSpeed.target
						)
					});
				}
			}
		}
	};

	const handleMouseOver = (e: MouseEvent) => {
		isHovered = true;
		cursorTarget = e.target as HTMLElement;
		const borderRadius = Number(window.getComputedStyle(cursorTarget).borderRadius.slice(0, -2) as any);

		if (elementHasProperty(cursorTarget, CURSOR_ATTRIBUTES.lift)) {
			cursor.classList.add('c-cursor-lift_active');
			gsap.to(cursor, {
				duration: transitionSpeed,
				borderRadius: borderRadius,
				width: cursorTarget.clientWidth,
				height: cursorTarget.clientHeight,
				scale: 1.1
			});
		} else {
			cursor.classList.add('c-cursor_active');
		}
	};

	const handleMouseOut = (e: MouseEvent) => {
		isHovered = false;
		cursor.classList.remove('c-cursor_active');
		cursor.classList.remove('c-cursor-lift_active');

		gsap.to(cursor, {
			duration: transitionSpeed,
			x: e.clientX - radius / 2,
			y: e.clientY - radius / 2,
			width: radius,
			height: radius,
			borderRadius: '100px',
			scale: 1,
			backgroundImage: 'none',
			filter: 'blur(0px)'
		});
		gsap.to(cursorTarget, {
			duration: transitionSpeed,
			x: 0,
			y: 0,
			scale: 1,
			boxShadow: '0 7px 15px rgba(0,0,0,0.0)'
		});
	};

	// Event listeners
	document.addEventListener('wheel', (e: WheelEvent) => {
		handleMouseOut(e);
	});

	document.addEventListener('mousemove', (e: MouseEvent) => {
		moveCursor(e);
	});

	interactElements.forEach((item) => {
		item.addEventListener('mouseenter', (e) => {
			handleMouseOver(e as MouseEvent);
		});
	});

	interactElements.forEach((item) => {
		item.addEventListener('mouseleave', (e) => {
			handleMouseOut(e as MouseEvent);
		});
	});
};

export default contextMode;
