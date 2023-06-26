export default function Section(props: {
	title: string;
	children?: React.ReactNode;
	colour?: 'primary' | 'secondary' | 'white';
	id?: string;
}) {
	const {
		title,
		colour = 'primary',
		id
	} = props

	return (
		<section className={`${colour} section scroll-m-48 md:scroll-m-16`} id={id}>
			<div className="container mx-auto">
				<h2 className='text-center uppercase mb-0 text-4xl font-bold'>
					{title}
				</h2>
				<hr className="vball" />
				{props.children}
			</div>
		</section>
	)
}