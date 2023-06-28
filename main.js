		const from = document.getElementById("from");
			const to = document.getElementById("to");
			const amount = document.getElementById("amount"); amount.defaultValue="0";
			const convert = document.getElementById("convert");
			const result = document.getElementById("result");

			convert.addEventListener("click", function() {

				let fromCurrancy = from.value;
				let toCurrancy = to.value;
				let amt = amount.value;
				
				fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrancy}`)
					.then(response => {
return response.json();
				})
					.then(data => {
						let rate = data.rates[toCurrancy];
						let total = rate * amt;
						result.innerHTML = `${amt} ${fromCurrancy} = ${total}
						${toCurrancy}`;
						console.log(data);
				});
				});