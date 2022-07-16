console.log("main.js!!");

const events = [
	{
		id: "a",
		start: "2022-07-01",
		end: "",
		title: "節分",
		description: "悪い鬼を追い払い福を招く",
		backgroundColor: "red",
		borderColor: "red",
		editable: true
	},
	{
		id: "b",
		start: "22022-07-02",
		end: "",
		title: "立春",
		description: "二十四節気の一つ",
		backgroundColor: "green",
		borderColor: "green",
		editable: true
	},
	{
		id: "c",
		start: "2022-07-05",
		end: "",
		title: "針供養",
		description: "古くなった針などを神社に納めて供養する",
		backgroundColor: "blue",
		borderColor: "blue",
		editable: true
	},
];

window.onload = (e)=>{

	// Calendar
	const elem = document.getElementById("my-calendar");


	const calendar = new FullCalendar.Calendar(elem, {

        //カレンダーの種類
		// initialView: "dayGridMonth",	//dayGridMonth:月、日区切り
		// initialView: "dayGridWeek",		//dayGridWeek:週、日区切り
		initialView: "timeGridDay",		//timeGridDay:日、時間区切り


		//最初に表示される日
		initialDate: "2022-07-16",

		//上で書いたイベント
		events: events,


		dateClick: (e)=>{
			console.log("dateClick:", e);
		},
		eventClick: (e)=>{
			console.log("eventClick:", e.event.title);
		},
		eventDidMount: (e)=>{
			tippy(e.el, {// Tippy
				content: e.event.extendedProps.description,
			});
		}
	});
	calendar.render();
}