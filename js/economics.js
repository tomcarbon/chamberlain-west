// run this with the tomcarbon library
$.getScript('js/tomcarbon001.js', function()
{
$(document).ready(function () {
	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;	
});


Vue.component('economicsapp', {							
	template: `
			<div class="economicsapp">
				<h1>Economics</h1>
						<h2>Selected Economics Papers</h2>
						<table>
							  <tr>
							    <th>Article Title</th>
							    <th>Author</th>
							  </tr>
							<tr>
							 <td>
							 <a href="papers/080712UnevenExpectedRisk.pdf">Uneven Expected Risk (pdf)</a>
							 </td>
							 <td>  Thomas E. Chamberlain</td>
							</tr>
							<tr>
							 <td>
							 <a href="papers/Instant_Utility%20Approach--9-16-11a.pdf">Instant Utility Approach to the Social Sciences (pdf)</a>
							 </td>
							 <td>  Thomas E. Chamberlain</td>
							</tr>
							<tr>
							 <td>
							 <a href="papers/Chamberlain-Paper_ERSA-Paris_2007.pdf">Relationship of Economic Stability to Social and Economic Rights (pdf) </a>
							 </td>
							 <td>  Thomas E. Chamberlain</td>
							</tr>
							<tr>
							 <td>
							 <a href="papers/070412SocialismVsCapitalismRev3.pdf">Socialism vs. Capitalism (pdf)</a>
							 </td>
							 <td>  Thomas E. Chamberlain</td>
							</tr>
							<tr>
							 <td>
							 <a href="papers/090703World%20Bank%20Growth%20Report--Assessment%20and%20Extension.pdf">World Bank Growth Report - Assessment and Extension (pdf)</a>
							 </td>
							 <td>  Thomas E. Chamberlain</td>
							</tr>
							<tr>
							 <td>
							 <a href="papers/GossenRev5a.pdf">History of the Gossen Equation (pdf)</a>
							 </td>
							 <td>  Thomas E. Chamberlain</td>
							</tr>
							<tr>
							 <td>
							 <a href="papers/Unified_Micro-Macro_Economic_Theory.pdf">Unified Micro/Macro Economic Theory (pdf)</a>
							 </td>
							 <td>  Thomas E. Chamberlain</td>
							</tr>
						</table>
				
			</div>
				`	// do not forget this little tick!
});



const economicsapp = new Vue({
	el: "#economicsapp",
	data: {

	},
	template: `
		<div class="maincontent">
			<economicsapp />
		</div>
		`		
})

});		// end tomcarbon library






