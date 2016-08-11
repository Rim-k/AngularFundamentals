'use strict';

eventsApp.controller('EventController',
	function EventController($scope){

		$scope.snippet = '<span style="color:red">hi there<span/>';

		$scope.boolValue = false;	
		$scope.mystyle = {color:'red'};
		$scope.myclass = 'blue';
		$scope.buttonDisabled = true;
		$scope.sortorder = 'name';

		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1359781015626',
			time: '10:30 am',
			location: {
				address: 'Google Headsquaters',
				city: 'mountain View',
				province: 'CA'
			},
			imageUrl: '/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directives Masterclass',
					creatorName: 'Rim-k',
					duration: 1,
					level: 'advanced',
					abstract: 'session agenda',
					upVoteCount: 0
				},
				{
					name: 'Scopes for fun and profits',
					creatorName: 'Rim-k',
					duration: 2,
					level: 'intermediate',
					abstract: 'session agenda',
					upVoteCount: 0
				},
				{
					name: 'Well Behaved Controllers',
					creatorName: 'Rim-k',
					duration: 4,
					level: 'introductory',
					abstract: 'session agenda',
					upVoteCount: 0
				}
			]
		}

		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		};

		$scope.downVoteSession = function (session) {
			session.upVoteCount--;
		};
	}
);