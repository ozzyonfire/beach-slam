// prettier-ignore
export default function Teams() {
	const teams: {
		name: string,
		subtitle?: string,
		players: string[],
	}[] = [{
		name: 'Back 2 School',
		players: [
			'Brooke M',
			'Jessica M',
			'Derek C',
			'Jeffrey C',
			'Gillian R'
		],
	}, {
		name: 'Big Dogs',
		players: [
			'Dan R',
			'Logan O',
			'Dennis O',
			'Kyle P'
		]
	}, {
		name: 'Team Luka',
		players: [
			'Maddy J',
			'Brad J',
			'Jamie D',
			'Luka J'
		]
	}, {
		name: 'The Smashers',
		players: [
			'John C',
			'Joey R',
			'Evan F',
			'Julie K'
		]
	}, {
		name: 'Nicholson Crew-Setters',
		players: [
			'Adam R',
			'Jac R',
			'Dan S',
			'Ella S',
			'Charlotte F',
		]
	}, {
		name: 'Little Cats',
		players: [
			'Matt O',
			'Joe Z',
			'Jacklyn H',
			'Amelia C',
		]
	}, {
		name: 'The Replacements',
		players: [
			'Austin',
			'JC',
			'Autumne',
			'Kelly L',
			'Michelle'
		]
	}, {
		name: 'Bad Apples',
		players: [
			'Colleen R',
			'Taylor W',
			'Stuart C',
			'Colin C',
			'Amanda C',
			'Jacqueline J',
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
