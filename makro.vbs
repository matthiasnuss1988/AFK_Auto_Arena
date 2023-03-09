Dim min, WshShell,Player, autokampf,periodicRestart,restartCounter, restartCondition, cycleCounter
min=60
Set WshShell = CreateObject("Wscript.Shell")
sub makro()
autokampf=startPoint.checked
	If numberOfTeams > 0 Then
		periodicRestart=120
		restartCounter=0
		restartCondition=0
		cycleCounter=1
		scriptTime=scriptTime*min
		userHours=Int(teamTime/min)
		userMin=Int(teamTime-userHours*min)
		userSec=Int((teamtime-userHours*min-userMin)*min)
		cycles=Int(scriptTime/(numberOfTeams*(teamTime+0.5))+0.99)
		WriteLogger(vbTab&"Start scripting")
		WriteLogger("")
		teamList=jsArray2vbArray(teamList)
		startPlayer()
		Do while cycleCounter<=cycles And btnStart.value
		WriteLogger(vbTab&"Debug between loops")
			For each team in teamList
			WriteLogger(vbTab&"Debug begin cycleloop")
				' if btnStop.value Then
					' btnStopReset()
					' WriteLogger(vbTab&"Loop abgebrochen")
					' Exit sub
				' End if
				WshShell.AppActivate "BlueStacks App Player 1"
				WshShell.SendKeys "h"
				Sleep 2.5
				WshShell.SendKeys "x"
				Sleep 2.5
				WshShell.SendKeys "y"
				Sleep 2.5
				WshShell.SendKeys "1"
				Sleep 2.5
				WshShell.SendKeys "t"
				if btnStop.value Then
					btnStopReset()
					WriteLogger(vbTab&"Loop abgebrochen")
					Exit sub
				End if
				Sleep 2
				WshShell.SendKeys(team)
				Sleep 2
				WshShell.SendKeys "k"
				Sleep 2
				WshShell.SendKeys "v"
				WriteLogger("")
				WriteLogger(vbTab&"_________________________________TEAM " & team &"_________________________________")
				Sleep 2
				WshShell.SendKeys "a"
				Sleep 2
				WshShell.SendKeys "v"
				WriteLogger("")
				WriteLogger(vbTab&"Team " & team & " fights the stage for " & userHours & " h : " & userMin & " min : " & userSec & " sec")
				WriteLogger("")
				remaining=teamTime*min
				Do while remaining>0 And btnStart.value
					remainingHours=Int(remaining/min^2)
					remainingMin=Int(remaining/min-remainingHours*min)
					remainingSec=Int(remaining-remainingHours*min^2-remainingMin*min)
					If remaining = teamTime*min Then
						WriteLogger(vbTab&"Remaining:"& vbTab & remainingHours & " h : " & remainingMin & " min : " & remainingSec & " sec")
					else
						If teamTime<=1 Then
							If remaining Mod 10=0 Then
							WriteLogger(vbTab&vbTab&vbTab&vbTab& remainingHours & " h : " & remainingMin & " min : " & remainingSec & " sec")
							end if
						else
							If remaining Mod min=0 Then
							WriteLogger(vbTab&vbTab&vbTab&vbTab& remainingHours & " h : " & remainingMin & " min : " & remainingSec & " sec")
							End If
						End If
					End If
					Sleep 1
					remaining= remaining-1
				Loop
				WshShell.SendKeys "v"
				Sleep 2
				WshShell.SendKeys "v"
				Sleep 0.15
				WshShell.SendKeys "p"
				Sleep 2
				WshShell.SendKeys "e"
				Sleep 2
				WriteLogger(vbTab&"Debug end loop")
			Next
			' RunTime is in minutes
			runTime=cycleCounter*numberOfTeams*(teamTime+0.5)
			' WriteLogger(vbTab&"Actual runtime: " & runTime & " min")
			' WriteLogger(vbTab&"teamTime " & teamTime & " cycleCounter " & cycleCounter & " cycles " & cycles & " Neustart nach " & periodicRestart	&" min")
			runHours=Int(runTime/min)
			runMin=Int(runTime-runHours*min)
			runSec=Int((runTime-runHours*min-runMin)*min)
			WriteLogger("")
			WriteLogger(vbTab&"Runtime: " & runHours & " h : " & runMin & " min : " & runSec & " sec")
			restartCondition=Fix(runTime/periodicRestart)
			If restartCondition<>restartCounter Then
				WriteLogger(vbTab&"Restart Condition: " & restartCondition & " fullfilled")
				restartCounter=restartCounter+1
				WriteLogger(vbTab&"The Payer performs timeout close")
				WriteLogger("")
				Player.Terminate
				autokampf="false"
				startPlayer()
			End if	
			cycleCounter=cycleCounter+1
			WriteLogger(vbTab&"Debug end cycleloop")
		Loop
		btnStopReset()
		WriteLogger(vbTab&"Loop fertig")
	End If
End sub
Sub startPlayer()
		strPathPlayer="""C:\Program Files\BlueStacks_nxt\HD-Player.exe"""
		strAttr1 = " --instance Nougat32"
		strAttr2 = " --cmd launchApp"
		strAttr3 = " --package "
		strAttr4 = "com.lilithgame.hgame.gp"
		Set Player = WshShell.Exec(strPathPlayer & strAttr1 & strAttr2 & strAttr3 & chr(34) & strAttr4 & chr(34))
		' WriteLogger(strPathPlayer & strAttr1 & strAttr2 & strAttr3 & chr(34)& strAttr4 & chr(34))
		WshShell.Run strPathPlayer & strAttr1 & strAttr2 & strAttr3 & chr(34) & strAttr4 & chr(34)
		PID=Player.ProcessID
		'Checked is fight mode'
		If autokampf = "true" Then
			WshShell.AppActivate "BlueStacks App Player 1"
			WriteLogger(vbTab&"______________________________<AFK Arena>_________________________________")
			WriteLogger("")
			WriteLogger(vbTab&"Bluestacks is activated")
			Sleep 2
		else
			WriteLogger(vbTab&"______________________________<AFK Arena>_________________________________")
			WriteLogger("")
			WriteLogger(vbTab&"...Initialize...")
			WriteLogger("")
			Sleep 0.7*min
			modusPlayer()
		End If
End Sub
Sub modusPlayer()
	WshShell.AppActivate "BlueStacks App Player 1"
	WriteLogger(vbTab&"Bluestacks is activated")
	' WshShell.SendKeys "+(^T)"
	' Sleep 2
	Select case modusValue 
		case 1 'Feldzug'
			WshShell.SendKeys "h"
			Sleep 2.5
			WshShell.SendKeys "x"
			Sleep 2.5
			WshShell.SendKeys "y"
			Sleep 2.5
		case 2 'Königsturm'
			WshShell.SendKeys "a"
			Sleep 2.5
			WshShell.SendKeys "e"
			Sleep 2.5
			WshShell.SendKeys "e"
			Sleep 2.5
		case 3 'Himmlisches Heiligtum'
			WshShell.SendKeys "a"
			Sleep 2.5
			WshShell.SendKeys "e"
			Sleep 2.5
			WshShell.SendKeys "h"
			Sleep 2.5
		case 4 'Turm des Lichtes'
			WshShell.SendKeys "a"
			Sleep 2.5
			WshShell.SendKeys "e"
			Sleep 2.5
			WshShell.SendKeys "l"
			Sleep 2
		case 5 'Die Brutale Zitadelle'
			WshShell.SendKeys "a"
			Sleep 2.5
			WshShell.SendKeys "e"
			Sleep 2.5
			WshShell.SendKeys "b"
			Sleep 2.5
		case 6 'Höllische Festung'
			WshShell.SendKeys "a"
			Sleep 2.5
			WshShell.SendKeys "e"
			Sleep 2.5
			WshShell.SendKeys "y"
			Sleep 2.5
		case 7 'Die Verlassene Nekropolis'
			WshShell.SendKeys "a"
			Sleep 2.5
			WshShell.SendKeys "e"
			Sleep 2.5
			WshShell.SendKeys "4"
			Sleep 2.5
		case 8 'Der Weltenbaum'
			WshShell.SendKeys "a"
			Sleep 2.5
			WshShell.SendKeys "e"
			Sleep 2.5
			WshShell.SendKeys "1"
			Sleep 2.5
	End Select
End Sub