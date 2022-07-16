// イベント挿入
const events = [
	{
		id: "a",// ユニークID
		start: "2022-07-16",// イベント開始日
		end: "",// イベント終了日
		title: "節分",// イベントのタイトル
		description: "悪い鬼を追い払い福を招く",// イベントの詳細
		backgroundColor: "red",// 背景色
		borderColor: "red",// 枠線色
		editable: true// イベント操作の可否
	},
	// 省略
];





//カレンダー全体の設定
// IDを取得する
const elem = document.getElementById("my-calendar");

// FullCalendarオブジェクト
const calendar = new FullCalendar.Calendar(elem, {
    //カレンダーのオプションなど

    //initialView:カレンダーの種類
	initialView: "dayGridMonth",    //dayGridMonth:月単位
    initialView: "dayGridWeek",     //dayGridWeek:週単位
    initialView: "timeGridDay",     //timeGridDay:日単位

    //たぶんページを読み込んだ時、最初に表示される日
	initialDate: "2022-07-16",

    //日本語化    
    // locale: 'ja',  


	events: events,
	dateClick: (e)=>{
		console.log("dateClick:", e);
	},
	eventClick: (e)=>{
		console.log("eventClick:", e.event.title);
	},
	eventDidMount: (e)=>{// カレンダーに配置された時のイベント
		tippy(e.el, {// TippyでTooltipを設定する
			content: e.event.extendedProps.description,
		});
	}



    
});






// カレンダーを表示する
calendar.render();




//End