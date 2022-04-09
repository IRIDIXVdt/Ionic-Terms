import os
import random

print(os.listdir())
with open('Term Selection/powerPreProcessedText.txt') as f:
    lines = f.readlines()

print(len(lines))

# lines are now all in lines

term = 0

termItem = ''
resultArray = []

for lineItem in lines:

    if ''': (''' in lineItem:
        term += 1
        resultArray.append(termItem)
        termItem = lineItem
    else:
        termItem += lineItem

resultArray.append(termItem)
resultArray.pop(0)

print(term)
# now we confirmed how many terms there are

print(len(resultArray))
print(resultArray[0])

random.shuffle(resultArray)
print(resultArray)


with open("Term Selection/out.txt",'w') as txt_file:
    for line in resultArray:
        txt_file.write(line + "\n")
