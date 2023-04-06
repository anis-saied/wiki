M = "LE TRESOR EST CACHE DANS LE CHATEAU DE: SUITE AU PROCHAIN MESSAGE!"

# fonction qui décale de d positions la lettre c
def cesar1(c,d):
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    n = len(alphabet)
    for i in range(n):
        if c == alphabet[i]:
            return(alphabet[(i+d) % n]) # %n : pour un parcours circulaire
    else:
        return(c) #retourner le même caractère sans modification

print(cesar1("A",3))
print(cesar1("Z",3))
print(cesar1("z",3))

def cesar(m,d):
    mc = ""
    for c in m:
        mc = mc + cesar1(c,d)
    return(mc)

# le codage de César: d = 3
MC = cesar(M,9)
print(MC)
# Q2.

print(cesar(MC,-9))

def decesar(m,d):
    return(cesar(m,-d))
#ex : 0-3 = -3%26 = -3 ==> alphabet[-3] = 'X'
decesar(MC,3)
