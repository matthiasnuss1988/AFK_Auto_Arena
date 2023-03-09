function btnExitClick()
	Set wmi = GetObject("winmgmts:")
	Set procs= wmi.ExecQuery("select * from Win32_process where Name='mshta.exe'")
	For Each p in procs
		 p.Terminate()
	Next
	location.reload True	
end function
	