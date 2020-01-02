/******************************************
 *  TCC 20191127
 *
		<a href={this.props.link} v-on:click="this.thecounter">{{this.props.title}}</a>
		<a v-bind:href="this.props.linkref" v-on:click="this.thecounter">{{this.props.title}}</a>
 *  **********************************************/
Vue.component('showlink-module', {
	props: ['linkref','title','sample'],
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
		thecounter () {
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
			
			this.SQL_xhr[this.SQLprocessing_incrementer].open( 'post', '../php/upcounter.php', true );
			this.SQL_xhr[this.SQLprocessing_incrementer].send(this.formdata);
			this.SQLprocessing_incrementer=this.SQLprocessing_incrementer+1;
			if (this.SQLprocessing_incrementer > 1000) {
				this.SQLprocessing_incrementer = 0;
			}
		}
	},
	mounted: function() {
	},
	beforeDestroy() {
	},
	template: `
		<a :href="this.linkref" v-on:click="this.thecounter" target="_blank" rel="noopener noreferrer">{{this.title}}</a>
		`
});






