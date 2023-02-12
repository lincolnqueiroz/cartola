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
        for el in Escalacao.objects.all():
            el.delete()
        for el in Pontuacao.objects.all():
            el.delete()
        for el in Jogo.objects.all():
            el.delete()
        for el in Jogador.objects.all():
            el.delete()
        for el in Time.objects.all():
            el.delete()
        for el in User.objects.all():
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

    print("\nLimpando o banco")
    clean_db()

    print("\nCriando superuser")
    try:
        superuser = User.objects.create_superuser(username="admin@admin.com",password="admin",nick="admin")
        superuser.save()
    except:
        print("Superuser já existe")
    
    print("\nRegistrando aplicação")
    try:
        sys.argv=[sys.argv[0],"","","","","","",""]
        sys.argv[1] = "createapplication"
        sys.argv[2] = "confidential"
        sys.argv[3] = "password"
        sys.argv[4] = "--client-id"
        sys.argv[5] = "slcH0BsxRKVKLojo3wg6Z2MnxXZvFSmXd7JX2o8S"
        sys.argv[6] = "--client-secret"
        sys.argv[7] = "20OZqOxX1yRMweiPbD9wWv3jXhDgfZWJYxmzCbHRKnzz6CZiwF7HuPQyNeT3S1Z6JQ89mXxaWCzulZbSeMmMWoi3HmDHWQTMaFOTkL3K4KQw5bYnu1okxXHjaZ6RwWY2"
        manage.main()
    except:    
        print("Não foi possível registrar aplicação")

    print("\nPopulando o banco")
    popula_db()