document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var DAY_NAMES = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'ja',
  
      dayCellContent: function(e) {
          e.dayNumberText = e.dayNumberText.replace('日', '');
      },
      dayHeaderContent: function(arg) {
          return DAY_NAMES[arg.date.getDay()]
      },
  
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: '' // 月とリスト要らないので･･･でも要素のバランス用に
      },
      buttonText: {
        today: '今月',
        month: '月',
        list: 'リスト'
      },
  
      displayEventTime: false, // don't show the time column in list view
      firstDay: 1,    // 月曜始まり
      showNonCurrentDates: false,
      height: "auto", // 高さは自動
  
      // GoogleカレンダーAPIキー
      googleCalendarApiKey: 'ここに取得したAPIキー',
  
      // イベントの指定
      events: {
        googleCalendarId: 'ここにカレンダーID', // Googleカレンダーの指定
        display: 'background',  // 背景表示
        color:"#49B9A7",  // 背景の色指定
        classNames: 'gcal-event', // 独自のclass名を付与（必要なら）
      },
  
      // クリック時の動作（今回は割愛）
      eventClick: function(arg) {
        // opens events in a popup window
        window.open(arg.event.url, 'google-calendar-event', 'width=700,height=600');
        arg.jsEvent.preventDefault() // don't navigate in main tab
      },
  
      loading: function(bool) {
        if(bool) {
          document.getElementById('loading').style.display = 'block';
        } else {
          document.getElementById('loading').style.display = 'none';
  
          setTimeout(() => {
            let els = document.getElementsByClassName('fc-bg-event');
            for (let i = 0; i <  els.length; i++) {
              els[i].closest('td').style.color = '#ffffff';
            }
          }, 10);  
        }
      }
  
    });
  
    calendar.render();
  });


//End