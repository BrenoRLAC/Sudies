from random import randint
lista = list()
games = list()
cont = 0
quant = int(input('how many numbers do you want?'))
tot = 1
while tot <= quant:
    cont = 0
    while True:
        num = randint(1, 60)
        if num not in lista:
            lista.append(num)
            cont += 1
        if cont >= 6:
            break
    lista.sort()
    games.append(lista[:])
    lista.clear()
    tot += 1
print(f'The sorted games were: {games}')
for i, l in enumerate(games):
    print(f'games {i+1}: {l}')