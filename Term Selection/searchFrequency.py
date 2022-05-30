from collections import Counter
from fileinput import filename
import operator
import string

from matplotlib.collections import Collection

filename = 'Term Selection\\testSort.txt'

# filename = input('Enter a file name: ')
if filename == 'exit':
    exit
try:
    file = open(filename, 'r')
    text = file.read()
    file.close()
except:
    print('file does not exist')
else:

    for word in string.punctuation:
        text = text.replace(word, "")
    word_list = text.lower().split(None)
    word_freq = {}

    for word in word_list:
        word_freq[word] = word_freq.get(word, 0) + 1

    keys = sorted(word_freq.keys())

    output = ''
    for word in keys:
        if word_freq[word] < 3:
            output = output + ' ' + word
    #         # the words print out based on alphabetic order
    #         # how would I get them to print based on freqeuncy in ascending order?
    # keys.sort()
    # print(len(keys))
    # print(word_freq)
    # word.sort()
    # word_list.sort()
    # sorted_x = sorted(word_freq.items(), key=operator.itemgetter(1))
    # print(sorted_x)
    # print(sorted_x[1])
    print(output)
