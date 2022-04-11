file = open('products.csv', 'r')
newFile = open('newproducts.csv', 'a')
rows=[]
for row in file:
    rows.append(row)

newFile.write(rows[0])
for row in range(1, len(rows)):
    items = rows[row].split(',')
    for item in range(1, len(items)):
        if len(items) >= 2:
            if str(items[item]).__contains__('GEARUP-PRO'):
                items[item] = str(items[item]).replace('GEARUP-PRO', 'Versus-arena')


    newFile.write(','.join(items))

file.close()
newFile.close()