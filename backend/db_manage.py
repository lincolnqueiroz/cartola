import manage
import os, sys, django
import glob
import argparse

class MyParser(argparse.ArgumentParser):
    def error(self, message):
        sys.stderr.write('error: %s\n' % message)
        self.print_help()
        sys.exit(2)

# apagar arquivos
if __name__ == "__main__":
    parser = MyParser(description="Gerenciar banco de dados",prog=sys.argv[0])
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