
Vue.component('physicsapp', {
	data() {
		return {
			sampleint: 55,
			hhref:  'https://tomcarbon.com',
			hhover: 'sample default hover text.',
		}
        },
	created: function() {
		/*
		console.info("Hello, here I am!");
		*/
	},
	methods: {
		thecounter() {
			alert("hello"); 
		},
	},
        template: `
                        <div id="physicsapp" >
                                <h1>Physics</h1>
                                <h2>Selected Physics Papers and Conference Charts</h2>
                                <table> 
                                          <tr>
                                            <th>Article Title</th>
                                            <th>Author  </th>
					    <th>  Hits</th>
                                          </tr>
					<hr>
                                        <tr>
                                        <td>
                                        <showlink-module linkref="papers/AAAS-PD%20PRESENTATION%20CHARTS---Anisotropic%20Light%20Velocity.pdf" title="AAAS-PD 2015 PRESENTATION CHARTS--Anisotropic Light Velocity (pdf)" sample="c0.txt"></showlink-module>
                                        </td>
                                        <td>  Thomas E. Chamberlain</td>
					<td><counter-module sample="c0.txt"></counter-module></td>
                                        </tr>
                                        <tr>
                                        <td>
					<showlink-module linkref="papers/Fundamentally%20Anisotropic%20Light-Velocity%20at%20the%20Foundation%20of%20Classical%20Physics.pdf" title="Fundamentally Anisotropic Light-Velocity at the Foundation of Classical Physics (pdf)" sample="c1.txt"></showlink-module>
                                        </td>
                                        <td >  Thomas E. Chamberlain</td>
					<td><counter-module sample="c1.txt"></counter-module></td>
                                        </tr>
                                        <tr>
                                        <td>
                                        <showlink-module linkref="papers/RevisedSchwarzschildSolutiontoAccommodateSpace-TimeExpansion--SYNOPSIS.pdf" title="RevisedSchwarzschildSolutiontoAccommodateSpace-TimeExpansion--SYNOPSIS (pdf)" sample="c2.txt"></showlink-module>
                                        </td>
                                        <td>  Thomas E. Chamberlain</td>
					<td><counter-module sample="c2.txt"></counter-module></td>
                                        </tr>
                                  <tr>
                                        <td>
                                        <showlink-module linkref="papers/AAAS-PD%20PRESENTATION%20CHARTS--Far%20Field%20Gravitation.pdf" title="AAAS-PD PRESENTATION CHARTS--Far Field Gravitation" sample="c3.txt"></showlink-module>
                                        </td>
                                        <td>  Thomas E. Chamberlain</td>
					<td><counter-module sample="c3.txt"></counter-module></td>
                                        </tr>
                                  <tr>
                                                <td>
                                                <showlink-module linkref="papers/AAAS-PD_PRESENTATION_CHARTS--Cosmic_Acceleration.pdf" title="AAAS-PD 2018 PRESENTATION CHARTS-- Cosmic Acceleration" sample="c4.txt"></showlink-module>
                                                </td>
                                                <td>  Thomas E. Chamberlain</td>
					<td><counter-module sample="c4.txt"></counter-module></td>
                                        </tr>
                                        <tr>
                                                <td>
                                                <showlink-module linkref="papers/APS-FW-1.PPT" title="APS-FWS 2018 CHARTS -- Derivation of Cosmic Acceleration Given Anisotropic Light-Speed in the Hubble Expansion" sample="c5.txt"></showlink-module>
                                                </td>
                                                <td>  Thomas E. Chamberlain</td>
					<td><counter-module sample="c5.txt"></counter-module></td>
                                        </tr>
                                        <tr>
                                                <td>
                                                <showlink-module linkref="papers/APS2019PresentationCharts.pptx" title="APS-FWS 2019 PRESENTATION CHARTS Derivation of Cosmic Acceleration and the Cosmological Constant in the Local Universe" sample="c6.txt"></showlink-module>
                                                </td>
                                                <td>  Thomas E. Chamberlain</td>
					<td><counter-module sample="c6.txt"></counter-module></td>
                                        </tr>
                                        <tr>
                                                <td>
                                                <showlink-module linkref="papers/Derivation of Cosmic Acceleration--10-25-2019.pdf" title="Derivation of Cosmic Acceleration and the Cosmological Constant in the Local Universe" sample="c7.txt"></showlink-module>
                                                </td>
                                                <td>  Thomas E. Chamberlain</td>
					<td><counter-module sample="c7.txt"></counter-module></td>
                                        </tr>


                                </table>
                        </div>
                                `       // do not forget this little tick!
});



Vue.component('economicsapp', {

	data() {
		return {
		}
	},
	created: function() {
		/*
		console.info("Hello, here I am!");
		*/
	},
	methods: {
		thecounter() {
		/*	alert("hello"); */
		},
	},
        template: `
                        <div id="economicsapp">
                                <h1>Economics</h1>
                                                <h2>Selected Economics Papers</h2>
                                                <table>
                                                          <tr>
                                                            <th>Article Title</th>
                                                            <th>Author</th>
							    <th>Hits</th>
                                                          </tr>
							<hr>
                                                        <tr>
                                                         <td>
                                                         <showlink-module linkref="papers/080712UnevenExpectedRisk.pdf" title="Uneven Expected Risk (pdf)" sample="e0.txt"></showlink-module>
                                                         </td>
                                                         <td>  Thomas E. Chamberlain</td>
							<td><counter-module sample="e0.txt"></counter-module></td>
                                                        </tr>
                                                        <tr>
                                                         <td>
                                                         <showlink-module linkref="papers/Instant_Utility%20Approach--9-16-11a.pdf" title="Instant Utility Approach to the Social Sciences (pdf)" sample="e1.txt"></showlink-module>
                                                         </td>
                                                         <td>  Thomas E. Chamberlain</td>
							<td><counter-module sample="e1.txt"></counter-module></td>
                                                        </tr>
                                                        <tr>
                                                         <td>
                                                         <showlink-module linkref="papers/Chamberlain-Paper_ERSA-Paris_2007.pdf" title="Relationship of Economic Stability to Social and Economic Rights (pdf) " sample="e2.txt"></showlink-module>
                                                         </td>
                                                         <td>  Thomas E. Chamberlain</td>
							<td><counter-module sample="e2.txt"></counter-module></td>
                                                        </tr>
                                                        <tr>
                                                         <td>
                                                         <showlink-module linkref="papers/070412SocialismVsCapitalismRev3.pdf" title="Socialism vs. Capitalism (pdf)" sample="e3.txt"></showlink-module>
                                                         </td>
                                                         <td>  Thomas E. Chamberlain</td>
							<td><counter-module sample="e3.txt"></counter-module></td>
                                                        </tr>
                                                        <tr>
                                                         <td>
                                                         <showlink-module linkref="papers/090703World%20Bank%20Growth%20Report--Assessment%20and%20Extension.pdf" title="World Bank Growth Report - Assessment and Extension (pdf)" sample="e4.txt"></showlink-module>
                                                         </td>
                                                         <td>  Thomas E. Chamberlain</td>
							<td><counter-module sample="e4.txt"></counter-module></td>
                                                        </tr>
                                                        <tr>
                                                         <td>
                                                         <showlink-module linkref="papers/GossenRev5a.pdf" title="History of the Gossen Equation (pdf)" sample="e5.txt"></showlink-module>
                                                         </td>
                                                         <td>  Thomas E. Chamberlain</td>
							<td><counter-module sample="e5.txt"></counter-module></td>
                                                        </tr>
                                                        <tr>
                                                         <td>
                                                         <showlink-module linkref="papers/Unified_Micro-Macro_Economic_Theory.pdf" title="Unified Micro/Macro Economic Theory (pdf)" sample="e6.txt"></showlink-module>
                                                         </td>
                                                         <td>  Thomas E. Chamberlain</td>
							<td><counter-module sample="e6.txt"></counter-module></td>
                                                        </tr>
                                                </table>

                        </div>
                                `       // do not forget this little tick!
});


Vue.component('tec-cv', {
        template: `
                        <div id='tec-cv'>

                        <br>
                        <h2><center> THOMAS E. CHAMBERLAIN -- CV </center></h2>

                        <p>Thomas Chamberlain has been an independent research scientist in theoretical physics since ~1970 and in mathematical psychology and economics (applied psychology) since 1981. Over this interval until recently he was employed as an engineer at Boeing, Raytheon, and other aerospace companies.</p>
                        <p>In 1993 he finalized the canonical human behavior equation and in 1997 he began presenting papers at international economics conferences. His 2003 contribution “Does uneven expected risk promote poverty and instability?” provided the analytical basis or justification for international commerce damping and human recapitalization, two increasingly prominent 21st-century approaches for arresting and reversing the fateful concentration of wealth and income in a small percentage of the population. The related Discretionary-Power Principle of Justice was also introduced in the 2003 paper. More recently (2011) he has prepared a deeper mathematical system that unites neoclassical and Gossenian micro-economics, two systems in essential conflict since the Marginal Revolution of the 1870s.</p>
                        <p>In physics his studies over the years focused on conceptualizing relativity and quantum mechanics (to the extent either may be possible). In 2012 he decided to concentrate on basic physics—suspending psychology and economics—with the goal of eventually uniting anisotropic (light-velocity) relativity and quantum theory. Because orthodox relativity rejects anisotropic light-velocity this effort immediately concentrated on special relativity to the neglect of quantum theory. In 2014 special relativity (and therefore general relativity) was found incomplete due to the isotropic c=constant postulate. The resulting paper “Fundamentally anisotropic light-velocity at the foundation of classical physics” was presented at the 2015 June AAAS-PD conference in San Francisco. (Original title changed).</p>

                        <h3>Far-Field Gravitation</h3>
                        <p>On the basis of a belief, from well before 2012, that one-way inward (near) infinite light-speed was crucially germane to deepening classical physics theory, almost immediately after the San Francisco conference (2015 July) he ascertained that Hubble expansion and Einstein’s same-motion acceleration (1907) are essentially related (in some manner)—inasmuch as equating the Hubble expansion, V=rH, to the similar expansion from S-M acceleration (in the limit V=c) yielded <a href="index.php"><img src="img/cv02.png"/></a>, which is within an order of Milgrom’s universal acceleration constant <a href="index.php"><img src="img/cv03.png"/></a>.</p>
                        <p>Another nearly seven months (to 2016 February) were required to move Milgrom’s (classical) Deep MOND onto a new, deeper relativistic foundation (i.e., one wherein special relativity accommodates complementary anisotropic light-speed—see Rizzi et al. (2008) and the AAAS-PD/San Francisco paper). Two preliminary steps enabled this theoretical advance: (1) joining of inward infinite light-speed within the Hubble expansion to give the newly revealed outward-increasing cosmic time dilation; followed by (2) combining cosmic time-dilation with its counterpart emerging from the Schwarzschild solution. The result was the relationship <a href="index.php"><img src="img/cv04.png"/></a> – departing from Milgrom’s functionally similar <a href="index.php"><img src="img/cv05.png"/></a> by the Schwarzschild-based radius <a href="index.php"><img src="img/cv06.png"/></a> and the Hubble-expansion based <a href="index.php"><img src="img/cv07.png"/></a>, which, being equal (i.e., to leading order), cancel out. (Note that <a href="index.php"><img src="img/cv08.png"/></a> is not Milgrom’s circular orbit speed <a href="index.php"><img src="img/cv09.png"/></a> but rather the (also invariant) speed emerging from the linearized Lorentz transformation. The factor “2” had been mistakenly overlooked and was inserted as part of the previous revision on March 29, 2017.)</p>
                        <p>Further developments over the next few months towards a complete deepening of the Einstein Field Equations were eventually suspended (and not continued…to the present date (October 2019)) in order to prepare for the rapidly approaching AAAS-PD Conference in San Diego (14-17 June 2016), where the approximate formulation of Milgrom’s expression with comparison against astronomical “far-field” star and gas velocities (i.e., the Tully-Fisher Relation) was presented.</p>

                        <h3>Accommodation of Far-Field Gravitation in the Schwarzschild Solution</h3>
                        <p>The principal task in allowing completion of the paper has been establishing how the inverse-radius dependence of far-field gravitation emerges from the invariant far-field time-dilation <a href="index.php"><img src="img/cv10.png"/></a>, a continuing task that began with the relation’s origination in 2016 February and was finally achieved in early November. Steady, non-accelerating Hubble expansion was the key permitting </p>
	<div class="col-md-12">
	<a href="index.php"><img src="img/cv01.png"/></a>
	</div>
                        <p> (Note that the factor “1/2” was initially overlooked and inserted as part of the previous revision on March 29, 2017. A significant consequence of this correction was a much-improved correspondence or agreement between Milgrom’s <a href="index.php"><img src="img/cv11.png"/></a> and the present <a href="index.php"><img src="img/cv12.png"/></a>.)</p>
                        <p>Additional concerns delayed the paper, but it was completed soon before traveling to the AAAS-PD conference in Hawaii with presentation on 22 June 2017. The paper may be accessed in the “Selected Physics Papers” of this website.</p>

                        <h3>Cosmic Acceleration/Deceleration</h3>
                        <p>Milgrom’s universal acceleration constant is germane to both “dark matter” and “dark energy”, and we should expect follow-on insight into the latter problem. Here the salient factors are: (1) inward infinite light speed; and (2) Hubble space expansion. Each factor by itself does not yield deeper relativity theory (i.e., because each alone in not empirically consequential within physics as a scientific discipline), but taken together they give “empirical traction” that helps resolve both problems. Cosmic acceleration, in particular, may be related to time-dilation with increasing lookback-distance due to (again singular) anisotropic light speed within the Hubble flow.</p>
	<p>Initial aspects of this advance were given at the 29th International Texas Symposium on Relativistic Astrophysics in Cape Town (2017 December), with further developments presented at the APS April Meeting in Columbus, Ohio (2018 April). Additional advances showing "pure" cosmic acceleration side-by-side with Newtonian/GRT plus subfield cosmic deceleration in the local universe were given at the Annual AAAS-PD Conference in Pomona, California (2018 June) and four months later at the APS-Far West Section meeting in Fullerton, California (2018 October) (wherein the Lorentz transformation was first used in the (leading order) derivation of pure cosmic acceleration). These results were again presented in 2019 June as a poster at the AAS Division on Dynamical Astronomy annual meeting in Boulder, Colorado.</p>

                        <h2><center>ACADEMICS AND CHRONOLOGY</center></h2>

                        <h3>Education</h3>
                        <p> PhD, Fluid Mechanics, Mathematics, and Thermodynamics; University of California, Berkeley, 1972.</p>
                        <p>MS, Aeronautics and Astronautics; Massachusetts Institute of Technology, 1966.</p>
                        <p>BS, Aeronautical Engineering, Boston University, 1961</p>

                        <h3>Endeavor</h3>
                        <p>Research in physics, psychology, and economics.</p>



                        <h3>Chronology</h3>
                                <p class="specialp">1970 (Approx.): Initiated independent study of relativity and quantum mechanics.</p>

                                <p class="specialp">1981: Initiated independent study of mathematical behavior and economics.</p>

                                <p class="specialp">1993: Completed the canonical Gossen Equation representing the individual’s subjective-utility based expectational plan.</p>

                                <p class="specialp">1997: Initial presentation at an international economics conference of the “instant-utility” approach to mathematical behavior/economics. (72nd annual conference of the Western Economics Association International conference, Seattle.)</p>

                                <p class="specialp">2003: Initial presentation of the theory-based poverty-reduction recommendations and the Discretionary-Power Principle of Justice (5th Pacific Rim Allied Organizations Conference, Taipei.)</p>

                                <p class="specialp">2005: Initial statement recognizing the permanent nuclear detente between great powers with its potentially beneficial effect on economic development. (6th Pacific Rim Allied Organizations Conference, Hong Kong.)</p>

                                <p class="specialp">2005: Addressed the pre-eminence of poverty-reduction versus social and economic rights. (61st International Atlantic Economic conference, Berlin; later presented at the 47th Congress of the European Regional Science Association, Paris.)</p>

                                <p class="specialp">2006: Addressed how socialism and capitalism may be united in the goal of reversing and defeating poverty. (62nd International Atlantic Economic Conference, Philadelphia; later presented at the 7th Pacific Rim Allied Organizations Conference, Beijing.)</p>

                                <p class="specialp">2007: Extended the minimum wage scope to include human recapitalization as a necessary step for defeating poverty. (64th International Atlantic Economic Conference; Savannah, Georgia.)</p>

                                <p class="specialp">2008: Recommended for a lasting détente that the West should promote international-commerce damping and human recapitalization as its domestic/international policy while the East should make accommodating adjustments. (65th International Atlantic Economic Conference, Warsaw.)</p>

                                <p class="specialp">2009: Further recommendation of the alternative of human recapitalization and international commerce damping as a revision or improvement of the (now receding) Washington Consensus. (67th International Atlantic Economic Conference, Rome.)</p>

                                <p class="specialp">2009: Letter-critique of mainstream economics published in the Financial Times (27 April), with recommendation for deeper knowledge to promote wellbeing and socioeconomic stability.</p>

                                <p class="specialp">2009: Letter published in the Financial Times (18 December) on the crucial need for competent and true mathematical economics to help defeat poverty and achieve a sustainable world.</p>

                                <p class="specialp">2010: Prepared historical overview of the development of the Gossenian approach to mathematical economics along with the application of this approach towards understanding and reversing poverty. (69th International Atlantic Economic Conference, Prague.)</p>

                                <p class="specialp">2011: Introduced a new constraint on the neoclassical utility function thereby uniting neoclassical and Gossenian theory and opening the door for conciliation of the Austrian and neoclassical traditions. As applications, Walras’s substitution equations are completed and marginal productivities of capital and labor are functionally related to intertemporal discounting. (71st International Atlantic Economic Conference, Athens.)</p>

                                <p class="specialp">2012: Began intensive effort to arrive at a substantive understanding of relativity physics that accommodates anisotropic light-velocity.</p>

                                <p class="specialp">2014: Recognized the fundamental nature of anisotropic light-velocity in classical physics leading to the multi space-time condition in accordance with the dichotomy between Einstein’s light-pulse versus same-motion synchronization conventions.</p>

                                <p class="specialp">2015: Completed the initial paper on the subject—“Fundamentally anisotropic light-velocity at the foundation of classical physics” (new title)—and presented at the 2015 June AAAS-PD conference in San Francisco.</p>

                                <p class="specialp">2015 June: Initiated investigation of general relativity regarding anisotropic light-velocity.</p>

                                <p class="specialp">2016 February: Developed Milgrom's classical <a href="index.php"><img src="img/cv17.png"/></a> as  relativistic <a href="index.php"><img src="img/cv16.png"/></a> within up-to-date relativity physics. (Corrected <a href="index.php"><img src="img/cv15.png"/></a> in the prior revision.)</p>

                                <p class="specialp">2016 June: Letter published in the Financial Times (2 June) recommending conditional basic income (properly done) to grow human capital thereby promoting "the basic economic right, the Right to Life", where the resulting boost to economic growth yields increased tax revenue to keep government finances in balance.  </p>

                                <p class="specialp">2016 June: Presented an approximate theoretical formulation of Milgrom's empirical Deep MOND at the annual AAAS-PD Conference (San Diego), which advances general relativity breakdown over dark matter as the explanation for "missing matter" throughout the cosmos.  </p>

                                <p class="specialp">2016 November:   Recognized     steady,   non-accelerating   Hubble   expansion    as    the   (leading order) basis  for   mathematical   derivation   of   far-field  gravity (inserted factor ½ correction in the previous revision)</p>

                                <center>
                                        <p>             <a href="index.php"><img src="img/cv13.png"/></a> ,</p>
                                        <p>while acknowledging</p>
                                        <p>               <a href="index.php"><img src="img/cv14.png"/></a>,</p>
                                </center>

                                <p>thereby promoting a prospective metric for extending the Schwarzschild solution to accommodate inverse-r far-field gravity and clearing the path to completing the paper.</p>

                                <p class="specialp">2017 January: Advanced the “either/or” correspondence between far-field gravity and (also relativistic) dark matter (in the sense of inducing non-uniform time-progression), where the former’s closer association with GR suggests priority regarding follow-on progress (e.g., the new relationship in far-field theory between matter/energy and time-progression).</p>

                                <p class="specialp">2017 June: Completed the "sub-field" gravitation paper and presented at the 98th annual AAAS-PD Conference in Hawaii. (The paper may be obtained on the "Selected Physics Papers" page.) </p>

                                <p class="specialp">2017 September-October: The sub-field paper given in Hawaii is accepted for presentation at the 29th Texas Symposium on Relativistic Astrophysics in early December (Cape Town, South Africa). Initial work on pure cosmic acceleration, as parallel or complementary to sub-field (baryonic) cosmic deceleration, is planned for the symposium talk.         (Rev. 15 March 2018)</p>

                                <p class="specialp">2018 March: Hubble expansion acceleration for the empty universe (Ω=0 with dH/dt=0) was presented as a new result at the Texas2017 symposium. Further developments since December that model (partially) offsetting pure cosmic acceleration versus sub-field cosmic deceleration in the local universe (z <~ 0.1) - with comparison versus Sn-1a apparent luminosity residuals - were planned for the APS April Meeting in Columbus. </p>

                                <p class="specialp">2018 June: Progress on the nature of cosmic acceleration/deceleration was presented at the 2018 APS April Meeting in Columbus. Follow-on advances were given at the 2018 AAAS-PD Conference in Pomona, California with the presentation title "Relativistic Formulation of Cosmic Acceleration vs. Cosmic Deceleration in the Local Universe." The corresponding abstract and charts are available on the Physics Page; completion of the "in progress" paper is expected later this year.</p>
                                <p class="specialp">2018 November: A more substantive derivation of cosmic acceleration entitled “Derivation of Cosmic Acceleration Given Anisotropic Light-Speed in the Hubble Expansion” yielding <a href="index.php"><img src="img/cv18.png"/></a> to leading order was presented at the annual APS Far West Section meeting (Fullerton) on 19 October, showing good agreement with supernova SNe-Ia acceleration measurements in the local universe, 0.01<z<0.3. The abstract and charts are available on the Physics Page. Work continues on the cosmic acceleration paper with completion pushed into early-to-mid 2019.</p>
	<p class="specialp">2019 September: The cosmic acceleration paper was completed mid-September, about six months later than was expected last year. A sufficiently concise mathematical demonstration that light-speed is fundamentally anisotropic in all inertial frames—in addition to isotropic—was the last hurdle, with numerous other important/emergent concerns along the way. A preprint has been posted on ResearchGate and the Physics Page herein. Updating the galactic “missing matter” resolution based on recent developments is a prime item on the “to do” list.</p>
                        </div>          `       // do not forget this little tick!
});


// this loads all the ads, and everything else.
const cwmainapp = new Vue({
	el: "#cwmainapp",
	data() {
		return {
			ttemp:	0,
		}
	},		
	mounted: function() {
	    this.initThisSchznit();		// load the main list from the SQL into the globalish variable.
	},		
	methods: {
		initThisSchznit() {
		},
		homebutton() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			$("#tec-cv").show();
			$("#economicsapp").hide();
			$("#physicsapp").hide();
		},
		economicsbutton() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			$("#tec-cv").hide();
			$("#economicsapp").show();
			$("#physicsapp").hide();
		},
		physicsbutton () {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			$("#tec-cv").hide();
			$("#economicsapp").hide();
			$("#physicsapp").show();
		},
	},		
	template: `
		<div class="col-md-12">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header row clearfix" id="headerspec">
				<div class="hidden-xs col-sm-12 col-md-12 col-lg-12">
					<h1 color="white"> Chamberlain West</h1>
				</div>
				<div class="col-xs-12 hidden-sm hidden-md hidden-lg">
					<h4 color="white"> Chamberlain West</h4>
				</div>
					<!--a href="index.php"><img src="img/logo.png"/></a-->

				<div class="col-md-12">
					<button class="nicebutton0" id="idhome" v-on:click="homebutton">HOME</button>
					<button class="nicebutton0" id="ideconomics" v-on:click="economicsbutton">ECONOMICS</button>
					<button class="nicebutton0" id="idphysics" v-on:click="physicsbutton">PHYSICS</button>
				</div>
			</div>
			<div class="col-md-12" color="black">
				<tec-cv />
	                        <economicsapp />
	                        <physicsapp />
			</div>
		</div>
	`	// don't forget that tick!		
})


$(document).ready(function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
});
