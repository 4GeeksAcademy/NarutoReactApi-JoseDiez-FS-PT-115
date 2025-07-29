export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<button
			className="btn btn-primary position-fixed bottom-0 end-0 m-4 rounded-circle"
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			style={{ width: '50px', height: '50px' }}
		>
			↑
		</button>
	</footer>
);