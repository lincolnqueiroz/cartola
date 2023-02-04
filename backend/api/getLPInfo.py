import mwclient
import requests
import json
from datetime import date

def getAllCurrentCBLOLTeams():
    try:
        site = mwclient.Site('lol.fandom.com', path='/')
    except:
        print("Não pode conectar com leaguepedia")
    
    try:
        response = site.api('cargoquery',
            limit = 'max',
            tables = "ScoreboardGames=SG, Tournaments=T, Leagues=L",
            join_on = "SG.Tournament = T.Name, T.League = L.League",
            fields = "SG.Team1",
            where = "L.League_Short = 'CBLOL' AND T.Date >= '" + str(date.today()) + "'",
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
    

def getAllCurrentCBLOLOLPayers():
    try:
        site = mwclient.Site('lol.fandom.com', path='/')
    except:
        print("Não pode conectar com leaguepedia")
    
    try:
        print(str(getAllCurrentCBLOLTeams()))
        response = site.api('cargoquery',
            limit = 'max',
            tables = "Players=P, Teams=T",
            join_on = "P.Team = T.Name",
            fields = "P.ID  , P.Team, P.Role",
            where = "T.Name in " + str(getAllCurrentCBLOLTeams()).replace('[','(').replace(']',')'),
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
    