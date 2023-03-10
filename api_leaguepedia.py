import mwclient
import requests
import json
import datetime as dt
from datetime import date 

date="2023-01-29"
date=dt.datetime.strptime(date, "%Y-%m-%d")

site = mwclient.Site('lol.fandom.com', path='/')

# response = site.api('cargoquery',
# 	limit = 'max',
# 	tables = "ScoreboardGames=SG, MatchScheduleGame=MSG, PostgameJsonMetadata=PJM",
#     join_on = "SG.GameId=MSG.GameId, MSG.RiotPlatformGameId=PJM.RiotPlatformGameId",
# 	fields = "SG.Tournament, SG.Team1, SG.Team2, SG.DateTime_UTC, PJM.StatsPage, PJM.TimelinePage",
#     where = "SG.Tournament = 'CBLOL 2023 Split 1' AND SG.DateTime_UTC >= '" + str(date) + "' AND (SG.Team1 = 'FURIA' OR SG.Team2 = 'FURIA')",
#     order_by = "SG.DateTime_UTC"
# )

response = site.api('cargoquery',
    limit = 'max',
    tables = "Tournaments=T, Leagues=L",
    join_on = " T.League = L.League",
    fields = "T.Name",
    where = "L.League_Short = 'CBLOL'", # AND T.Date >= '" + str(date.today()) + "'",
)

print(json.dumps(response, indent=2))
dic = {
    ' ':'%20',
    ':':'%3A',
    '/':'%2F',
    '|':'%7C'
}

def toHexa(title):
    hexaTitle = ''
    for letter in title:
        if letter in ' :/|':
            hexaTitle += dic[letter]
        else:
            hexaTitle += letter
    return hexaTitle


response_gs = requests.get("https://lol.fandom.com/api.php?action=query&format=json&prop=revisions&titles=" + toHexa(response["cargoquery"][0]["title"]["StatsPage"]) + "&rvprop=content&rvslots=main")


gs = json.dumps(response_gs.json(), indent=2)

gs = str(gs).replace('\\n','\n').replace('\\"', '"').replace('"{', '{').replace('}"','}')
#print(gs)
gs = json.loads(gs)

pageId = str(list(gs["query"]["pages"].keys())[0])

print(gs["query"]["pages"][pageId]["revisions"][0]["slots"]["main"]["*"])

