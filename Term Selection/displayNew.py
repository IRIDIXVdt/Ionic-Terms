import os


print(os.listdir())
with open('Term Selection/powerPreProcessedText.txt') as f:
    lines = f.readlines()

print(lines)