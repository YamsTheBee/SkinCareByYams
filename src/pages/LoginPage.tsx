import AuthForm from "../Components/AuthForm/AuthForm";

function LoginPage() {
	console.log("LoginPage is loaded");
	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<AuthForm />
		</div>
	);
}
export default LoginPage;
