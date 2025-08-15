// prettier-ignore
export default function Teams() {
	const teams: {
		name: string,
		subtitle?: string,
		players: string[],
	}[] = [{
		name: 'Glow Setters',
		players: [
			'Julie K',
			'Erika P',
			'Carissa P',
			'Jac R'
		]
	}, {
		name: 'The Weekenders',
		players: [
			'Brad J',
			'Maddy J',
			'John H',
			'Tim H'
		]
	}, {
		name: 'Big Dogs',
		players: [
			'Dan R',
			'Logan O',
			'Dennis O',
			'Kyle P',
			'Matt O',
			'Amelia C'
		]
	}, {
		name: 'Down and Dirties',
		players: [
			'Lucas L',
			'Derek C',
			'Jeffrey C',
			'Gillian R'
		]
	}, {
		name: 'Baywatch Blockers',
		players: [
			'John C',
			'Adam R',
			'Charlotte',
			'Ella S'
		]
	}, {
		name: 'The Dirty Bumps',
		players: [
			'Amanda B',
			'Alex C',
			'Jordan P',
			'Evan F',
		]
	}, {
		name: 'The Rotten Apples',
		players: [
			'Jacqueline J',
			'Colleen R',
			'Taylor',
			'JC',
			'Russell'
		]
	}, {
		name: 'Bad Apples',
		players: [
			'Dianne C',
			'Colin C',
			'Amy',
			'Scott S',
			'Austin'
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
