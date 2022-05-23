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
        nameImg = str(row[1].value)
        elementRemove = ['1.00','1.50','2.00','2.50','3.00','3.50','4.00','4.50','5.00','5.50','6.00','6.50','7.00','7.50','8.00','8.50','9.00','9.50','10.00','10.50','11.00','11.50','12.00','12.50','13.00','13.50',' ']
        for item in elementRemove:
            if item in nameImg:
                nameImg = nameImg.replace(item,'')
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