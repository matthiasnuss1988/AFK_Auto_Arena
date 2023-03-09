Sub Sleep(intSeconds)
	Set WshShell = CreateObject("Wscript.Shell")
	Dim WshShell, strCommand
	strCommand = "%COMSPEC% /c ping -n " & 1 + intSeconds & " 127.0.0.1>nul"
	WshShell.Run strCommand, 0, True
End Sub