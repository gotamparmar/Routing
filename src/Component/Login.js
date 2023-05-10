import React from 'react'

function login() {
  return (
    <div>
      <div>
      	<form>
		<h2> creat account</h2>
				name<br></br><input type="text" placeholder=" enter the name" name=""></input><br></br><br></br>
			user id<br></br><input type="text" placeholder="enter your user id"  name=""></input><br></br><br></br>
			password<br></br><input type="password" placeholder="enter the password" name=""></input><br></br><br></br>
			email<br></br><input type="email" placeholder=" enter your email" name=""></input><br></br><br></br>
			password<br></br><input type="password" placeholder=" password at list 8 charectors"></input><br></br>paswords must be at list 8 charectors<br></br><br></br>

			mobile<br></br>
			<select>
				<option> +91</option>
				<option> +1</option>
				<option>+52</option>
			</select>
			<input type="number" name=""></input><br></br><br></br>
		     <button>submit</button>
			<button> reset </button>


			<p>By enrolling your mobile phone number, <br></br>consent to receive automated security<br></br>ifications via text message from vcrack. <br></br>age and data rates may apply.</p>
	
      </form>
      </div>

    </div>
  )
}

export default login