var btnStart=document.getElementById('btnStart');
var btnStop=document.getElementById('btnStop');
// var tmArray=document.getElementById('tmArray');
var teamList;
var numberOfTeams;
var teamTime;
var scriptTime;
var modusValue;
var startPoint;
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var d = new Date();
var day = weekday[d.getDay()];
var lastMidnight = new Date()-new Date().setHours(0,0,0,0);
var twoAM=2*60*60*1000;

var trends = document.getElementById('modus'), trend, i;
for(i = 0; i < trends.length; i++) {
	trend = trends[i];
	switch(day) {
		case 'Monday':
			if(lastMidnight>=twoAM){
				if (i==3| i==5| i==6| i==7| i==8){
					trend.setAttribute("disabled");
				} else{
					trend.style.color='Blue';
					break;
				}
						}
			else{/* Sunday */
					trend.style.color='Blue';
			}
		case 'Tuesday':
			if(lastMidnight>=twoAM){
				if (i==3| i==4| i==6| i==7| i==8){
					trend.setAttribute("disabled");
				} else{
					trend.style.color='Blue';
					break;
				}
			}
			else{/* Monday */
				if (i==3| i==5| i==6| i==7| i==8){
					trend.setAttribute("disabled");
				} else{
					trend.style.color='Blue';
					break;
				}
			}				
		case 'Wednesday':
			if(lastMidnight>=twoAM){		
				if (i==4| i==5| i==7| i==8){
					trend.setAttribute("disabled");
				} else{
					trend.style.color='Blue';
					break;
				}
			}
			else{/* Tuesday */
				if (i==3| i==4| i==6| i==7| i==8){
					trend.setAttribute("disabled");
				} else{
					trend.style.color='Blue';
					break;
				}
			}				
		case 'Thursday':
			if(lastMidnight>=twoAM){
				if (i==3 |i==4| i==5| i==6 |i==8){
					trend.setAttribute("disabled");
				} else {				
					trend.style.color='Blue';
					break;
				}
			}
			else{/* Wednesday */
				if (i==4| i==5| i==7| i==8){
					trend.setAttribute("disabled");
				} else{
					trend.style.color='Blue';
					break;
				}
			}
		case 'Friday':
			if(lastMidnight>=twoAM){
				if (i==3 |i==4| i==5| i==6 |i==7){
					trend.setAttribute("disabled");
				} else{
					trend.style.color='Blue';
					break;
				}
			}
			else{/* Thursday */
				if (i==3 |i==4| i==5| i==6 |i==8){
					trend.setAttribute("disabled");
				} else {				
					trend.style.color='Blue';
					break;
				}	
			}	
		case 'Saturday':
			if(lastMidnight>=twoAM){
				if(i==3 | i==4 | i==5){
					trend.setAttribute("disabled");
				} 
				else{
					trend.style.color='Blue';
					break;
				}
			}
			else{/* Friday */
				if (i==3 |i==4| i==5| i==6 |i==7){
					trend.setAttribute("disabled");
				} else{
					trend.style.color='Blue';
					break;
				}
			}
		case 'Sunday':
			if(lastMidnight>=twoAM){
				trend.style.color='Blue';
			} 
			else{/* Saturday */
				if(i==3 | i==4 | i==5){
					trend.setAttribute("disabled");
				} 
				else{
					trend.style.color='Blue';
					break;
				}
			}
		}	
	}
	
	function WriteLogger(strText) {
	document.getElementById('logger').value+=strText + '\r\n';
	}


	function btnStopClick(){
		// btnStart.style.background = 'rgba(255, 255, 255, 0.75)';
		// btnStart.style.color = '#4CAF50';
		// btnStop.style.background = '#f44336';
		// btnStop.style.color = 'white';
		btnStop.value="true";
		btnStart.value="false";
			// document.write(matches[i].value+ "<br >");
	}
	
	function btnStopReset(){
		// btnStop.style.background = 'rgba(255, 255, 255, 0.75)';
		// btnStop.style.color = '#f44336';
		btnStop.value="false";
		btnStart.value="false";
		document.activeElement.blur();
	}

	function checkboxes(){
		var container = document.querySelector("#tmArray");
		var matches=container.querySelectorAll('input[type="checkbox"]');
		var teamListEnd = matches.length;
		teamList=[];
		for (var i = 0; i < teamListEnd; i++) {
			if(matches[i].checked==true){
			teamList.push([i+1]);
			}
		}
		numberOfTeams=teamList.length;
	 }
	 
	function jsArray2vbArray(arr) {
		var dict = new ActiveXObject("Scripting.Dictionary");
		for (var i in arr) dict.Add(i, arr[i]);
		return dict.Items();
	}

	function btnStartClick() {
		teamTime=document.getElementById('teamTime').value;
		startPoint=document.getElementById('startPoint');
		var scriptTimeOpt = document.getElementById('scriptTime');
		var modusOpt = document.getElementById('modus');
		var scriptTimeValue;
		modusValue=modusOpt.value;
		// var scriptOpt = document.querySelector('#scriptTime option:checked');
		/* var modusOpt = document.querySelector('#modus option:checked'); */
		if (modusValue == '0'){modusValue=modusOpt.value = '1';}
		if (teamTime == ''){
			switch(modusValue) {
				case '1':/* Feldzug */
				teamTime=document.getElementById('teamTime').value = '20';
				break;
				case '2':/* Königsturm */
				teamTime=document.getElementById('teamTime').value = '15';
				break;
				case '3':/* Himmlisches Heiligtum */
				teamTime=document.getElementById('teamTime').value = '7';
				break;
				case '4':/* Turm des Lichtes */
				teamTime=document.getElementById('teamTime').value = '5';
				break;
				case '5':/* Die Brutale Zitadelle */
				teamTime=document.getElementById('teamTime').value = '5';
				break;
				case '6':/* Höllische Festung */
				teamTime=document.getElementById('teamTime').value = '5';
				break;
				case '7':/* Die Verlassene Nekropolis */
				teamTime=document.getElementById('teamTime').value = '5';
				break;
				case '8':/* Der Weltenbaum */
				teamTime=document.getElementById('teamTime').value = '5';
				break;
				default:
				teamTime=document.getElementById('teamTime').value = '5';
			}
		}
		if (scriptTimeOpt.value == '0'){scriptTimeValue=scriptTimeOpt.value = '4';}
		scriptTime=scriptTimeOpt.options[scriptTimeOpt.selectedIndex].text;
		if (scriptTimeOpt.value == '4'){scriptTime = '9999';}
		btnStop.value="false";
		btnStart.value="true";
		checkboxes();
		vbscript:makro();
	}


	var x, i, j, l, ll, selElmnt, a, b, c;
	/*look for any elements with the class "custom-select":*/
	for (i = 0; i < l; i++) {
		selElmnt = x[i].getElementsByTagName("select")[0];
		ll = selElmnt.length;
		/*for each element, create a new DIV that will act as the selected item:*/
		a = document.createElement("DIV");
		a.setAttribute("class", "select-selected");
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		x[i].appendChild(a);
		/*for each element, create a new DIV that will contain the option list:*/
		b = document.createElement("DIV");
		b.setAttribute("class", "select-items select-hide");
		for (j = 1; j < ll; j++) {
			/*for each option in the original select element,
			create a new DIV that will act as an option item:*/
			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener("click", function(e) {
				/*when an item is clicked, update the original select box,
				and the selected item:*/
				var y, i, k, s, h, sl, yl;
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				sl = s.length;
				h = this.parentNode.previousSibling;
				for (i = 0; i < sl; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName("same-as-selected");
						yl = y.length;
						for (k = 0; k < yl; k++) {
							y[k].removeAttribute("class");
						}
						this.setAttribute("class", "same-as-selected");
						break;
					}
				}
				h.click();
			});
			b.appendChild(c);
		}
		x[i].appendChild(b);
		a.addEventListener("click", function(e) {
			/*when the select box is clicked, close any other select boxes,
			and open/close the current select box:*/
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle("select-hide");
			this.classList.toggle("select-arrow-active");
		});
	}
	function closeAllSelect(elmnt) {
		/*a function that will close all select boxes in the document,
		except the current select box:*/
		var x, y, i, xl, yl, arrNo = [];
		x = document.getElementsByClassName("select-items");
		y = document.getElementsByClassName("select-selected");
		xl = x.length;
		yl = y.length;
		for (i = 0; i < yl; i++) {
			if (elmnt == y[i]) {
				arrNo.push(i)
				} else {
				y[i].classList.remove("select-arrow-active");
			}
		}
		for (i = 0; i < xl; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add("select-hide");
			}
		}
	}
	/*if the user clicks anywhere outside the select box,
	then close all select boxes:*/
	<!-- document.addEventListener("click", closeAllSelect); -->