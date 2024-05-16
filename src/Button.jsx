function Button({ handleModal, email }) {
	return (
		<button
			className="bg-[#409fff] text-[#f4f4f4] py-2 px-8 text-center rounded-[1.25em] cursor-pointer font-medium text-[20px] mt-3 mr-4"
			onClick={handleModal}
		>
			{email ? 'Next' : 'Preview'}
		</button>
	);
}

export default Button;
