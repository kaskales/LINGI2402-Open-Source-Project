

####################################################
# How to import JASPAR2018 into your database
####################################################

from Bio.motifs.jaspar.db import JASPAR5

JASPAR_DB_HOST = "localhost"
JASPAR_DB_NAME = "JASPAR2018"
JASPAR_DB_USER = "root"
JASPAR_DB_PASS = "hamham"

DFLT_COLLECTION = 'CORE'
jdb = JASPAR5(
    host=JASPAR_DB_HOST,
    name=JASPAR_DB_NAME,
    user=JASPAR_DB_USER,
    password=JASPAR_DB_PASS
)

# download the mysqldump from http://jaspar.genereg.net/downloads/

# create the database to place the mysqldump
mycursor = jdb.dbh.cursor()
mycursor.execute("CREATE DATABASE JASPAR2018")

# unzip the tar.gz
# tar -cvzf JASPAR2018.sql.tar.gz JASPAR2018.sql

# inport the dump into your database
# mysql -u root -phamham JASPAR2018 < JASPAR2018.sql

ets1 = jdb.fetch_motif_by_id('MA0098')
print(ets1)

motifs = jdb.fetch_motifs(
    collection = 'CORE',
    tax_group = ['vertebrates', 'insects'],
    tf_class = 'Homeo domain factors',
    tf_family = ['TALE-type homeo domain factors', 'POU domain factors'],
    min_ic = 12
)