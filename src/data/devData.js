module.exports = {
	devData: [
		{
			reference: 'home',
			itemId: '307a7b12-378c-4318-88d6-f62d1e0f4bd0',
			userId: '2c0ac9fe-56eb-468f-97c8-0b2ab4dec588'
		},
		{
			reference: 'parent1',
			itemId: '47741334-d1fd-4806-944b-006834300cd4',
			parentId: null,
			textContent: 'This is a parent item.',
			startDate: null,
			endDate: null,
			hasChldrn: true,
			dun: false
		},
		{
			reference: 'parent2',
			itemId: '8a21feba-c37a-420f-8348-27535581ca60',
			parentId: null,
			textContent: 'This is another parent.',
			startDate: null,
			endDate: null,
			hasChldrn: true,
			dun: false
		},
		{
			reference: 'child1',
			itemId: '076c4c66-6052-432b-b463-289c22b64c31',
			parentId: '47741334-d1fd-4806-944b-006834300cd4',
			textContent: 'This is parent1`s first child.',
			startDate: '2023-01-19',
			endDate: '2023-01-26',
			hasChldrn: true,
			dun: true
		},
		{
			reference: 'child2',
			itemId: '80453243-99e5-4cac-a4cc-e1733cf2c57d',
			parentId: '47741334-d1fd-4806-944b-006834300cd4',
			textContent: 'This is parent1`s second.',
			startDate: null,
			endDate: null,
			hasChldrn: false,
			dun: false
		},
		{
			reference: 'child3',
			itemId: '96883a07-5ed2-4cd7-aa09-8960e91197dc',
			parentId: '8a21feba-c37a-420f-8348-27535581ca60',
			textContent: 'This is parent2`s only child',
			startDate: null,
			endDate: null,
			hasChldrn: false,
			dun: false
		},
		{
			reference: 'grChild1',
			itemId: '9aa00e26-e651-4f77-bf6a-a00211c5d8d6',
			parentId: '076c4c66-6052-432b-b463-289c22b64c31',
			textContent: 'This is child1`s child',
			startDate: null,
			endDate: null,
			hasChldrn: true,
			dun: false
		},
		{
			reference: 'greGrChild1',
			itemId: '1819879c-abaf-4f4b-a1cb-d109e940fad5',
			parentId: '9aa00e26-e651-4f77-bf6a-a00211c5d8d6',
			textContent: 'This is grChild1`s child',
			startDate: null,
			endDate: null,
			hasChldrn: false,
			dun: false
		}
	]
}
