type SearchProps = {
	color?: string
}

export const Search = ({ color = '#81FE88' }: SearchProps) => {
	return (
		<svg
			width="40"
			height="35"
			viewBox="0 0 40 35"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M30.0312 22.0312L39.9688 31.9688L36.9688 34.9688L27.0312 25.0312V23.4375L26.4688 22.875C25.3438 23.875 24.0312 24.6562 22.5312 25.2188C21.0938 25.7188 19.5938 25.9688 18.0312 25.9688C17.6562 25.9688 17.3125 25.9688 17 25.9688V21.9375C17.1875 21.9375 17.3438 21.9688 17.4688 22.0312C17.6562 22.0312 17.8438 22.0312 18.0312 22.0312C19.6562 22.0312 21.1562 21.625 22.5312 20.8125C23.9062 20 25 18.9062 25.8125 17.5312C26.625 16.1562 27.0312 14.6562 27.0312 13.0312C27.0312 11.3438 26.625 9.84375 25.8125 8.53125C25 7.15625 23.9062 6.0625 22.5312 5.25C21.1562 4.4375 19.6562 4.03125 18.0312 4.03125C16.4688 4.03125 15.0312 4.375 13.7188 5.0625C12.4688 5.75 11.4062 6.71875 10.5312 7.96875C9.71875 9.15625 9.25 10.5 9.125 12H5.09375C5.21875 9.75 5.875 7.71875 7.0625 5.90625C8.25 4.09375 9.78125 2.65625 11.6562 1.59375C13.5938 0.53125 15.7188 0 18.0312 0C19.7812 0 21.4375 0.34375 23 1.03125C24.625 1.71875 26.0312 2.65625 27.2188 3.84375C28.4062 5.03125 29.3125 6.40625 29.9375 7.96875C30.625 9.53125 30.9688 11.2188 30.9688 13.0312C30.9688 14.5938 30.6875 16.125 30.125 17.625C29.625 19.0625 28.875 20.3438 27.875 21.4688L28.4375 22.0312H30.0312ZM11.9375 15.6562L13.3438 17.0625L8.375 22.0312L13.3438 26.9062L11.9375 28.4062L6.96875 23.4375L2.09375 28.4062L0.59375 26.9062L5.5625 22.0312L0.59375 17.0625L2.09375 15.6562L6.96875 20.625L11.9375 15.6562Z"
				fill={color}
			/>
		</svg>
	)
}
