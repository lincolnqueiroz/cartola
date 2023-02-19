import mwclient
import requests
import json
from datetime import date

def getCurrentCBLOL():
    try:
        site = mwclient.Site('lol.fandom.com', path='/')
    except:
        print("Não pode conectar com leaguepedia")
    
    try:
        response = site.api('cargoquery',
            limit = 'max',
            tables = "Tournaments=T, Leagues=L",
            join_on = "T.League = L.League",
            fields = "T.Name",
            where = "L.League_Short = 'CBLOL' AND T.Date >= '" + str(date.today()) + "'",
        )
        try:
            return response['cargoquery'][0]['title']['Name']
        except:
            print("Erro ao retornar split")
    except:
        print("Erro na cargoquery")

def getAllCurrentCBLOLTeams():
    try:
        site = mwclient.Site('lol.fandom.com', path='/')
    except:
        print("Não pode conectar com leaguepedia")
    
    try:
        response = site.api('cargoquery',
            limit = 'max',
            tables = "ScoreboardGames=SG",
            fields = "SG.Team1",
            where = "SG.Tournament = '" + getCurrentCBLOL() + "'",
        )
        try:
            teams = []
            for teamLine in response["cargoquery"]:
                if teamLine['title']['Team1'] not in teams:
                    teams.append(teamLine['title']['Team1'])
            return teams
        except:
            print("Erro ao retornar times")
    except:
        print("Erro na cargoquery")
    

def getAllCurrentCBLOLPayers():
    try:
        site = mwclient.Site('lol.fandom.com', path='/')
    except:
        print("Não pode conectar com leaguepedia")
    
    try:
        response = site.api('cargoquery',
            limit = 'max',
            tables = "Players=P, Teams=T",
            join_on = "P.Team = T.Name",
            fields = "P.ID  , P.Team, P.Role",
            where = "P.Role in ('Top','Jungle','Mid','Bot','Support') AND T.Name in " + str(getAllCurrentCBLOLTeams()).replace('[','(').replace(']',')'),
        )
        try:
            players = []
            for playerLine in response["cargoquery"]:
                if playerLine['title'] not in players:
                    players.append(playerLine['title'])
            return players
        except:
            print("Erro ao retornar jogadores")
    except:
        print("Erro na cargoquery")
    
def getAllCurrentCBLOLGames():
    try:
        site = mwclient.Site('lol.fandom.com', path='/')
    except:
        print("Não pode conectar com leaguepedia")
    
    try:
        response = site.api('cargoquery',
            limit = 'max',
            tables = "ScoreboardGames=SG",
            join_on = "SG.Tournament = T.Name, T.League = L.League",
            fields = "SG.DateTime_UTC, SG.N_Page, SG.N_MatchInPage, SG.Team1, SG.Team2",
            where = "L.League_Short = 'CBLOL' AND T.Date >= '" + str(date.today()) + "'",
        )
        try:
            games = []
            for game in response["cargoquery"]:
                    games.append(game['title'])
            return games
        except:
            print("Erro ao retornar jogos")
    except:
        print("Erro na cargoquery")


def toHexa(title):
    dic = {
        ' ':'%20',
        ':':'%3A',
        '/':'%2F',
        '|':'%7C'
    }
    hexaTitle = ''
    for letter in title:
        if letter in ' :/|':
            hexaTitle += dic[letter]
        else:
            hexaTitle += letter
    return hexaTitle

def getGameDetail(game):
    try:
        site = mwclient.Site('lol.fandom.com', path='/')
    except:
        print("Não pode conectar com leaguepedia")

    try:
        response = site.api('cargoquery',
            limit = 'max',
            tables = "ScoreboardGames=SG, MatchScheduleGame=MSG, PostgameJsonMetadata=PJM",
            join_on = "SG.GameId=MSG.GameId, MSG.RiotPlatformGameId=PJM.RiotPlatformGameId",
            fields = "PJM.StatsPage",
            where = "SG.Tournament = '" + getCurrentCBLOL() + "' AND SG.N_Page = " + str(game['N_Page']) + " AND SG.N_MatchInPage = " + str(game['N_MatchInPage']),
        )
        try:
            response_gs = requests.get("https://lol.fandom.com/api.php?action=query&format=json&prop=revisions&titles=" + toHexa(response["cargoquery"][0]["title"]["StatsPage"]) + "&rvprop=content&rvslots=main")
            gs = json.dumps(response_gs.json(), indent=2)
            gs = str(gs).replace('\\n','\n').replace('\\"', '"').replace('"{', '{').replace('}"','}')
            gs = json.loads(gs)
            pageId = str(list(gs["query"]["pages"].keys())[0])
            gameDetails = gs["query"]["pages"][pageId]["revisions"][0]["slots"]["main"]["*"]
            return gameDetails
        except:
            print("Erro ao retornar detalhes do jogo")
    except Exception as exp:
        print("Erro na cargoquery")
        print(exp)

def getPlayerResults(game, player):
    dict = {
        "Top":0,
        "Jungle":1,
        "Mid":2,
        "Bot":3,
        "Support":4
    }
    try:
        site = mwclient.Site('lol.fandom.com', path='/')
    except:
        print("Não pode conectar com leaguepedia")

    try:
        response = site.api('cargoquery',
            limit = 'max',
            tables = "MatchScheduleGame=MSG, ScoreboardPlayers=SP, ScoreboardGames=SG",
            join_on = "MSG.MatchId=SP.MatchId,SG.GameId=SP.GameId",
            fields = "SP.Name, SP.Role, SP.Team, SG.Team1, SG.Team2, MSG.MVP",
            where = "SG.Tournament = '" + getCurrentCBLOL() + "' AND SG.N_Page = " + str(game['N_Page']) + " AND SG.N_MatchInPage = " + str(game['N_MatchInPage']) + " AND SP.Name = '" + player["name"] +"'",
        )
        try:
            if response["cargoquery"][0]["title"]["Team"] == response["cargoquery"][0]["title"]["Team1"]:
                order = dict[response["cargoquery"][0]["title"]["Role"]]
                team = 0
            else:
                order = dict[response["cargoquery"][0]["title"]["Role"]] + 5
                team = 1
            gameDetail = getGameDetail(game)
            teamDetail = gameDetail["teams"][team]
            playerDetail = gameDetail["participants"][order]
            playerChampion = playerDetail["championName"]
            playerLevel = playerDetail["champLevel"]
            enemyLevel = gameDetail["participants"][(order+5)%10]["champLevel"]
            playerCS = playerDetail["totalMinionsKilled"]
            playerDeaths = playerDetail["deaths"]
            playerAssists = playerDetail["assists"]
            playerFB = playerDetail["firstBloodKill"]
            playerKills = playerDetail["kills"]
            playerMultikill = playerDetail["largestMultiKill"]
            playerKillingSpree = playerDetail["largestKillingSpree"]
            playerVisonScore = playerDetail["visionScore"]
            playerMVP = player["name"] == response["cargoquery"][0]["title"]["MVP"]
            teamTowers = teamDetail["objectives"]["tower"]["kills"]
            teamInibs = teamDetail["objectives"]["inhibitor"]["kills"]
            teamDrags = teamDetail["objectives"]["dragon"]["kills"]
            teamHeralds = teamDetail["objectives"]["riftHerald"]["kills"]
            teamBarons = teamDetail["objectives"]["baron"]["kills"]
            teamWin = teamDetail["win"]
            teamFastWin = teamWin and (gameDetail["gameDuration"] < 1800)
            teamGold = 0
            enemyTeamGold = 0
            for participant in gameDetail["participants"][5*team:5*team+5]:
                teamGold += participant["goldEarned"]
            for participant in gameDetail["participants"][5*(1-team):5*(1-team)+5]:
                enemyTeamGold += participant["goldEarned"]            
            return {
                "champion":playerChampion,
                "kills":playerKills,
                "deaths":playerDeaths,
                "assists":playerAssists,
                "cs":playerCS,
                "visionScore":playerVisonScore,
                "leveldiff":playerLevel-enemyLevel,
                "multikill":playerMultikill,
                "killingSpree":playerKillingSpree,
                "mvp":playerMVP,
                "fb":playerFB,
                "towers":teamTowers,
                "inibs":teamInibs,
                "drags":teamDrags,
                "heralds":teamHeralds,
                "baron":teamBarons,
                "fastWin":teamFastWin,
                "goldDiff":teamGold-enemyTeamGold,
                "win":teamWin
            }
        except Exception as exp:
            print("Erro ao retornar detalhes do jogador")
            print(exp)

    except Exception as exp:
        print("Erro na cargoquery")
        print(exp)