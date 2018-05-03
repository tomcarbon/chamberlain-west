// run this with the tomcarbon library
$.getScript('js/tomcarbon001.js', function()
{
$(document).ready(function () {
	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;	
});


Vue.component('physicsapp', {							
	template: `
			<div class="physicsapp">
				<h1>Physics</h1>
				<h2>Selected Physics Papers and Conference Charts</h2>
				<table>
					  <tr>
					    <th>Article Title</th>
					    <th>Author</th>
					  </tr>
					<tr>
					<td>
					<a href="papers/Fundamentally%20Anisotropic%20Light-Velocity%20at%20the%20Foundation%20of%20Classical%20Physics.pdf"> Fundamentally Anisotropic Light-Velocity at the Foundation of Classical Physics (pdf)</a>
					</td>
					<td>  Thomas E. Chamberlain</td>
					</tr>
					<tr>
					<td>
					<a href="papers/AAAS-PD%20PRESENTATION%20CHARTS---Anisotropic%20Light%20Velocity.pdf">AAAS-PD PRESENTATION CHARTS--Anisotropic Light Velocity (pdf)</a>
					</td>
					<td>  Thomas E. Chamberlain</td>
					</tr>
					<tr>
					<td>
					<a href="papers/RevisedSchwarzschildSolutiontoAccommodateSpace-TimeExpansion--SYNOPSIS.pdf">RevisedSchwarzschildSolutiontoAccommodateSpace-TimeExpansion--SYNOPSIS (pdf)</a>
					</td>
					<td>  Thomas E. Chamberlain</td>
					</tr>
					<tr>
					<td>
					<a href="papers/ChartsforRevisedSchwarzschildSolution.pdf">Charts for Revised SchwarzchildSolution (pdf)</a>
					</td>
					<td>  Thomas E. Chamberlain</td>
					</tr>
				  <tr>
					<td>
					<a href="papers/AAAS-PD%20PRESENTATION%20CHARTS--Far%20Field%20Gravitation.pdf">AAAS-PD PRESENTATION CHARTS--Far Field Gravitation</a>
					</td>
					<td>  Thomas E. Chamberlain</td>
					</tr>
				</table>				
			</div>
				`	// do not forget this little tick!
});



const physicsapp = new Vue({
	el: "#physicsapp",
	data: {

	},
	template: `
		<div class="maincontent">
			<physicsapp />
		</div>
		`		
})

});		// end tomcarbon library






