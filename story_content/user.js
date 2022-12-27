function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Y4Zt5G1pdJ":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxy7gHg5gtxsT7CYTrHutjkabESKrn3xAN83JsD296w_Ghi3mWP5gqKKMqUO2xtgNXc/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({country:player.GetVar("country"),grade:player.GetVar("grade"),term:player.GetVar("term"),subject:player.GetVar("subject"),type:player.GetVar("type"),time:player.GetVar("time"),comment:player.GetVar("comment"),video_code:player.GetVar("video_code")})
	}
	)
}

