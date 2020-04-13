new Vue({
	el: '#app',
	data:{
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: true
	},
	methods:{
		startGame(){
			this.gameIsRunning = !this.gameIsRunning
		},
		attack(){
			var max=10;
			var min=3;
			var demage=math.random()
		},
		specialAttack(){

		},
		heal(){

		},
		giveUp(){
			this.gameIsRunning = !this.gameIsRunning
		}
	}
});