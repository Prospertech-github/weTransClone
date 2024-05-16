import { FaArrowDown } from 'react-icons/fa6';
import Button from './Button'

function Form({ handleModal }) {
	return (
		<div className="form">
			<div className="inputs">
				<div className="files mt-3 border-y px-8 py-4 flex flex-col gap-1">
					<div className="file">
						<div className="">
							<p>P0_489329.pdf</p>
							<p>364KB &#8901; PDF</p>
						</div>
						<FaArrowDown
							className=" border-2 flex items-center justify-center rounded-[50%] p-1 border-[#409fff]"
							size={28}
							color="#409fff"
						/>
					</div>
					<div className="file">
						<div className="">
							<p>Item_list.xls</p>
							<p>521KB &#8901; XLS</p>
						</div>
						<FaArrowDown
							className=" border-2 flex items-center justify-center rounded-[50%] p-1 border-[#409fff]"
							size={28}
							color="#409fff"
						/>
					</div>
					<div className="file">
						<div className="">
							<p>Specifications.pdf</p>
							<p>344KB &#8901; PDF</p>
						</div>
						<FaArrowDown
							className=" border-2 flex items-center justify-center rounded-[50%] p-1 border-[#409fff]"
							size={28}
							color="#409fff"
						/>
					</div>
					<div className="file">
						<div className="">
							<p>Company introduction.m4v</p>
							<p>130MB &#8901; m4v</p>
						</div>
						<FaArrowDown
							className=" border-2 flex items-center justify-center rounded-[50%] p-1 border-[#409fff] d-icon"
							size={28}
							color="#409fff"
						/>
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<Button handleModal={handleModal} />
			</div>
		</div>
	);
}

export default Form;
