/******************************************
 *  TCC 20191119
 *
		<span>{{this.ttemp.vvalue}}</span>
		<input v-model:value="this.zillow">{{this.zillow}}</input>
		<input v-model:value="this.zillow"></input>
 *  **********************************************/
Vue.component('counter-module', {
	props: ['sample'],
	data () {
		return {
			zillow: 0,
			SQLprocessing_incrementer: 0,
			SQL_xhr:  [],
			formdata: 0,
			compKey: 0,
		}
	},
	methods: {
		loaditup () {
			this.formdata = new FormData();
			this.formdata.append('fname', this.sample);
			console.info("fname = " + this.sample);
			if (window.XMLHttpRequest) {          // code for modern browsers
				this.SQL_xhr[this.SQLprocessing_incrementer] = new XMLHttpRequest();
			} else {                                                                        // code for old IE browsers
				this.SQL_xhr[this.SQLprocessing_incrementer] = new ActiveXObject("Microsoft.XMLHTTP");
			}
			var self = this;
			this.SQL_xhr[this.SQLprocessing_incrementer].onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					self.SQLprocessing_incrementer +=1;
					self.zillow = this.responseText;
					console.info("The responsetext =  " + this.responseText + ".");
				}
			};
			
			this.SQL_xhr[this.SQLprocessing_incrementer].open( 'post', '../php/counter.php', true );
			this.SQL_xhr[this.SQLprocessing_incrementer].send(this.formdata);
			this.SQLprocessing_incrementer=this.SQLprocessing_incrementer+1;
			if (this.SQLprocessing_incrementer > 1000) {
				this.SQLprocessing_incrementer = 0;
			}
		}
	},
	mounted: function() {
		this.loaditup();
	},
	beforeDestroy() {
	},
	template: `
		<div class="mypadded">{{this.zillow}}</div>
		`
});






