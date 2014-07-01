var states = [
	{
		name: 'Alabama',
		capital: 'Montgomery',
		summary: 'All Bananas Mount Gum',
		story: 'All bananas travel to a mountain of gum'
	},
	{
		name: 'Alaska',
		capital: 'Juneau',
		summary: 'Eskimos June',
		story: 'Eskimos igloos melting the warm June weather'
	},
	{
		name: 'Arizona',
		capital: 'Phoenix',
		summary: 'Air Zone Phoenix',
		story: 'A phoenix outside the ozone needs air'
	},
	{
		name: 'Arkansas',
		capital: 'Little Rock',
		summary: 'Ark Sauce Little Rocks',
		story: 'Noah\'s ark floating on sauce, filled with little rocks instead of animals'
	},
	{
		name: 'California',
		capital: 'Sacramento',
		summary: 'Beach Sack Mint',
		story: 'A beach full of mints tanning on burlap sacks'
	},
	{
		name: 'Colorado',
		capital: 'Denver',
		summary: 'Collar Den',
		story: 'A lion in his den wearing a lot of collared shirts'
	},
	{
		name: 'Connecticut',
		capital: 'Hartford',
		summary: 'Connect Heart Four',
		story: 'Playing connect four with hearts'
	},
	{
		name: 'Delaware',
		capital: 'Dover',
		summary: 'Dare Dove',
		story: 'A daredevil dove rides his motorcycle over a crazy jump'
	},
	{
		name: 'Florida',
		capital: 'Tallahassee',
		summary: 'Floor Tale Sea',
		story: 'A floor made of a sea of tales'
	},
	{
		name: 'Georgia',
		capital: 'Atlanta',
		summary: 'George Washington Ant Land',
		story: 'George Washington Leading an army against a land of ants'
	},
	{
		name: 'Hawaii',
		capital: 'Honolulu',
		summary: 'How! Honey Lala',
		story: 'An Indian Chief says "how!"" his tribe eats honey straight from bee hives while singing'
	},
	{
		name: 'Idaho',
		capital: 'Boise',
		summary: 'I Don\'t Know Boys',
		story: 'Boys don\'t know anything'
	},
	{
		name: 'Illinois',
		capital: 'Springfield',
		summary: 'Ill Annoy Spring Field',
		story: 'A spring, sick with the flu, makes horribly annoying sounds, instead of babbling'
	},
	{
		name: 'Indiana',
		capital: 'Indianapolis',
		summary: 'Indian Indian Poll',
		story: 'An Indian swinging another Indian like a poll'
	},
	{
		name: 'Iowa',
		capital: 'Des Moines',
		summary: 'Eye Owl Dime Coins',
		story: 'Enormous eyes are found on a tiny owl that eats dime coins'
	},
	{
		name: 'Kansas',
		capital: 'Topeka',
		summary: 'Cans Top Peck',
		story: 'Lots of cans spinning on their edges like tops while being pecked by a giant birds'
	},
	{
		name: 'Kentucky',
		capital: 'Frankfort',
		summary: 'Super Man (Mr. Kent) Frank Fort',
		story: 'Super Man using Frank hot dogs to build a giant fort'
	},
	{
		name: 'Louisiana',
		capital: 'Baton Rouge',
		summary: 'Lois Lane Bat Rug',
		story: 'Lois Flying with bat wings carrying a giant rug'
	},
	{
		name: 'Maine',
		capital: 'Augusta',
		summary: 'A Lion\'s Mane A Gust of Wind',
		story: 'The mane a lion gets completely blown away by a gust a wind, the lion is embarrassed'
	},
	{
		name: 'Maryland',
		capital: 'Annapolis',
		summary: 'Marry An Apple',
		story: 'A strange land where everyone goes when they want to marry an apple'
	},
	{
		name: 'Massachusetts',
		capital: 'Boston',
		summary: 'Moss Achu! Boss Ton',
		story: 'A pile of moss sneezes on a man in a suit (a boss) who throws a 1 ton weight on the moss'
	},
	{
		name: 'Michigan',
		capital: 'Lansing',
		summary: 'Mission Lance',
		story: 'An agent is given a secret mission to capture the awesome lance'
	},
	{
		name: 'Minnesota',
		capital: 'Saint Paul',
		summary: 'Mine Soda Sink Pool',
		story: 'At a mine, they mine for soda (pop), and have sinks in their swimming pool full of soda'
	},
	{
		name: 'Mississippi',
		capital: 'Jackson',
		summary: 'Miss Pea Jacks',
		story: 'And elderly, proper lady, made of peas (named Miss Pea) eats only jack playing cards'
	},
	{
		name: 'Missouri',
		capital: 'Jefferson City',
		summary: 'Miserable Thomas Jefferson Kitty',
		story: 'A miserable Thomas Jefferson signs the declaration of independence wearing a cat'
	},
	{
		name: 'Montana',
		capital: 'Helena',
		summary: 'Mountain A Hail',
		story: 'It hails so much that it forms a colossal mountain in the shape of the letter A'
	},
	{
		name: 'Nebraska',
		capital: 'Lincoln',
		summary: 'Knee Brace Lincoln',
		story: 'The giant statue of Abraham Lincoln goes jogging, hurts his knee, and has to wear a brace'
	},
	{
		name: 'Nevada',
		capital: 'Carson City',
		summary: 'Never Day Car Sun Kitty',
		story: 'A land of constant darkness (never day) sends cars to collect sunlight, driven by kitties'
	},
	{
		name: 'New Hampshire',
		url: 'NewHampshire',
		capital: 'Concord',
		summary: 'New Hamper Cone Cord',
		story: 'A shiny new hamper is filled with ice cream cones that are made out of power cords'
	},
	{
		name: 'New Jersey',
		url: 'NewJersey',
		capital: 'Trenton',
		summary: 'New Jersey Train Ton',
		story: 'A shiny new jersey has an epic standoff with a train filled with 1 ton weights'
	},
	{
		name: 'New Mexico',
		url: 'NewMexico',
		capital: 'Santa Fe',
		summary: 'New Mexico Santa Clause Fee',
		story: 'Shiny New Sombrero being worn by Santa Clause who is charged a fee for speeding'
	},
	{
		name: 'New York',
		url: 'NewYork',
		capital: 'Albany',
		summary: 'New Pork All Ponies',
		story: 'A shiny new pork (pig) rules over all ponies'
	},
	{
		name: 'North Carolina',
		url: 'NorthCarolina',
		capital: 'Raleigh',
		summary: 'North Pole Carolers Rally',
		story: 'In the north pole, the elf carolers are tired of singing and hold a giant rally in protest'
	},
	{
		name: 'North Dakota',
		url: 'NorthDakota',
		capital: 'Bismarck',
		summary: 'North Pole Coat Busy Marker',
		story: 'In the north pole your coat is taken by a marker that\'s brushing its teeth'
	},
	{
		name: 'Ohio',
		capital: 'Columbus',
		summary: 'Uh Oh... Columbus',
		story: 'As Columbus is sailing he finds the edge of the planet, he says "uh oh"'
	},
	{
		name: 'Oklahoma',
		capital: 'Oklahoma City',
		summary: 'Oak Home Oak Home Kitty',
		story: 'An oak tree grows through your home with another kitty-filled tree growing on it'
	},
	{
		name: 'Oregon',
		capital: 'Salem',
		summary: 'Organ Sailin\'',
		story: 'A massive organ piano is the captain of a sailin\' boat'
	},
	{
		name: 'Pennsylvania',
		capital: 'Harrisburg',
		summary: 'Pen Silver Van Harry Bug',
		story: 'An army of pens are attacking a silver van, piloted by a very harry bug'
	},
	{
		name: 'Rhode Island',
		url: 'RhodeIsland',
		capital: 'Providence',
		summary: 'Road Island Prove Cents',
		story: 'A long road makes up an entire island where evidence is found and proven by penny detectives'
	},
	{
		name: 'South Carolina',
		url: 'SouthCarolina',
		capital: 'Columbia',
		summary: 'Sound Carolers Column',
		story: 'The powerful sound from a group of carolers shatters a column and brings downa building'
	},
	{
		name: 'South Dakota',
		url: 'SouthDakota',
		capital: 'Pierre',
		summary: 'Sound Coat Pie Ear',
		story: 'Sounds emits from the speakers on your coat, so good it\'s like pie in the ears'
	},
	{
		name: 'Tennessee',
		capital: 'Nashville',
		summary: 'Tennis Match Village',
		story: 'A tennis match is being played by matches, in their village'
	},
	{
		name: 'Texas',
		capital: 'Austin',
		summary: 'Texts Auto Tin',
		story: 'Texts on your phone are delivered by tiny automobiles made of tin cans'
	},
	{
		name: 'Utah',
		capital: 'Salt Lake',
		summary: 'You Tall Salt Lake',
		story: 'You are extremely tall and made of salt so you go swimming in a lake and dissolve'
	},
	{
		name: 'Vermont',
		capital: 'Montpelier',
		summary: 'Fur Man Mountain Propeller',
		story: 'A furry man builds a mountain with a huge propeller on it so it can fly'
	},
	{
		name: 'Virginia',
		capital: 'Richmond',
		summary: 'Fur Genie Rich Mound',
		story: 'A furry genie ask for your wish, you wish for riches, you get a mound of gold and jewels'
	},
	{
		name: 'Washington',
		capital: 'Olympia',
		summary: 'George Washington Olympus',
		story: 'George Washington visits the Greek gods on Mount Olympus'
	},
	{
		name: 'West Virginia',
		url: 'WestVirginia',
		capital: 'Charleston',
		summary: 'Rest Fur Genie Charcoal Stone',
		story: 'A resting furry genie sleeps on filthy charcoal with a blanket of stones'
	},
	{
		name: 'Wisconsin',
		capital: 'Madison',
		summary: 'Wise Cones Mad Sun',
		story: 'A very old, wise ice cream cone is very angry with the sun, for melting him'
	},
	{
		name: 'Wyoming',
		capital: 'Cheyenne',
		summary: 'Rome Sing Shine',
		story: 'The ancient romans all sing a song until the shine'
	}
]