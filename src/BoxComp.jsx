import { FaArrowDown } from 'react-icons/fa6';
import Form from './Form'

function BoxComp({ handleModal }) {
	return (
		<div className="h-[500px] bg-white w-[320px] rounded-[10px] flex flex-col py-3">
			<div className="flex justify-center w-full">
				<FaArrowDown
					className=" border-4 border-[#c3c3c3] flex items-center justify-center rounded-[50%] p-5"
					size={100}
					color="#c3c3c3"
				/>
			</div>
			<div className="texts text-center mt-5 flex flex-col gap-1">
				<p className="text-[24px] font-medium">Ready when you are</p>
				<p className="text-[#9d9c9c] font-thin text-[15px]">
					{' '}
					Transfer expires in 7 days
				</p>
			</div>

			<Form handleModal={handleModal} />
		</div>
	);
}

export default BoxComp;
