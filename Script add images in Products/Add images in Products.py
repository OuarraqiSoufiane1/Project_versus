import openpyxl
import pyautogui
import time
from selenium import webdriver

browser = webdriver.Chrome()

wb = openpyxl.load_workbook ("Products.xlsx")
table = wb["Sheet1"]
rowsDelete = []
countN = 1

for row in table:
    if countN != 1:
        Img = str(row[2].value)
        name = str(row[1].value)
        if Img != 'None' or name == 'None' or 'PR' in name:
            rowsDelete.append(countN)
    countN += 1


rowsDelete.reverse()
for i in rowsDelete:
    table.delete_rows(i)

countN = 1
for row in table:
    if countN != 1:
        nameImg = str(row[1].value).replace('1.00','').replace('1.50','').replace('2.00','').replace('2.50','').replace('3.00','').replace('3.50','').replace('4.00','').replace('4.50','').replace('5.00','').replace('5.50','').replace('6.00','').replace('6.50','').replace('7.00','').replace('7.50','').replace('8.00','').replace('8.50','').replace('9.00','').replace('9.50','').replace('10.00','').replace('10.50','').replace('11.00','').replace('11.50','').replace('12.00','').replace('12.50','').replace('13.00','').replace('13.50','').replace(' ','').strip()
        UrlImg = "https://fr.sunoptic.com/image/cache/data/"+nameImg+"-750x350.jpg"
        table.cell(row = countN , column = 3,value = UrlImg)
    countN += 1

rowsDelete = []
countN = 1
for row in table:
    if countN != 1:
        ImgStr = str(row[2].value)
        try:
            browser.get(ImgStr)
            if 'Multiple Choices' in  browser.page_source:
                print(ImgStr)
                print('image not faund')
                rowsDelete.append(countN)
        except :
            print('error')
            print(ImgStr)
            rowsDelete.append(countN)
        
    countN += 1

rowsDelete.reverse()
print(len(rowsDelete))
for i in rowsDelete:
    table.delete_rows(i)



browser.close()
wb.save("Products 2.xlsx")