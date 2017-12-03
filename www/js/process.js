let process = {
	menu:function(){
		let content = 
		<div><center><h1>Tongue-Twisters!</h1><h2>Pampilipit-dila</h2>
			<div><a href='#' class="button button-big button-fill button-raised color-pink" onClick={process.english}>ENGLISH</a></div>
			<div><a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.filipino}>FILIPINO</a></div>
			<div><a href='#' class="button button-big button-fill button-raised color-green" onClick={process.pictures}>PICTURES</a></div>	
		</center></div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	english:function(){
		let content =
		<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">
            
				<a href='#' class="button button-big button-fill button-raised color-pink" onClick={process.menu}>HOME</a>
			
				<h3>ENGLISH</h3><br/>
				<div><p>Big Black Bear <br/><br/>A big black bug bit the big black dog, on his big black nose. </p></div>
				<div><center><audio controls><source src="audio/bigblackbug.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Four furious friends <br/><br/>Four furious friends fought for the phone.</p></div>
				<div><center><audio controls><source src="audio/fourfuriousfriends.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Green glass globes <br/><br/>Green glass globes glow greenly.</p></div>
				<div><center><audio controls><source src="audio/greenglassglobe.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Ice cream <br/><br/>I scream, you scream, we all scream for ice cream!</p></div>
				<div><center><audio controls><source src="audio/iscreamyouscream.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Sandwich sane witch <br/><br/>There's a sandwich on the sand which was sent by a sane witch.</p></div>
				<div><center><audio controls><source src="audio/sandwichsanewitch.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Spell New York <br/><br/>Knife and a fork, bottle and a cork, that is the way you spell New York.</p></div>
				<div><center><audio controls><source src="audio/spellnewyork.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>I saw Susie <br/><br/>I saw Susie sitting in a shoe shine shop, where she sits, she shines, where she shines, she sits.</p></div>
				<div><center><audio controls><source src="audio/isawSussie.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Can you can a can <br/><br/>Can you can a can as a canner can can a can?</p></div>
				<div><center><audio controls><source src="audio/can you can.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Copyright <br/><br/>When you write copy you have the right to copyright the copy you write.</p></div>
				<div><center><audio controls><source src="audio/copyright.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Good cook <br/><br/>How many cookies could a good cook cook, if a good cook could cook cookies? A good cook could cook as much cookies as a good cook who could cook cookies.</p></div>
				<div><center><audio controls><source src="audio/goodcook.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>How many cans? <br/><br/>How many cans can a cannibal nibble, if a cannibal can nibble cans? As many cans as a cannibal can nibble if a cannibal can nibble cans.</p></div> 
				<div><center><audio controls><source src="audio/howmanycanscannibalnibble.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>I have got a date <br/><br/>I have got a date at a quarter to eight, I’ll see you at the gate, so don’t be late.</p></div>
				<div><center><audio controls><source src="audio/Ihavegotadate.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>I thought of thinking <br/><br/>I thought, I thought of thinking of thanking you.</p></div>
				<div><center><audio controls><source src="audio/ithought.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>One-0ne <br/><br/>One-one was a race horse. Two-two was one too. One-one won one race. Two-two won one too</p></div>
				<div><center><audio controls><source src="audio/oneone.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Peter piper <br/><br/>Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, Where's the peck of pickled peppers Peter Piper picked?</p></div>
				<div><center><audio controls><source src="audio/peterpiper.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Seven slick snails <br/><br/>Seven slick slimey snails, slowly sliding southward.</p></div>
				<div><center><audio controls><source src="audio/sevenslimeysnails.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>


				<div><p>Thirty three thieves <br/><br/>The thirty-three thieves thought that they thrilled the throne throughout Thursday.</p></div>
				<div><center><audio controls><source src="audio/thirtythreethieves.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Two witches, two watches <br/><br/>If two witches would watch two watches, which witch would watch which watch?</p></div>
				<div><center><audio controls><source src="audio/twowitches.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Understand <br/><br/>If you understand, say ""understand"". If you don't understand, say ""don't understand"". But if you understand and say ""don't understand"". How do I understand that you understand?</p></div>
				<div><center><audio controls><source src="audio/understand.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Whether the weather <br/><br/>Whether the weather be fine, or whether the weather be not.
Whether the weather be cold, or whether the weather be hot. We'll weather the weather whether we like it or not.</p></div>
				<div><center><audio controls><source src="audio/whetherweather.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Betty butter <br/><br/>Betty bought some butter, but the butter Betty bought was bitter, so Betty bought some better butter, and the better butter Betty bought was better than the bitter butter Betty bought before!</p></div>
				<div><center><audio controls><source src="audio/bettybutter.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>


				<div><p>Doctor doctoring <br/><br/>When a doctor doctors a doctor, does the doctor doing the doctoring doctor as the doctor being doctored wants to be doctored? or does the doctor doing the doctoring doctor as he wants to doctor?</p></div>
				<div><center><audio controls><source src="audio/doctordoctoring.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Mary Mac <br/><br/>Mary Mac's mother's making Mary Mac marry me. My mother's making me marry Mary Mac. Will I always be so Merry when Mary's taking care of me? Will I always be so merry when I marry Mary Mac?</p></div>
				<div><center><audio controls><source src="audio/maryMacmarry.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Nature watcher <br/><br/>Out in the pasture the nature watcher watches the catcher. While the catcher watches the pitcher who pitches the balls. Whether the temperature's up or whether the temperature's down, the nature watcher, the catcher and the pitcher are always around. The pitcher pitches, the catcher catches and the watcher watches. So whether the temperature's rises or whether the temperature falls the nature watcher just watches the catcher who's watching the pitcher who's watching the balls.</p></div>
				<div><center><audio controls><source src="audio/naturewatcher.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Biscuit mixer <br/><br/>I bought a bit of baking powder and baked a batch of biscuits. I brought a big basket of biscuits back to the bakery and baked a basket of big biscuits. Then I took the big basket of biscuits and the basket of big biscuits and mixed the big biscuits with the basket of biscuits that was next to the big basket and put a bunch of biscuits from the basket into a biscuit mixer and brought the basket of biscuits and the box of mixed biscuits and the biscuit mixer to the bakery and opened a tin of sardines.</p></div>
				<div><center><audio controls><source src="audio/biscuitmixer.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Wish to wish <br/><br/>I wish to wish the wish you wish to wish, but if you wish the wish the witch wishes, I won't wish the wish you wish to wish.</p></div>
				<div><center><audio controls><source src="audio/Iwishtowish.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Fuzzy wuzzy <br/><br/>Fuzzy Wuzzy was a bear, Fuzzy Wuzzy had no hair, Fuzzy Wuzzy wasn't very fuzzy, was he? </p></div>
				<div><center><audio controls><source src="audio/fuzzywuzzy.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>
				
				<div><p>Clam Cream Can <br/><br/>How can a clam cram in a clean cream can?</p></div>
				<div><center><audio controls><source src="audio/clamcreamcan.mp3" type="audio/mpeg" /></audio></center></div>
				<p>***</p><br/>

				<div><p>Spell chicago <br/><br/>Chicken in the car and the car can go, that is the way you spell Chicago. </p></div>
				
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	filipino:function(){
		let content = 
		<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">

				<a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.menu}>HOME</a>

				<h4>FILIPINO</h4><br/>
				<div><p>Mayamaya’y mamamanhikan si Aman sa mayamang si Maya malamang sa harap ng maraming mamamayan.</p></div>
				<p>***</p><br/>
				<div><p>Pinaputi ni Tepiterio ang pitong puting putong patong patong.</p></div>
				<p>***</p><br/>
				<div><p>Siopao, Siomai at Suman.</p></div>
				<p>***</p><br/>
				<div><p>Sinusi ni Susan ang sisidlan ng sisiw.</p></div>
				<p>***</p><br/>
				<div><p>Bumili ako ng bituka ng butiki sa butika.</p></div>
				<p>***</p><br/>
				<div><p>Pasko, Paksiw, Pasko, Paksiw, Pasko, Paksiw!</p></div>
				<p>***</p><br/>
				<div><p>Tinuka ng pitong puting pato ang pitumpot-pitong puting puto.</p></div>
				<p>***</p><br/>
				<div><p>Bagong bahay, bagong buhay. Bagong buhay sa bagong bahay.</p></div>
				<p>***</p><br/>
				<div><p>Palakang higa, laging nakahiga, kahihiga pa lamang, hihiga na naman.</p></div>
				<p>***</p><br/>
				<div><p>Sumuso ang sanggol na si Susie sa suso ni Susan na sumuso sa suso.</p></div>
				<p>***</p><br/>
				<div><p>Pitumpu’t pitong puting putong ipinirito ng puting patong papito-pito.</p></div>
				<p>***</p><br/>
				<div><p>Tumalon si Tonton sa malalim na balon sa ilalim ng talon sa taniman ng talong.</p></div>
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	pictures:function(){
		let content = 
	<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">

				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>HOME</a>
			<div>

				<h3>PICTURES</h3><br/><center>
				<div class="col-auto tablet-auto"><img src="img/tag1.png"/></div>
				<div class="col-auto tablet-auto"><img src="img/tag2.png"/></div>
				<div class="col-auto tablet-auto"><img src="img/tag3.png"/></div>
				<div class="col-auto tablet-auto"><img src="img/tag4.png"/></div>
				<div class="col-auto tablet-auto"><img src="img/tag5.png"/></div>
				<div class="col-auto tablet-auto"><img src="img/tag6.png"/></div>
				<div class="col-auto tablet-auto"><img src="img/tag7.png"/></div>
				<div class="col-auto tablet-auto"><img src="img/tag8.png"/></div>
				<div class="col-auto tablet-auto"><img src="img/tag9.png"/></div>
				<div class="col-auto tablet-auto"><img src="img/tag10.png"/></div></center>

						</div>
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

		loading:function(){
		let content = <div>
					Loading...
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},1);