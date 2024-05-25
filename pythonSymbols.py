symbols = []
for i in range(1, 5):
    symbol = input(f"Symbol {i}: ")
    symbols.append(symbol)

key = [["o", "at", "y", "bolt", "omnidroid", "h", "flipped C"],
       ["flipped e", "o", "flipped c", "q", "hollow star", "h", "?"],
       ["copy right", "w", "q", "k", "r", "y", "hollow star"],
       ["6", "p", "bt", "omnidroid", "k", "?", "smile"],
       ["trident", "smile", "bt", "c", "p", "3", "filled star"],
       ["6", "flipped e", "puzzel piece", "ae", "trident", "n", "omega"]]

for row_index, row in enumerate(key):
    counter = 0
    for char in symbols:
        if char in row:
            counter += 1
    if counter == 4:
        # Print symbols in the order they appear in the row
        for symbol in row:
            if symbol in symbols:
                print(symbol, end=" ")
        print()
        break