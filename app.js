
			var userName = prompt('What\'s your name friend ?');
      console.log(' The user\'s name is ' + userName);
			alert(' Okay ' + userName + ', I hope you are here to learn about me. If not... forget it let\'s begin !');

			var questionOne = function (answerOne) {
				var	guessOne = prompt("Where do I want this class to take me \n A)Gaming industry, B) Just doing it for fun, C) No where ?").toUpperCase();
					if (guessOne !== answerOne) alert("Try Again!");
					while (guessOne !== answerOne); };

					questionOne("A");
					alert("Yup! my end goal is to go into game development!");

				var questionTwo = function (answerTwo) {
				var guessTwo = prompt("How many siblings do I have ? A) none, B) 1, C) 3 .");
				if (guessTwo !== answerTwo) alert("Try Again!");
				while (guessTwo !== answerTwo);       };

				questionTwo("C");
					alert("Lusky guess");

			var questionThree = function (answerThree) {
				var guessThree = prompt("Hm...I don\'t know what els to ask you. \n so pick a letter ! any letter. \n as long as it is B  \n A)1, B) 2, C)3 or ").toUpperCase();
				if (guessThree !== answerThree) alert("Try Again!");
				while (guessThree !== answerThree);     };

				questionThree("B");
					alert("Good Job!!");

				alert("I know you are happy you know more about me \n see ya later !");
