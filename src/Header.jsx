function Header() {
	return (
		<header className="flex justify-between py-5 px-3 items-center">
			<div className="logo z-30">
				<svg
					width="52"
					height="29"
					className="spinner__logo"
					viewBox="-4 -2 52 29"
				>
					<defs>
						<path
							id="logo-path"
							d="M25.4 10.6c0-6.2 4.4-9.9 10.1-9.9C40.6.7 44 3.3 44 6.9c0 3.4-2.9 5.6-6.1 5.6-1.8 0-3.1-.3-4-1-.3-.3-.5-.2-.5.1 0 1.3.5 2.3 1.3 3.2.7.7 2 1.2 3.2 1.2 1.3 0 2.4-.3 3.4-.8s1.8-.3 2.3.5c.6.9-.2 2.1-.9 2.9-1.3 1.4-3.8 2.4-7 2.4-6.5-.2-10.3-4.6-10.3-10.4zm-13.3 4.1c.6 0 1 .3 1.4 1l1.8 2.9c.7 1.1 1.3 1.9 2.6 1.9s2-.5 2.6-2c.8-1.8 1.7-4.1 2.4-7.1.9-3.4 1.3-5.4 1.3-7.1s-.5-2.7-2.4-3c-2.5-.5-6-.7-9.7-.7s-7.2.2-9.7.6C.5 1.6 0 2.6 0 4.3S.4 8 1.2 11.4c.8 3 1.6 5.2 2.4 7.1.7 1.5 1.3 2 2.6 2s1.9-.8 2.6-1.9l1.8-2.9c.5-.6.9-1 1.5-1z"
						></path>
						<filter
							id="logo-filter"
							width="200%"
							height="200%"
							x="-50%"
							y="-50%"
							filterUnits="objectBoundingBox"
						>
							<feOffset
								dx="0"
								dy="2"
								in="SourceAlpha"
								result="shadowOffsetOuter1"
							></feOffset>
							<feGaussianBlur
								stdDeviation="2"
								in="shadowOffsetOuter1"
								result="shadowBlurOuter1"
							></feGaussianBlur>
						</filter>
					</defs>
					<g fill="none">
						<use
							fill="#17181A"
							fillOpacity="0.11"
							filter="url(#logo-filter)"
							xlinkHref="#logo-path"
						></use>
						<use
							fill="rgb(255, 255, 255)"
							fillRule="evenodd"
							xlinkHref="#logo-path"
						></use>
					</g>
				</svg>
			</div>

			<div className="nav bg-white flex gap-2 rounded font-semibold h-[40px] w-fit px-3">
				<p className="self-center">Help </p>
				<p className="border-x-[1px] flex items-center px-2">
					About us
				</p>
				<p className="self-center">Got Plus?</p>
			</div>
		</header>
	);
}

export default Header