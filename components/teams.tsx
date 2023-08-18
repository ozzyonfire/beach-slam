export default function Teams() {

	const teams: {
		name: string,
		subtitle?: string,
		players: string[],
	}[] = [{
		name: 'Ball Busters',
		players: [
			'Ella S',
			'Leah M',
			'Charlotte F',
			'Madison B',
			'Hannah K',
			'Sarah P'
		],
	}, {
		name: 'Big Dogs',
		players: [
			'Dan R',
			'Logan O',
			'Amelia C',
			'Dennis O',
			'Kyle P'
		]
	}, {
		name: 'Block Party',
		players: [
			'Justin D',
			'Jordan B',
			'Jason K',
			'Julie K'
		]
	}, {
		name: 'The Smashers',
		players: [
			'John C',
			'Joey R',
			'Evan F',
			'Anna F',
			'David A',
			'Alex C',
		]
	}, {
		name: 'Big Dig Energy',
		players: [
			'Adam R',
			'Jac R',
			'Dan C',
			'Dan S',
			'Cindy L',
		]
	}, {
		name: 'Body Break',
		subtitle: 'with Hal Johnson and Joanne McLeod',
		players: [
			'Matt O',
			'Joe Z',
			'Alex F',
			'Paul VW',
			'Jacklyn H',
			'Di F',
		]
	}, {
		name: 'The Replacements',
		players: [
			'John H',
			'Mike F',
			'Jacqueline J',
			'Dante R'
		]
	}, {
		name: 'Bad Apples',
		players: [
			'Colin C',
			'Don',
			'Missy',
			'Stacey'
		]
	}];

	return (
		<div className="flex flex-wrap gap-3 justify-center">
			{teams.map((team, index) => (
				<div key={index} className="border-2 rounded-md p-3 w-[270px]">
					<h2 className="text-2xl font-semibold pb-2">{team.name}</h2>
					{team.subtitle &&
						<h3 className="text-xs font-extralight pb-1">{team.subtitle}</h3>
					}
					<ul>
						{team.players.map((player, index) => (
							<li key={index}>{player}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}