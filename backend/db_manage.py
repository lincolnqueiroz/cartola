import manage
import os, sys, django
import glob
import argparse
sys.path.append("/app/backend")
os.environ.setdefault('DJANGO_SETTINGS_MODULE','backend.settings')
django.setup()

from api.models import *
from api import getLPInfo

class MyParser(argparse.ArgumentParser):
    def error(self, message):
        sys.stderr.write('error: %s\n' % message)
        self.print_help()
        sys.exit(2)

def clean_db():
    try:
        for el in Pontuacao.objects.all():
            el.delete()
        for el in Jogo.objects.all():
            el.delete()
        for el in Jogador.objects.all():
            el.delete()
        for el in Time.objects.all():
            el.delete()
    except:
        print("Erro ao limpar tabelas")

def popula_db():
    times = getLPInfo.getAllCurrentCBLOLTeams()
    try:
        for el in times:
            Time.objects.create(name=el)
    except:
        print("Erro ao popular times")
    
    jogadores = getLPInfo.getAllCurrentCBLOLPayers()
    try:
        for el in jogadores:
            Jogador.objects.create(name=el['ID'],role=el['Role'],time=Time.objects.get(name=el['Team']))
    except:
        print("Erro ao popular jogadores")

if __name__ == "__main__":
    parser = MyParser(description="Gerenciar banco de dados",prog=sys.argv[0])
    # apagar arquivos
    try:
        for fl in glob.glob("*/migrations/00*.py"):
            os.remove(fl)
        for fl in glob.glob("*/migrations/__pycache__/*"):
            os.remove(fl)
    except Exception as exp:
        print("Could not remove: ", exp)


    print("Realizando makemigrations...")
    sys.argv[1] = "makemigrations"
    manage.main()

    print("\nRealizando migrate...")
    sys.argv[1] = "migrate"
    manage.main()

    clean_db()

    popula_db()