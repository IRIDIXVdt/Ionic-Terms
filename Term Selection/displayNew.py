import os


print(os.listdir())
with open('Term Selection/powerPreProcessedText.txt') as f:
    lines = f.readlines()

print(len(lines))

term = 0
for lineItem in lines:
    if ''': (''' in lineItem:
        term += 1

print(term)
