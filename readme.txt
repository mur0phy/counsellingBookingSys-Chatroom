open 3 cmd and follow below setps to run applications

start /web (react, frontend) before, you MUST started /api for backend server (nodejs)

1. counselling-booking-master/api> yarn start
	localhost:3000

2. counselling-booking-master/web> yarn start
	localhost:7000

3. counselling-booking-master/web/chatroom> npm start 
	localhost:4000
=========================================================================

user have to sign up in  respectively
=========================================
16/2/2023 edit by Issac
拆pages from App.js
呢到kind of 5版野 
1. SignIn <-- 抽咗, login要f5先入到
, 未試signup
2. bookings
	=> 抽咗一半, 有野睇
	=> logout唔到, 未試其他function
	=> click calendar會彈error
		setCalendarDate
		D:/hkmu/FYP/fyp_reactjs_tsx_js/counsellingBookingSys-chatroom/web/src/pages/bookings.js:23
		  20 | //}
		  21 | const signedIn = !!decodedToken
		  22 | const setCalendarDate = date => {
		> 23 |     this.setState({ calendarDate: date })
		  24 |   }
		  25 | 
		  26 | const webName = "Online Counselling System"
		View compiled
		onChange
		D:/hkmu/FYP/fyp_reactjs_tsx_js/counsellingBookingSys-chatroom/web/src/components/Calendar.js:12
		   9 |     timeFormat={false}
		  10 |     input={false}
		  11 |     utc={false}
		> 12 |     onChange={event => props.setCalendarDate(event._d)}
		  13 |     isValidDate={validDate}
		  14 |   />
		  15 | )
	  
3. createbooking <-- 未抽
4. mybookings <-- 未抽
5. chatroom <-- direct to localhost:4000
